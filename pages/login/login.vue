<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" v-if="signup" @click="backToLogin">
				<image src="../../static/img/goback.png" v-if="signup"></image>
			</view>
			<view class="top-bar-right">
				<view class="text" @click="signUp" v-if="loginStatus">注册</view>
				<image src="../../static/img/close.png" v-if="signup" @click="backToLogin"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/img/logo.png"></image>
		</view>
		<view class="main">
			<view class="title" v-if="loginStatus">登录</view>
			<view class="title" v-if="signup">注册</view>
			<view class="slogan" v-if="loginStatus">欢迎登陆我的小小秘密花园~~</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" class="user" v-model="userInfo.user" placeholder="用户名" placeholder-style="color:#aaa;font-weight:400" />
					<view class="userTips" @blur="userProp" v-if="signup">{{userError}}</view>
				</view>
				<view class="inputs-div">
					<input type="text" class="user" v-model="userInfo.email" v-if="signup" placeholder="邮箱" placeholder-style="color:#aaa;font-weight:400" @blur="isEmail"/>
					<view class="userTips" v-if="signup">{{emailError}}</view>
				</view>
				<view class="inputs-div">
					<input type="password" class="pwd" @blur="checkPwd" v-model="userInfo.password" placeholder="密码" placeholder-style="color:#aaa;font-weight:400"/>
					<view class="userTips" v-if="signup">{{pwdError}}</view>
				</view>
				<view class="inputs-div" v-if="signup">
					<input type="password" class="pwd" @blur="checkPwdAgain" placeholder="再次输入密码" v-model="userInfo.checkPasw" placeholder-style="color:#aaa;font-weight:400"/>
					<view class="userTips">{{checkPwdError}}</view>
				</view>
			</view>
			<view class="tips" v-if="loginStatus">{{loginError}}</view>
		</view>
		<view class="submit" v-if="loginStatus" @click="login">登录</view>
		<view class="submit" v-if="signup" @click="register">注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				signup:false,
				loginStatus: true,
				userInfo: {
					user:"",
					email:"",
					password:"",
					checkPasw:""
				},
				userError: "",
				emailError: "",
				pwdError: "",
				checkPwdError: "",
				loginError: ""
				
			}
		},
		methods: {
			signUp() {
				this.signup = true
				this.loginStatus = false
			},
			backToLogin(){
				this.signup = false
				this.loginStatus = true
				this.clearRes()
			},
			// 清空注册页校验
			clearRes() {
				for(let i in this.userInfo) {
					console.log(this.userInfo[i])
					this.userInfo[i] = ""
				}
				this.userError = "" 
				this.emailError = ""
				this.pwdError = ""
				this.checkPwdError = ""
			},
			// 判断用户是否被占用
			userProp() {
				
			},
			// 判断是否是邮箱
			isEmail(){
				console.log(this.userInfo.email)
				let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
				if(this.userInfo.email !== "") {
					if(!reg.test(this.userInfo.email)){
						this.emailError = "请输入正确格式的邮箱"
					} else {
						this.emailError = ""
					}
				}else {
					this.emailError = ""
				}
			},
			// 校验密码
			checkPwd() {
				let reg = /^[0-9A-Za-z]+$/
				if(this.userInfo.password !== "") {
					if(!reg.test(this.userInfo.password)){
							this.pwdError = "密码由数字、字母组成"
						} else {
							this.pwdError = ""
						}
					}else {
						this.pwdError = ""
					}
				},
				// 再次校验密码
				checkPwdAgain() {
					if(this.userInfo.password !== this.userInfo.checkPasw) {
						this.checkPwdError = "两次输入密码不一致"
					} else {
						this.checkPwdError = ""
					}
				},
				// 登录
				login() {
					if (this.userInfo.user !== "" && this.userInfo.password !== "" && this.loginError == "") {
						// console.log("登录")
						uni.navigateTo({
							url:"../index/index"
						})
					}
				},
				// 注册
				register() {
					let arr = []
					if(this.userError === "" && this.emailError === "" && this.pwdError === "" && this.checkPwdError === "") { //可注册
						arr = Object.values(this.userInfo)
						if(arr.indexOf("") === -1) {
							console.log("完整，可跳转页面，注册成功")
						}
					}
				}
				
			}
		}
</script>

<style lang="scss">
	@import "../../common/css/myscc.scss";
		.top-bar-right {
			width: 100%;
		}
	.logo {
		image {
			padding-top: 256rpx;
			width: 192rpx;
			height: 92rpx;
			margin: 0 auto;
		}
	}
	.main {
		padding: 54rpx $uni-spacing-row-lg 120rpx;
		width: 75%;
		.title {
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
		}
		.slogan {
			font-size: 40rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}
		.inputs {
			padding-top: 8rpx;
			input{
				// padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1px solid $uni-border-color;
			}
		}
		.userTips {
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
		}
		.tips{
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;
		}
		
	}
	.submit {
		width: 520rpx;
		height: 96rpx;
		background: $uni-color-primary;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255,288,49,0.4);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}
</style>
