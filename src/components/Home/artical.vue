<template>
  <div class="artical">
      <div class="content">
        <h3>下面是一个Flexbox，展示的数据来自JSONPlaceholder</h3>
        <ul>
          <li v-for="item in hdata">
            <p>{{ item.name }}</p>
            <p>{{ item.email }}</p>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  props: ["hdata"]
}
</script>
<style scoped>
* {
    color: #d11;
    list-style: none;
}
.artical {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 20px;
  min-height: 300px;
}
.artical .content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 80px;
}
.artical .content h3 {
  text-align: left;
}
.artical .content ul {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
}
.artical .content ul li {
  flex-basis: 250px;
  flex-grow: 1;
  line-height: 30px;
  background-color: #eee;
  border-radius: 5px;
  text-align: center;
  margin: 10px 15px;
}
</style>
