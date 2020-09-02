<template>
	<view class="content">
		<view class="top-bar">
			<view class="search-div">
				<image src="../../static/img/search.png" class="search-img"></image>
				<input type="search" @input="search" placeholder="搜索用户/群" class="search" placeholder-style="color:#aaa;font-size:14px;font-weight:200"/>
			</view>
			<view class="top-bar-right" @click="backHome">
				<view class="text">取消</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title" v-if="searchResult.length >0">用户</view>
				<view class="list user" v-for="(item,index) in searchResult" :key="index">
					<image :src="item.img"></image>
					<view class="names">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
					</view>
					<view class="list-btn send" v-if="item.tip === 1">发消息</view>
					<view class="list-btn add" v-if="item.tip === 0">加好友</view>
				</view>
				
				<!-- <view class="list user">
					<image src="../../static/img/friend1.jpg"></image>
					<view class="names">
						<view class="name">大力出奇迹</view>
						<view class="email">dalichuqiji@163.com</view>
					</view>
					<view class="list-btn add">加好友</view>
				</view> -->
			</view>
			
		</view>
	</view>
</template>

<script>
	import datas from "../../common/js/data.js"
	export default {
		data() {
			return {
				searchResult:[],
			};
		},
		methods:{
			search(e) {
				this.searchResult = []
				let searchValue = e.detail.value
				if(searchValue.length > 0) {
					this.searchUser(searchValue)
				}
			},
			// 查找好友
			searchUser(e) {
				let arr = datas.friends()
				this.searchResult = arr.filter( users => (users.name.search(e) !== -1 || users.email.search(e) !== -1))
				this.searchResult.map( result => {
					this.isFriend(result)
					result.img = "../../static/img/"+result.imgurl
					result.name = result.name.replace(e,"<span style='color:#4AAAFF'>" + e + "</span>")
					result.email = result.email.replace(e,"<span style='color:#4AAAFF'>" + e + "</span>")
				})
				// console.log(this.searchResult)
				
			},
			// 判断是否为好友
			isFriend(e) {
				let tip = 0  //不是好友
				let arr = datas.isFriend()
				arr.map( ed => {
					if(ed.friend === e.id) {
						tip = 1  //是好友
					}
					e.tip = tip
				})
				
			},
			backHome(){
				console.log("111")
				uni.navigateTo({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
	
	.top-bar {
		.search-div {
			padding: 20rpx 118rpx 14rpx 32rpx;
			position: absolute;
			width: 600rpx;
			height: 60rpx;
		}
		.search {
			background: $uni-bg-color-grey;
			padding: 0 60rpx 0 12rpx;
			border-radius: 10rpx;
		}
		.top-bar-right{
			width: 100%;
			z-index: 100;
		}
		.search-img {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 130rpx;
			top: 24rpx;
		}
	}
	.result {
		padding-top: $uni-spacing-col-base;
		.title{
			font-size: 44rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 60rpx;
		}
		.list {
			width: 95%;
			height: 80rpx;
			padding: 20rpx;
			image {
				float: left;
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
		}
		.names {
			float: left;
			padding-left: $uni-spacing-col-base;
		}
		.name {
			font-size: 36rpx;
			color:$uni-text-color;
			line-height: 50rpx;
		}
		.email {
			font-size: $uni-font-size-sm;
			color: $uni-text-color;
			line-height: 28rpx;
		}
		.list-btn {
			float: right;
			width: 120rpx;
			height: 48rpx;
			border-radius: 24rpx;
			font-size: $uni-font-size-sm;
			line-height: 48rpx;
			margin-top: 16rpx;
			// margin-right: $uni-spacing-col-base;
			text-align: center;
		}
		.send{
			background: $uni-color-primary;
			color: $uni-text-color;
		}
		.add {
			background: rgba(74,170,255,0.1);
			color: $uni-color-success;
		}
	}
	
</style>
