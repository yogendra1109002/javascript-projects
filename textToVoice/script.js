let speech = new SpeechSynthesisUtterance();


let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    console.log(voices);

    try {
        voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.
            name, i)));
        
    } catch (error) {
        console.log(error);
        
    }
    
        
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});