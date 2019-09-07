// start things off
// I set the check interval at 1000 milliseconds
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
  // el.style.fontStyle = "italic";
  

  if (el.childNodes.length > 0) {
    for (var child in el.childNodes) {
      // FYI...
      // nodeType == 1 - element
      // nodeType == 2 - attribute
      // nodeType == 3 - text
      // nodeType == 8 - comment
      if (el.childNodes[child].nodeType == 1)
        // recursion here
        removeStyles(el.childNodes[child]);
    }
  }
}