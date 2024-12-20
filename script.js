document.getElementById('promptForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const prompt = document.getElementById('prompt').value;
    const apiKey = 'AIzaSyCkZR2bZs4X5V_aHnpotFBgMEM29u5q2cE'; // Replace with your actual API key

    const progress = document.getElementById('progress');
    progress.style.display = 'inline-block';

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt + '   --- rephrase it formally, correct grammer'
                        }
                    ]
                }
            ]
        })
    });

    const data = await response.json();
    const text = data.candidates[0].content.parts[0].text;
    document.getElementById('response').innerHTML = marked.parse(text);

    progress.style.display = 'none';
});
