var express = require('express');
var router = express.Router();
const {
  getLine,
  getMajor,
  getGuessMajor,
  getRemarks,
  handleRemarks,
  getLowScore,
  getGuessScore,
  getMajorSitu,
  getSolutions
} = require('../controller/index')
const { Analyse } = require('../analyse/enterSchool')
const { AnalyseMajor } = require('../analyse/enterMajor')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET home page. */
router.get('/line', function (req, res, next) {
  const province = req.query.province
  const subject = req.query.subject
  const rank = req.query.rank
  const result = getLine(province, subject)
  return result.then(data => {
 
    let output1 = Analyse(data, rank)
    
    res.json(
      output1
    )
  })

});

router.get('/major', function (req, res, next) {
  const province = req.query.province
  const subject = req.query.subject
  let disc = ''
  if (subject === "理科") {
    disc = "理工"
  }
  if (subject === "文科") {
    disc = "文史"
  }
  const result = getMajor(province, disc)

  return result.then(data => {

    res.json(
      new SuccessModel(data)
    )
  })

});

router.get('/entermajor', function (req, res, next) {
  const province = req.query.province
  const subject = req.query.subject
  const smajor = req.query.smajor
  let score = req.query.score
  let lscore = 0
  let lowscore = 0
  let disc = ''
  if (subject === "理科") {
    disc = "理工"
  }
  if (subject === "文科") {
    disc = "文史"
  }
  const result = getGuessMajor(province, disc, smajor, score)
  return result.then(data => {
    if (data[0] == null) {
      data = getRemarks(province, disc, smajor)
    }
    return data

  }).then(data => {

    if (data[0].remarks) {
      data = handleRemarks(data[0].remarks, province, disc)
    }
    return data
  }).then(data => {
    if (data[0] == null) {
      res.json(
        new ErrorModel("未查到相关信息！")
      )
    }
    lscore = data[0].lscore
    var outcome = getLowScore(province, subject)
    return outcome

  }).then(outcome => {

    lowscore = outcome[0].lowscore
    var guessscoreout = getGuessScore(province, subject)
    return guessscoreout

  }).then(guessscoreout => {
    let guessscore = guessscoreout[0].guessscore
    let output2 = AnalyseMajor(lscore, lowscore, score, guessscore)
    res.json(
      output2
    )
  })

});

router.get('/majorsitu', function (req, res, next) {
  const province = req.query.province
  const subject = req.query.subject
  const smajor = req.query.smajor
  let disc = ''
  if (subject === "理科") {
    disc = "理工"
  }
  if (subject === "文科") {
    disc = "文史"
  }
  const result = getMajorSitu(province, disc, smajor)

  return result.then(data => {

    res.json(
      new SuccessModel(data)
    )
  })

});


router.get('/solutions', function (req, res, next) {

  const result = getSolutions()
  return result.then(data => {

    res.json(
      
      new SuccessModel(data)
    )
  })

});


module.exports = router;
