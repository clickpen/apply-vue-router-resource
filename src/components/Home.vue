<template>
  <div id="homg">
    <my-Header class="header"></my-Header>
    <my-search></my-search>
    <my-artical :hdata="usermsgs"></my-artical>
    <my-Footer :transdata="transmsg"></my-Footer>
  </div>
</template>
<script>
import Header from './Home/Header.vue';
import Artical from './Home/artical.vue';
import Footer from './Home/Footer.vue';
import MainSearch from './Home/MainSearch.vue';
export default {
  data () {
	return {
	    usermsgs: [],
      transmsg: ""
	  };
  },
  components: {
	"my-Header" :Header,
	"my-search": MainSearch,
	"my-artical": Artical,
	"my-Footer": Footer
  },
  created () {
    this.$http.get("http://jsonplaceholder.typicode.com/users")
	  .then(data => {
		this.usermsgs = data.body
	  });
  }
}
</script>
