const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626, active: false },
  { note: "Db", key: "S", frequency: 277.183, active: false },
  { note: "D", key: "X", frequency: 293.665, active: false },
  { note: "Eb", key: "D", frequency: 311.127, active: false },
  { note: "E", key: "C", frequency: 329.628, active: false },
  { note: "F", key: "V", frequency: 349.228, active: false },
  { note: "Gb", key: "G", frequency: 369.994, active: false },
  { note: "G", key: "B", frequency: 391.995, active: false },
  { note: "Ab", key: "H", frequency: 415.305, active: false },
  { note: "A", key: "N", frequency: 440, active: false },
  { note: "Bb", key: "J", frequency: 466.164, active: false },
  { note: "B", key: "M", frequency: 493.883, active: false },
];

function resetAll(element, oscillator) {
  document.addEventListener("keyup", function (e) {
    if (element) {
      element.classList.remove("black-active");
    }
  });
}

// show keyStyle
function showKeyStyle(keyEvent) {
  const myKey = NOTE_DETAILS.find((e) => {
    const eKey = e.key.toLocaleLowerCase();
    return eKey == keyEvent;
  });
  if (myKey) {
    myKey.active = true;
    const myEl = document.querySelector(`[data-note="${myKey.note}"]`);
    myEl.classList.toggle("black-active", myKey.active);
    resetAll(myEl);
  }
}

function playSound(keyEvent) {
  const myKey = NOTE_DETAILS.find((e) => {
    const eKey = e.key.toLocaleLowerCase();
    return eKey == keyEvent;
  });
  if (myKey) {
    // create web audio api context
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node
    const oscillator = audioCtx.createOscillator();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(myKey.frequency, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start();

    document.addEventListener("keyup", function (e) {
      if (oscillator != null) {
        oscillator.disconnect();
        oscillator.stop();
        console.log(e);
      }
    });
  }
}

// key down event
document.addEventListener("keydown", function (e) {
  showKeyStyle(e.key);
  playSound(e.key);
});
