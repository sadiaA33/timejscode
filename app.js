function moveHands() {
    with (new Date()) {
      h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
      m = 6 * getMinutes(); // 6 degrees every minute
      s = 6 * getSeconds(); // 6 degrees every second
    // setting the rotate CSS attribute to those degree values -->
    document.getElementById("second-hand").style.cssText =
    "transform:rotate(" + s + "deg); transform-origin: bottom;";
    document.getElementById("min-hand").style.cssText =
    "transform:rotate(" + m + "deg); transform-origin: bottom;";
    document.getElementById("hour-hand").style.cssText =
    "transform:rotate(" + h + "deg); transform-origin: bottom;";
  
    setTimeout(moveHands, 1000); // calling the function every second
    }
  }


  
  window.onload = moveHands; // making sure the function starts on load of webpage
