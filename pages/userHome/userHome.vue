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
		<view class="bottom-bar">
			<view class="bottom-btn">加为好友</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					name:"ww",
					nick:"冰西瓜",
					intr:"板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬，板砖垒代码搬搬搬搬板砖垒代码搬搬搬搬"
				}
			};
		},
		methods:{
			backHome(){
				uni.navigateTo({
					url:"../index/index"
				})
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
				z-index: 10;
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
</style>
