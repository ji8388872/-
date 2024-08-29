<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="检查日期" prop="jcrq">
        <el-date-picker clearable
                        v-model="queryParams.jcrq"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="场站名称" prop="czmc">
          <el-input
            v-model="queryParams.czmc"
            placeholder="请输入场站名称"
            clearable
            @keyup.enter.native="handleQuery"
          />
      </el-form-item>
      <el-form-item label="场站类型" prop="czlx">
        <el-input
          v-model="queryParams.czlx"
          placeholder="请输入场站类型"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="问题类别" prop="wtlb">
        <el-input
          v-model="queryParams.wtlb"
          placeholder="请输入问题类别"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item label="问题描述" prop="wtms">
        <el-input
          v-model="queryParams.wtms"
          placeholder="请输入问题描述"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="根本原因分类" prop="gbyy">
        <el-input
          v-model="queryParams.gbyy"
          placeholder="请输入根本原因分类"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备注" prop="bz">
        <el-input
          v-model="queryParams.bz"
          placeholder="请输入备注"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:aqqkmx:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:aqqkmx:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:aqqkmx:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:aqqkmx:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="aqqkmxList" @selection-change="handleSelectionChange">
      <!--      <el-table-column type="selection" width="55" align="center" />-->
      <el-table-column label="序号" align="center" type="index" />
      <el-table-column label="检查日期" align="center" prop="jxrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jxrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="场站名称" align="center" prop="czmc" />
      <el-table-column label="场站类别" align="center" prop="czlb" />
      <el-table-column label="检查月份" align="center" prop="jcyf" />
      <el-table-column label="问题类别" align="center" prop="wtlb" />
      <el-table-column label="问题描述" align="center" prop="wtms" />
      <el-table-column label="根本原因分类" align="center" prop="gbyy" />
      <el-table-column label="检查前照片" align="center" prop="jcqzp" />
      <el-table-column label="及时整改措施" align="center" prop="jszgcs" />
      <el-table-column label="整改后照片" align="center" prop="zghzp" />
      <el-table-column label="负责人" align="center" prop="fzr" />
      <el-table-column label="审核人" align="center" prop="shr" />
      <el-table-column label="知晓人" align="center" prop="zxr" />
      <el-table-column label="计划整改完成日期" align="center" prop="jhzgrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jhzgrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="实际整改完成日期" align="center" prop="wczgrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.wczgrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否按时完成整改" align="center" prop="sfaswczg" />
      <el-table-column label="未按计划完成原因" align="center" prop="wajhwcyy" />
      <el-table-column label="长期优化措施" align="center" prop="cqyhcs" />
      <el-table-column label="负责人2" align="center" prop="fzr2" />
      <el-table-column label="审核人2" align="center" prop="shr2" />
      <el-table-column label="知晓人2" align="center" prop="zxr2" />
      <el-table-column label="计划优化完成日期" align="center" prop="jhyhsj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.jhyhsj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="实际优化完成日期" align="center" prop="sjyhrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.sjyhrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否按时完成优化" align="center" prop="sfasyh" />
      <el-table-column label="未完成优化原因" align="center" prop="wwcyhyy" />



      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:aqqkmx:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:aqqkmx:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改参观情况对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="检查日期" prop="jxrq">
          <el-date-picker clearable
                          v-model="queryParams.jxrq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择检查日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="场站名称" prop="czmc">
          <el-input
            v-model="queryParams.czmc"
            placeholder="请输入场站名称"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="场站类别" prop="czlb">
          <el-input
            v-model="queryParams.czlb"
            placeholder="请输入场站类别"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="检查月份" prop="jcyf">
          <el-date-picker clearable
                          v-model="queryParams.jcyf"
                          type="month"
                          value-format="yyyy-MM"
                          placeholder="请选择检查月份">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="问题类别" prop="wtlb">
          <el-input
            v-model="queryParams.wtlb"
            placeholder="请输入问题类别"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="问题描述" prop="wtms">
          <el-input
            v-model="queryParams.wtms"
            placeholder="请输入问题描述"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="根本原因分类" prop="gbyy">
          <el-input
            v-model="queryParams.gbyy"
            placeholder="请输入原因分类"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="检查前照片" prop="jcqzp">
            <!--上传组件-->
        </el-form-item>

        <el-form-item label="及时整改措施" prop="jszgcs">
          <el-input
            v-model="queryParams.jszgcs"
            placeholder="请输入原因分类"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="整改后照片" prop="zghzp">
          <!--上传组件-->
        </el-form-item>

        <el-form-item label="负责人" prop="fzr">
          <el-input
            v-model="queryParams.fzr"
            placeholder="请输入负责人"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="审核人" prop="shr">
          <el-input
            v-model="queryParams.shr"
            placeholder="请输入审核人"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="知晓人" prop="zxr">
          <el-input
            v-model="queryParams.zxr"
            placeholder="请输入知晓人"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="计划整改完成日期" prop="jhzgrq">
          <el-date-picker clearable
                          v-model="queryParams.jhzgrq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择计划整改完成日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="实际整改完成日期" prop="wczgrq">
          <el-date-picker clearable
                          v-model="queryParams.wczgrq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择实际整改完成日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="是否按时完成整改" prop="sfaswczg">
          <el-input
            v-model="queryParams.sfaswczg"
            placeholder="请输入是否按时完成整改"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>



        <el-form-item label="负责人2" prop="fzr2">
          <el-input
            v-model="queryParams.fzr2"
            placeholder="请输入负责人2"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="审核人2" prop="shr2">
          <el-input
            v-model="queryParams.shr2"
            placeholder="请输入审核人2"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="知晓人2" prop="zxr2">
          <el-input
            v-model="queryParams.zxr"
            placeholder="请输入知晓人2"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="计划优化完成日期" prop="jhyhsj">
          <el-date-picker clearable
                          v-model="queryParams.jhyhsj"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择计划优化完成日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="实际优化完成日期" prop="sjyhrq">
          <el-date-picker clearable
                          v-model="queryParams.sjyhrq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择实际优化完成日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="是否按时完成优化" prop="sfasyh">
          <el-input
            v-model="queryParams.sfasyh"
            placeholder="请输入是否按时完成优化"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="未完成优化原因" prop="wwcyhyy">
          <el-input
            v-model="queryParams.wwcyhyy"
            placeholder="请输入未完成优化原因"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="备注" prop="bz">
          <el-input
            v-model="queryParams.bz"
            placeholder="请输入备注"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
      </el-form>


      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { listCgqk, getCgqk, delCgqk, addCgqk, updateCgqk } from "@/api/system/cgqk";

export default {
  name: "Aqqkjl",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 安全情况表格数据
      aqqkmxList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        jxrq: null,
        czmc: null,
        czlb: null,
        jcyf: null,
        wtlb: null,
        wtms: null,
        gbyy: null,
        jcqzp: null,
        jszgcs: null,
        zghzp: null,
        fzr: null,
        shr: null,
        zxr: null,
        jhzgrq: null,
        wczgrq: null,
        sfaswczg: null,
        wajhwcyy: null,
        cqyhcs: null,
        fzr2: null,
        shr2: null,
        zxr2: null,
        jhyhsj: null,
        sjyhrq: null,
        sfasyh: null,
        wwcyhyy: null,
        bz: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },

  methods: {
    /** 查询参观情况列表 */
    getList() {
      this.loading = true;
      // 查询安全情况记录 写死
      setTimeout(() => {
        // 模拟获取的数据
        this.aqqkmxList = [{
          jxrq: '2024-08-01', // 检查日期
          czmc: '场站A',       // 场站名称
          czlb: '类别1',       // 场站类别
          jcyf: '2024-08',     // 检查月份
          wtlb: '安全问题',    // 问题类别
          wtms: '发现隐患',    // 问题描述
          gbyy: '人为失误',    // 根本原因分类
          jcqzp: '照片1.jpg',  // 检查前照片
          jszgcs: '立即整改',  // 及时整改措施
          zghzp: '照片2.jpg',  // 整改后照片
          fzr: '张三',         // 负责人
          shr: '李四',         // 审核人
          zxr: '王五',         // 知晓人
          jhzgrq: '2024-08-05', // 计划整改完成日期
          wczgrq: '2024-08-04', // 实际整改完成日期
          sfaswczg: '是',       // 是否按时完成整改
          wajhwcyy: 'xxx',        // 未按计划完成原因
          cqyhcs: '加强培训',  // 长期优化措施
          fzr2: '赵六',        // 负责人2
          shr2: '钱七',        // 审核人2
          zxr2: '孙八',        // 知晓人2
          jhyhsj: '2024-09-01', // 计划优化完成日期
          sjyhrq: '2024-08-30', // 实际优化完成日期
          sfasyh: '是',        // 是否按时完成优化
          wwcyhyy: 'xxx',         // 未完成优化原因
          bz: '已完成',        // 备注
        },{
          jxrq: '2024-08-10',
          czmc: '场站B',
          czlb: '类别2',
          jcyf: '2024-08',
          wtlb: '设备问题',
          wtms: '设备老化',
          gbyy: '设备寿命',
          jcqzp: '照片3.jpg',
          jszgcs: '更换设备',
          zghzp: '照片4.jpg',
          fzr: '李四',
          shr: '王五',
          zxr: '赵六',
          jhzgrq: '2024-08-15',
          wczgrq: '2024-08-14',
          sfaswczg: '是',
          wajhwcyy: '',
          cqyhcs: '定期检查',
          fzr2: '钱七',
          shr2: '孙八',
          zxr2: '张三',
          jhyhsj: '2024-09-10',
          sjyhrq: '2024-09-09',
          sfasyh: '是',
          wwcyhyy: '',
          bz: '按时完成',
        },{
          jxrq: '2024-08-20',
          czmc: '场站C',
          czlb: '类别3',
          jcyf: '2024-08',
          wtlb: '管理问题',
          wtms: '管理混乱',
          gbyy: '制度不健全',
          jcqzp: '照片5.jpg',
          jszgcs: '完善制度',
          zghzp: '照片6.jpg',
          fzr: '王五',
          shr: '赵六',
          zxr: '钱七',
          jhzgrq: '2024-08-25',
          wczgrq: '2024-08-26',
          sfaswczg: '否',
          wajhwcyy: '人员不足',
          cqyhcs: '招聘人员',
          fzr2: '孙八',
          shr2: '张三',
          zxr2: '李四',
          jhyhsj: '2024-09-20',
          sjyhrq: '2024-09-19',
          sfasyh: '是',
          wwcyhyy: '',
          bz: '进展顺利',
        },];
        this.loading = false;
      }, 1000);

    },
    // 取消按钮
    cancel() {
      // this.open = false;
      // this.reset();
    },
    // 表单重置
    reset() {
      // this.form = {
      //   id: null,
      //   rq: null,
      //   hjqk: null,
      //   ycwt: null,
      //   sfjj: null,
      //   jjry: null,
      //   jjsj:null,
      //   bz: null
      // };
      // this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      // this.queryParams.pageNum = 1;
      // this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      // this.resetForm("queryForm");
      // this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      // this.ids = selection.map(item => item.id)
      // this.single = selection.length!==1
      // this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      // this.reset();
      // this.open = true;
      // this.title = "添加参观情况";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      // this.reset();
      // const id = row.id || this.ids
      // getCgqk(id).then(response => {
      //   this.form = response.data;
      //   this.open = true;
      //   this.title = "修改参观情况";
      // });
    },
    /** 提交按钮 */
    submitForm() {
      // this.$refs["form"].validate(valid => {
      //   if (valid) {
      //     if (this.form.id != null) {
      //       updateCgqk(this.form).then(response => {
      //         this.$modal.msgSuccess("修改成功");
      //         this.open = false;
      //         this.getList();
      //       });
      //     } else {
      //       addCgqk(this.form).then(response => {
      //         this.$modal.msgSuccess("新增成功");
      //         this.open = false;
      //         this.getList();
      //       });
      //     }
      //   }
      // });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      // const ids = row.id || this.ids;
      // this.$modal.confirm('是否确认删除参观情况编号为"' + ids + '"的数据项？').then(function() {
      //   return delCgqk(ids);
      // }).then(() => {
      //   this.getList();
      //   this.$modal.msgSuccess("删除成功");
      // }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      //   this.download('system/hjqk/export', {
      //     ...this.queryParams
      //   }, `aqqkjl_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
