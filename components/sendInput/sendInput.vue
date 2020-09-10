<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @click="record">
					<image src="../../static/img/voice.png"></image>
				</view>
				<textarea auto-height="true" @focus="getfocus" @input="sendInput" v-model="sendMsg" class="chat-send btn" v-if="!isRecord"></textarea>
				<view class="record btn" v-if="isRecord">按住说话</view>
				<view class="bt-img" @click="emoji">
					<image src="../../static/img/face.png"></image>
				</view>
				<view class="bt-img">
					<image src="../../static/img/addMore.png"></image>
				</view>
			</view>
			<view class="emoji" v-if="isEmoji">
				<view class="sent-btn">
					<view class="send-btn-det" @click="emojiDelete">
						<image src="../../static/img/delete.png"></image>
					</view>
					<view class="send-btn-send" @click="send">发送</view>
				</view>
				<emoji @selectEmoji = "selectEmoji" :height="260"></emoji>
			</view>
		</view>
	</view>
</template>

<script>
	import emoji from '../emoji/emoji.vue'
	export default {
		data() {
			return {
				isRecord:false,
				isEmoji:false,
				sendMsg: '',
			};
		},
		components:{
			emoji
		},
		methods:{
			// 获取模块高度
			getElementHeight() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.submit').boundingClientRect(data => {
					this.$emit('height',data.height)
				}).exec()
			},
			// 切换语音
			record(){
				this.isRecord = !this.isRecord
			},
			emoji(){
				this.isEmoji = !this.isEmoji
				setTimeout( () => {
					this.getElementHeight()
				},0)
			},
			// 输入框获得焦点，把表情隐藏
			getfocus() {
				this.isEmoji = false
			},
			// 输入框输入数据,回车键发送
			sendInput(e) {
				console.log(e)
				let cont = e.detail.value
				if (cont.indexOf('\n') != -1 && cont.length >1){
					if(cont.split('\n').length -1 < 2) {  //无文字，纯换行
						this.sendMsg = cont
						this.$emit('sendContent',this.sendMsg)
						setTimeout( () => {
							this.sendMsg = ''
						},0)
					}
				}
			},
			// 接收选择的表情
			selectEmoji(e) {
				this.sendMsg = this.sendMsg + e
			},
			// 点击发送按钮发送消息
			send() {
				if(this.sendMsg.length > 0) {
					this.$emit('sendContent',this.sendMsg)
					setTimeout( () => {
						this.sendMsg = ''
					},0)
				}
			},
			// 删除按钮
			// substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。
			emojiDelete() {
				if(this.sendMsg.length > 0) {
					this.sendMsg = this.sendMsg.substring(0,this.sendMsg.length - 1)
				}
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
		.sent-btn{
			width: 280rpx;
			height: 80rpx;
			background-color: rgba(236,237,238,1);
			position: fixed;
			padding-top: 24rpx;
			bottom: 0;
			right: 0;
			display: flex;
			.send-btn-send{
				flex: 1;
				margin: 0 32rpx 0 20rpx;
				width: 100rpx;
				height: 60rpx;
				background: rgba(255,228,49,1);
				font-size: 32rpx;
				text-align: center;
				line-height: 60rpx;
				border-radius: 12rpx;
			}
			.send-btn-det{
				flex: 1;
				margin-left: 24rpx;
				height: 80rpx;
				// background: #fff;
				font-size: 32rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 12rpx;
				image{
					padding-top: 2rpx;
					width: 85rpx;
					height: 55rpx;
				}
			}
		}
	}

</style>