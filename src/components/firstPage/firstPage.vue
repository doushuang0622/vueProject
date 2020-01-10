<template>
  <div class="first_page">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scped>
.dot_complete {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: pink;
}
.first_page {
  width: 80%;
  margin: 0 auto;
  height: 100px;
}
.mint-swipe-indicator.is-active {
  background: red;
}
.line {
  display: inline-block;
  width: 20px;
  height: 1px;
  background: pink;
}
</style>