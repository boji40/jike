export default {
	friends: function() {
		let friendarr = [
			{
				id:1,
				imgurl:"friend1.jpg",
				tip:2,
				name:"ww",
				time:new Date(),
				email:"456481@qq.com",
				news:"喜欢的人"
			},
			{
				id:2,
				imgurl:"beauty.jpg",
				tip:5,
				name:"小美女",
				time:new Date(),
				email:"sdeff7e6w@qq.com",
				news:"很重要的人，或者是很喜欢的人。"
			},
			{
				id:3,
				imgurl:"boy.jpg",
				tip:2,
				name:"小帅哥",
				time:new Date(),
				email:"4875125sda@qq.com",
				news:"如果你经常收到我推荐的音乐，一定不要有疑问，那说明你对于我来说是很重要的人，或者是很喜欢的人。"
			},
			{
				id:4,
				imgurl:"friend2.jpg",
				tip:3,
				name:"蔡徐坤",
				time:new Date(),
				email:"56489ds4f56sd@qq.com",
				news:"你对于我来说是很重要的人，很喜欢的人。"
			},
			{
				id:5,
				imgurl:"zhunji.jpg",
				tip:1,
				name:"李准基",
				time:new Date(),
				email:"fdskofd@163.com",
				news:"如果你经常收到我推荐的音乐，是很喜欢的人。"
			},
			{
				id:6,
				imgurl:"friend1.jpg",
				tip:0,
				name:"ww",
				time:new Date(),
				email:"sdfsdfwre@163.com",
				news:"喜欢的人"
			},
			{
				id:7,
				imgurl:"beauty.jpg",
				tip:5,
				name:"小美女",
				time:new Date(),
				email:"iuikiloiol@163.com",
				news:"很重要的人，或者是很喜欢的人。"
			},
			{
				id:8,
				imgurl:"boy.jpg",
				tip:2,
				name:"小帅哥",
				time:new Date(),
				email:"sdfew@163.com",
				news:"如果你经常收到我推荐的音乐，一定不要有疑问，那说明你对于我来说是很重要的人，或者是很喜欢的人。"
			},
			{
				id:9,
				imgurl:"friend2.jpg",
				tip:3,
				name:"蔡徐坤",
				time:new Date(),
				email:"fjeuwfhiwn@163.com",
				news:"你对于我来说是很重要的人，很喜欢的人。"
			},
			{
				id:10,
				imgurl:"zhunji.jpg",
				tip:1,
				name:"李准基",
				time:new Date(),
				email:"wehfuhwedkwe4545@163.com",
				news:"如果你经常收到我推荐的音乐，是很喜欢的人。"
			}
		];
		return friendarr
	},
	// 好友关系
	isFriend: function () {
		let friend = [
			{
				userId:1,
				friend:2
			},{
				userId:1,
				friend:5
			},{
				userId:1,
				friend:6
			},{
				userId:1,
				friend:8
			},
		]
		return friend
	},
	message: function() {
		let msg = [
			{
				id:'a',
				imgurl: 'beauty.jpg',
				message: '如果你经常收到我推荐的音乐，是很喜欢的人如果你经常收到我推荐的音乐，是很喜欢的人',
				types: 0,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000,
				tip:0
			},{
				id:'b',
				imgurl: 'friend2.jpg',
				message: '如果你经常收到我推荐的音乐',
				types: 0,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000*16,
				tip:1
			},{
				id:'a',
				imgurl: 'beauty.jpg',
				message: '如果',
				types: 0,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000*20,
				tip:2
			},{
				id:'b',
				imgurl: 'friend2.jpg',
				message: 'friend2.jpg',
				types: 1,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000*60*20,
				tip:4
			},{
				id:'b',
				imgurl: 'friend2.jpg',
				message: 'friend1.jpg',
				types: 1,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000*60*36,
				tip:5
			},{
				id:'a',
				imgurl: 'beauty.jpg',
				message: '如果你经常收到我推荐的音乐，是很喜欢的人如果你经常收到我推荐的音乐，是很喜欢的人',
				types: 0,   //0文字，1图片链接，2音频链接
				time:new Date() - 1000*58*60,
				tip:9
			}
		]
		return msg
	}
}