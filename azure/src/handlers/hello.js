'use strict';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

module.exports.send = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const bodyInformation = req.body;
  const name = bodyInformation.name;
  const phone = bodyInformation.phone;

  try{
    const result = await client.messages
      .create({
         body: name,
         from: TWILIO_PHONE,
         to: phone
       });
    return context.res = {body: JSON.stringify(result)};
    responsed.body = JSON.stringify(result);
  } catch(err)
  {
    console.log(err);
    return context.res = {
    status :400,
    body : JSON.stringify(err)};
  }
};
