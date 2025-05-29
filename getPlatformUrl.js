function getPlatformHtml(urlPrefix) {
   postfix = "";

   // Mobile
   if (navigator.userAgent.toLowerCase().indexOf("mobile") != -1) {
     postfix = "_mobile.html";
   }
   // iPad. Treat like mobile.
   else if ( (navigator.platform.toLowerCase().indexOf("ipad") != -1) || ((navigator.platform.toLowerCase().indexOf("macintel") != -1) && (navigator.maxTouchPoints > 1)) )  {
     postfix = "_mobile.html";
   }
   // Assume anything else is a desktop/laptop
   else
   {
      postfix = "_desktop.html";
   }

   return urlPrefix + postfix
}

function getPlatformCss(urlPrefix) {
   postfix = "";

   // Mobile
   if (navigator.userAgent.toLowerCase().indexOf("mobile") != -1) {
     postfix = "_mobile.css";
   }
   // iPad. Treat like mobile.
   else if ( (navigator.platform.toLowerCase().indexOf("ipad") != -1) || ((navigator.platform.toLowerCase().indexOf("macintel") != -1) && (navigator.maxTouchPoints > 1)) )  {
     postfix = "_mobile.css";
   }
   // Assume anything else is a desktop/laptop
   else
   {
      postfix = "_desktop.css";
   }

   return urlPrefix + postfix
}

function loadPlatformCss(urlPrefix) {
   var cssUrl = getPlatformCss(urlPrefix)
   var link = document.createElement( "link" );
   link.href = cssUrl;
   link.type = "text/css";
   link.rel = "stylesheet";
   link.media = "screen,print";

   document.getElementsByTagName( "head" )[0].appendChild( link );
}
