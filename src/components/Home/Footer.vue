<template>
	<div class="ft">
		<p>{{ftmsg}}</p>
	</div>
</template>
<script>
export default{
	data () {
		return {
			ftmsg: `这里是Home页脚`
		};
	}
}
</script>
<style scoped>
.ft {
	width: 100%;
	padding: 10px;
	text-align: center;
	background-color: #424242;
}
.ft p {
	color: green;
}
</style>
