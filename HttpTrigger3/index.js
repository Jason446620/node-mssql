const { poolPromise } = require('../config/db')

module.exports = async function (context, req) {
    context.log('FUNC3 ---JavaScript HTTP trigger function processed a request.');

    const pool = await poolPromise
    var result=null;
    try {
        result = await pool.request()
        .query('SELECT *FROM SYSOBJECTS WHERE xtype = \'U\'')
    } catch (error) {
        console.log(error.message);
    } 
    
    const responseMessage = "FUNC3 --- SQL Exc Result, First Table Name ="+ result.recordset[0].name;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}