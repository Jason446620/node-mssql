const { sqltools } = require('../toolkit/sqltools');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    var result=null;
    try {
        result = await sqltools.ExecSqlQuery('SELECT *FROM SYSOBJECTS WHERE xtype = \'U\'');
    } catch (error) {
        console.log(error.message);
    } 
    
    const responseMessage ="Func 1 Result : TableName= " + result.recordset[0].name;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}