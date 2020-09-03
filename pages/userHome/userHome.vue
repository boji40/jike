<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @click="backHome">
				<image src="../../static/img/goback.png" class="back-img"></image>
			</view>
			<view class="top-bar-right">
				<view class="more-img">
					<image src="../../static/img/more.png"></image>
				</view>
			</view>
		</view>
		<view class="bg">
			<view class="bg-bai"></view>
			<image src="../../static/img/girl.jpg" class="bg-img" mode="aspectFill"></image>
		</view>
		<view class="main">
			<view class="user-header">
				<view class="sex">
					<image src="../../static/img/woman.png"></image>
				</view>
				<image src="../../static/img/girl.jpg" class="user-img"></image>
			</view>
			<view class="user-info">
				<view class="name">{{userInfo.name}}</view>
				<view class="nick">昵称：{{userInfo.nick}}</view>
				<view class="intr">{{userInfo.intr}}</view>
			</view>
		</view>
		<view class="bottom-bar" @click="addFriendAnimat">
			<view class="bottom-btn">加为好友</view>
		</view>
		<view class="add-misg" :style="{height:addHeight + 'px',bottom:- +addHeight + 'px'}" :animation="animationData">
			<view class="name">{{userInfo.name}}</view>
			<textarea :value="myname+'请求加为好友~'" maxlength="120" class="add-main"></textarea>
		</view>
		<view class="add-bt" :animation="animationData">
			<view class="close" @click="addFriendAnimat">取消</view>
			<view class="send">发送</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myname:"媛",
				addHeight:"",
				isAdd:false,
				animationData:{},
				animationData:{},
				userInfo:{
					name:"ww",
					nick:"冰西瓜",
					intr:"板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬板砖垒代码搬搬搬搬"
				}
			};
		},
		onReady() {
			this.getElementStyle()
		},
		methods:{
			backHome(){
				uni.navigateTo({
					url:"../index/index"
				})
			},
			getElementStyle() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.bg').boundingClientRect(data => {
					console.log(data)
					this.addHeight = data.height - 186
				}).exec()
			},
			// 添加好友动画
			addFriendAnimat() {
				this.isAdd = !this.isAdd
				let animation = uni.createAnimation({
					duration:300,
					timingFunction:"ease"
				})
				if(this.isAdd) {
					animation.bottom(0).step()
				} else {
					animation.bottom(-this.addHeight).step()
				}
				
				this.animationData = animation.export()
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
	
	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -100;
		.bg-img {
			position: absolute;
			left: -12rpx;
			top: -15rpx;
			width: 110%;
			height: 110%;
			filter: blur(28rpx);
		}
	}
	.main {
		text-align: center;
		padding-top: 148rpx;
		.user-header {
			margin: 0 auto;
			width: 412rpx;
			height: 412rpx;
			position: relative;
			.sex{
				z-index: 11;
				position: absolute;
				bottom: 12rpx;
				right: 22rpx;
				width: 64rpx;
				height: 64rpx;
				background: rgba(255,93,91,1);
				border-radius: $uni-border-radius-circle;
				image {
					padding: 16rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
			.user-img {
				z-index: 10;
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
				border: 6rpx solid rgba(255,255,255,1);
			}
		}
		.user-info{
			z-index: 200;
			padding-top: 42rpx;
			.name {
				font-size: 52rpx;
				color: $uni-text-color;
				line-height: 74rpx;
			}
			.nick {
				font-size: $uni-font-size-base;
				line-height: 40rpx;
				color: $uni-text-color;
			}
			.intr {
				padding: 20rpx 100rpx;
				font-size: $uni-font-size-base;
				font-size: 300;
				color: $uni-text-color;
				line-height: 48rpx;
			}
		}
	}
	.bottom-bar{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 104rpx;
		.bottom-btn {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			width: 684rpx;
			height: 80rpx;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
		}
	}
	.add-misg{
		position: fixed;
		// bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 0 56rpx;
		background: rgba(255,255,255,1);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		.name {
			padding: 168rpx 0 40rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}
		.add-main {
			padding: 18rpx 22rpx;
			width: 100%;
			box-sizing: border-box;
			height: 420rpx;
			background: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
	}
	.add-bt{
		position: absolute;
		z-index: 100;
		bottom: -104rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 12rpx $uni-spacing-col-base;
		height: 104rpx;
		display: flex;
		.send{
			margin-left: $uni-spacing-col-base;
			flex: auto;
			line-height: 80rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			height: 80rpx;
			background: $uni-color-primary;
			border-radius: $uni-border-radius-sm;
		}
		.close{
			width: 172rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			height: 80rpx;
			background: $uni-bg-color-hover;
			border-radius: $uni-border-radius-sm;
		}
	}
</style>
