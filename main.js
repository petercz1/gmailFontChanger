// start things off
// I set the check interval at 1000 milliseconds
// so every second this will recusively check all nodes
// and set the font
setInterval(() => removeStyles(document.body), 1000);

// recursion - this is called if the
// element has child elements
removeStyles(document.body);

function removeStyles(el) {
  // uncomment this if you want to remove all styles from element node
  // el.removeAttribute('style');

  // I'm just removing the bloody annoying 'small' fontsize
  // and setting my own. And changing font and line spacing
  // while I'm at it.
  el.style.fontSize = "medium";
  el.style.fontFamily = "Ariel";
  el.style.lineHeight = "1.5";

  // other ideas...
  // el.style.fontStyle = "italic";       // "normal|italic|oblique|initial|inherit"
  // el.style.fontVariant = "small-caps"; // "normal|small-caps|initial|inherit"
  // el.style.fontWeight = "900";         // "normal|lighter|bold|bolder|value|initial|inherit"
  // el.style.fontSizeAdjust = "0.65";    // difference between lower/uppercase
  // el.style.letterSpacing = "15px";     // space between letters
  // el.style.color = "blue";
  // etc...


  if (el.childNodes.length > 0) {
    for (var child in el.childNodes) {
      // FYI...
      // nodeType == 1 - element
      // nodeType == 2 - attribute
      // nodeType == 3 - text
      // nodeType == 8 - comment
      if (el.childNodes[child].nodeType == 1)
        // recursion here
        // if there are child elements, 
        removeStyles(el.childNodes[child]);
    }
  }
}