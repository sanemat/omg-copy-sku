// Copy this to your URL bar:
javascript:(function(){function e(e){return e.trim().replace(/[\n\r]/g,"")}function t(t,n){return e(t.eq(n).find(".value").text())}var n=$("content"),i=e(n.find('h2[itemprop="name"]').text()),r=n.find(".images").data("omgProductSku"),a=$('meta[rel="canonical"]').attr("href"),l=a.match(/\/([^\/]*)$/)[1],d=$("#product-properties").find("li"),m=t(d,0),o=t(d,1),p=t(d,2),u=t(d,3),c=t(d,4),f=t(d,5),h=t(d,6),s=t(d,7),g=t(d,8),k=t(d,9),w=t(d,10),b=t(d,11),v={name:i,sku:r,url:a,permalink:l,brand:m,color:o,lenswidth:p,lensheight:u,bridgewidth:c,templewidth:f,shape:h,rimshape:s,material:g,templeMaterial:k,nosepad:w,fitting:b};alert(JSON.stringify(v,null,2))})();