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
	}
}