const mysql = require('mysql')
const {
    MYSQL_CONF
} = require('../conf/db')


function exec(sql, params = []) {
    return new Promise((resolve, reject) => {
        MYSQL_CONF.getConnection((err, connection) => {
            if (err) {
                return reject(err);
            }
            connection.query(sql, params, (err, result) => {
                //释放连接
                // pool.releaseConnection(connection)
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
            //这么设置，能够解决卡死问题
            connection.release();
        });
    });
};

module.exports = {
    exec
}