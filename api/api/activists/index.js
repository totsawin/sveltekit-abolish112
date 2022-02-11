const data = require('../shared/activists-data');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    try { 
        const activists = data.getActivists();
        context.res.status(200).json(activists);
    } 
    catch (error) {
        context.res.status(500).json(error);    
    }
}