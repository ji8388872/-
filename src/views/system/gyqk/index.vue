<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="日期" prop="rq">
        <el-date-picker clearable
          v-model="queryParams.rq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="批次" prop="pc">
        <el-input
          v-model="queryParams.pc"
          placeholder="请输入批次"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="组别" prop="zb">
        <el-input
          v-model="queryParams.zb"
          placeholder="请输入组别"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="物料进食情况" prop="wljsqk">
        <el-input
          v-model="queryParams.wljsqk"
          placeholder="请输入物料进食情况"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="物料干湿情况" prop="wlgsqk">
        <el-input
          v-model="queryParams.wlgsqk"
          placeholder="请输入物料干湿情况"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="物料松散情况" prop="wlssqk">
        <el-input
          v-model="queryParams.wlssqk"
          placeholder="请输入物料松散情况"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="物料臭气情况" prop="wlchqk">
        <el-input
          v-model="queryParams.wlchqk"
          placeholder="请输入物料臭气情况"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="有无死虫" prop="ywsc">
        <el-input
          v-model="queryParams.ywsc"
          placeholder="请输入有无死虫"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="虫子活跃情况" prop="czhyqk">
        <el-input
          v-model="queryParams.czhyqk"
          placeholder="请输入虫子活跃情况"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="工艺是否正常" prop="gysfzc">
        <el-input
          v-model="queryParams.gysfzc"
          placeholder="请输入工艺是否正常"
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
          v-hasPermi="['system:gyqk:add']"
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
          v-hasPermi="['system:gyqk:edit']"
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
          v-hasPermi="['system:gyqk:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:gyqk:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="gyqkList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="日期" align="center" prop="rq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.rq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="批次" align="center" prop="pc" />
      <el-table-column label="组别" align="center" prop="zb" />
      <el-table-column label="物料进食情况" align="center" prop="wljsqk" />
      <el-table-column label="物料干湿情况" align="center" prop="wlgsqk" />
      <el-table-column label="物料松散情况" align="center" prop="wlssqk" />
      <el-table-column label="物料臭气情况" align="center" prop="wlchqk" />
      <el-table-column label="有无死虫" align="center" prop="ywsc" />
      <el-table-column label="虫子活跃情况" align="center" prop="czhyqk" />
      <el-table-column label="工艺是否正常" align="center" prop="gysfzc" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:gyqk:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:gyqk:remove']"
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

    <!-- 添加或修改工艺情况对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="日期" prop="rq">
          <el-date-picker clearable
            v-model="form.rq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="批次" prop="pc">
          <el-input v-model="form.pc" placeholder="请输入批次" />
        </el-form-item>
        <el-form-item label="组别" prop="zb">
          <el-input v-model="form.zb" placeholder="请输入组别" />
        </el-form-item>
        <el-form-item label="物料进食情况" prop="wljsqk">
          <el-input v-model="form.wljsqk" placeholder="请输入物料进食情况" />
        </el-form-item>
        <el-form-item label="物料干湿情况" prop="wlgsqk">
          <el-input v-model="form.wlgsqk" placeholder="请输入物料干湿情况" />
        </el-form-item>
        <el-form-item label="物料松散情况" prop="wlssqk">
          <el-input v-model="form.wlssqk" placeholder="请输入物料松散情况" />
        </el-form-item>
        <el-form-item label="物料臭气情况" prop="wlchqk">
          <el-input v-model="form.wlchqk" placeholder="请输入物料臭气情况" />
        </el-form-item>
        <el-form-item label="有无死虫" prop="ywsc">
          <el-input v-model="form.ywsc" placeholder="请输入有无死虫" />
        </el-form-item>
        <el-form-item label="虫子活跃情况" prop="czhyqk">
          <el-input v-model="form.czhyqk" placeholder="请输入虫子活跃情况" />
        </el-form-item>
        <el-form-item label="工艺是否正常" prop="gysfzc">
          <el-input v-model="form.gysfzc" placeholder="请输入工艺是否正常" />
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
import { listGyqk, getGyqk, delGyqk, addGyqk, updateGyqk } from "@/api/system/gyqk";

export default {
  name: "Gyqk",
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
      // 工艺情况表格数据
      gyqkList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        rq: null,
        pc: null,
        zb: null,
        wljsqk: null,
        wlgsqk: null,
        wlssqk: null,
        wlchqk: null,
        ywsc: null,
        czhyqk: null,
        gysfzc: null,
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
    /** 查询工艺情况列表 */
    getList() {
      this.loading = true;
      listGyqk(this.queryParams).then(response => {
        this.gyqkList = response.rows;
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
        rq: null,
        pc: null,
        zb: null,
        wljsqk: null,
        wlgsqk: null,
        wlssqk: null,
        wlchqk: null,
        ywsc: null,
        czhyqk: null,
        gysfzc: null,
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
      this.title = "添加工艺情况";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getGyqk(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改工艺情况";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateGyqk(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addGyqk(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除工艺情况编号为"' + ids + '"的数据项？').then(function() {
        return delGyqk(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/gyqk/export', {
        ...this.queryParams
      }, `gyqk_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
