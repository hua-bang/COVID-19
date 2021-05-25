<template>
  <div class="local">
    <div class="info">
      <b style="color: #737373">统计截至 </b>{{ (new Date()).toLocaleString()}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Local"
}
</script>

<style scoped>
.info{
  padding: 25px 10px;
  font-size: 20px;
}
</style>