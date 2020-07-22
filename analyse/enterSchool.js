const {
    SuccessModel,
    ErrorModel,
    RankModel01,
    RankModel02,
    RankModel03,
    RankModel04,
    RankModel05
} = require('../model/resModel')

function Analyse(data, rank) {
    if (data[0].province === "湖南" && data[0].subject === "理科") {
        return HunanLike(data, rank)
    }
    if (data[0].province === "湖南" && data[0].subject === "文科") {
        return HunanWenke(data, rank)
    }
    if (data[0].province === "广东" && data[0].subject === "理科") {
        return GuangdongLike(data, rank)
    }
    if (data[0].province === "广东" && data[0].subject === "文科") {
        return GuangdongWenke(data, rank)
    }
    if (data[0].province === "河北" && data[0].subject === "理科") {
        return HeibeiLike(data, rank)
    }
    if (data[0].province === "河北" && data[0].subject === "文科") {
        return HeibeiWenke(data, rank)
    }
    if (data[0].province === "河南" && data[0].subject === "理科") {
        return HeinanLike(data, rank)
    }
    if (data[0].province === "河南" && data[0].subject === "文科") {
        return HeinanWenke(data, rank)
    }
    if (data[0].province === "福建" && data[0].subject === "理科") {
        return FujianLike(data, rank)
    }
    if (data[0].province === "福建" && data[0].subject === "文科") {
        return FujianWenke(data, rank)
    }
    if (data[0].province === "湖北" && data[0].subject === "理科") {
        return HubeiLike(data, rank)
    }
    if (data[0].province === "湖北" && data[0].subject === "文科") {
        return HubeiWenke(data, rank)
    }
    if (data[0].province === "江西" && data[0].subject === "理科") {
        return JiangxiLike(data, rank)
    }
    if (data[0].province === "江西" && data[0].subject === "文科") {
        return JiangxiWenke(data, rank)
    }
    if (data[0].province === "安徽" && data[0].subject === "理科") {
        return AnhuiLike(data, rank)
    }
    if (data[0].province === "安徽" && data[0].subject === "文科") {
        return AnhuiWenke(data, rank)
    }
    if (data[0].province === "重庆" && data[0].subject === "理科") {
        return ChongqingLike(data, rank)
    }
    if (data[0].province === "重庆" && data[0].subject === "文科") {
        return ChongqingWenke(data, rank)
    }
    if (data[0].province === "广西" && data[0].subject === "理科") {
        return GuangxiLike(data, rank)
    }
    if (data[0].province === "广西" && data[0].subject === "文科") {
        return GuangxiWenke(data, rank)
    }
    if (data[0].province === "辽宁" && data[0].subject === "理科") {
        return LiaoningLike(data, rank)
    }
    if (data[0].province === "辽宁" && data[0].subject === "文科") {
        return LiaoningWenke(data, rank)
    }
    if (data[0].province === "陕西" && data[0].subject === "理科") {
        return ShanxiLike(data, rank)
    }
    if (data[0].province === "陕西" && data[0].subject === "文科") {
        return ShanxiWenke(data, rank)
    }
    if (data[0].province === "四川" && data[0].subject === "理科") {
        return SichuanLike(data, rank)
    }
    if (data[0].province === "四川" && data[0].subject === "文科") {
        return SichuanWenke(data, rank)
    }
    if (data[0].province === "山西" && data[0].subject === "理科") {
        return Shanxi02Like(data, rank)
    }
    if (data[0].province === "山西" && data[0].subject === "文科") {
        return Shanxi02Wenke(data, rank)
    }
    if (data[0].province === "云南" && data[0].subject === "理科") {
        return YunnanLike(data, rank)
    }
    if (data[0].province === "云南" && data[0].subject === "文科") {
        return YunnanWenke(data, rank)
    }
    if (data[0].province === "宁夏" && data[0].subject === "理科") {
        return NingxiaLike(data, rank)
    }
    if (data[0].province === "宁夏" && data[0].subject === "文科") {
        return NingxiaWenke(data, rank)
    }
    if (data[0].province === "贵州" && data[0].subject === "理科") {
        return GuizhouLike(data, rank)
    }
    if (data[0].province === "贵州" && data[0].subject === "文科") {
        return GuizhouWenke(data, rank)
    }
    if (data[0].province === "青海" && data[0].subject === "理科") {
        return QinghaiLike(data, rank)
    }
    if (data[0].province === "青海" && data[0].subject === "文科") {
        return QinghaiWenke(data, rank)
    }
    if (data[0].province === "吉林" && data[0].subject === "理科") {
        return JilinLike(data, rank)
    }
    if (data[0].province === "吉林" && data[0].subject === "文科") {
        return JilinWenke(data, rank)
    }
}

function JudgmentLike (guessRank, rank, data) {
    let sub = guessRank - rank
    if (sub >= 2000) {
        return new RankModel01(data)
    } else if (sub >= 1000) {
        return new RankModel02(data)
    } else if (sub >= -1000 && sub < 1000) {
        return new RankModel03(data)
    }
    else {
        return new RankModel04(data)
    }
}

function JudgmentWenke(guessRank, rank, data) {
    let sub = guessRank - rank
    if (sub >= 1000) {
        return new RankModel01(data)
    } else if (sub >= 400) {
        return new RankModel02(data)
    } else if (sub >= -400 && sub < 400) {
        return new RankModel03(data)
    } else {
        return new RankModel04(data)
    }
}

function JudgmentOther01(guessRank, rank, data) {
    let sub = guessRank - rank
    if (sub >= 1000) {
        return new RankModel01(data)
    } else if (sub >= 400) {
        return new RankModel02(data)
    } else if (sub >= -1200 && sub < 400) {
        return new RankModel03(data)
    } else {
        return new RankModel04(data)
    }
}

function JudgmentOther02(guessRank, rank, data) {
    let sub = guessRank - rank
    if (sub >= 1000) {
        return new RankModel01(data)
    } else if (sub >= 0) {
        return new RankModel02(data)
    } else if (sub >= -850 && sub < 0) {
        return new RankModel03(data)
    } else {
        return new RankModel04(data)
    }
}

function JudgmentOther03(guessRank, rank, data) {       //适合于人数过少，分数过于稳定
    let sub = guessRank - rank
    if (sub >= 300) {
        return new RankModel01(data)
    } else if (sub >= 100) {
        return new RankModel02(data)
    } else if (sub >= -200 && sub < 100) {
        return new RankModel03(data)
    } else {
        return new RankModel04(data)
    }
}

function HunanLike(data, rank) {        //湖南理科
    let guessRank = 0

    for (let i = 0 ; i< data.length-4; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
        }
    }
    guessRank = guessRank/2 + 800
    return JudgmentLike(guessRank, rank, data)

}

function HunanWenke(data, rank) {       //湖南文科
    let guessRank = 0

    for (let i = 0; i < data.length - 4; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
        }
    }
    guessRank = guessRank / 2 + 400
    return JudgmentWenke(guessRank, rank, data)

}

function GuangdongLike(data, rank) {        //广东理科
    let guessRank = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科批") {
            guessRank += data[i].lowrank
        }
    }
    guessRank = guessRank / 2 - 1000
    return JudgmentLike(guessRank, rank, data)

}

function GuangdongWenke(data, rank) {          //广东文科
    let guessRank = 0

    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科批") {
            guessRank += data[i].lowrank
        }
    }
    guessRank = guessRank / 2 
    return JudgmentLike(guessRank, rank, data)      //由于广东文科生较多，位次跨度大，以理科的Judgement进行计算

}

function HeibeiLike(data, rank) {       //河北理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter ++
        }
    }
    guessRank = guessRank / counter
    return JudgmentLike(guessRank, rank, data)

}

function HeibeiWenke(data, rank) {      //河北文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter ++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data) 

}


function HeinanLike(data, rank) {       //河南理科  存在问题***********
    
    return new RankModel05(data)

}

function HeinanWenke(data, rank) {      //河南文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) - 500
    return JudgmentWenke(guessRank, rank, data)

}

function FujianLike(data, rank) {       //福建理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function FujianWenke(data, rank) {      //福建文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)

}


function HubeiLike(data, rank) {        //湖北理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function HubeiWenke(data, rank) {       //湖北文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 150
    return JudgmentWenke(guessRank, rank, data)

}

function JiangxiLike(data, rank) {      //江西理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)     //位次过于稳定，按照文科的Judgement来判断

}

function JiangxiWenke(data, rank) {         //江西文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)
}

function AnhuiLike(data, rank) {      //安徽理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) - 100
    return JudgmentOther01(guessRank, rank, data)         //该Judgement比较特殊，采用了新的

}

function AnhuiWenke(data, rank) {         //安徽文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 100
    return JudgmentWenke(guessRank, rank, data)
}

function ChongqingLike(data, rank) {      //重庆理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function ChongqingWenke(data, rank) {       //重庆文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 200
    return JudgmentOther02(guessRank, rank, data)       //该Judgement比较特殊，采用了新的
}

function GuangxiLike(data, rank) {        //广西理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function GuangxiWenke(data, rank) {       //广西文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data) 
}

function LiaoningLike(data, rank) {      //辽宁理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 300
    return JudgmentLike(guessRank, rank, data)

}

function LiaoningWenke(data, rank) {         //辽宁文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 200
    return JudgmentWenke(guessRank, rank, data)
}

function ShanxiLike(data, rank) {         //陕西理科

    return new RankModel05(data)

}

function ShanxiWenke(data, rank) {        //陕西文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)
}


function SichuanLike(data, rank) {        //四川理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function SichuanWenke(data, rank) {       //四川文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)
}

function Shanxi02Like(data, rank) {        //山西理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批B段") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentLike(guessRank, rank, data)

}

function Shanxi02Wenke(data, rank) {       //山西文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批B段") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)
}

function YunnanLike(data, rank) {        //云南理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)     //位次过于稳定，按照文科的Judgement来判断

}

function YunnanWenke(data, rank) {       //云南文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) - 400
    return JudgmentWenke(guessRank, rank, data)
}

function NingxiaLike(data, rank) {        //宁夏理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)     //位次过于稳定，按照文科的Judgement来判断

}

function NingxiaWenke(data, rank) {       //宁夏文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentOther03(guessRank, rank, data)
}


function GuizhouLike(data, rank) {        //贵州理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) + 200
    return JudgmentLike(guessRank, rank, data)    

}

function GuizhouWenke(data, rank) {       //贵州文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentOther03(guessRank, rank, data)
}

function QinghaiLike(data, rank) {        //青海理科 (特殊)
    let guessRank = 0

    guessRank = 7000
    return JudgmentWenke(guessRank, rank, data)

}

function QinghaiWenke(data, rank) {       //青海文科 (特殊)
    let guessRank = 0

    guessRank = 1600
    return JudgmentOther03(guessRank, rank, data)
}


function JilinLike(data, rank) {        //吉林理科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 2; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批A段") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter) - 100
    return JudgmentLike(guessRank, rank, data)

}

function JilinWenke(data, rank) {       //吉林文科
    let guessRank = 0
    let counter = 0
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i].type === "普通类" && data[i].batch === "本科一批A段") {
            guessRank += data[i].lowrank
            counter++
        }
    }
    guessRank = parseInt(guessRank / counter)
    return JudgmentWenke(guessRank, rank, data)
}


module.exports = {
    Analyse
}