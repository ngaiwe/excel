<template>
  <div class="excel">
    <div>
      <el-upload
        class="upload-demo"
        action="http://127.0.0.1:7001/upload/excel"
        :on-change="change"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "excel",
  methods: {
    change (file) {
      console.log(file)
    }
  }
};
</script>

<style lang="less" scoped>
.excel {
}
</style>
