module.exports = async function (context, req, activistsData) {
    context.log('JavaScript HTTP trigger function processed a request.');
    try {
      context.res.status(200).json(activistsData);
    } catch (error) {
      context.res.status(500).json(error);
  }}