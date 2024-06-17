<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="孵化日期" prop="fhrq">
        <el-date-picker clearable
          v-model="queryParams.fhrq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择孵化日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="组别" prop="zb">
        <el-input
          v-model="queryParams.zb"
          placeholder="请输入组别"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="孵化盒号" prop="fhhh">
        <el-input
          v-model="queryParams.fhhh"
          placeholder="请输入孵化盒号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="孵化卵重(g)" prop="fhlz">
        <el-input
          v-model="queryParams.fhlz"
          placeholder="请输入孵化卵重(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中虫计数日期" prop="zcjsrq">
        <el-input
          v-model="queryParams.zcjsrq"
          placeholder="请输入中虫计数日期"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="中虫及培养渣净重(kg/盒)" prop="zcjjpyzjz">
        <el-input
          v-model="queryParams.zcjjpyzjz"
          placeholder="请输入中虫及培养渣净重(kg/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样1重量(g)" prop="qy1zl">
        <el-input
          v-model="queryParams.qy1zl"
          placeholder="请输入取样1重量(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样1条数(条)" prop="qy1ts">
        <el-input
          v-model="queryParams.qy1ts"
          placeholder="请输入取样1条数(条)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样1单位重量条数(条/g)" prop="qy1dwzl">
        <el-input
          v-model="queryParams.qy1dwzl"
          placeholder="请输入取样1单位重量条数(条/g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样2重量(g)" prop="qy2zl">
        <el-input
          v-model="queryParams.qy2zl"
          placeholder="请输入取样2重量(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样2条数(条)" prop="qy2ts">
        <el-input
          v-model="queryParams.qy2ts"
          placeholder="请输入取样2条数(条)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样2单位重量条数(条/g)" prop="qy2dwzl">
        <el-input
          v-model="queryParams.qy2dwzl"
          placeholder="请输入取样2单位重量条数(条/g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样3重量(g)" prop="qy3zl">
        <el-input
          v-model="queryParams.qy3zl"
          placeholder="请输入取样3重量(g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样3条数(条)" prop="qy3ts">
        <el-input
          v-model="queryParams.qy3ts"
          placeholder="请输入取样3条数(条)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="取样3单位重量条数(条/g)" prop="qy3dwzl">
        <el-input
          v-model="queryParams.qy3dwzl"
          placeholder="请输入取样3单位重量条数(条/g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="3次取样平均单位重量条数(条/g)" prop="qcqyavgdw">
        <el-input
          v-model="queryParams.qcqyavgdw"
          placeholder="请输入3次取样平均单位重量条数(条/g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总条数(条/盒)" prop="zts">
        <el-input
          v-model="queryParams.zts"
          placeholder="请输入总条数(条/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="单位孵化量(万条/g)" prop="dwfhl">
        <el-input
          v-model="queryParams.dwfhl"
          placeholder="请输入单位孵化量(万条/g)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫使用日期" prop="dcjsyrq">
        <el-input
          v-model="queryParams.dcjsyrq"
          placeholder="请输入大虫使用日期"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="记录人" prop="jlr">
        <el-input
          v-model="queryParams.jlr"
          placeholder="请输入记录人"
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
          v-hasPermi="['system:zcjs:add']"
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
          v-hasPermi="['system:zcjs:edit']"
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
          v-hasPermi="['system:zcjs:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:zcjs:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="zcjsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="孵化日期" align="center" prop="fhrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.fhrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="组别" align="center" prop="zb" />
      <el-table-column label="孵化盒号" align="center" prop="fhhh" />
      <el-table-column label="孵化卵重(g)" align="center" prop="fhlz" />
      <el-table-column label="中虫计数日期" align="center" prop="zcjsrq" />
      <el-table-column label="中虫及培养渣净重(kg/盒)" align="center" prop="zcjjpyzjz" />
      <el-table-column label="取样1重量(g)" align="center" prop="qy1zl" />
      <el-table-column label="取样1条数(条)" align="center" prop="qy1ts" />
      <el-table-column label="取样1单位重量条数(条/g)" align="center" prop="qy1dwzl" />
      <el-table-column label="取样2重量(g)" align="center" prop="qy2zl" />
      <el-table-column label="取样2条数(条)" align="center" prop="qy2ts" />
      <el-table-column label="取样2单位重量条数(条/g)" align="center" prop="qy2dwzl" />
      <el-table-column label="取样3重量(g)" align="center" prop="qy3zl" />
      <el-table-column label="取样3条数(条)" align="center" prop="qy3ts" />
      <el-table-column label="取样3单位重量条数(条/g)" align="center" prop="qy3dwzl" />
      <el-table-column label="3次取样平均单位重量条数(条/g)" align="center" prop="qcqyavgdw" />
      <el-table-column label="总条数(条/盒)" align="center" prop="zts" />
      <el-table-column label="单位孵化量(万条/g)" align="center" prop="dwfhl" />
      <el-table-column label="大虫使用日期" align="center" prop="dcjsyrq" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:zcjs:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:zcjs:remove']"
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

    <!-- 添加或修改中虫计数对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="孵化日期" prop="fhrq">
          <el-date-picker clearable
            v-model="form.fhrq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择孵化日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="组别" prop="zb">
          <el-input v-model="form.zb" placeholder="请输入组别" />
        </el-form-item>
        <el-form-item label="孵化盒号" prop="fhhh">
          <el-input v-model="form.fhhh" placeholder="请输入孵化盒号" />
        </el-form-item>
        <el-form-item label="孵化卵重(g)" prop="fhlz">
          <el-input v-model="form.fhlz" placeholder="请输入孵化卵重(g)" />
        </el-form-item>
        <el-form-item label="中虫计数日期" prop="zcjsrq">
          <el-input v-model="form.zcjsrq" placeholder="请输入中虫计数日期" />
        </el-form-item>
        <el-form-item label="中虫及培养渣净重(kg/盒)" prop="zcjjpyzjz">
          <el-input v-model="form.zcjjpyzjz" placeholder="请输入中虫及培养渣净重(kg/盒)" />
        </el-form-item>
        <el-form-item label="取样1重量(g)" prop="qy1zl">
          <el-input v-model="form.qy1zl" placeholder="请输入取样1重量(g)" />
        </el-form-item>
        <el-form-item label="取样1条数(条)" prop="qy1ts">
          <el-input v-model="form.qy1ts" placeholder="请输入取样1条数(条)" />
        </el-form-item>
        <el-form-item label="取样1单位重量条数(条/g)" prop="qy1dwzl">
          <el-input v-model="form.qy1dwzl" placeholder="请输入取样1单位重量条数(条/g)" />
        </el-form-item>
        <el-form-item label="取样2重量(g)" prop="qy2zl">
          <el-input v-model="form.qy2zl" placeholder="请输入取样2重量(g)" />
        </el-form-item>
        <el-form-item label="取样2条数(条)" prop="qy2ts">
          <el-input v-model="form.qy2ts" placeholder="请输入取样2条数(条)" />
        </el-form-item>
        <el-form-item label="取样2单位重量条数(条/g)" prop="qy2dwzl">
          <el-input v-model="form.qy2dwzl" placeholder="请输入取样2单位重量条数(条/g)" />
        </el-form-item>
        <el-form-item label="取样3重量(g)" prop="qy3zl">
          <el-input v-model="form.qy3zl" placeholder="请输入取样3重量(g)" />
        </el-form-item>
        <el-form-item label="取样3条数(条)" prop="qy3ts">
          <el-input v-model="form.qy3ts" placeholder="请输入取样3条数(条)" />
        </el-form-item>
        <el-form-item label="取样3单位重量条数(条/g)" prop="qy3dwzl">
          <el-input v-model="form.qy3dwzl" placeholder="请输入取样3单位重量条数(条/g)" />
        </el-form-item>
        <el-form-item label="3次取样平均单位重量条数(条/g)" prop="qcqyavgdw">
          <el-input v-model="form.qcqyavgdw" placeholder="请输入3次取样平均单位重量条数(条/g)" />
        </el-form-item>
        <el-form-item label="总条数(条/盒)" prop="zts">
          <el-input v-model="form.zts" placeholder="请输入总条数(条/盒)" />
        </el-form-item>
        <el-form-item label="单位孵化量(万条/g)" prop="dwfhl">
          <el-input v-model="form.dwfhl" placeholder="请输入单位孵化量(万条/g)" />
        </el-form-item>
        <el-form-item label="大虫使用日期" prop="dcjsyrq">
          <el-input v-model="form.dcjsyrq" placeholder="请输入大虫使用日期" />
        </el-form-item>
        <el-form-item label="记录人" prop="jlr">
          <el-input v-model="form.jlr" placeholder="请输入记录人" />
        </el-form-item>
        <el-form-item label="备注" prop="bz">
          <el-input v-model="form.bz" placeholder="请输入备注" />
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
import { listZcjs, getZcjs, delZcjs, addZcjs, updateZcjs } from "@/api/system/zcjs";

export default {
  name: "Zcjs",
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
      // 中虫计数表格数据
      zcjsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        fhrq: null,
        zb: null,
        fhhh: null,
        fhlz: null,
        zcjsrq: null,
        zcjjpyzjz: null,
        qy1zl: null,
        qy1ts: null,
        qy1dwzl: null,
        qy2zl: null,
        qy2ts: null,
        qy2dwzl: null,
        qy3zl: null,
        qy3ts: null,
        qy3dwzl: null,
        qcqyavgdw: null,
        zts: null,
        dwfhl: null,
        dcjsyrq: null,
        jlr: null,
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
    /** 查询中虫计数列表 */
    getList() {
      this.loading = true;
      listZcjs(this.queryParams).then(response => {
        this.zcjsList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        fhrq: null,
        zb: null,
        fhhh: null,
        fhlz: null,
        zcjsrq: null,
        zcjjpyzjz: null,
        qy1zl: null,
        qy1ts: null,
        qy1dwzl: null,
        qy2zl: null,
        qy2ts: null,
        qy2dwzl: null,
        qy3zl: null,
        qy3ts: null,
        qy3dwzl: null,
        qcqyavgdw: null,
        zts: null,
        dwfhl: null,
        dcjsyrq: null,
        jlr: null,
        bz: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加中虫计数";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getZcjs(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改中虫计数";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateZcjs(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addZcjs(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除中虫计数编号为"' + ids + '"的数据项？').then(function() {
        return delZcjs(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/zcjs/export', {
        ...this.queryParams
      }, `zcjs_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
