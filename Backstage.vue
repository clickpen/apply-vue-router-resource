<template>
	<div id="backstage">
		<div class="leftside">
			左导航栏
		</div>
		<div class="rightside">
			<div class="title">
				右导航栏
			</div>
			<div class="artical">
				<div class="hd">数据表头</div>
				<ul class="main">
					<li v-for="msg in msgspage" :class="{seledata:msg.checkboxsele}">
						<label>
							<input class="checkbox" type="checkbox" name="check" v-model="msg.checkboxsele">
							<!--在选项框span中填写需要显示的数据-->
							<span>{{msg.message}}</span>
						</label>
						<input class="btn" type="button" value="developing!">
					</li>
				</ul>
				<div class="ft">
					<button @click="pre" :style="prestyle">前一页</button>
					<!--这里是页码区域-->
					<ul class="pagearea" style="display: inline-block;">
						<li :class="{pagebtnselec:page == indexNow}" v-for="page in pages" @click="topage(page)">{{page}}</li>
					</ul>
					<button @click="nex" :style="nexstyle">后一页</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			'msgs': [
				{'message': '展示信息 1','checkboxsele': false},
				{'message': '展示信息 2','checkboxsele': false},
				{'message': '展示信息 3','checkboxsele': false},
				{'message': '展示信息 4','checkboxsele': false},
				{'message': '展示信息 5','checkboxsele': false},
				{'message': '展示信息 6','checkboxsele': false},
				{'message': '展示信息 7','checkboxsele': false},
				{'message': '展示信息 8','checkboxsele': false},
				{'message': '展示信息 9','checkboxsele': false},
				{'message': '展示信息10','checkboxsele': false},
				{'message': '展示信息11','checkboxsele': false},
				{'message': '展示信息12','checkboxsele': false},
				{'message': '展示信息13','checkboxsele': false},
				{'message': '展示信息14','checkboxsele': false},
				{'message': '展示信息15','checkboxsele': false},
				{'message': '展示信息16','checkboxsele': false},
				{'message': '展示信息17','checkboxsele': false},
				{'message': '展示信息18','checkboxsele': false},
				{'message': '展示信息19','checkboxsele': false},
				{'message': '展示信息20','checkboxsele': false},
				{'message': '展示信息21','checkboxsele': false},
				{'message': '展示信息22','checkboxsele': false},
				{'message': '展示信息23','checkboxsele': false},
				{'message': '展示信息24','checkboxsele': false},
				{'message': '展示信息25','checkboxsele': false},
				{'message': '展示信息26','checkboxsele': false},
				{'message': '展示信息27','checkboxsele': false},
				{'message': '展示信息28','checkboxsele': false},
				{'message': '展示信息29','checkboxsele': false},
				{'message': '展示信息30','checkboxsele': false},
				{'message': '展示信息31','checkboxsele': false},
				{'message': '最后一个信息','checkboxsele': false}
			],
			'msgspage': [],
			'pages': [],
			'indexNow': 1,
			'prestyle': "visibility:hidden",
			'nexstyle': "",
			'pageselec': false
		}
	},
	methods: {
		pre () {
			if(this.indexNow > 1) {
				this.indexNow --;
				// this.pages --;
			} else {
				alert("没有前一页了");
			}
		},
		nex () {
			if(this.indexNow * 10 < this.msgs.length) {
				this.indexNow ++;
				// this.pages ++;
			} else {
				alert("没有后一页了");
			}
		},
		topage (e) {
			this.indexNow = e;
			if(this.indexNow == e) {

			}
			// this.msgspage = this.msgs.slice(10 * (e - 1), 10 * e);
		}
	},
	watch: {
		indexNow () {
			this.msgspage = this.msgs.slice((this.indexNow - 1) * 10, this.indexNow * 10 );
			if(this.indexNow <= 1) {	//前一页按钮消失
				this.prestyle = "visibility:hidden";
				this.nexstyle = "";
			} else if(this.indexNow * 10 >= this.msgs.length) {	//后一页按钮消失
				this.nexstyle = "visibility:hidden";
				this.prestyle = "";
			} else {
				this.prestyle = "";
				this.nexstyle = "";
			}
		}
	},
	created () {
		this.msgspage = this.msgs.slice(0,10);	//初始第一页
		let pagen = Math.ceil(this.msgs.length / 10);	//获取当前一共会有多少页
		for(let i = 0; i < pagen; i ++) {
			this.pages.push(i+1);
		};
	}
}
</script>
<style scoped>
* {
	list-style: none;
}
#backstage {
	width: 100%;
	height: 100%;
	position: absolute;
}
.leftside {
	position: absolute;
	left: 0;
	top: 0;
	width: 20%;
	border: 1px solid black;
	height: 600px;
}
.rightside {
	position: absolute;
	right: 0;
	width: 80%;
	border: 1px solid red;
	height: 600px;
}
.rightside .title {
	height: 180px;
	width: 100%;
	min-width: 450px;
	line-height: 200px;
}
.rightside .artical {
	position: relative;
	height: 420px;
	width: 100%;
	min-width: 450px;
	box-sizing: border-box;
	border: 1px solid #fff;
}
.rightside .artical .hd,.ft {
	width: 100%;
	height: 30px;
	line-height: 30px;
	background-color: #ccc;
}
.hd {
	position: absolute;
	top: 0;
}
.ft {
	position: absolute;
	bottom: 0;
}
.rightside .artical .main {
	height: 350px;
	width: 90%;
	margin: 35px auto;
	overflow: hidden;
}
.rightside .artical .main li {
	box-sizing: border-box;
	position: relative;
	height: 35px;
	line-height: 35px;
	overflow: hidden;
}
.rightside .artical .main li span {
	position: relative;
	display: inline-block;
	box-sizing: border-box;
	padding-right: 50px;
	width: 90%;
	text-align: left;
	overflow: hidden;
}
.rightside .artical .main .seledata {
	background-color: #ccc;
}
.rightside .artical .main .checkbox {
	position: absolute;
	top: 9px;
	left: 5px;
	outline: none;
}
.rightside .artical .main .btn {
	position: absolute;
	right: 5px;
	top: 6px;
	outline: none;
	border-radius: 5px;
	background-color: lightblue;
}
.rightside .artical .ft .pagearea li {
	display: inline-block;
	height: 22px;
	width: 22px;
	margin: 0 4px;
	line-height: 24px;
	border-radius: 2px;
	background-color: #eee;
	cursor: pointer;
}
.rightside .artical .ft .pagearea .pagebtnselec {
	background-color: yellow;
	cursor: default;
}
.rightside .artical .ft button {
	margin: 0 15px;
	cursor: pointer;
}
</style>