<template>
	<div id="mainsearch">
		<div class="main">
			<span class="search">
				<input type="text" autofocus="autofous" placeholder="功能loading……" v-model="searchinfo">
				<span class="cmera" title="没有点击效果，放在这里也没用！" @click="upload"><img src="@/assets/camera.png"></span>
			</span>
			<input type="submit" name="btn" class="btn" value="搜索一下" @click="submit">
		</div>
	</div>
</template>
<script>
export default {
	name:"MainSearch",
	data () {
		return {
			searchinfo: ""
		}
	},
	methods: {
		submit () {
			if(String(this.searchinfo) == "")  {
				alert("功能正在火热开发中……");
			} else {
				alert(`您搜索的(${this.searchinfo})还在加紧开发中`);
				this.searchinfo = "";
			}
		},
		upload () {
			alert("都说了没用你还点！！")
		}
	}
}
</script>
<style scoped>
#mainsearch {
	position: relative;
	width: 100%;
	height: 50px;
}
#mainsearch .main {
	position: relative;
	width: 380px;
	height: 100%;
	margin: 0 auto;
	line-height: 50px;
}
#mainsearch .main .search {
	position: absolute;
	left: 0;
	width: 300px;
	box-sizing: border-box;
}
#mainsearch .main .search input {
	position: absolute;
	box-sizing: border-box;
	left: 0;
	top: 8px;
	height: 36px;
	width: 300px;
	outline-style: none;
	border: 1px solid #aaa;
	font-size: 16px;
}
#mainsearch .main .search .cmera {
	position: absolute;
	display: inline-block;
	right: 10px;
	top: 17px;
	height: 19px;
	width: 18px;
	overflow-y: hidden;
	cursor: pointer;
}
.main .search .cmera img {
	position: absolute;
	top: 1px;	/*-18px*/
	left: 0;
}
.main .search .cmera img:hover {
	position: absolute;
	top: -19px;
	left: 0;
}
#mainsearch .main .btn {
	position: absolute;
	display: inline-block;
	box-sizing: border-box;
	top: 8px;
	right: 0;
	width: 80px;
	height: 36px;
	background-color: #aaa;
	line-height: 36px;
	outline: none;
	cursor: pointer;
	border: none;
	color: #efe;
	font-weight: bolder;
	font-size: 16px;
	font-family: '微软雅黑';
}
#mainsearch .main .btn:hover {
	background-color: #999;
}
#mainsearch .main .btn:active {
	background-color: #888;
}
</style>
