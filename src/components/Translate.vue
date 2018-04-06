<template>
	<div id="Translate">
		<div class="wrapper">
			<div class="title">
				<p>我的中外文在线翻译</p>
			</div>
			<div class="Tin">
				<textarea name="text"cols="30" rows="10" placeholder="这里输入需要翻译的文字" v-model="trtext"></textarea>
				<span class="clear" title="清空" @click = "clearall">X</span>
				<div>
					<input class="btn" type="button" value="开始翻译" @click="begintranslate">
					<select id="transformlangselect" v-model="lang">
						<option v-for="item in langdata" :value="item.val">{{item.show}}</option>
					</select>
				</div>
			</div>
			<div class="Tout">{{outtext}}</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			trtext: "",
			outtext: "",
			lang: "en",
			langdata: [				//在这里添加需要翻译成的语种
				{val: "en",
				show: "English"},
				{val: "zh",
				show: "国语"},
				{val: "ja",
				show: "日本語"},
				{val: "ko",
				show: "한국어."},
				{val: "de",
				show: "Deutsch"},
				{val: "ru",
				show: "русский "},
				{val: "fr",
				show: "Français"},
				{val: "it",
				show: "In Italiano"},
				{val: "th",
				show: "ภาษาไทย"},
				{val: "ar",
				show: "العربية"}
			]
		}
	},
	methods: {
		clearall () {
			this.trtext = "";
		},
		begintranslate () {
			this.outtext = "";
			if(String(this.trtext) == "") {
				return
			}	else {
				this.$http.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180405T141522Z.6d1ec4b269557c25.b1717769f1c2843f0bfb51e2692f5802885663c5&text=${this.trtext}&lang=${this.lang}`)
				.then((responce) => {this.outtext = responce.body.text[0]})
			}
		}
	},
	watch: {
		trtext () {
			document.getElementsByClassName('clear')[0].style.display = String(this.trtext) == "" ? "none" : "block";
		}
	}
}
</script>
<style>
#Translate {
	font-size: 16px;
}
.wrapper {
	position: relative;
	width: 700px;
	margin: 0 auto;
	text-align: center;
}
.wrapper .title {
	position: relative;
	width: 100%;
	text-align: center;
	margin: 30px 0;
	font-size: 20px;
	font-weight: bolder;
}
.wrapper .Tin {
	position: relative;
	float: left;
	width: 400px;
	min-height: 150px;
}
.wrapper .Tin textarea {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 300px;
	border-color: #ccc;
	outline-style: none;
}
.wrapper .Tin .clear {
	display: none;
	position: absolute;
	top: 0px;
	left: 310px;
	width: 10px;
	height: 10px;
	color: #aaa;
	cursor: pointer;
}
.wrapper .Tin .btn {
	position: absolute;
	right: 4px;
	top: 0;
	bottom: 0;
	margin: auto;
	height: 30px;
	width: 90px;
	background-color: rgb(69,149,253);
	border: none;
	outline: none;
	border-radius: 5px;
	color: #efe;
	font-weight: bolder;
	cursor: pointer;
}
.wrapper .Tin #transformlangselect {
	position: absolute;
	right: 4px;
	top: 95px;
	outline: none;
	border-radius: 5px;
	height: 20px;
	width: 90px;
}
.wrapper .Tout {
	float: right;
	width: 300px;
	background-color: #eee;
	min-height: 150px;
	text-align: left;
}
</style>
