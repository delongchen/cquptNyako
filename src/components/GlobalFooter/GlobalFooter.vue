<template>
  <div class="footer">
    <div class="links">
      <a href="/">首页</a>
      <a href="http://www.miitbeian.gov.cn/">渝ICP备18003115号</a>
    </div>
    <div class="copyright">
      Copyright
      <a-icon type="copyright" />
      重邮爱猫人士
    </div>
  </div>
</template>

<script>
  export default {
    name: "GlobalFooter"
  }
</script>

<style scoped lang="less">
  .footer {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;

    .links {
      margin-bottom: 8px;

      a {
        color: rgba(0, 0, 0, 0.45);

        &:hover {
          color: rgba(0, 0, 0, 0.65);
        }

        &:not(:last-child) {
          margin-right: 40px;
        }
      }
    }
    .copyright {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    }
  }
</style>
