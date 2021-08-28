'use strict';


const accountSid = 'SID-FROM-TWILLIO-DASH-BOARD';
const authToken = 'OAUTH-FROM-TWILLIO-DASH-BOARD';
const TWILIO_PHONE = '+19071111111';  // TWILLIO PHONE FOR YOU ACCOUNT -FROM-TWILLIO-DASH-BOARD
const client = require('twilio')(accountSid, authToken);

exports.http = (request, response) => {
  const bodyInformation = JSON.parse(request.body);
  const name = bodyInformation.name;
  const phone = bodyInformation.phone;

  try{
    const result =  client.messages
      .create({
         body: name,
         from: TWILIO_PHONE,
         to: phone
       });
    return response.status(200).send(JSON.stringify(result));
  } catch(err)
  {
    console.log(err);
    return response.status(500).send(JSON.stringify(err));
  }

};
