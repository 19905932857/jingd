(function(l){var g=l.document;var d=l.Math;var i=g.getElementsByTagName("head")[0];var a=function(o,p){var n=g.createElement("script");n.type="text/javascript";n.charset="UTF-8";n.async=true;n.src=o;n.onload=n.onreadystatechange=p;g.body.appendChild(n)};var k=function(n){var o=g.createElement("link");o.setAttribute("rel","stylesheet");o.setAttribute("type","text/css");o.setAttribute("href",n);g.body.appendChild(o)};var j=function(o,u,x,y,w){var q="jsonp_"+d.random();q=q.replace(".","");window[q]=function(z){clearTimeout(p);window[q]=null;s.removeChild(r);y(z)};var p=setTimeout(function(){window[q]=null;s.removeChild(r);w&&w()},5000);u[x]=q;var v=[];for(var t in u){v.push(t+"="+u[t])}var n=o+"?"+v.join("&");var r=g.createElement("script");r.src=n;r.type="text/javascript";var s=g.getElementsByTagName("head")[0];s.appendChild(r)};var f,b,h,m;var e=function(n,p){m=0;var o=n.lang&&n.lang!="zh_CN"?"//iv.joybuy.com":"//iv.jd.com";(f&&b&&h)?c(n,p):j(o+"/slide/v.html",{},"callback",function(r){var q=r;f=q.data.static_servers;b=q.data.style;h=q.data.script;k(q.data.static_servers+q.data.style);a(q.data.static_servers+q.data.script,function(){c(n,p)})})};var c=function(p,q){var o=navigator.userAgent.indexOf("compatible")>-1&&navigator.userAgent.indexOf("MSIE")>-1;if(o){m++;if(m>1){return}var n=setInterval(function(){try{new JDJRValidate(p,q);clearInterval(n)}catch(r){}},20)}else{new JDJRValidate(p,q)}};l.initJdSlide=e;return e})(typeof window!=="undefined"?window:this);