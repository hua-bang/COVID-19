<template>
  <div class="banner">
    <div class="content">
      <div style="text-align: center;font-size: 40px;font-weight: bolder;color: #fcfc64">新型冠状病毒肺炎</div>
      <div style="text-align: center;font-size: 50px;font-weight: bolder">疫情实时追踪</div>
    </div>
  </div>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style scoped>
.banner{
  width: 100%;
  height: 325px;
  background: url("https://mat1.gtimg.com/news/feiyanarea/head_bg_new.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.content>div{
  width: 100%;
}
</style>