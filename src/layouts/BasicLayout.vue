<template>
  <a-layout :class="['layout', device]">

  </a-layout>
</template>

<script>
  import { mixinDevice } from "../mixin/device/mixinDevice";

  export default {
    name: "BasicLayout",
    mixins: [mixinDevice]
  }
</script>

<style scoped>

</style>
