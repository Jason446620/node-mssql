const { sqltools } = require('../toolkit/sqltools');

module.exports = async function (context, req) {
    context.log('FUNC2 ---JavaScript HTTP trigger function processed a request.');

   
    var result=null;
    try {
        result = await sqltools.ExecSqlQuery('SELECT 1 ID, \'test\' [Description], getdate() CreatedDate ');
    } catch (error) {
        console.log(error.message);
    } 
    
    const responseMessage = "Func 2 Result :  ID=" + result.recordset[0].ID;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}