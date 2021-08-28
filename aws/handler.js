'use strict';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);
const RECEPIENT_PHONE = '+1847111111' //type the phone number of recipient here.
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: TWILIO_PHONE,
//      to: '+15558675310'
//    })
//   .then(message => console.log(message.sid));
const responsed = {statusCode:200, body: JSON.stringify('Hi Jay, Welcome')};

module.exports.send = async (event) => {
  try{
    const result = await client.messages
      .create({
         body: 'Hei Jay from Twilio?',
         from: TWILIO_PHONE,
         to: RECEPIENT_PHONE
       });
    responsed.body = JSON.stringify(result);
  } catch(err)
  {
    console.log(err);
    responsed.statusCode = 500;
    responsed.body = JSON.stringify(err);
  }

  return responsed;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
