<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/img/goback.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">ww</view>
			</view>
			<view class="top-bar-right">
				<view class="pice"></view>
				<view class="group-img">
					<image src="../../static/img/friend2.jpg"></image>
				</view>
			</view>
		</view>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true">
			 <view class="chat-main">
				 <view class="chat-ls" v-for="(item,index) in msgs" :key="index">
					 <view class="chat-time" v-if="item.time != ''">{{item.time}}</view>
					 <view class="msg-m msg-left" v-if="item.id != 'b'">
						 <image :src="item.img" class="user-img"></image>
						 <view class="message" v-if="item.types === 0">
							 <view class="msg-text">{{item.message}}</view>
						 </view>
						 <view class="message" v-if="item.types === 1">
						 	<image :src="item.msgImg" class="msg-img" mode="widthFix" @click="previewImg(item.msgImg)"></image>
						 </view>
					 </view>
					 <view class="msg-m msg-right" v-if="item.id == 'b'">
						 <image :src="item.img" class="user-img"></image>
						 <view class="message" v-if="item.types === 0">
						 	<view class="msg-text">{{item.message}}</view>
						 </view>
						 <view class="message" v-if="item.types === 1">
						 	<image :src="item.msgImg" class="msg-img" mode="widthFix" @click="previewImg(item.msgImg)"></image>
						 </view>
					 </view>
				 </view>
			 </view>
		</scroll-view>
	</view>
</template>

<script>
	import datas from "../../common/js/data.js"
	import convertTime from "../../common/js/convertTime.js"
	export default {
		data() {
			return {
				msgs:[],
				msgImg:[],
				oldTime:new Date()
			};
		},
		onLoad() {
			this.getMsg()
		},
		methods:{
			getMsg(){
				this.msgs = datas.message()
				this.msgs.map( (msg,index) => {
					msg.img = "../../static/img/"+msg.imgurl
					msg.time = convertTime.chartTime(msg.time)
					// 处理时间差
					if (index < this.msgs.length){
						let t = convertTime.spaceTime(this.oldTime,msg.time)
						if(t) {
							this.oldTime = t
						}
						msg.time = t
					}
					if(msg.types === 1){
						msg.msgImg = "../../static/img/"+msg.message
						this.msgImg.unshift(msg.msgImg)
					}
				})
				this.msgs.reverse()
			},
			// 预览图片
			previewImg(e){
				let index = 0
				this.msgImg.map((img,idx) => {
					if(img === e) {
						index = idx
					}
				})
				uni.previewImage({
					current:index,  //设置当前图片对应的索引
					urls: this.msgImg,
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
	page{
		height: 100%;
	}
	.top-bar{
		position: absolute;
		border-bottom: 1px solid $uni-border-color;
		.group-img{
			position: absolute;
			bottom: 10rpx;
			right: $uni-spacing-col-base;
			width: 68rpx;
			height: 68rpx;
			image{
				width: 68rpx;
				height: 68rpx;
			}
		}
	}
	.chat{
		height: 100%;
		.chat-main{
			padding-left: $uni-spacing-col-base;
			padding-right: $uni-spacing-col-base;
			padding-top: 100rpx;
			padding-bottom: 120rpx;
			display: flex;
			flex-direction: column;
		}
		.chat-ls{
			.chat-time{
				font-size: $uni-font-size-sm;
				color: rgba(39,40,50,0.3);
				line-height: 34rpx;
				padding: 20rpx 0;
				text-align: center;
			}
			.msg-m{
				display: flex;
				padding: 20rpx 0;
				.user-img{
					flex: none;
					width: $uni-img-size-sm;
					height: $uni-img-size-sm;
					border-radius: $uni-border-radius-base;
				}
				.message{
					flex: none;
					max-width: 480rpx;
				}
				.msg-text{
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 44rpx;
					padding: 18rpx 24rpx;
				}
				.msg-img{
					max-width: 400rpx;
					border-radius: $uni-border-radius-base;
				}
			}
			.msg-left{
				flex-direction: row;
				.msg-text{
					margin-left: 16rpx;
					background-color: #fff;
					border-radius: 0 20rpx 20rpx 20rpx;
				}
				.msg-img{
					margin-left: 16rpx;
				}
			}
			.msg-right{
				flex-direction: row-reverse;
				.msg-text{
					margin-right: 16rpx;
					background-color: #fff260;
					border-radius: 20rpx 0rpx 20rpx 20rpx;
				}
				.msg-img{
					margin-right: 16rpx;
				}
			}
		}
	}
</style>
