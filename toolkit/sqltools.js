const { poolPromise } = require('../config/db')

module.exports.sqltools = {
    ExecSqlQuery : async function(arg){
        const pool = await poolPromise
        //SELECT *FROM SYSOBJECTS WHERE xtype = \'U\'
        var result=null;
        try {
            result = await pool.request()
            .query(arg)
        } catch (error) {
            console.log(error.message);
        } 
        return result;
    },
    ExecProce : function (arg2, arg3, arg4){
        console.log(arg2,arg3,arg4);
    }
}