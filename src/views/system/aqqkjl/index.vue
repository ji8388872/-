<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="120px">
      <el-form-item label="日期" prop="rq">
        <el-date-picker clearable
                        v-model="queryParams.rq"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="环境情况" prop="hjqk">
        <el-select v-model="queryParams.hjqk" clearable placeholder="请选择">
          <el-option
            v-for="item in optionshjqk"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="异常问题" prop="ycwt">
        <el-input
          v-model="queryParams.ycwt"
          placeholder="请输入异常问题"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否已经解决" prop="sfjj">
        <el-select v-model="queryParams.sfjj" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="解决人员" prop="jjry">
        <el-input
          v-model="queryParams.jjry"
          placeholder="请输入解决人员"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item label="解决时间" prop="jjsj">
        <el-date-picker clearable
                        v-model="queryParams.jjsj"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择解决时间">
        </el-date-picker>
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
          v-hasPermi="['system:aqqkjl:add']"
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
          v-hasPermi="['system:aqqkjl:edit']"
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
          v-hasPermi="['system:aqqkjl:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:aqqkjl:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="aqqkjlList" @selection-change="handleSelectionChange">
<!--      <el-table-column type="selection" width="55" align="center" />-->
      <el-table-column label="" align="center" type="index" />
      <el-table-column label="日期" align="center" prop="rq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="环境情况" align="center" prop="hjqk" />
      <el-table-column label="异常问题" align="center" prop="ycwt" />
      <el-table-column label="是否已经解决" align="center" prop="sfjj" />
      <el-table-column label="解决人员" align="center" prop="jjry" />
      <el-table-column label="解决时间" align="center" prop="jjsj" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:aqqkjl:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:aqqkjl:remove']"
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
        <el-form-item label="日期" prop="rq">
          <el-date-picker clearable
                          v-model="queryParams.rq"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="环境情况" prop="hjqk">
          <el-select v-model="queryParams.hjqk" clearable placeholder="请选择">
            <el-option
              v-for="item in optionshjqk"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="异常问题" prop="ycwt">
          <el-input
            v-model="queryParams.ycwt"
            placeholder="请输入异常问题"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="是否已经解决" prop="sfjj">
          <el-select v-model="queryParams.sfjj" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="解决人员" prop="jjry">
          <el-input
            v-model="queryParams.jjry"
            placeholder="请输入解决人员"
            clearable
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>

        <el-form-item label="解决时间" prop="jjsj">
          <el-date-picker clearable
                          v-model="queryParams.jjsj"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择解决时间">
          </el-date-picker>
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
      // 异常问题
      optionshjqk:[
        {
          label: '正常',
          value: 0
        },
        {
          label: '异常',
          value: 1
        }
      ],
      // 是否解决
      options:[
        {
          label: '未解决',
          value: 0
        },
        {
          label: '已解决',
          value: 1
        }
      ],
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
      aqqkjlList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        rq: null,
        hjqk: null,
        ycwt: null,
        sfjj: null,
        jjry: null,
        jjsj:null,
        bz: null

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
        this.aqqkjlList = [{ rq: '2024-08-29', hjqk: '正常', ycwt: '无', sfjj: '已解决', jjry: '张三', jjsj: '2024-08-30', bz: '11' }];
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
    //   this.download('system/aqqkjl/export', {
    //     ...this.queryParams
    //   }, `aqqkjl_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
