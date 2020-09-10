<template>
	<view class="emoji" :style="{height:height}">
		<view class="emoji-line" v-for="(line,i) in emoji" :key="i">
			<view class="emoji-line-item" v-for="(item,index) in line" :key="index+100" @click="selectEmoji(item)">{{item}}</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			height:{
				type:Number,
				default:260
			}
		},
		data() {
			return {
				emoji:[
					['😀','😁','😂','🤣','😃','😍','😄','😅'],
					['😆','😉','😊','🤠','😋','😎','😘','😗'],
					['😙','😚','🙂','🤗','😐','😶','🙄','😏'],
					['😣','😥','🤐','😯','😪','😫','😴','😌'],
					['😛','😜','😒','😕','😔','🙃','😲','🙁'],
					['😤','😭','😦','😩','😬','😱','😳','😵'],
					['😡','😠','😷','🤒','🤢','😇','🤥','🤓'],
					['😈','👿','👹','👺','💀','👻','👽','🤖'],
					['💩','👫','👬','👭','👂','👀','👣','👁'],
					['💋','👗','👙','👚','👜','👠','👑','👒'],
				]
			};
		},
		methods:{
			selectEmoji(e) {
				this.$emit('selectEmoji',e)
			}
		}
	}
</script>

<style lang="scss">
.emoji {
	width: 100%;
	padding: 16rpx 10rpx 100rpx 10rpx;
	box-sizing: border-box;
	overflow: hidden;
	overflow-y: auto;
	.emoji-line{
		display: flex;
		.emoji-line-item{
			flex:1;
			text-align: center;
			font-size: 44rpx;
			line-height: 73rpx;
		}
	}
}
</style>
