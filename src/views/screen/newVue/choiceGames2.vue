<template>
  <div id="container">
    <div v-for="(item, index) in question" :key="index" v-show="index == idx" class="question">
      <div class="title">
        <span v-if="item.ismultiple" class="select">多选</span>
        <span v-else class="select">单选</span>
        题目：{{ item.name }}
        <span style="float: right; font-size: 16px;">{{ idx + 1 }}/{{ question.length }}</span>
      </div>
      <div>
        <div :class="val.checked ? 'bgc' : ''" v-for="val in item.option" :key="val.id" class="list"
          @click="handleCilck(val)">{{ val.letter }}.
          {{ val.name }}</div>
      </div>

      <div class="mar20" v-show="answerShow">
        <span class="redcol">正确答案：{{ item.answer }} &nbsp;&nbsp;&nbsp;</span>
        <span class="pa20"> 解析: {{ item.content }}</span>
      </div>
    </div>

    <div>

      <button @click="back()" :style="idx == 0 ? 'background-color:#ccc;' : ''"
        :disabled="idx == 0 ? true : false">上一题</button>
      <button @click="next()" :style="idx == question.length - 1 ? 'background-color:#ccc;' : ''"
        :disabled="idx == question.length - 1 ? true : false">下一题</button>
      <button @click="sumbit" style="background-color: rgb(250, 142, 0);color: aliceblue;">提交</button>
      <button v-show="isshow" @click="answerShow = true"
        style="background-color: rgb(238, 190, 79);color: rgb(255, 255, 255);">查看答案</button>
    </div>
  </div>
</template>

<script>
import { getGameList, updateGameList } from '@/api/screen/game.js'
import { getResultList } from '@/api/screen/result.js'
import { getRankList, updateRank } from '@/api/screen/ranking.js'
import bus from '@/utils/evenBus.js'
import { getCorrectRateApi } from '@/api/screen/operationLog'
export default {
  name: 'ChoiceGames2',
  data() {
    return {
      // 答题数列表
      answersData:{
        correctCount:0,
        wrongCount:0
      },
      // 答对
      zqd: 0,
      // 答错
      showMessage: true, // 控制消息显示的标识
      cud: 0,
      tableData: [],
      idx: 0,
      allSocre: 0,
      isshow: false,
      answerShow: false,
      ismultipleAnswer: [],
      question: [{}, {}, {}, {}, {}],
      Choice: {},
      // 所有班级
      allBj: [1],
      bjValue: '1',
      shaking: false,
      innerVisible: false

    }
  },
  created() {
    this.getChoicedata()
  },
  methods: {
    async getChoicedata() {
      await getGameList().then(res => {
        if (res.code === 200) {
          this.tableData = res.rows.map(row => {
            return {
              id: row.id,
              ismultiple: false,
              name: row.question,
              answer: row.correctOption,
              score: 2,
              content: row.answer,
              option: [
                {
                  id: 1,
                  name: row.optionA,
                  checked: false,
                  letter: "A"
                },
                {
                  id: 2,
                  name: row.optionB,
                  checked: false,
                  letter: "B"
                },
                {
                  id: 3,
                  name: row.optionC,
                  checked: false,
                  letter: "C"
                },
                {
                  id: 4,
                  name: row.optionD,
                  checked: false,
                  letter: "D"
                }
              ]
            }
          });
        }
      })

      this.question = []
      while (this.question.length < 5) {
        var randomIndex = Math.floor(Math.random() * this.tableData.length);
        var randomElement = this.tableData[randomIndex];

        // 检查随机选取的元素是否已经存在于this.question数组中
        if (!this.question.includes(randomElement)) {
          this.question.push(randomElement);
        }
      }


    },


    next() {
      // if (this.bjValue == '') {
      //   this.$message.warning('请选择班级')
      //   this.shaking = true; // 添加shake类
      //   setTimeout(() => {
      //     this.shaking = false; // 移除shake类
      //   }, 500);
      //   return;
      // }
      this.idx++
    },
    back() {
      this.idx--
    },
    handleCilck(info) {
      let question = this.question[this.idx]  //每题选项
      let option = this.question[this.idx].option //每一题题目的选项

      //选中添加样式
      option.forEach(item => {
        if (item.id == info.id) {  //如果选中的与数据里面的相等就改变他的样式
          item.checked = !item.checked  // 是否选中，取反
        } else if (!question.ismultiple) {  //如果不是多选 只能选中一个 其他的都为false
          item.checked = false
        }
      });


      let isAnswer = info.letter //选中的答案
      let answer = this.question[this.idx].answer //题目中的答案

      //如果是多选
      if (question.ismultiple) {
        this.ismultipleAnswer = []
        option.forEach(item => {
          if (item.checked) { //将选中的push到 ismultipleAnswer 数组中
            this.ismultipleAnswer.push(item.letter)
          }
        });
        isAnswer = this.ismultipleAnswer.join('')  //将ismultipleAnswer转为字符串 下面与答案比较
      }





      //判断是否选正确，计算分数

      if (isAnswer == answer) { // 如果选的答案与题目答案相等,isOk 说明选对了
        this.question[this.idx].isOk = true
      } else {
        this.question[this.idx].isOk = false
      }

    },

    // 提交计算分数
    async sumbit() {
      if (!this.showMessage) {
        return; // 如果不需要显示消息，则直接返回
      }
      this.allSocre = 0  //每次计算总分先清0,，在计算
      let result = []  //定义选中的个数
      this.question.forEach(item => {
        //返回是否选中的数组
        let selsetArr = item.option.map(val => {
          if (val.checked) {
            return val.checked //map最终返回一个数组，返回 checked 的数组
          }
        })
        // console.log('selsetArr', selsetArr);
        //这边是否包含true，包含 true 就push到result中
        const isTrue = selsetArr.includes(true)  //如果包含返回true,否则返回false
        //这里判断一下,如果 isTrue 是 true，说明包含true 就说明选了
        if (isTrue) {
          result.push(isTrue)  //如果选了，就push到 result 中
        }

        if (item.isOk) { //如果isOK 为 true 说明选了，计算分数
          this.allSocre += item.score
          this.zqd += 1
          this.answersData.correctCount += 1
          this.idx = 0
          this.answersData.wrongCount = 0
        }
      })
      //用选中 result 的长度  与 题目的长度比较 是否相当 不等就没选完
      if (result.length < this.question.length) {
        this.$message({
          showClose: true,
          message: '还有题目没做,请继续答题。',
          type: 'warning',
          center: true,
          offset: 80
        });
        // alert('还有题目没做呢')
        return
      }
      setTimeout(() => {
        this.$message({
          dangerouslyUseHTMLString:true,
          showClose: true,
          message: '<div style="font-size: 24px;">提交成功，获得分数: ' + this.allSocre + '</div>',
          type: 'success',
          center: true,
          offset: 80,
        });
        this.isshow = true
        this.showMessage = false; // 设置为 true，下次可以再次显示消息
      }, 100);
      setTimeout(()=>{
        if(this.allSocre>=6){
          this.$message({
            dangerouslyUseHTMLString:true,
            showClose: true,
            message: '<strong>你太棒了，你的正确率高于平均值，为提高平均值做出了贡献</strong>',
            type: 'error',
            center: true,
            offset: 80,
          });
        }else{
          this.$message({
            dangerouslyUseHTMLString:true,
            showClose: true,
            message: '不要灰心，争取下次达到平均正确率。加油！',
            type: 'warning',
            center: true,
            offset: 80,
          });
        }
      },100)
      this.cud = 5 - this.zqd
      this.answersData.wrongCount = 5-this.answersData.correctCount

      // 提交答题数量
      // const res = await getCorrectRateApi(this.answersData.correctCount,this.answersData.wrongCount)

      await this.$store.dispatch('screen/getAverageDataStore', {
        correctCount: this.answersData.correctCount,
        wrongCount: this.answersData.wrongCount
      })

      // console.log(res)

      // this.updateChoice()
      this.getChoice()
      this.updateRankList()

    },
    async updateRankList() {
      const queryParams = {
        bjid: this.bjValue,
        zqd: this.zqd,
        cud: 5 - this.zqd
      }
      await updateRank(queryParams).then(res => {
        if (res.code === 200) {
          this.$message.success('修改成功')
        }
      })

    },
    async getChoice() {
      await getRankList().then(res => {
        if (res.code === 200) {
          this.Choice = res.rows
          console.log('res.rows[0]', res.rows);
          bus.$emit('updateGame', this.Choice)
        }
      })

    },
  }
}
</script>

<style lang='less' scoped>
#container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: 2rem;

  .el-select {
    position: absolute;
    top: 0;
    left: 5%;
  }

}

::v-deep .el-input__inner {
  background: transparent;
  color: #000;
  border: rgb(63, 165, 243) 1px solid;
}
// .selectCopy .el-input__inner {
//   height: 10rem !important;
// }
.question {
  width: 100%;
  // height: 100%;
  background-color: rgb(215, 246, 195);
  border-radius: .625rem;
  padding: .625rem 1.875rem;
  color: rgb(81, 81, 82);
  font-size: 1.25rem;
}

button {
  margin-top: .9375rem;
  margin-right: .625rem;
  outline: none;
  background-color: rgb(255, 153, 98);
  border: 0;
  padding: .625rem;
  color: rgb(61, 61, 61);
  border-radius: .3125rem;
}

button:active {
  background-color: rgba(248, 161, 121, 0.664);
}

.el-message{
  font-size: 30px; /* 设置字体大小 */
  padding: 20px;   /* 增加内边距，让提示框看起来更大 */
  width: 400px;    /* 设置提示框的宽度 */
  line-height: 1.5; /* 调整行高，保证内容布局合理 */
}


.title {
  color: black;
  font-weight: 550;
  font-size: 1.375rem;
  padding: .625rem;
  // height: 30px;
  // line-height: 30px;
}

.list {

  margin-top: .625rem;
  padding: .625rem .3125rem;
  font-size: 1.25rem;
  border: 1px rgb(46, 46, 46) solid;
  border-radius: .625rem;
}

.bgc {

  border: 1px rgb(250, 109, 0) solid;
  color: aliceblue;
  background-color: rgb(240, 125, 38);
}

.answer {
  color: brown;
  font-size: 1.25rem;
  margin-left: 1.875rem;
}

.select {
  font-size: 1.375rem;
  color: rgb(243, 25, 25);
}



.mar20 {
  margin: .625rem auto;
  background: #7c937014;
  padding: .625rem;
  border-radius: .625rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.redcol {
  color: brown;
}

.pa20 {
  color: #999;
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(5px);
  }
}
</style>
