<template>
  <div class="hb-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.hb-card{
  width: 94%;
  margin: 20px auto;
  background: #ffffff;
  overflow: hidden;
  color: #666;
  box-shadow: 4px 4px 40px rgb(0 0 0 / 5%);
  border-color: rgba(0,0,0,.05);
  padding: 25px;
}
</style>