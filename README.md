# gmail font changer extension for Chrome/Chromium

![](https://img.shields.io/badge/licence-free-green.svg) ![](https://img.shields.io/badge/frameworks-none-green.svg)

I guess if you've found this then you're also frustrated with the inability to change/increase gmail's font (other than making the whole page bigger).

The problem is that gmail is built on the fly, with various scripts running and re-running, so you end up with this being re-injected:

<pre>font: small/1.5 Arial,Helvetica,sans-serif;</pre>

without any way to change it.

I looked into it, and initially I tried the (deprecated) domsubtree event and then mutation observers, but the response times were huge. I guess that the gmail scripts do an awful lot of dom modifying/checking on refresh.

Anyhoo, I decided an old-fashioned `setInterval()` was all that was needed. I set it to run every second and I don't sense any performance penalty. The down side is that it does mean you can get a slight jump as the gmail scripts run and then this runs just after, but at least I can now read my email.

### how does it work

It iterates through all elements-within-elements and changes the fontsize in the style attribute to 'medium'

`el.style.fontSize = "medium";`

Options are xx-small, x-small, small,, medium, large, x-large, xx-large, smaller, larger, %, initial and inherit.

More info on setting this [here](https://www.w3schools.com/jsref/prop_style_fontsize.asp).

### requirements

I've written this for Chrome/Chromium, but I've tested it on a beta of the new Microsoft Edge built on Chromium and it works a treat.

### installation

The only files you need are `manifest.json` and `main.js` in a folder of your choice, but no harm is done by leaving this `README.md` in there as well.

Go to:

`chrome://extensions/`

Check or slide to 'on' the developer mode (top right, or bottom-left if you're using the new Edge-on-Chromium);

Download this code in its folder (check you don't end up with a folder-within-a-folder if downloading the zip file).

Drag the folder onto the extensions page in Chrome.

Done. Now use gmail with your font...

### ideas

I've added some ideas in main.js - feel free to experiment.

Use as you like, ask questions if stuck, and stars are nice (top right)...
