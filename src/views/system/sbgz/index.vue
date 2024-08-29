<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="150px">
      <el-form-item label="发生时间" prop="fssj">
        <el-date-picker clearable
          v-model="queryParams.fssj"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="请选择发生时间">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="是否解决" prop="sfjj">
        <el-select v-model="queryParams.sfjj" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="设备名称" prop="sbmc">
        <el-input
          v-model="queryParams.sbmc"
          placeholder="请输入设备名称"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障情况描述" prop="gzqkms">
        <el-input
          v-model="queryParams.gzqkms"
          placeholder="请输入故障情况描述"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障原因分析" prop="gzyyfx">
        <el-input
          v-model="queryParams.gzyyfx"
          placeholder="请输入故障原因分析"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障修理方法" prop="gzxlff">
        <el-input
          v-model="queryParams.gzxlff"
          placeholder="请输入故障修理方法"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障发现人" prop="gzfxr">
        <el-input
          v-model="queryParams.gzfxr"
          placeholder="请输入故障发现人"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障修理方法提出人" prop="gzxlfftc">
        <el-input
          v-model="queryParams.gzxlfftc"
          placeholder="请输入故障修理方法提出人"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="维修时间" prop="wxsj">
        <el-input
          v-model="queryParams.wxsj"
          placeholder="请输入维修时间"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="维修时长" prop="wxsc">
        <el-input
          v-model="queryParams.wxsc"
          placeholder="请输入维修时长"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="维修人数" prop="wxrs">
        <el-input
          v-model="queryParams.wxrs"
          placeholder="请输入维修人数"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="故障修理人员" prop="gzxlry">
        <el-input
          v-model="queryParams.gzxlry"
          placeholder="请输入故障修理人员"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="维修效果" prop="wxxg">
        <el-input
          v-model="queryParams.wxxg"
          placeholder="请输入维修效果"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="验收人" prop="ysr">
        <el-input
          v-model="queryParams.ysr"
          placeholder="请输入验收人"
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
          v-hasPermi="['system:sbgz:add']"
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
          v-hasPermi="['system:sbgz:edit']"
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
          v-hasPermi="['system:sbgz:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:sbgz:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="sbgzList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="" align="center" prop="id" />
      <el-table-column label="发生时间" align="center" prop="fssj" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.fssj, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
<!--      添加是否解决-->
      <el-table-column label="是否解决" align="center" prop="sfjj">
        <template v-slot="scope">
          <el-tag v-if="scope.row.sfjj === 0" type="danger">{{scope.row.sfjj}}</el-tag>
          <el-tag v-else type="success">已解决</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="设备名称" align="center" prop="sbmc" />
      <el-table-column label="故障情况描述" align="center" prop="gzqkms" />
      <el-table-column label="故障原因分析" align="center" prop="gzyyfx" />
      <el-table-column label="故障修理方法" align="center" prop="gzxlff" />
      <el-table-column label="故障发现人" align="center" prop="gzfxr" />
      <el-table-column label="故障修理方法提出人" align="center" prop="gzxlfftc" />
      <el-table-column label="维修时间" align="center" prop="wxsj" />
      <el-table-column label="维修时长" align="center" prop="wxsc" />
      <el-table-column label="维修人数" align="center" prop="wxrs" />
      <el-table-column label="故障修理人员" align="center" prop="gzxlry" />
      <el-table-column label="维修效果" align="center" prop="wxxg" />
      <el-table-column label="验收人" align="center" prop="ysr" />
      <el-table-column label="备注" align="center" prop="bz" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:sbgz:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:sbgz:remove']"
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

    <!-- 添加或修改设备故障对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="发生时间" prop="fssj">
          <el-date-picker clearable
            v-model="form.fssj"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="请选择发生时间">
          </el-date-picker>
        </el-form-item>
<!--        添加是否解决-->
        <el-form-item label="是否解决" prop="sfjj">
          <el-select v-model="form.sfjj" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="设备名称" prop="sbmc">
          <el-input v-model="form.sbmc" placeholder="请输入设备名称" />
        </el-form-item>
        <el-form-item label="故障情况描述" prop="gzqkms">
          <el-input v-model="form.gzqkms" placeholder="请输入故障情况描述" />
        </el-form-item>
        <el-form-item label="故障原因分析" prop="gzyyfx">
          <el-input v-model="form.gzyyfx" placeholder="请输入故障原因分析" />
        </el-form-item>
        <el-form-item label="故障修理方法" prop="gzxlff">
          <el-input v-model="form.gzxlff" placeholder="请输入故障修理方法" />
        </el-form-item>
        <el-form-item label="故障发现人" prop="gzfxr">
          <el-input v-model="form.gzfxr" placeholder="请输入故障发现人" />
        </el-form-item>
        <el-form-item label="故障修理方法提出人" prop="gzxlfftc">
          <el-input v-model="form.gzxlfftc" placeholder="请输入故障修理方法提出人" />
        </el-form-item>
        <el-form-item label="维修时间" prop="wxsj">
          <el-input v-model="form.wxsj" placeholder="请输入维修时间" />
        </el-form-item>
        <el-form-item label="维修时长" prop="wxsc">
          <el-input v-model="form.wxsc" placeholder="请输入维修时长" />
        </el-form-item>
        <el-form-item label="维修人数" prop="wxrs">
          <el-input v-model="form.wxrs" placeholder="请输入维修人数" />
        </el-form-item>
        <el-form-item label="故障修理人员" prop="gzxlry">
          <el-input v-model="form.gzxlry" placeholder="请输入故障修理人员" />
        </el-form-item>
        <el-form-item label="维修效果" prop="wxxg">
          <el-input v-model="form.wxxg" placeholder="请输入维修效果" />
        </el-form-item>
        <el-form-item label="验收人" prop="ysr">
          <el-input v-model="form.ysr" placeholder="请输入验收人" />
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
import { listSbgz, getSbgz, delSbgz, addSbgz, updateSbgz } from "@/api/system/sbgz";

export default {
  name: "Sbgz",
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
      // 设备故障表格数据
      sbgzList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        fssj: null,
        // 增加是否解决 0：未解决，1：已解决
        sfjj:null,
        sbmc: null,
        gzqkms: null,
        gzyyfx: null,
        gzxlff: null,
        gzfxr: null,
        gzxlfftc: null,
        wxsj: null,
        wxsc: null,
        wxrs: null,
        gzxlry: null,
        wxxg: null,
        ysr: null,
        bz: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      // 是否解决下拉菜单
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
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询设备故障列表 */
    getList() {
      this.loading = true;
      listSbgz(this.queryParams).then(response => {
        this.sbgzList = response.rows;
        console.log(response)
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
        fssj: null,
        sbmc: null,
        gzqkms: null,
        gzyyfx: null,
        gzxlff: null,
        gzfxr: null,
        gzxlfftc: null,
        wxsj: null,
        wxsc: null,
        wxrs: null,
        gzxlry: null,
        wxxg: null,
        ysr: null,
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
      this.title = "添加设备故障";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getSbgz(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改设备故障";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateSbgz(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSbgz(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除设备故障编号为"' + ids + '"的数据项？').then(function() {
        return delSbgz(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/sbgz/export', {
        ...this.queryParams
      }, `sbgz_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
