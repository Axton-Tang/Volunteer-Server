const {
    exec
} = require('../db/mysql')

const getLine = (province, subject) => {
    const sql = `select * from line where province='${province}' and subject='${subject}'`
    return exec(sql)
}

const getMajor = (province, disc) => {
    const sql = `select smajor from plan where province='${province}' and disc='${disc}'`
    return exec(sql)
}

const getGuessMajor = (province, disc, smajor, score) => {
    const sql = `select lscore from majorline where province='${province}' and disc='${disc}' and major='${smajor}'`
    return exec(sql)
    
}

const getRemarks = (province, disc, smajor) => {
    const sql = `select remarks from plan where province='${province}' and disc='${disc}' and smajor='${smajor}'`
    return exec(sql)
}

const handleRemarks = (data, province, disc) => {
    var detailMajors = data.split("、")
    if (detailMajors.length === 3) {
        var detailMajor1 = detailMajors[0].split("含")
        var detailMajor2 = detailMajors[2].split("等")
        var detailMajor = []
        detailMajor[0] = detailMajor1[1]
        detailMajor[1] = detailMajors[1]
        detailMajor[2] = detailMajor2[0]
        const sql = `select min(lscore) lscore from majorline where province='${province}' and disc='${disc}' and (major='${detailMajor[0]}' or major='${detailMajor[1]}' or major='${detailMajor[2]}')`
        return exec(sql)
    }
    if (detailMajors.length === 2) {
        var detailMajor1 = detailMajors[0].split("含")
        var detailMajor2 = detailMajors[1].split("等")
        var detailMajor = []
        detailMajor[0] = detailMajor1[1]
        detailMajor[1] = detailMajor2[0]
        const sql = `select min(lscore) lscore from majorline where province='${province}' and disc='${disc}' and (major='${detailMajor[0]}' or major='${detailMajor[1]}')`
        return exec(sql)
    }
   
}

const getLowScore = (province, subject) => {
    const sql = `select lowscore from line where province='${province}' and subject='${subject}' and year='2019' and type='普通类'`
    return exec(sql)
}

const getGuessScore = (province, subject) => {
    const sql = `select guessscore from guess where province='${province}' and subject='${subject}'`
    return exec(sql)
}

const getMajorSitu = (province, disc, smajor) => {
    const sql = `select * from plan where province='${province}' and disc='${disc}' and smajor='${smajor}'`
    return exec(sql)
}

const getSolutions = () => {
      const sql = `select * from solutions`
      return exec(sql)
}

module.exports = {
    getLine,
    getMajor,
    getGuessMajor,
    getRemarks,
    handleRemarks,
    getLowScore,
    getGuessScore,
    getMajorSitu,
    getSolutions
}