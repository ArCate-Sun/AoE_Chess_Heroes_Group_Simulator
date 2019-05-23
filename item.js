let fu_nu = {
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
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let tong_zi = {
    name: "童子",								// 名称
    cost: 1,									// 花费
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
        },
        defense: {								// 防御
            health: [500, 1000, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let tian_shi = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [400, 800, 1500],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let shen_qiang_shou = {
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
        },
        defense: {								// 防御
            health: [400, 800, 1600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let jun_yi = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [400, 800, 1500],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let niao_qi_bing = {
    name: "鸟骑兵",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/鸟骑兵.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "骑兵",
        "狙击"
    ],
    ability: {									// 技能
        description: "鸟骑兵强化自己，提升攻击力",		// 技能描述
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
        },
        defense: {								// 防御
            health: [400, 800, 1600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let tie_gou = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let yan_chong = {
    name: "眼虫",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/眼虫.jpg"
    ],
    feature: [									// 特征
        "普攻伤害",
        "技能伤害"
    ],
    nature: [									// 连携
        "异虫",
        "异能"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [500, 1000, 1900],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let chuan_shan_jia = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let wu_seng_panda= {
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
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let ju_chi_xiang = {
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
            min_damage: [34, 161, 323],			// 最小攻击
            max_damage: [58, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let zhen_ren = {
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
        "傀儡"，
		"召唤",
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
        },
        defense: {								// 防御
            health: [500, 1000, 1900],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let ling_jiu = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [96, 161, 323],			// 最小攻击
            max_damage: [105, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let lei_zhen_zi = {
    name: "雷震子",								// 名称
    cost: 2,									// 花费
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
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let jin_gang = {
    name: "金刚",								// 名称
    cost: 2,									// 花费
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 180],			// 最小攻击
            max_damage: [113, 226, 270],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [650, 1300, 2300],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let jian_nu = {
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
        },
        defense: {								// 防御
            health: [600, 1200, 2400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let kong_xie = {
    name: "空蟹",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/雷震子.jpg",
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "海神",
        "攻城"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [575, 825, 1075]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let tie_yuan = {
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
            min_damage: [80, 161, 267],			// 最小攻击
            max_damage: [113, 226, 291],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [800, 1600, 3200],			// 生命
            Armor: [6, 8, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let fire_bing = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [120, 200, 280]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [600, 1200, 2400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let hu_dun_bing = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [30, 61, 123],			// 最小攻击
            max_damage: [84, 169, 328],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let bao_lie_chong = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [0, 0, 0],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let meng_du_shou = {
    name: "猛毒兽",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/猛毒兽.jpg",
    ],
    feature: [									// 特征
        "普攻伤害",
        "后期carry"
    ],
    nature: [									// 连携
        "野兽",
        "先锋"
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
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let lei_zhen_zi = {
    name: "雷震子",								// 名称
    cost: 2,									// 花费
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
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let teng_yao = {
    name: "藤妖",								// 名称
    cost: 2,									// 花费
    image: [									// 图片
        "pictures/藤妖.jpg",
    ],
    feature: [									// 特征
        "普攻伤害",
        "后期carry"
    ],
    nature: [									// 连携
        "不朽者",
        "异能"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
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
        },
        defense: {								// 防御
            health: [500, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let dao_nu = {
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
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let dian_jiao = {
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
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let luo_han = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [250, 450, 650]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let tou_shi_che = {
    name: "投石车",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/投石车.jpg",
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "装甲",
        "攻城"
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
        },
        defense: {								// 防御
            health: [800, 1600, 3200],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let motor_bing = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [200, 300, 400]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let hong_zha_ji = {
    name: "轰炸机",								// 名称
    cost: 3,									// 花费
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
        },
        defense: {								// 防御
            health: [400, 800, 1600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let repair_ji = {
    name: "维修机",								// 名称
    cost: 3,									// 花费
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [83, 161, 323],			// 最小攻击
            max_damage: [100, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御(%)
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let te_zhong_bing = {
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
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [400, 600, 800]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let ghost_ji = {
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
        },
        defense: {								// 防御
            health: [500, 1000, 2000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
};

let gui_lang = {
    name: "鬼狼",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/鬼狼.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "野兽",
        "召唤"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [80, 161, 309],			// 最小攻击
            max_damage: [113, 226, 370],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let spider = {
    name: "蜘蛛",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/蜘蛛.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "异虫",
        "异能"
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
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let bian_fu = {
    name: "蝙蝠",								// 名称
    cost: 3,									// 花费
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
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [20, 20, 20],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let blood_eagle = {
    name: "血鹰",								// 名称
    cost: 3,									// 花费
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
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [10, 20, 30],			// 技能防御(%)
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let ren_zhe_panda = {
    name: "忍者熊猫",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/忍者熊猫.jpg"
    ],
    feature: [									// 特征
        "技能伤害"
    ],
    nature: [									// 连携
        "傀儡",
        "先锋"
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
        },
        defense: {								// 防御
            health: [550, 1100, 2200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let kuang_lion = {
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
        },
        defense: {								// 防御
            health: [700, 1400, 2800],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let bu_si_bird = {
    name: "不死鸟",								// 名称
    cost: 3,									// 花费
    image: [									// 图片
        "pictures/不死鸟.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "爆破"
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
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let dun_nu = {
    name: "盾奴",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/盾奴.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
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
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [1050, 2100, 4200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let xiang_long = {
    name: "翔龙",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/盾奴.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "陆行者",
        "攻城"
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
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [10, 10, 10],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let xu_mi_sha = {
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
        },
        defense: {								// 防御
            health: [1050, 2100, 4200],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let gun_nu = {
    name: "棍奴",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/须弥鲨.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
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
            min_damage: [80, 161, 323],			// 最小攻击
            max_damage: [113, 226, 452],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [900, 1800, 3600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let tou_dan_shou = {
    name: "投弹手",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/投弹手.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "步兵",
        "异能"
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
        },
        defense: {								// 防御
            health: [750, 1400, 2800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};


let tie_ji = {
    name: "铁鸡",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/铁鸡.jpg"
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
        },
        defense: {								// 防御
            health: [750, 1500, 3000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let fang_zhou = {
    name: "方舟",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/方舟.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "空军",
        "攻城"
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
        },
        defense: {								// 防御
            health: [650, 1300, 2600],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let chang_sheng_lu = {
    name: "长生鹿",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/长生鹿.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "野兽",
        "支援"
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
        },
        defense: {								// 防御
            health: [850, 1700, 3400],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let kill_bee = {
    name: "杀人蜂",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/杀人蜂.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "异虫",
        "狙击"
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
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let gu_long = {
    name: "骨龙",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/骨龙.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "不朽者",
		"攻城"
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
        },
        defense: {								// 防御
            health: [950, 1900, 3800],			// 生命
            Armor: [10, 10, 10],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let chan_shi_panda = {
    name: "禅师熊猫",								// 名称
    cost: 4,									// 花费
    image: [									// 图片
        "pictures/禅师熊猫.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "熊猫",
        "异能"
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
        },
        defense: {								// 防御
            health: [450, 900, 1800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [20, 20, 20],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let huan_jing = {
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
        },
        defense: {								// 防御
            health: [1000, 2000, 4000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [40, 40, 40],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
};


let tie_ju_shen = {
    name: "铁巨神",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/铁巨神.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "装甲",
        "爆破"
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
        },
        defense: {								// 防御
            health: [900, 1800, 3800],			// 生命
            Armor: [15, 15, 15],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [0, 0, 0]			// 生命恢复
        }
    }
};

let fly_ha_ma = {
    name: "飞天蛤蟆",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/飞天蛤蟆.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "猛禽",
        "异能"
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
        },
        defense: {								// 防御
            health: [1000, 2000, 4000],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [40, 40, 40],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
};

let tree_yao = {
    name: "树妖",								// 名称
    cost: 5,									// 花费
    image: [									// 图片
        "pictures/树妖.jpg"
    ],
    feature: [									// 特征
        "普攻伤害"
    ],
    nature: [									// 连携
        "不朽者",
        "先锋"
    ],
    ability: {									// 技能
        description: "斧奴扔出手中的灵刃, 对单个敌人造成技能伤害, 且使其短暂眩晕.",		// 技能描述
        damage: [300, 500, 700]					// 技能伤害
    },
    property: {									// 兵种属性
        attack: {								// 攻击
            min_damage: [40, 81, 162],			// 最小攻击
            max_damage: [49, 99, 198],		// 最大攻击
            reduce_armor: [0, 0, 0],			// 护甲削弱
            ability_damage: [0, 0, 0],			// 技能伤害 (%)
            critical_strike: [0, 0, 0],			// 暴击 (%)
            blood_sucking: [0, 0, 0],			// 吸血 (%)
        },
        defense: {								// 防御
            health: [950, 1900, 3800],			// 生命
            Armor: [5, 5, 5],					// 护甲
            ability_defense: [0, 0, 0],			// 技能防御
            miss: [0, 0, 0],					// 闪避 (%)
            health_recovery: [5, 5, 5]			// 生命恢复
        }
    }
};