# gmail font changer

![](https://img.shields.io/badge/licence-free-green.svg) ![](https://img.shields.io/badge/frameworks-none-green.svg)

I guess if you've found this then you're also frustrated with the inability to change gmail's font (other than making the whole page bigger).

The problem is that gmail is built on the fly, with various scripts running and re-running, so you end up with this being re-injected:

<pre>font: small/1.5 Arial,Helvetica,sans-serif;</pre>

without any way to change it.

I looked into it, and initially I tried the (deprecated) domsubtree event and then mutation observers, but the response times were huge. I guess that the gmail scripts do an awful lot of dom modifying/checking on refresh.

Anyhoo, I decided an old-fashioned `setInterval()` was all that was needed.

This does mean you can get a slight jump as the gmail scripts run and then this runs just after, but at least I can now read my email.

### installation

The only files you need are 