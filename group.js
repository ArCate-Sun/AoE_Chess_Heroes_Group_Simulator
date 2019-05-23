// structure
// group: {
//     name: string;
//     type: string;
//     image: string;
//     feature: string;
//     description: string;
//     rule: {
//         need: number;
//         effect: string;
//     }[];
// }

let bu_bing = {
	name: "步兵",						// 名称
	type: "blue",						// 类型
	image: "image/group/bu_bing.jpg",	// 图片
	feature: "凌霸",					// 特性
	description: "需要己方场上有至少[n]个不同的步兵英雄才能激活效果.",		// 描述
	rule: [								// 规则
		{
			need: 2,					// 需要英雄数量
			effect: "敌方的护甲-3"			// 效果
		}, {
			need: 4,
			effect: "敌方的护甲-6"
		}, {
			need: 6,
			effect: "敌方的护甲-9"
		}
	]
};

let qi_bing = {
	name: "骑兵",
	type: "blue",
	image: "image/group/qi_bing.jpg",
	feature: "气弱",
	description: "需要己方场上有至少[n]个不同的骑兵英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "敌方全体能量回复-5"
		}
	]
};

let zhuang_jia = {
	name: "装甲",
	type: "blue",
	image: "image/group/zhuang_jia.jpg",
	feature: "自我修复",
	description: "需要己方场上有至少[n]个不同的装甲英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军装甲的生命恢复+15"
		}, 
		{
			need: 4,
			effect: "友军装甲的生命恢复+35"
		}
	]
};

let kong_jun = {
	name: "空军",
	type: "blue",
	image: "image/group/kong_jun.jpg",
	feature: "战术规避",
	description: "需要己方场上有至少[n]个不同的空军英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军空中单位的闪避+15%"
		}, 
		{
			need: 4,
			effect: "友军空中单位的闪避+20%"
		}
	]
};

let kui_lei = {
	name: "傀儡",
	type: "blue",
	image: "image/group/kui_lei.jpg",
	feature: "视死如归",
	description: "需要己方场上有至少[n]个不同的傀儡英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军傀儡的攻击力+10%"
		}, 
		{
			need: 4,
			effect: "友军傀儡的攻击力+15%"
		}, 
		{
			need: 6,
			effect: "友军的攻击力+20%"
		}
	]
};

let ling_neng_zhe = {
	name: "灵能者",
	type: "blue",
	image: "image/group/ling_neng_zhe.jpg",
	feature: "反制",
	description: "需要己方场上有至少[n]个不同的灵能者英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军受到伤害时反弹15点伤害"
		}, 
		{
			need: 4,
			effect: "友军受到伤害时反弹35点伤害"
		}
	]
};

let lu_xing_zhe = {
	name: "陆行者",
	type: "blue",
	image: "image/group/lu_xing_zhe.jpg",
	feature: "孤王",
	description: "需要己方场上有唯一种类的陆行者英雄才能激活效果.",
	rule: [
		{
			need: 1,
			effect: "陆行者的攻击变为真实伤害"
		}
	]
};

let hai_shen = {
	name: "海神",
	type: "blue",
	image: "image/group/hai_shen.jpg",
	feature: "进化顶点",
	description: "需要己方场上有至少[n]个不同的海神英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军空中单位造成伤害后当前能量+8%"
		},
		{
			need: 4,
			effect: "友军空中单位造成伤害后当前能量+12%"
		}
	]
};

let ye_shou = {
	name: "野兽",
	type: "blue",
	image: "image/group/ye_shou.jpg",
	feature: "嗜血本能",
	description: "需要己方场上有至少[n]个不同的野兽英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军野兽攻击速度+15%"
		},
		{
			need: 4,
			effect: "全体友军攻击速度+20%"
		},
		{
			need: 6,
			effect: "全体友军攻击速度+30%"
		}
	]
};

let meng_qin = {
	name: "猛禽",
	type: "blue",
	image: "image/group/meng_qin.jpg",
	feature: "居高临下",
	description: "需要己方场上有至少[n]个不同的猛禽英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军空中单位攻击地面单位时, 攻击力+15%"
		},
		{
			need: 4,
			effect: "友军空中单位攻击地面单位时, 攻击力+20%"
		}
	]
};

let yi_chong = {
	name: "异虫",
	type: "blue",
	image: "image/group/yi_chong.jpg",
	feature: "居高临下",
	description: "需要己方场上有至少[n]个不同的异虫英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "场上有2个相同的1星异虫就可以合成一个2星异虫"
		},
		{
			need: 4,
			effect: "场上有2个相同的2星异虫就可以合成一个3星异虫"
		}
	]
};

let bu_xiu_zhe = {
	name: "不朽者",
	type: "blue",
	image: "image/group/bu_xiu_zhe.jpg",
	feature: "血精",
	description: "需要己方场上有至少[n]个不同的不朽者英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军不朽者死亡后可以继续战斗4秒"
		},
		{
			need: 3,
			effect: "友军不朽者死亡后可以继续战斗6秒"
		}
	]
};

let xiong_mao = {
	name: "熊猫",
	type: "blue",
	image: "image/group/xiong_mao.jpg",
	feature: "恩返",
	description: "需要己方场上有至少[n]个不同的熊猫英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "友军熊猫开战后直接满能量"
		}
	]
};

let hu_wei = {
	name: "护卫",
	type: "green",
	image: "image/group/hu_wei.jpg",
	feature: "信仰之力",
	description: "需要己方场上有至少[n]个不同的护卫英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军护卫额外获得250护盾"
		},
		{
			need: 4,
			effect: "友军护卫额外获得350护盾"
		}
	]
};

let bao_po = {
	name: "爆破",
	type: "green",
	image: "image/group/bao_po.jpg",
	feature: "爆炸艺术",
	description: "需要己方场上有至少[n]个不同的爆破英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "敌军技能防御-15"
		},
		{
			need: 6,
			effect: "敌军技能防御-25"
		}
	]
};

let zhi_yuan = {
	name: "支援",
	type: "green",
	image: "image/group/zhi_yuan.jpg",
	feature: "庇护",
	description: "需要己方场上有至少[n]个不同的支援英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军支援死亡时所有队友立刻恢复生命200点, 恢复能量10点"
		},
		{
			need: 4,
			effect: "友军支援死亡时所有队友立刻恢复生命300点, 恢复能量10点"
		}
	]
};

let ju_ji = {
	name: "狙击",
	type: "green",
	image: "image/group/ju_ji.jpg",
	feature: "阴霸",
	description: "需要己方场上有至少[n]个不同的狙击英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "友军狙击护甲削弱+4"
		},
		{
			need: 6,
			effect: "友军狙击护甲削弱+8"
		}
	]
};

let gong_cheng = {
	name: "攻城",
	type: "green",
	image: "image/group/gong_cheng.jpg",
	feature: "穿甲",
	description: "需要己方场上有至少[n]个不同的攻城英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "友军全体攻击敌军装甲/空军/傀儡/海神/异虫/不朽者时, 伤害+25%"
		},
		{
			need: 6,
			effect: "友军全体攻击敌军装甲/空军/傀儡/海神/异虫/不朽者时, 伤害+25%"
		}
	]
};

let yi_neng = {
	name: "异能",
	type: "green",
	image: "image/group/yi_neng.jpg",
	feature: "掠食",
	description: "需要己方场上有至少[n]个不同的异能英雄才能激活效果.",
	rule: [
		{
			need: 2,
			effect: "友军全体吸血+5%"
		},
		{
			need: 4,
			effect: "友军全体吸血+5%"
		},
		{
			need: 6,
			effect: "友军全体吸血+10%"
		}
	]
};

let ci_sha = {
	name: "刺杀",
	type: "green",
	image: "image/group/ci_sha.jpg",
	feature: "会心",
	description: "需要己方场上有至少[n]个不同的刺杀英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "友军刺杀在普攻时有10%几率产生4.5倍暴击"
		},
		{
			need: 6,
			effect: "友军刺杀在普攻时有10%几率产生4.5倍暴击"
		}
	]
};

let zhao_huan = {
	name: "召唤",
	type: "green",
	image: "image/group/zhao_huan.jpg",
	feature: "顺势",
	description: "需要己方场上有至少[n]个不同的召唤英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "全体友军技能防御+30"
		}
	]
};

let xian_feng = {
	name: "先锋",
	type: "green",
	image: "image/group/xian_feng.jpg",
	feature: "鏖战",
	description: "需要己方场上有至少[n]个不同的先锋英雄才能激活效果.",
	rule: [
		{
			need: 3,
			effect: "友军先锋的护甲+6"
		},
		{
			need: 6,
			effect: "友军先锋的护甲+8"
		}
	]
};

let group = [
	bu_bing,
	qi_bing,
	zhuang_jia,
	kong_jun,
	kui_lei,
	ling_neng_zhe,
	lu_xing_zhe,
	hai_shen,
	ye_shou,
	meng_qin,
	yi_chong,
	bu_xiu_zhe,
	xiong_mao,

	hu_wei,
	bao_po,
	zhi_yuan,
	ju_ji,
	gong_cheng,
	yi_neng,
	ci_sha,
	zhao_huan,
	xian_feng
];