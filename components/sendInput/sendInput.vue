<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @click="record">
					<image src="../../static/img/voice.png"></image>
				</view>
				<textarea auto-height="true" class="chat-send btn" v-if="!isRecord"></textarea>
				<view class="record btn" v-if="isRecord">按住说话</view>
				<view class="bt-img" @click="emoji">
					<image src="../../static/img/face.png"></image>
				</view>
				<view class="bt-img">
					<image src="../../static/img/addMore.png"></image>
				</view>
			</view>
			<view class="emoji" v-if="isEmoji">表情</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isRecord:false,
				isEmoji:false
			};
		},
		methods:{
			// 切换语音
			record(){
				this.isRecord = !this.isRecord
			},
			emoji(){
				this.isEmoji = !this.isEmoji
			}
		}
	}
</script>

<style lang="scss">
	// @import '../../common/css/myscc.scss';
	.submit{
		background: rgba(244,244,244,0.96);
		border-top: 1rpx solid $uni-border-color;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 100;
		padding-bottom: var(--status-bar-height);
	}
	.submit-chat{
		width: 100%;
		display: flex;
		align-items: flex-end;
		box-sizing: border-box;
		padding: 14rpx 14rpx;
		image {
			width: 56rpx;
			height: 56rpx;
			margin: 0 10rpx;
			flex: auto;
		}
		.btn{
			flex: auto;
			background-color: #fff;
			border-radius: 10rpx;
			padding: 10rpx;
			max-height: 160rpx;
			margin: 0 10rpx;
		}
		.record{
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-text-color-grey;
		}
	}
	.emoji{
		width: 100%;
		height: 460rpx;
		background: rgba(236,237,238,1);
		box-shadow: 0 -1rpx 0 0 rgba(0,0,0,0.1);
	}

</style>