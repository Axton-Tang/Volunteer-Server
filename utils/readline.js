const fs = require('fs')
const path = require('path')
const readline = require('readline')

const fileName = path.join(__dirname, '../', 'logs', 'access.log')

const readStream = fs.createReadStream(fileName)
const rl = readline.createInterface({
    input: readStream
})

let sum = 0

rl.on('line', (lineData) => {
    if (!lineData){
        return 
    }
    sum++

})

rl.on('close', () => {
    console.log('接口总请求量为：', sum)
})