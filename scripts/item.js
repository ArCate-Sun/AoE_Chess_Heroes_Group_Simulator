obj={ 
    "斧奴": {
    name: "斧奴",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/斧奴.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "刺杀"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.8
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"天师": {
    name: "天师",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/天师.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "灵能者",
        "爆破"
    ],
    ability: {									// 技能
        description: "天师发出雷暴球，对路径上的敌人造成技能伤害，且减少被伤害的目标20点能量。",		// 技能描述
        damage: [150, 200, 250]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [36, 73, 146],			// 最小攻击
            max_damage: [44, 88, 176],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.1
        },
        defense: {								// 防御
            health: [400, 800, 1500],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"神枪手": {
    name: "神枪手",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/神枪手.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
    ],
    nature: [									// 连携
        "步兵",
        "狙击"
    ],
    ability: {									// 技能
        description: "神枪手提升自己的攻击力和攻击速度",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [34, 69, 138],			// 最小攻击
            max_damage: [38, 76, 153],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.0
        },
        defense: {								// 防御
            health: [400, 800, 1600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"军医": {
    name: "军医",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/军医.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "步兵",
        "支援"
    ],
    ability: {									// 技能
        description: "对小范围内的队友进行多次治疗。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [66, 133, 266],			// 最小攻击
            max_damage: [80, 160, 320],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [400, 800, 1500],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"鸟骑兵": {
    name: "鸟骑兵",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/鸟骑兵.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "骑兵",
        "狙击"
    ],
    ability: {									// 技能
        description: "鸟骑兵连续物理攻击达到一定次数后的下一次攻击将短暂蓄力发射强力弩，此次攻击必定暴击。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [41, 83, 166],			// 最小攻击
            max_damage: [46, 92, 184],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [400, 800, 1600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"维修机": {
    name: "维修机",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/维修机.jpg"
    ],
    feature: [									// 特征
        "团队辅助"
    ],
    nature: [									// 连携
        "空军",
        "支援"
    ],
    ability: {									// 技能
        description: "工程机持续强化一个距离自己最远的友军，大幅提升其攻击力，技能伤害和攻击速度，友军被强化期间每秒回复一定能量且不会死亡。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [83, 166, 333],			// 最小攻击
            max_damage: [100, 200, 400],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御(%)
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"铁狗": {
    name: "铁狗",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/铁狗.jpg"
    ],
    feature: [									// 特征
        "单体控制"     
    ],
    nature: [									// 连携
        "装甲",
        "爆破"
    ],
    ability: {									// 技能
        description: "铁狗在接下来的一段时间内同时使用机枪和导弹进行攻击，导弹造成伤害同时会造成短暂眩晕。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [32, 64, 128],			// 最小攻击
            max_damage: [39, 78, 157],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.0
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [5, 7, 9],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"眼虫": {
    name: "眼虫",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/眼虫.jpg"
    ],
    feature: [									// 特征
        "单体控制"
    ],
    nature: [									// 连携
        "异虫",
        "异能"
    ],
    ability: {									// 技能
        description: "附身一个敌人，使其无法行动，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [48, 96, 192],			// 最小攻击
            max_damage: [53, 107, 214],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [500, 1000, 1900],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"穿山甲": {
    name: "穿山甲",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/穿山甲.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "野兽",
        "刺杀"
    ],
    ability: {									// 技能
        description: "钻入地下后突袭敌人，造成技能伤害并击飞敌人。",		// 技能描述
        damage: [100, 200, 300]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [57, 115, 230],			// 最小攻击
            max_damage: [63, 126, 253],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"金刚": {
    name: "金刚",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/金刚.jpg",
    ],
    feature: [									// 特征
        "普攻伤害",
        "承受伤害"
    ],
    nature: [									// 连携
        "陆行者",
        "护卫"
    ],
    ability: {									// 技能
        description: "金刚爆掉自己的炎狱护甲，使自己附带吸血效果，并对周围圆形区域内的敌人造成技能伤害，且降低敌人的攻击速度",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [42, 85, 170],			// 最小攻击
            max_damage: [46, 93, 187],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [650, 1300, 2300],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"武僧熊猫": {
    name: "武僧熊猫",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/武僧熊猫.jpg"
    ],
    feature: [									// 特征
        "承受伤害"        
    ],
    nature: [									// 连携
        "傀熊猫",
        "先锋"
    ],
    ability: {									// 技能
        description: "武僧熊猫长啸一声，进入无式状态，普通攻击可以攻击到最多三个敌人，同时增加自身护甲值并嘲讽周围敌人。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [61, 123, 246],			// 最小攻击
            max_damage: [67, 135, 271],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.8
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"巨齿象": {
    name: "巨齿象",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/巨齿象.jpg"
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "野兽",
        "先锋"
    ],
    ability: {									// 技能
        description: "对单个敌人造成技能伤害并击飞",		// 技能描述
        damage: [100, 200, 300]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [34, 69, 139],			// 最小攻击
            max_damage: [58, 116, 232],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"真人": {
    name: "真人",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/真人.jpg"
    ],
    feature: [									// 特征
        "召唤生物"
    ],
    nature: [									// 连携
        "灵能者",
        "傀儡",
		"召唤",
    ],
    ability: {									// 技能
        description: "真人召唤一个侍卫的幻想来为其作战。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [41, 83, 167],			// 最小攻击
            max_damage: [46, 92, 185],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [500, 1000, 1900],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"童子": {
    name: "童子",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/童子.jpg"
    ],
    feature: [									// 特征
        "技能伤害",
    ],
    nature: [									// 连携
        "灵能者",
        "支援"
    ],
    ability: {									// 技能
        description: "童子的能量场为周围圆形区域内友方单位提供充能，使其获得能量恢复效果。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [40, 80, 160],			// 最小攻击
            max_damage: [45, 90, 180],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [500, 1000, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"灵鹫": {
    name: "灵鹫",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/灵鹫.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "海神",
        "刺杀"
    ],
    ability: {									// 技能
        description: "灵鹫发出特殊的音波，对周围圆形区域内的敌人造成技能伤害",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [96, 192, 385],			// 最小攻击
            max_damage: [105, 210, 420],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},



"剑奴": {
    name: "剑奴",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/剑奴.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "先锋"
    ],
    ability: {									// 技能
        description: "剑奴舞动双刀攻击敌人，对周围圆形区域内的敌人造成6次技能伤害，技能持续期间，剑奴免疫石化，眩晕和技能伤害。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [76, 153, 307],			// 最小攻击
            max_damage: [82, 165, 330],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [600, 1200, 2400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"空蟹": {
    name: "空蟹",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/空蟹.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "海神",
        "攻城"
    ],
    ability: {									// 技能
        description: "空蟹发射极光电影，对前方单体敌人造成技能伤害；每次释放技能后，将增加自身25%的攻速，最多可叠加3层。",		// 技能描述
        damage: [575, 825, 1075]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [46, 93, 187],			// 最小攻击
            max_damage: [51, 103, 206],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"铁猿": {
    name: "铁猿",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/铁猿.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "装甲",
        "爆破"
    ],
    ability: {									// 技能
        description: "铁猿放出弹幕，对目标区域小范围进行轰炸。",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [66, 133, 267],			// 最小攻击
            max_damage: [72, 291, 291],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [800, 1600, 3200],			// 生命
            Armor: [6, 8, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"火焰兵": {
    name: "火焰兵",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/火焰兵.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "步兵",
        "先锋"
    ],
    ability: {									// 技能
        description: "火焰兵对前方半径15，顶角135度范围内的敌人造成伤害，总共攻击4次",		// 技能描述
        damage: [120, 200, 280]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [70, 141, 283],			// 最小攻击
            max_damage: [82, 165, 330],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [600, 1200, 2400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"护盾兵": {
    name: "护盾兵",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/护盾兵.jpg",
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "步兵",
        "护卫"
    ],
    ability: {									// 技能
        description: "护盾兵启动反重力装置，快速跳跃到敌人面前，对敌人造成随机伤害和眩晕。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [30, 61, 123],			// 最小攻击
            max_damage: [84, 169, 338],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.0
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"爆裂虫": {
    name: "爆裂虫",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/爆裂虫.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "异虫",
        "爆破"
    ],
    ability: {									// 技能
        description: "死亡时周围圆形区域内的敌人造成技能伤害。",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [38, 83, 167],			// 最小攻击
            max_damage: [42, 92, 185],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [500, 1000, 1900],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"轰炸机": {
    name: "轰炸机",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/轰炸机.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "空军",
        "爆破"
    ],
    ability: {									// 技能
        description: "轰炸机对目标区域进行连续宏站，对半径7的圆形区域内造成对此伤害，轰炸期间提升自身50点护甲。",		// 技能描述
        damage: [350, 550, 850]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [28, 56, 112],			// 最小攻击
            max_damage: [35, 70, 141],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"蝙蝠": {
    name: "蝙蝠",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/蝙蝠.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "狙击"
    ],
    ability: {									// 技能
        description: "召唤小蝙蝠残影盘旋在敌人头顶，造成技能伤害同时减少其攻击速度，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [95, 210, 420],			// 最小攻击
            max_damage: [114, 252, 504],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.8
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],		// 技能防御（%）
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"猛毒兽": {
    name: "猛毒兽",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/猛毒兽.jpg",
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "野兽",
        "先锋"
    ],
    ability: {									// 技能
        description: "对敌人吐出腐蚀毒液，削减单个敌人护甲，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [87, 175, 350],			// 最小攻击
            max_damage: [125, 250, 500],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"藤妖": {
    name: "藤妖",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/藤妖.jpg",
    ],
    feature: [									// 特征
        "单体控制"
    ],
    nature: [									// 连携
        "不朽者",
        "异能"
    ],
    ability: {									// 技能
        description: "将根系扎入地下，召唤起能量藤蔓束缚单个敌人，造成多段技能伤害同时治疗自己，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [99, 198, 396],			// 最小攻击
            max_damage: [141, 283, 566],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [500, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"雷震子": {
    name: "雷震子",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/雷震子.jpg",
    ],
    feature: [									// 特征
        "普攻伤害",
        "后期carry"
    ],
    nature: [									// 连携
        "灵能者",
        "狙击"
    ],
    ability: {									// 技能
        description: "蕾站在撞击雷锤产生锁链电流，使其在周围的敌人之间弹射，每次弹射伤害衰减40%",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [61, 123, 246],			// 最小攻击
            max_damage: [73, 147, 295],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.6
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"刀奴": {
    name: "刀奴",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/刀奴.jpg",
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "先锋"
    ],
    ability: {									// 技能
        description: "刀奴普攻有10%的概率触发暴击伤害。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [75, 151, 300],			// 最小攻击
            max_damage: [97, 195, 390],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.6
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"电蛟": {
    name: "电蛟",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/电蛟.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "海神",
        "异能"
    ],
    ability: {									// 技能
        description: "电蛟对周围圆形区域内多名敌人进行电磁连线，造成2次技能伤害；敌人离电蛟越远，伤害越高。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [95, 190, 381],			// 最小攻击
            max_damage: [114, 229, 458],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"罗汉": {
    name: "罗汉",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/罗汉.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "陆行者",
        "狙击"
    ],
    ability: {									// 技能
        description: "罗汉引导自身晶核的能量到掌中，对前方敌人造成技能伤害。",		// 技能描述
        damage: [250, 450, 650]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [153, 306, 613],			// 最小攻击
            max_damage: [166, 332, 664],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.2
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"投石车": {
    name: "投石车",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/投石车.jpg",
    ],
    feature: [									// 特征
        "后期CARRY"
    ],
    nature: [									// 连携
        "装甲",
        "攻城"
    ],
    ability: {									// 技能
        description: "投石车架起，提升攻击速度，攻击变为范围攻击，可以攻击目标及其相邻的单位。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [41, 83, 166],			// 最小攻击
            max_damage: [50, 100, 200],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.0
        },
        defense: {								// 防御
            health: [800, 1600, 3200],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"摩托骑兵": {
    name: "摩托骑兵",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/摩托骑兵.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "骑兵",
        "爆破"
    ],
    ability: {									// 技能
        description: "摩托连续射出3发威力巨大的子弹，造成大量伤害。",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [46, 93, 187],			// 最小攻击
            max_damage: [51, 103, 206],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},





"特种兵": {
    name: "特种兵",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/特种兵.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "步兵",
        "狙击"
    ],
    ability: {									// 技能
        description: "特种兵经过短暂瞄准发出致命子弹，造成大量伤害",		// 技能描述
        damage: [400, 600, 800]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [97, 195, 390],			// 最小攻击
            max_damage: [127, 255, 510],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},



"勾魂使": {
    name: "勾魂使",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/勾魂使.jpg"
    ],
    feature: [									// 特征
        "技能伤害",
        "真实伤害"
    ],
    nature: [									// 连携
        "不朽者",
        "刺杀"
    ],
    ability: {									// 技能
        description: "勾魂使闪现至敌人身后，用弯刀对敌人进行一次处决，造成单次技能伤害",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [49, 198, 196],			// 最小攻击
            max_damage: [63, 126, 252],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.1
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"幽灵机": {
    name: "幽灵机",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/幽灵机.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "空军",
        "刺杀"
    ],
    ability: {									// 技能
        description: "幽灵机进入隐形状态，敌人无法对其进行攻击，隐形期间会逐渐恢复生命并增加攻速。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [55, 110, 220],			// 最小攻击
            max_damage: [66, 132, 264],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.1
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
},

"鬼狼": {
    name: "鬼狼",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/鬼狼.jpg"
    ],
    feature: [									// 特征
        "承受伤害",
        "召唤生物"
    ],
    nature: [									// 连携
        "野兽",
        "召唤"
    ],
    ability: {									// 技能
        description: "狼人释放自己真正的力量，提升自己生命值并召唤小狼。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [59, 154, 309],			// 最小攻击
            max_damage: [70, 185, 370],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"蜘蛛": {
    name: "蜘蛛",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/蜘蛛.jpg"
    ],
    feature: [									// 特征
        "单体控制"
    ],
    nature: [									// 连携
        "异虫",
        "异能"
    ],
    ability: {									// 技能
        description: "吐出带有魅惑毒液的蛛丝，随机选取一名敌人暂时变为己方单位，提升攻击力并获得短暂嘲讽。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [68, 137, 275],			// 最小攻击
            max_damage: [75, 151, 302],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.2
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},



"忍者熊猫": {
    name: "忍者熊猫",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/忍者熊猫.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "熊猫",
        "刺杀"
    ],
    ability: {									// 技能
        description: "扔出一个可以持续造成伤害的巨大飞镖，造成技能伤害，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [60, 120, 240],			// 最小攻击
            max_damage: [72, 144, 288],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"狂狮": {
    name: "狂狮",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/狂狮.jpg"
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "野兽",
        "护卫"
    ],
    ability: {									// 技能
        description: "对前方扇形内的多个敌人咆哮，石化他们并造成少量伤害同时减少他们攻击力，并赋予自身伤害反弹，持续一段时间。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [45, 91, 182],			// 最小攻击
            max_damage: [54, 109, 218],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"不死鸟": {
    name: "不死鸟",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/不死鸟.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "爆破"
    ],
    ability: {									// 技能
        description: "朝目标所在的矩形区域喷射不死烈焰，这些高温火焰会在目标区域造成多次伤害，持续一段时间。",		// 技能描述
        damage: [480, 700, 1120]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [71, 142, 285],			// 最小攻击
            max_damage: [81, 162, 325],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.6
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"盾奴": {
    name: "盾奴",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/盾奴.jpg"
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "护卫"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [101, 203, 406],			// 最小攻击
            max_damage: [110, 221, 443],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [1050, 2100, 4200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"血鹰": {
    name: "血鹰",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/血鹰.jpg"
    ],
    feature: [									// 特征
        "承受伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "野兽",
		"先锋"
    ],
    ability: {									// 技能
        description: "从空中降落到地面，落地过程中获得短暂无敌，生命值恢复至最大值并提升攻击力，由单词远程攻击变为三段近战攻击。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [75, 150, 300],			// 最小攻击
            max_damage: [90, 180, 360],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.3
        },
        defense: {								// 防御
            health: [950, 1900, 3800],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御(%)
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"翔龙": {
    name: "翔龙",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/翔龙.jpg"
    ],
    feature: [									// 特征
        "技能伤害",
        "群体控制"
    ],
    nature: [									// 连携
        "陆行者",
        "攻城"
    ],
    ability: {									// 技能
        description: "翔龙召唤龙卷风，被龙卷风命中的敌人将受到技能伤害，并击飞，落地后产生额外的眩晕效果。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [85, 170, 340],			// 最小攻击
            max_damage: [102, 204, 408],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [10, 10, 10],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"须弥鲨": {
    name: "须弥鲨",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/须弥鲨.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "海神",
		"召唤"
    ],
    ability: {									// 技能
        description: "须弥鲨召唤神国之门，盾奴从神国之门穿越为须弥鲨二战。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [88, 176, 353],			// 最小攻击
            max_damage: [106, 212, 424],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.2
        },
        defense: {								// 防御
            health: [800, 1600, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"棍奴": {
    name: "棍奴",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/棍奴.jpg"
    ],
    feature: [									// 特征
        "后期CARRY"
    ],
    nature: [									// 连携
        "傀儡",
        "先锋"
    ],
    ability: {									// 技能
        description: "当棍奴持续攻击同一个目标时，将会获得额外的攻速加成，且加成效果达到10层是，棍奴会切换攻击动作；一旦棍奴改变了攻击目标，攻速加成效果将被清除。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [98, 196, 392],			// 最小攻击
            max_damage: [109, 218, 436],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [900, 1800, 3600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"投弹手": {
    name: "投弹手",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/投弹手.jpg"
    ],
    feature: [									// 特征
        "群体控制"
    ],
    nature: [									// 连携
        "步兵",
        "异能"
    ],
    ability: {									// 技能
        description: "投弹手扔出手榴弹造成一片磁暴区域，区域内的敌人会持续受到伤害并无法使用手动技能。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [45, 90, 180],			// 最小攻击
            max_damage: [50, 100, 200],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.5
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},


"铁鸡": {
    name: "铁鸡",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/铁鸡.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "装甲",
        "刺杀"
    ],
    ability: {									// 技能
        description: "强袭铁鸡展庇护屏障，增加一定的攻击力和防御力",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [90, 180, 323],			// 最小攻击
            max_damage: [110, 220, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"方舟": {
    name: "方舟",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/方舟.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "空军",
        "攻城"
    ],
    ability: {									// 技能
        description: "聚能方舟指挥机群轰炸指定区域，对路径上的敌人造成伤害",		// 技能描述
        damage: [300, 450, 600]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [30, 61, 122],			// 最小攻击
            max_damage: [34, 68, 137],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.2
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"长生鹿": {
    name: "长生鹿",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/长生鹿.jpg"
    ],
    feature: [									// 特征
        "团队辅助"
    ],
    nature: [									// 连携
        "野兽",
        "支援"
    ],
    ability: {									// 技能
        description: "发射一道蕴含了声明能量涉嫌，连接多位队友同时治疗他们",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [79, 183, 316],			// 最小攻击
            max_damage: [95, 220, 380],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.8
        },
        defense: {								// 防御
            health: [850, 1700, 3400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"杀人蜂": {
    name: "杀人蜂",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/杀人蜂.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "异虫",
        "狙击"
    ],
    ability: {									// 技能
        description: "喷射出幼虫在周围敌人造成两次技能伤害，两次伤害一致，效果范围分为外环和内环。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [29, 59, 118],			// 最小攻击
            max_damage: [33, 67, 135],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.3
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"骨龙": {
    name: "骨龙",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/骨龙.jpg"
    ],
    feature: [									// 特征
        "群体控制"
    ],
    nature: [									// 连携
        "猛禽",
        "不朽者",
		"攻城"
    ],
    ability: {									// 技能
        description: "吐出一枚巨大的骨球，对目标圆形区域内的敌人造成技能伤害并眩晕。",		// 技能描述
        damage: [150, 250, 350]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [117, 235, 471],			// 最小攻击
            max_damage: [141, 282, 565],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.2
        },
        defense: {								// 防御
            health: [950, 1900, 3800],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"禅师熊猫": {
    name: "禅师熊猫",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/禅师熊猫.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "熊猫",
        "异能"
    ],
    ability: {									// 技能
        description: "禅师展示出真正的气功力量，在前方凝聚出一个巨大的秘法球，对秘法球周遭的单位造成技能伤害并减少其能量。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [56, 112, 224],			// 最小攻击
            max_damage: [63, 133, 252],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [850, 1700, 3400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
},

"幻鲸": {
    name: "幻鲸",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/幻鲸.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "海神",
        "攻城"
    ],
    ability: {									// 技能
        description: "幻鲸在前方区域召唤虚无的幻象，每秒对周围圆形区域内的敌人造成技能伤害。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [63, 126, 252],			// 最小攻击
            max_damage: [77, 154, 308],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 2.0
        },
        defense: {								// 防御
            health: [1000, 2000, 4000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [40, 40, 40],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
},


"铁巨神": {
    name: "铁巨神",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/铁巨神.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "装甲",
        "爆破"
    ],
    ability: {									// 技能
        description: "铁巨神使用主炮攻击，对范围内敌人造成多次伤害。",		// 技能描述
        damage: [400, 600, 800]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [100, 200, 400],			// 最小攻击
            max_damage: [105, 213, 480],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.8
        },
        defense: {								// 防御
            health: [900, 1800, 3600],			// 生命
            Armor: [15, 15, 15],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
},

"飞天蛤蟆": {
    name: "飞天蛤蟆",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/飞天蛤蟆.jpg"
    ],
    feature: [									// 特征
        "技能伤害",
        "单体控制"
    ],
    nature: [									// 连携
        "猛禽",
        "异能"
    ],
    ability: {									// 技能
        description: "随机对一名敌人尝试吞食，弱小的敌人将会被直接吃掉。",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [48, 96, 192],			// 最小攻击
            max_damage: [58, 117, 234],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.6
        },
        defense: {								// 防御
            health: [1000, 2000, 4000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [40, 40, 40],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
},

"树妖": {
    name: "树妖",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/树妖.jpg"
    ],
    feature: [									// 特征
        "群体控制"
    ],
    nature: [									// 连携
        "不朽者",
        "先锋"
    ],
    ability: {									// 技能
        description: "对周围圆形范围内的敌人造成技能伤害，并击飞他们。",		// 技能描述
        damage: [150, 250, 350]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [40, 81, 162],			// 最小攻击
            max_damage: [49, 99, 198],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [950, 1900, 3800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
},

"玄龟":{
    name: "玄龟",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/玄龟.jpg"
    ],
    feature: [									// 特征
        "后期CARRY"
    ],
    nature: [									// 连携
        "灵能者",
        "护卫"
    ],
    ability: {									// 技能
        description: "若释放技能时我方存货人数小于等于敌方存活人数，玄龟将缩进龟壳，失去攻击能力，增加护甲和技能防御，免疫眩晕、石化、魅惑，同事嘲讽所有敌方目标；若我方存活人数大于敌方，龟壳将从玄龟身上脱落，变成幼龟形态，往前喷射水柱，并降低自己的护甲。",		// 技能描述
        damage: [150, 250, 350]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [34, 68, 137],			// 最小攻击
            max_damage: [45, 91, 182],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
            speed: 1.7
        },
        defense: {								// 防御
            health: [1500, 2600, 4500],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [20, 20, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
}
}
