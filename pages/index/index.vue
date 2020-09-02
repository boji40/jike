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
				<view class="search" @click="goSearch"><image src="../../static/img/search.png"></image></view>
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
			},
			goSearch(){
				uni.navigateTo({
					url:"../search/search"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
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
