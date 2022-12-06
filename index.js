//first function
function shout(string) {
    return string.toUpperCase();
  }
  
  console.log(shout("hello"));
  
  //second function
  function whisper(string) {
    return string.toLowerCase();
  }
  console.log(whisper("HELLO"));
  
  //third function
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  logShout("hello");
  
  //fourth function
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  logWhisper("HELLO");
  //fifth function
  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase(string)) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase(string)) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));