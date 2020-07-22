const {
    SuccessModel,
    ErrorModel,
    MajorModel01,
    MajorModel02
} = require('../model/resModel')

function AnalyseMajor(lscore, lowscore, score, guessscore) {
   
    let guessSub = lscore - lowscore
    let realSub = score - guessscore
    if (guessSub + 5 <= realSub) {
        return new MajorModel01()
    } else {
        return new MajorModel02()
    }

}


module.exports = {
    AnalyseMajor
}