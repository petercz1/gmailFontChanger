setInterval(() => {
  checker();
}, 1000);

function checker() {
  removeStyles(document.body);
}

// recursion
removeStyles(document.body);

function removeStyles(el) {
  // code to remove inline styles 
  if (el.style.fontSize = "small") {
    //el.removeAttribute('style');
    el.style.fontFamily = "Ariel";
    el.style.lineHeight = "1.5";
    el.style.fontSize = "medium";
  }

  if (el.childNodes.length > 0) {
    for (var child in el.childNodes) {
      /* filter element nodes only */
      if (el.childNodes[child].nodeType == 1)
        // recursion here
        removeStyles(el.childNodes[child]);
    }
  }
}