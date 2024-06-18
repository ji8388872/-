<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="200px">
      <el-form-item label="养殖地点" prop="yzdd">
        <el-input
          v-model="queryParams.yzdd"
          placeholder="请输入养殖地点"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="设备名称" prop="sbmc">
        <el-input
          v-model="queryParams.sbmc"
          placeholder="请输入设备名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
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
      <el-form-item label="盒号" prop="hh">
        <el-input
          v-model="queryParams.hh"
          placeholder="请输入盒号"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="初次进料日期" prop="ccrq">
        <el-date-picker clearable
          v-model="queryParams.ccrq"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择初次进料日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="初次进料开始时间" prop="cckssj">
        <el-date-picker clearable
          v-model="queryParams.cckssj"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择初次进料开始时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="初次进料完成时间" prop="ccwcsj">
        <el-date-picker clearable
          v-model="queryParams.ccwcsj"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择初次进料完成时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="排数" prop="ps">
        <el-input
          v-model="queryParams.ps"
          placeholder="请输入排数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="列数" prop="ls">
        <el-input
          v-model="queryParams.ls"
          placeholder="请输入列数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加料次数(次)" prop="jlcs">
        <el-input
          v-model="queryParams.jlcs"
          placeholder="请输入加料次数(次)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="原料名称" prop="ylmc">
        <el-input
          v-model="queryParams.ylmc"
          placeholder="请输入原料名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="原料来源" prop="ylyl">
        <el-input
          v-model="queryParams.ylyl"
          placeholder="请输入原料来源"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="预处理工艺" prop="yclgy">
        <el-input
          v-model="queryParams.yclgy"
          placeholder="请输入预处理工艺"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫数量(万条/培养盒)" prop="dcsl">
        <el-input
          v-model="queryParams.dcsl"
          placeholder="请输入大虫数量(万条/培养盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫日龄(d)" prop="dcrj">
        <el-input
          v-model="queryParams.dcrj"
          placeholder="请输入大虫日龄(d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="每个养殖盒对应的培养盒数量(盒/盒)" prop="myyzhdyyphs">
        <el-input
          v-model="queryParams.myyzhdyyphs"
          placeholder="请输入每个养殖盒对应的培养盒数量(盒/盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="养殖盒有效长度(mm)" prop="yzhyydcdmm">
        <el-input
          v-model="queryParams.yzhyydcdmm"
          placeholder="请输入养殖盒有效长度(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="养殖盒有效宽度(mm)" prop="yzhyydcwk">
        <el-input
          v-model="queryParams.yzhyydcwk"
          placeholder="请输入养殖盒有效宽度(mm)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="大虫及渣+盒重量(kg/培养盒)" prop="dcjzHz">
        <el-input
          v-model="queryParams.dcjzHz"
          placeholder="请输入大虫及渣+盒重量(kg/培养盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="培养盒重量(kg/培养盒)" prop="pyhz">
        <el-input
          v-model="queryParams.pyhz"
          placeholder="请输入培养盒重量(kg/培养盒)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="加料倍数" prop="jlbs">
        <el-input
          v-model="queryParams.jlbs"
          placeholder="请输入加料倍数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="卵量(g/d)" prop="ll">
        <el-input
          v-model="queryParams.ll"
          placeholder="请输入卵量(g/d)"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="工艺名称" prop="gyn">
        <el-input
          v-model="queryParams.gyn"
          placeholder="请输入工艺名称"
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
          v-hasPermi="['system:zbxx:add']"
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
          v-hasPermi="['system:zbxx:edit']"
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
          v-hasPermi="['system:zbxx:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:zbxx:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="zbxxList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="养殖地点" align="center" prop="yzdd" />
      <el-table-column label="设备名称" align="center" prop="sbmc" />
      <el-table-column label="批次" align="center" prop="pc" />
      <el-table-column label="组别" align="center" prop="zb" />
      <el-table-column label="盒号" align="center" prop="hh" />
      <el-table-column label="初次进料日期" align="center" prop="ccrq" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.ccrq, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="初次进料开始时间" align="center" prop="cckssj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.cckssj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="初次进料完成时间" align="center" prop="ccwcsj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.ccwcsj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排数" align="center" prop="ps" />
      <el-table-column label="列数" align="center" prop="ls" />
      <el-table-column label="加料次数(次)" align="center" prop="jlcs" />
      <el-table-column label="原料名称" align="center" prop="ylmc" />
      <el-table-column label="原料来源" align="center" prop="ylyl" />
      <el-table-column label="预处理工艺" align="center" prop="yclgy" />
      <el-table-column label="大虫数量(万条/培养盒)" align="center" prop="dcsl" />
      <el-table-column label="大虫日龄(d)" align="center" prop="dcrj" />
      <el-table-column label="每个养殖盒对应的培养盒数量(盒/盒)" align="center" prop="myyzhdyyphs" />
      <el-table-column label="养殖盒有效长度(mm)" align="center" prop="yzhyydcdmm" />
      <el-table-column label="养殖盒有效宽度(mm)" align="center" prop="yzhyydcwk" />
      <el-table-column label="大虫及渣+盒重量(kg/培养盒)" align="center" prop="dcjzHz" />
      <el-table-column label="培养盒重量(kg/培养盒)" align="center" prop="pyhz" />
      <el-table-column label="加料倍数" align="center" prop="jlbs" />
      <el-table-column label="卵量(g/d)" align="center" prop="ll" />
      <el-table-column label="工艺名称" align="center" prop="gyn" />
      <el-table-column label="记录人" align="center" prop="jlr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:zbxx:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:zbxx:remove']"
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

    <!-- 添加或修改组别信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="养殖地点" prop="yzdd">
          <el-input v-model="form.yzdd" placeholder="请输入养殖地点" />
        </el-form-item>
        <el-form-item label="设备名称" prop="sbmc">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称" />
        </el-form-item>
        <el-form-item label="批次" prop="pc">
          <el-input v-model="form.pc" placeholder="请输入批次" />
        </el-form-item>
        <el-form-item label="组别" prop="zb">
          <el-input v-model="form.zb" placeholder="请输入组别" />
        </el-form-item>
        <el-form-item label="盒号" prop="hh">
          <el-input v-model="form.hh" placeholder="请输入盒号" />
        </el-form-item>
        <el-form-item label="初次进料日期" prop="ccrq">
          <el-date-picker clearable
            v-model="form.ccrq"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择初次进料日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="初次进料开始时间" prop="cckssj">
          <el-date-picker clearable
            v-model="form.cckssj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择初次进料开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="初次进料完成时间" prop="ccwcsj">
          <el-date-picker clearable
            v-model="form.ccwcsj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择初次进料完成时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="排数" prop="ps">
          <el-input v-model="form.ps" placeholder="请输入排数" />
        </el-form-item>
        <el-form-item label="列数" prop="ls">
          <el-input v-model="form.ls" placeholder="请输入列数" />
        </el-form-item>
        <el-form-item label="加料次数(次)" prop="jlcs">
          <el-input v-model="form.jlcs" placeholder="请输入加料次数(次)" />
        </el-form-item>
        <el-form-item label="原料名称" prop="ylmc">
          <el-input v-model="form.ylmc" placeholder="请输入原料名称" />
        </el-form-item>
        <el-form-item label="原料来源" prop="ylyl">
          <el-input v-model="form.ylyl" placeholder="请输入原料来源" />
        </el-form-item>
        <el-form-item label="预处理工艺" prop="yclgy">
          <el-input v-model="form.yclgy" placeholder="请输入预处理工艺" />
        </el-form-item>
        <el-form-item label="大虫数量(万条/培养盒)" prop="dcsl">
          <el-input v-model="form.dcsl" placeholder="请输入大虫数量(万条/培养盒)" />
        </el-form-item>
        <el-form-item label="大虫日龄(d)" prop="dcrj">
          <el-input v-model="form.dcrj" placeholder="请输入大虫日龄(d)" />
        </el-form-item>
        <el-form-item label="每个养殖盒对应的培养盒数量(盒/盒)" prop="myyzhdyyphs">
          <el-input v-model="form.myyzhdyyphs" placeholder="请输入每个养殖盒对应的培养盒数量(盒/盒)" />
        </el-form-item>
        <el-form-item label="养殖盒有效长度(mm)" prop="yzhyydcdmm">
          <el-input v-model="form.yzhyydcdmm" placeholder="请输入养殖盒有效长度(mm)" />
        </el-form-item>
        <el-form-item label="养殖盒有效宽度(mm)" prop="yzhyydcwk">
          <el-input v-model="form.yzhyydcwk" placeholder="请输入养殖盒有效宽度(mm)" />
        </el-form-item>
        <el-form-item label="大虫及渣+盒重量(kg/培养盒)" prop="dcjzHz">
          <el-input v-model="form.dcjzHz" placeholder="请输入大虫及渣+盒重量(kg/培养盒)" />
        </el-form-item>
        <el-form-item label="培养盒重量(kg/培养盒)" prop="pyhz">
          <el-input v-model="form.pyhz" placeholder="请输入培养盒重量(kg/培养盒)" />
        </el-form-item>
        <el-form-item label="加料倍数" prop="jlbs">
          <el-input v-model="form.jlbs" placeholder="请输入加料倍数" />
        </el-form-item>
        <el-form-item label="卵量(g/d)" prop="ll">
          <el-input v-model="form.ll" placeholder="请输入卵量(g/d)" />
        </el-form-item>
        <el-form-item label="工艺名称" prop="gyn">
          <el-input v-model="form.gyn" placeholder="请输入工艺名称" />
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
import { listZbxx, getZbxx, delZbxx, addZbxx, updateZbxx } from "@/api/system/zbxx";

export default {
  name: "Zbxx",
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
      // 组别信息表格数据
      zbxxList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        yzdd: null,
        sbmc: null,
        pc: null,
        zb: null,
        hh: null,
        ccrq: null,
        cckssj: null,
        ccwcsj: null,
        ps: null,
        ls: null,
        jlcs: null,
        ylmc: null,
        ylyl: null,
        yclgy: null,
        dcsl: null,
        dcrj: null,
        myyzhdyyphs: null,
        yzhyydcdmm: null,
        yzhyydcwk: null,
        dcjzHz: null,
        pyhz: null,
        jlbs: null,
        ll: null,
        gyn: null,
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
    /** 查询组别信息列表 */
    getList() {
      this.loading = true;
      listZbxx(this.queryParams).then(response => {
        this.zbxxList = response.rows;
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
        yzdd: null,
        sbmc: null,
        pc: null,
        zb: null,
        hh: null,
        ccrq: null,
        cckssj: null,
        ccwcsj: null,
        ps: null,
        ls: null,
        jlcs: null,
        ylmc: null,
        ylyl: null,
        yclgy: null,
        dcsl: null,
        dcrj: null,
        myyzhdyyphs: null,
        yzhyydcdmm: null,
        yzhyydcwk: null,
        dcjzHz: null,
        pyhz: null,
        jlbs: null,
        ll: null,
        gyn: null,
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
      this.title = "添加组别信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getZbxx(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改组别信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateZbxx(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addZbxx(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除组别信息编号为"' + ids + '"的数据项？').then(function() {
        return delZbxx(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/zbxx/export', {
        ...this.queryParams
      }, `zbxx_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
