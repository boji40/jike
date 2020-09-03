<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-left" @click="backOne">
				<image src="../../static/img/goback.png" class="back-img"></image>
			</view>
			<view class="top-bar-center">
				<view class="title">详情</view>
			</view>
			<view class="top-bar-right pice"></view>
		</view>
		<view class="main">
			<view class="column heads">
				<view class="row head">
					<view class="title">头像</view>
					<view class="user-head">
						<image-cropper  :src="tempFilePath" @confirm="confirm" @cancel="cancel" ></image-cropper>
						<image :src="cropFilePath" @tap="upload"  class="user-img" ></image>
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">签名</view>
					<view class="cont">
						你就像夏天冰可乐里的气泡，咕噜咕噜咕噜，轻轻走进高温的阳光
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">注册</view>
					<view class="cont">
						2020-09-03
					</view>
				</view>
				
				<view class="row">
					<view class="title">昵称</view>
					<view class="cont">
						旺旺仙贝
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">性别</view>
					<view class="cont">
						<picker @change="bindPickerChange" :value="index" :range="sex">
							<view class="uni-input">{{sex[index]}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">生日</view>
					<view class="cont">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view class="uni-input">{{date}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">电话</view>
					<view class="cont">
						12356458585
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">邮箱</view>
					<view class="cont">
						59+484894sa
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="row">
					<view class="title">密码</view>
					<view class="cont">
						56465534
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="bt2">退出登录</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "../../components/ling-imgcropper/ling-imgcropper.vue";
	export default {
		 components: {ImageCropper},
		data() {
			const currentDate = this.getDate({
				format:true
			})
			return {
				cropFilePath:"../../static/img/girl.jpg",
				sex:['女','男','未知'],
				index:0,
				date:currentDate,
				tempFilePath: '',
				headimg:''
			};
		},
		computed:{
			startDate() {
				return this.getDate('start')
			},
			endDate() {
				return this.getDate('end')
			}
		},
		methods:{
			backOne(){
				uni.navigateBack({
					delta:1
				})
			},
			// 性别选择器
			bindPickerChange(e){
				this.index = e.target.value
			},
			// 日期选择器
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date()
				let year = date.getFullYear()
				let month = date.getMonth()+1
				let day = date.getDate()
				
				if(type === 'start') {
					year = year - 60
				} else if (type === 'end'){
					year = year + 2
				}
				month = month > 9 ? month : '0' + month
				day = day > 9 ? day : '0' +day
				return `${year}-${month}-${day}`
			},
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择或打开相机
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift()
					}
				});
			},
			confirm(e) {
				this.tempFilePath = '';
				this.cropFilePath = e.detail.tempFilePath;
				this.headimg=e.detail.tempFilePath;

				// #ifdef APP-PLUS||MP
				//除了H5端返回base64数据外，（APP-PLUS||MP就是APP和小程序就执行编译。）其他端都是返回临时地址，所以你要判断base64还是已上传文件名，
				//按我这里是先上传裁剪得来的临时文件地址然后得到已上传的文件名，
				//呆活你要判断是H5还是其他端传给后端类型参数让后端判断执行何种情况代码就OK了

				uni.uploadFile({url:'后端地址上传图片接口地址',
				  filePath: this.headimg,
							name: 'file',
							fileType:'image',
								//formData:{},传递参数
							 success: (uploadFileRes) => { 
								 var backstr= uploadFileRes.data;
			//自定义操作
							 },
							 complete() {
								//console.log("this is headimg"+this.headimg)   
							 },
							 fail(e) {
								console.log("this is errormes "+e.message)  
							 }

							 });

					// #endif
			},
			cancel() {
				console.log('canceled')
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
	.top-bar {
		background: rgba(255,255,255,0.96);
		border-bottom: 1px solid $uni-border-color;
	}
	.main {
		padding-top: 118rpx;
		display: flex;
		flex-direction: column;
		.column{
			display: flex;
			flex-direction: column;
			padding-top: 12rpx;
			width: 100%;
			border-bottom: 1px solid $uni-border-color;
			.row{
				display: flex;
				flex-direction: row;
			}
			.title{
				flex: none;
				padding: 0 $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 112rpx;
			}
			.head{
				height: 148rpx;
				display: flex;
				align-items: center;
			}
			.user-img{
				width: $uni-img-size-lg;
				height: $uni-img-size-lg;
				border-radius: $uni-border-radius-base;
			}
			.user-head{
				flex: auto;
			}
			.cont{
				flex: auto;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-grey;
				line-height: 112rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding-left: 16rpx;
			}
			.more {
				flex: none;
				height: 112rpx;
				display: flex;
				align-items: center;
				image {
					width: 80rpx;
					height: 28rpx;
				}
			}
		}
		.bt2{
			margin-top: 100rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
		}
	}

</style>
