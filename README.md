# Netlify Linebot Boilerplate 2024
A simple boilerplate using [Express.js](https://expressjs.com/) and [serverless-http](https://www.npmjs.com/package/serverless-http) to make a linebot hosted by [Netlify](https://www.netlify.com/)

# How to use
1. Create `.env` file in the root directory.  

2. Make a new Messaging API channel in [LINE Developers Console](https://developers.line.biz/)  
![image](./assets/1.jpg)

3. Obtain LINE Channel Secret from Basic Setting Tab and LINE Channel Access Token from Messaging API Tab.  
Then paste into `.env`.
```bash
LINE_CHANNEL_SECRET="" # Line Channel Secret
LINE_CHANNEL_ACCESS_TOKEN="" # Line Channel Access Token
```

4. Import the `.env` to Netlify Configuration > Environment Variables.
![image](./assets/2.jpg)

5. Run `yarn deploy` to deploy to Netlify.

6. Set LINE Webhook URL to `http://<your-netlify-domain>/server/webhook`

7. Add your line bot as friend using LINE. Then you are able to play around with it!
![image](./assets/3.jpg)

# Reference
* https://qiita.com/n0bisuke/items/55de1cada13a623094b9
* https://docs.netlify.com/functions/get-started/?fn-language=ts
* https://developers.line.biz/en/docs/messaging-api/building-bot/#issue-a-channel-access-token
* https://line.github.io/line-bot-sdk-nodejs/#getting-started