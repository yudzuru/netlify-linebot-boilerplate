import 'dotenv/config'
import express, { Router } from "express";
import line  from '@line/bot-sdk';
import serverless from 'serverless-http'; 

const lineConfig : {
  channelSecret : string
  channelAccessToken : string
} = {
  channelSecret: process.env.LINE_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
};


const api = express();
const router = Router();

// Testing with Netlify Functions Routing
router.get("/", (req, res) => res.send("Hello LINE BOT!(GET)")); 

// Once Webhook is being POST, this function will be triggered.
router.post('/webhook', line.middleware(lineConfig), (req, res) => {
  console.log(req.body.events);

  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result));
});

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: lineConfig.channelAccessToken,
});

function handleEvent(event) {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }

    // When the Message incoming in text, the bot will reply same message
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: event.message.text
      }],
    });
}


api.use("/server/", router);
export const handler = serverless(api);

