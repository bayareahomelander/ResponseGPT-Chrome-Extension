# ResponseGPT-Chrome-Extension

The multi-language response generator is written as a chrome extension, which has not only been integrated into Gmail, but also available as an individual interactive extension/webpage, that utilizes the GPT-3 `text-davinci-003` model for its functionalities.

The extension performs a comprehensive sentiment analysis given any piece of text (e.g. a Tweet, LinkedIn post, etc). It can then generate an appropriate response for the user based on the sentiment analysis performed on the input text, or the tone selected by the user (e.g. creative or neutral).

ResponseGPT is tailored to match the tone of the received text, ensuring that it maintains a positive, neutral or appropriate tone (if the user ever decides to reply), as determined by the sentiment analysis results. This feature makes ResponseGPT an efficient and effective tool for responding to emails, posts and/or comments, saving users valuable time and effort.

On top of replying, ResponseGPT is also designed to provide quick summary of a given piece of text, which includes a sentiment analysis, emotion/tone underneath (e.g. sarcasm, optimism, etc) as well as the point that the author of text is possibly trying to convey. Its commenting feature is built to provide neutral, non-biased response most of time by adjusting and testing different sets of parameters in the API, such as `temperature`, `max_token`.

**Landing page of ResponseGPT whe opened on desktop**
![Screenshot 2023-03-21 at 1 08 14 AM](https://user-images.githubusercontent.com/110600178/226548694-756913ea-6ef8-47cd-a5ed-a9034d7aff95.png)

**Opened as a Chrome Extension/View on mobile devices (Responsive Media)**

![Screenshot 2023-03-21 at 1 10 38 AM](https://user-images.githubusercontent.com/110600178/226549322-b6a24a28-b1b8-4bad-b6a1-b0425e782b19.png)
