<template>
	<view class="content">
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
				
				<view class="row" @click="modify('签名',dataArr.sign,false)">
					<view class="title">签名</view>
					<view class="cont">
						{{dataArr.sign}}
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">注册</view>
					<view class="cont">
						{{changeTime(dataArr.register)}}
					</view>
				</view>
				
				<view class="row" @click="modify('昵称',dataArr.name,false)">
					<view class="title">昵称</view>
					<view class="cont">
						{{dataArr.name}}
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
						{{dataArr.tell}}
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				
				<view class="row">
					<view class="title">邮箱</view>
					<view class="cont">
						{{dataArr.email}}
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="row" @click="modify('密码',dataArr.pwd,true)">
					<view class="title">密码</view>
					<view class="cont">
						{{dataArr.pwd}}
					</view>
					<view class="more">
						<image src="../../static/img/leftmore.png" mode="aspectFill"></image>
					</view>
				</view>
			</view>
			<view class="bt2">退出登录</view>
		</view>
		<view class="modify" :style="{bottom: -+widHeight + 'px'}" :animation="animationData">
			<view class="modify-header">
				<view class="close" @click="modify">取消</view>
				<view class="title">签名</view>
				<view class="define" @click="modifyConfirm">确定</view>
			</view>
			<view class="modify-main">
				<input type="text" v-model="pwd" v-if="ispwd" class="modify-pwd" placeholder="旧密码" placeholder-style="color:#aaa;font-size:14px;font-weight:200" />
				<textarea v-model="data" class="modify-content"></textarea>
			</view>
		</view>
	</view>
</template>

<script>
	import ImageCropper from "../../components/ling-imgcropper/ling-imgcropper.vue";
	import timeProcess from "../../common/js/convertTime.js"
	export default {
		 components: {ImageCropper},
		data() {
			const currentDate = this.getDate({
				format:true
			})
			return {
				dataArr:{
					name:"ww",
					sign:"你就像夏天冰可乐里的气泡，咕噜咕噜咕噜，轻轻走进高温的阳光",
					register:new Date(),
					sex:"男",
					birth:"1998-02-01",
					tell:"45689942455",
					pwd:"123456",
					email:"123456@163.com"
				},
				cropFilePath:"../../static/img/girl.jpg",
				sex:['女','男','未知'],
				index:0,
				date:currentDate,
				tempFilePath: '',
				headimg:'',
				data:'修改内容',
				animationData:{},
				isModify:false,
				widHeight:"",
				pwd:"",
				modifyTitle:"",
				ispwd:false, //是否显示密码框
				
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
		onReady() {
			this.getElementStyle()
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
			},
			// 获取页面高度
			getElementStyle() {
				const query = uni.createSelectorQuery().in(this)
				query.select('.modify').boundingClientRect(data => {
					// console.log(data)
					this.widHeight = data.height
				}).exec()
			},
			// 修改项弹窗
			modify(type,data,ispwd) {
				this.ispwd = ispwd
				this.modifyTitle = type
				this.data = data
				this.isModify = !this.isModify
				let animation = uni.createAnimation({
					duration:300,
					timingFunction:"ease"
				})
				if(this.isModify) {
					animation.bottom(0).step()
				} else {
					animation.bottom(-this.widHeight).step()
				}
				
				this.animationData = animation.export()
			},
			// 修改确定
			modifyConfirm() {
				this.modify()
			},
			// 时间处理
			changeTime(date){
				return timeProcess.detailTime(date)
			},
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
	.modify {
		position: fixed;
		z-index: 1002;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: #fff;
		.modify-header{
			width: 100%;
			height: 88rpx;
			padding-top: var(--status-bar-height);
			display: flex;
			flex-direction: row;
			align-items: center;
			.close{
				padding-left: 32rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
			.title{
				flex: auto;
				text-align: center;
				font-size: 40rpx;
				color: $uni-text-color;
				line-height: 88rpx;
			}
			.define{
				padding-right: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				color: $uni-color-success;
				line-height: 44rpx;
			}
			
		}
		.modify-main{
			display: flex;
			padding: $uni-spacing-col-base;
			flex-direction: column;
			.modify-pwd {
				margin-bottom: $uni-spacing-col-base;
				padding: 0 20rpx;
				box-sizing: border-box;
				width: 100%;
				height: 88rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 88rpx;
			}
			.modify-content{
				box-sizing: border-box;
				width: 100%;
				flex: auto;
				height: 386rpx;
				background: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				padding: 18rpx 22rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 44rpx;
			}
		}
		
	}

</style>
