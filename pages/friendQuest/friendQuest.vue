<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/img/goback.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">好友请求</view>
			</view>
			<view class="top-bar-right">
				<view class="pice"></view>
			</view>
		</view>
		<view class="main">
			<view class="requester" v-for="(item,index) in requester" :key="index">
				<view class="request-top">
					<view class="reject btn">拒绝</view>
					<view class="header-img">
						<image :src="item.img"></image>
					</view>
					<view class="agree btn">同意</view>
				</view>
				<view class="request-center">
					<view class="title">{{item.name}}</view>
					<view class="time">{{item.time}}</view>
				</view>
				<view class="notice">
					<text>留言：</text>
					{{item.news}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../common/js/data.js"
	import convertTime from "../../common/js/convertTime.js"
	export default {
		data() {
			return {
				requester:[]
			};
		},
		onLoad() {
			this.getRequest()
		},
		methods:{
			getRequest() {
				this.requester = datas.friends()
				this.requester.map( friend => {
					friend.img = "../../static/img/"+friend.imgurl
					friend.time = convertTime.dateTime(friend.time)
				})
				console.log(this.requester)
			},
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
	
	.top-bar{
		background: rgba(255,255,255,0.96);
		border-bottom: 1px solid $uni-border-color;
	}
	.main{
		padding: 108rpx $uni-border-color;
		.requester{
			margin-top: 112rpx;
			padding: $uni-spacing-col-base;
			background: rgba(255,255,255,1);
			box-shadow: 0 24rpx 64rpx -8rpx rgba(0,0,0,0.1);
			border-radius: $uni-border-radius-base;
		}
		.request-top{
			display: flex;
			flex-direction: row;
			.btn{
				flex: auto;
				text-align: center;
				width: 160rpx;
				height: 64rpx;
				background: rgba(255,93,91,0.1);
				border-radius: 40rpx;
				font-size: $uni-font-size-lg;
				line-height: 64rpx;
			}
			.reject{
				color: $uni-color-warning;
				background-color: rgba(255,93,91,0.1);
			}
			.agree{
				color: $uni-color-warning;
				background-color: $uni-color-primary;
			}
			.header-img{
				margin-top: -104rpx;
				flex: auto;
				text-align: center;
				
				image{
					width: 144rpx;
					height: 144rpx;
					border-radius: 50%;
					background-color: $uni-color-primary;
				}
			}
		}
		.request-center{
			text-align: center;
			padding-top: 40rpx;
			padding-bottom: 40rpx;
			.title{
				font-size: 36rpx;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.time{
				font-size: $uni-font-size-sm;
				color: $uni-text-color-disable;
				line-height: 34rpx;
			}
		}
		.notice{
			padding: $uni-spacing-row-sm $uni-spacing-col-base;
			border-radius: $uni-border-radius-base;
			background-color: $uni-bg-color-grey;
			font-size: $uni-font-size-base;
			color: $uni-text-color;
			line-height: 40rpx;
		}
	}
</style>
