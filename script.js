// This function "renders" some bit of text
// as audio to the user.
let volume = 0;
let speed = 0;

function renderTTS(text) {
  var synthesis = window.speechSynthesis;
  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google Austrailian English Female';
  })[0];
  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);
  // Set utterance properties
  utterance.voice = voice;
  console.log(volume);
  console.log(speed);
  utterance.pitch = 1;
  utterance.rate = 0.7;
  utterance.volume = 1;

  // Speak the utterance
  synthesis.speak(utterance);
}
function encourage() { 
  let name = document.getElementById("name").value;
  let encouragement = document.getElementById("encouragement").value;
  let postScript = document.getElementById("post-script").value;
  let message = `Hola ${name}. I have something I would like to tell you. ${encouragement}. Have a splendiferous day!`;
  renderTTS(message);
}
function surpriseMe() {
  console.log(volume + "surp-vol");
  console.log(speed + "surp-spd");
  let message = `May the road rise up to meet you`;
  renderTTS(message);
}