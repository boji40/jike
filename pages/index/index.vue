<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/img/girl.jpg"></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/img/titlePic.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search"><image src="../../static/img/search.png"></image></view>
				<view class="add"><image src="../../static/img/add group.png"></image></view>
			</view>
		</view>
		<view class="main">
			<view class="apply">
				<view class="friends">
					<view class="friend-list">
						<view class="friend-list-l">
							<text class="tip">1</text>
							<image src="../../static/img/apply.jpg"></image>
						</view>
						<view class="friend-list-r">
							<view class="top">
								<view class="name">好友申请</view>
								<view class="time">15:43</view>
							</view>
							<view class="info">有新朋友来啦！</view>
						</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friend-list" v-for="(item,index) in friends" :key="index">
					<view class="friend-list-l">
						<text class="tip" v-if="item.tip > 0">{{item.tip}}</text>
						<image :src="item.img"></image>
					</view>
					<view class="friend-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{item.time}}</view>
						</view>
						<view class="info">{{item.news}}</view>
					</view>
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
				friends:[]
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			getFriends() {
				this.friends = datas.friends()
				this.friends.map( friend => {
					friend.img = "../../static/img/"+friend.imgurl
					friend.time = convertTime.dateTime(friend.time)
				})
				console.log(this.friends)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: var(--status-bar-height);
		padding-bottom: $uni-spacing-col-base;
	}
	.top-bar{
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		padding-top: var(--status-bar-height);
		background: $uni-bg-color;
		box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.top-bar-left{
			margin-left: 32rpx;
			image {
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}
		.top-bar-center {
			image{
				width: 88rpx;
				height: 42rpx;
			}
		}
		.top-bar-right {
			display: flex;
			image {
				width: 52rpx;
				height: 52rpx;
			}
			.add{
				margin: 0 32rpx 0 40rpx;
			}
		}
	}
	.main {
		padding-top: 104rpx;
		
		width: 95%
	}
	.friend-list {
		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;
		&:active {
			background-color: $uni-bg-color-grey;
		}
		.friend-list-l {
			position: relative;
			float: left;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius:$uni-border-radius-base;
			}
			.tip {
				position: absolute;
				z-index: 10;
				min-width: 20rpx;
				top: -8rpx;
				left: 68rpx;
				height: 36rpx;
				background: $uni-color-warning;
				padding: 0 6rpx;
				border-radius: 18rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend-list-r {
			padding-left: 128rpx;
			.top{
				height: 50rpx;
				.name {
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.time {
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
				}
			}
			.info {
				font-size: $uni-font-size-sm;
				color: $uni-text-color-disable;
				line-height: 40rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
