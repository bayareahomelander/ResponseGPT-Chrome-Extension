# ResponseGPT-Chrome-Extension

The multi-language response generator is written as a chrome extension, which has not only been integrated into Gmail, but also available as an individual interactive extension/webpage, that utilizes the GPT-3 text-davinci-003 model for its functionalities.

The extension performs a comprehensive sentiment analysis given any piece of text (e.g. a Tweet, LinkedIn post, etc). It can then generate an appropriate response for the user based on the sentiment analysis performed on the input text, or the tone selected by the user (e.g. creative, professional, or neutral). ResponseGPT is also capable of summarizing and commenting on a given piece of text.

Sentiment analysis results are returned in the form of `${score}, ${comment}`, such as: `0.7, Positive` or `0.9, Highly Positive`.

ResponseGPT is tailored to match the tone of the received text, ensuring that it maintains a positive, neutral or appropriate tone (if the user ever decides to reply), as determined by the sentiment analysis results. This feature makes ResponseGPT an efficient and effective tool for responding to emails, posts and/or comments, saving users valuable time and effort.
