<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async logout () {
      const { data: res } = await this.$http.post(`/logout?jsessionid=${window.sessionStorage.getItem('jsessionid')}`)
      const { retCode, retMsg } = res
      if (retCode !== 200) return this.$msg.error(retMsg)
      this.$msg.success(retMsg)
      window.sessionStorage.clear()
      await this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
