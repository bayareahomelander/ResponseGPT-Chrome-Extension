// Define API key and endpoint -> text-davinci-003
const apiKey = '';
const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

// Email Received and Sample Response text area
const textReceived = document.getElementById('external-input');
const sampleResponse = document.getElementById('sample-response');

// Buttons for response generation
const generateButton = document.getElementById('generate-button');
const positiveButton = document.getElementById("positive-button");
const conservativeButton = document.getElementById("conservative-button");
const commentButton = document.getElementById("comment-button");

// Define the sentiment analysis function
async function analyzeText(text) {
  if (text === '') {
    return 'Input Field is Empty'
  }
  
  const prompt = "";
  const promtpWithEmail = prompt + text;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        "prompt": promtpWithEmail,
        "temperature": 0.5,
        "max_tokens": 150,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0,
      })
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const sentiment = data.choices[0].text.trim();

    return sentiment;

  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while analyzing the sentiment.");
  }
}

// Automatically display summary of given text when input detected
async function returnOutput() {
  const text = textReceived.value;
  const analysis = await analyzeText(text);
  sampleResponse.innerText = `${analysis}`;
}
textReceived.addEventListener('input', returnOutput);

// Define the generate response function
async function generateResponse(textareaId, temperature) {
    const instruction = ""
    const text = document.getElementById(textareaId).value;
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=uft-8',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: instruction + text,
          max_tokens: 150,
          temperature: temperature, // temperature is a placeholder and is set to different values based on scenario.
          n: 1,
        })
      });
    
      const data = await response.json();
      const responseText = data.choices[0].text.trim();
      sampleResponse.innerHTML = responseText;

    } catch (error) {
      console.error(error);
    }
}

generateButton.addEventListener('click', function() {
  if (textReceived.value === '') {
    sampleResponse.innerHTML = 'Input Field is Empty'
  } else {
    generateResponse("external-input", 0.5);
  }
})


positiveButton.addEventListener("click", function() {
  if (textReceived.value === '') {
    sampleResponse.innerHTML = 'Input Field is Empty'
  } else {
    generateResponse('external-input', 1.0);
  }
});

conservativeButton.addEventListener("click", function() {
  if (textReceived.value === '') {
    sampleResponse.innerHTML = 'Input Field is Empty'
  } else {
    generateResponse('external-input', 0.1);
  }
});

// Define function for commenting button
async function generateComment(inputText) {
  const instruction = ""
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=uft-8',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: instruction + inputText,
        max_tokens: 150,
        temperature: 0.5,
        n: 1,
      })
    });
  
    const data = await response.json();
    const comment = data.choices[0].text.trim();
    return comment;

  } catch (error) {
    console.error(error);
  }
}

async function commentFeedback(){
  const text = textReceived.value;
  const comment = await generateComment(text);
  sampleResponse.innerText = `${comment}`;
}
commentButton.addEventListener('click', commentFeedback);
