let fu_nu = {
    name: "斧奴",								// 名称
    cost: 1,									// 花费
    image: [									// 图片
        "pictures/fu_nu/level_1.jpg",
        "pictures/fu_nu/level_2.jpg",
        "pictures/fu_nu/level_3.jpg",
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