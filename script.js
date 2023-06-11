const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-Us';
rec.continuous = true;




rec.onresul = function(e){
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'brown'
    ];

    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();
    
        if (acceptedColors.includes(script)) {
          document.body.style.backgroundColor = script;
        } else {
          alert('Please say a color');
        }
      }
    };
    
    rec.start();
    