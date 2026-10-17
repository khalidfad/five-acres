Five Acres Ltd - update pack v3

REPLACE / ADD (same folder layout as your project):
  index.html                    home: slider restored, Technology is now a bullet, ticker bar
  about/index.html              rebuilt as an article (image header, contents list, at-a-glance card)
  management/index.html         image header + ticker, recoloured to grey
  technology/index.html         image header + ticker
  assets/style.css              ticker, image headers, article styles
  assets/app.js                 slider + ticker + article contents highlighting
  assets/img/hero-market.jpg, hero-cocoa.jpg, hero-soybeans.jpg, hero-cashew.jpg, cocoa.jpg, tech-header.jpg   (new/needed images)

COMMODITIES and CONTACT pages (not in this pack) - make two edits so they match:

1) Ticker: paste this just before the </header> that closes <header class="hd" id="hd">
<div class="mkt" id="mkt" role="region" aria-label="Market prices and exchange rates"><a class="mkt-l" href="../contact"><b>Markets</b><span>Cashew and sesame: ask for today's price</span></a><div class="mkt-v" id="mktv"></div></div>

2) Image header: change the page's <header class="ph" style="..."> to
   Commodities: <header class="ph" style="--bg-img:url('../assets/img/hero-cocoa.jpg')">
   Contact:     <header class="ph" style="--bg-img:url('../assets/img/hero-cashew.jpg')">

Ticker data: ICE cocoa, CBOT soybeans / meal / oil and USD, EUR, GBP to NGN come from a live TradingView widget
(delayed quotes). Cashew and sesame have no public exchange price, so the bar invites visitors to ask.
To change the symbols, edit the "symbols" list near the end of assets/app.js.
