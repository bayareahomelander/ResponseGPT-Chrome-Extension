# ResponseGPT-Chrome-Extension

The multi-language email assistant is written as a chrome extension, which has been integrated into Gmail, that utilizes the GPT-3 text-davinci-003 model for its functionalities.

The extension performs a comprehensive sentiment analysis of incoming emails, as well as responses written by the user. It can then generate an appropriate response for the user based on the sentiment analysis performed on the received email or the tone selected by the user (e.g. creative, professional, or neutral).

Sentiment analysis results are returned in the form of `${score}, ${comment}`, such as: `0.7, Positive`, `0.9, Highly Positive`.

The email assistant's response is tailored to match the tone of the received email, ensuring that it maintains a positive, neutral or appropriate tone, as determined by the sentiment analysis results. This feature makes the email assistant an efficient and effective tool for responding to emails, saving users valuable time and effort.

