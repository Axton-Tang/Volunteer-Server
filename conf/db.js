
const mysql = require('mysql');

let MYSQL_CONF


MYSQL_CONF = mysql.createPool({
    host: '149.129.116.64',
    user: 'admission',
    password: 'admission',
    port: '3306',
    database: 'admission',
    useConnectionPooling: true
})



module.exports = {
    MYSQL_CONF
}