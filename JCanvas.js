/*
 jCanvas v15.06.17
 Copyright 2015 Caleb Evans
 Released under the MIT license
 */
(function(g,L,J){"object"===typeof module&&"object"===typeof module.exports?module.exports=L.document?J(L,!0):function(g,L){return J(g,L)}:J(g,L)})("undefined"!==typeof window?window.$:{},"undefined"!==typeof window?window:this,function(g,L){function J(d){for(var c in d)d.hasOwnProperty(c)&&(this[c]=d[c]);return this}function na(){Z(this,na.baseDefaults)}function ja(d){return"string"===aa(d)}function va(d){return!isNaN(wa(d))&&!isNaN(ba(d))}function K(d){return d&&d.getContext?d.getContext("2d"):
    null}function ka(d){var c,a,b;for(c in d)d.hasOwnProperty(c)&&(b=d[c],a=aa(b),"string"===a&&va(b)&&"text"!==c&&(d[c]=ba(b)));void 0!==d.text&&(d.text=String(d.text))}function la(d){d=Z({},d);d.masks=d.masks.slice(0);return d}function fa(d,c){var a;d.save();a=la(c.transforms);c.savedTransforms.push(a)}function xa(d,c,a,b){a[b]&&(da(a[b])?c[b]=a[b].call(d,a):c[b]=a[b])}function S(d,c,a){xa(d,c,a,"fillStyle");xa(d,c,a,"strokeStyle");c.lineWidth=a.strokeWidth;a.rounded?c.lineCap=c.lineJoin="round":(c.lineCap=
    a.strokeCap,c.lineJoin=a.strokeJoin,c.miterLimit=a.miterLimit);a.strokeDash||(a.strokeDash=[]);c.setLineDash&&c.setLineDash(a.strokeDash);c.webkitLineDash=c.mozDash=a.strokeDash;c.lineDashOffset=c.webkitLineDashOffset=c.mozDashOffset=a.strokeDashOffset;c.shadowOffsetX=a.shadowX;c.shadowOffsetY=a.shadowY;c.shadowBlur=a.shadowBlur;c.shadowColor=a.shadowColor;c.globalAlpha=a.opacity;c.globalCompositeOperation=a.compositing;a.imageSmoothing&&(c.imageSmoothingEnabled=c.mozImageSmoothingEnabled=a.imageSmoothingEnabled)}
    function ya(d,c,a){a.mask&&(a.autosave&&fa(d,c),d.clip(),c.transforms.masks.push(a._args))}function W(d,c,a){a.closed&&c.closePath();a.shadowStroke&&0!==a.strokeWidth?(c.stroke(),c.fill(),c.shadowColor="transparent",c.shadowBlur=0,c.stroke()):(c.fill(),"transparent"!==a.fillStyle&&(c.shadowColor="transparent"),0!==a.strokeWidth&&c.stroke());a.closed||c.closePath();a._transformed&&c.restore();a.mask&&(d=H(d),ya(c,d,a))}function Q(d,c,a,b,f){a._toRad=a.inDegrees?F/180:1;a._transformed=!0;c.save();a.fromCenter||
    a._centered||void 0===b||(void 0===f&&(f=b),a.x+=b/2,a.y+=f/2,a._centered=!0);a.rotate&&za(c,a,null);1===a.scale&&1===a.scaleX&&1===a.scaleY||Aa(c,a,null);(a.translate||a.translateX||a.translateY)&&Ba(c,a,null)}function H(d){var c=ca.dataCache,a;c._canvas===d&&c._data?a=c._data:(a=g.data(d,"jCanvas"),a||(a={canvas:d,layers:[],layer:{names:{},groups:{}},eventHooks:{},intersecting:[],lastIntersected:null,cursor:g(d).css("cursor"),drag:{layer:null,dragging:!1},event:{type:null,x:null,y:null},events:{},
        transforms:la(oa),savedTransforms:[],animating:!1,animated:null,pixelRatio:1,scaled:!1},g.data(d,"jCanvas",a)),c._canvas=d,c._data=a);return a}function Ca(d,c,a){for(var b in Y.events)Y.events.hasOwnProperty(b)&&(a[b]||a.cursors&&a.cursors[b])&&Da(d,c,a,b);c.events.mouseout||(d.bind("mouseout.jCanvas",function(){var a=c.drag.layer,b;a&&(c.drag={},P(d,c,a,"dragcancel"));for(b=0;b<c.layers.length;b+=1)a=c.layers[b],a._hovered&&d.triggerLayerEvent(c.layers[b],"mouseout");d.drawLayers()}),c.events.mouseout=
        !0)}function Da(d,c,a,b){Y.events[b](d,c);a._event=!0}function Ea(d,c,a){var b,f,e;if(a.draggable||a.cursors){b=["mousedown","mousemove","mouseup"];for(e=0;e<b.length;e+=1)f=b[e],Da(d,c,a,f);a._event=!0}}function pa(d,c,a,b){d=c.layer.names;b?void 0!==b.name&&ja(a.name)&&a.name!==b.name&&delete d[a.name]:b=a;ja(b.name)&&(d[b.name]=a)}function qa(d,c,a,b){d=c.layer.groups;var f,e,h,g;if(!b)b=a;else if(void 0!==b.groups&&null!==a.groups)for(e=0;e<a.groups.length;e+=1)if(f=a.groups[e],c=d[f]){for(g=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               0;g<c.length;g+=1)if(c[g]===a){h=g;c.splice(g,1);break}0===c.length&&delete d[f]}if(void 0!==b.groups&&null!==b.groups)for(e=0;e<b.groups.length;e+=1)f=b.groups[e],c=d[f],c||(c=d[f]=[],c.name=f),void 0===h&&(h=c.length),c.splice(h,0,a)}function ra(d,c,a,b,f){b[a]&&c._running&&!c._running[a]&&(c._running[a]=!0,b[a].call(d[0],c,f),c._running[a]=!1)}function P(d,c,a,b,f){if(!(a.disableEvents||a.intangible&&-1!==g.inArray(b,Ua))){if("mouseout"!==b){var e;a.cursors&&(e=a.cursors[b]);-1!==g.inArray(e,V.cursors)&&
    (e=V.prefix+e);e&&d.css({cursor:e})}ra(d,a,b,a,f);ra(d,a,b,c.eventHooks,f);ra(d,a,b,Y.eventHooks,f)}}function N(d,c,a,b){var f,e=c._layer?a:c;c._args=a;if(c.draggable||c.dragGroups)c.layer=!0,c.draggable=!0;c._method||(c._method=b?b:c.method?g.fn[c.method]:c.type?g.fn[X.drawings[c.type]]:function(){});if(c.layer&&!c._layer){if(a=g(d),b=H(d),f=b.layers,null===e.name||ja(e.name)&&void 0===b.layer.names[e.name])ka(c),e=new J(c),e.canvas=d,e.layer=!0,e._layer=!0,e._running={},e.data=null!==e.data?Z({},
        e.data):{},e.groups=null!==e.groups?e.groups.slice(0):[],pa(a,b,e),qa(a,b,e),Ca(a,b,e),Ea(a,b,e),c._event=e._event,e._method===g.fn.drawText&&a.measureText(e),null===e.index&&(e.index=f.length),f.splice(e.index,0,e),c._args=e,P(a,b,e,"add")}else c.layer||ka(c);return e}function Fa(d,c){var a,b;for(b=0;b<V.props.length;b+=1)a=V.props[b],void 0!==d[a]&&(d["_"+a]=d[a],V.propsObj[a]=!0,c&&delete d[a])}function Va(d,c,a){var b,f,e,h;for(b in a)if(a.hasOwnProperty(b)&&(f=a[b],da(f)&&(a[b]=f.call(d,c,b)),
        "object"===aa(f)&&Ga(f))){for(e in f)f.hasOwnProperty(e)&&(h=f[e],void 0!==c[b]&&(c[b+"."+e]=c[b][e],a[b+"."+e]=h));delete a[b]}return a}function Ha(d){var c,a,b=[],f=1;d.match(/^([a-z]+|#[0-9a-f]+)$/gi)&&("transparent"===d&&(d="rgba(0, 0, 0, 0)"),a=Ia.head,c=a.style.color,a.style.color=d,d=g.css(a,"color"),a.style.color=c);d.match(/^rgb/gi)&&(b=d.match(/(\d+(\.\d+)?)/gi),d.match(/%/gi)&&(f=2.55),b[0]*=f,b[1]*=f,b[2]*=f,b[3]=void 0!==b[3]?ba(b[3]):1);return b}function Wa(d){var c=3,a;"array"!==aa(d.start)&&
    (d.start=Ha(d.start),d.end=Ha(d.end));d.now=[];if(1!==d.start[3]||1!==d.end[3])c=4;for(a=0;a<c;a+=1)d.now[a]=d.start[a]+(d.end[a]-d.start[a])*d.pos,3>a&&(d.now[a]=Xa(d.now[a]));1!==d.start[3]||1!==d.end[3]?d.now="rgba( "+d.now.join(",")+" )":(d.now.slice(0,3),d.now="rgb( "+d.now.join(",")+" )");d.elem.nodeName?d.elem.style[d.prop]=d.now:d.elem[d.prop]=d.now}function Ya(d){X.touchEvents[d]&&(d=X.touchEvents[d]);return d}function Za(d){Y.events[d]=function(c,a){function b(a){h.x=a.offsetX;h.y=a.offsetY;
        h.type=f;h.event=a;c.drawLayers({resetFire:!0});a.preventDefault()}var f,e,h;h=a.event;f="mouseover"===d||"mouseout"===d?"mousemove":d;e=Ya(f);a.events[f]||(e!==f?c.bind(f+".jCanvas "+e+".jCanvas",b):c.bind(f+".jCanvas",b),a.events[f]=!0)}}function T(d,c,a){var b,f,e,h;if(a=a._args)d=H(d),b=d.event,null!==b.x&&null!==b.y&&(e=b.x*d.pixelRatio,h=b.y*d.pixelRatio,f=c.isPointInPath(e,h)||c.isPointInStroke&&c.isPointInStroke(e,h)),c=d.transforms,a.eventX=b.x,a.eventY=b.y,a.event=b.event,b=d.transforms.rotate,
        e=a.eventX,h=a.eventY,0!==b?(a._eventX=e*O(-b)-h*U(-b),a._eventY=h*O(-b)+e*U(-b)):(a._eventX=e,a._eventY=h),a._eventX/=c.scaleX,a._eventY/=c.scaleY,f&&d.intersecting.push(a),a.intersects=!!f}function za(d,c,a){c._toRad=c.inDegrees?F/180:1;d.translate(c.x,c.y);d.rotate(c.rotate*c._toRad);d.translate(-c.x,-c.y);a&&(a.rotate+=c.rotate*c._toRad)}function Aa(d,c,a){1!==c.scale&&(c.scaleX=c.scaleY=c.scale);d.translate(c.x,c.y);d.scale(c.scaleX,c.scaleY);d.translate(-c.x,-c.y);a&&(a.scaleX*=c.scaleX,a.scaleY*=
        c.scaleY)}function Ba(d,c,a){c.translate&&(c.translateX=c.translateY=c.translate);d.translate(c.translateX,c.translateY);a&&(a.translateX+=c.translateX,a.translateY+=c.translateY)}function Ja(d){for(;0>d;)d+=2*F;return d}function Ka(d,c,a,b){var f,e,h,g,n,t,y;a===b?y=t=0:(t=a.x,y=a.y);b.inDegrees||360!==b.end||(b.end=2*F);b.start*=a._toRad;b.end*=a._toRad;b.start-=F/2;b.end-=F/2;n=F/180;b.ccw&&(n*=-1);f=b.x+b.radius*O(b.start+n);e=b.y+b.radius*U(b.start+n);h=b.x+b.radius*O(b.start);g=b.y+b.radius*
        U(b.start);ga(d,c,a,b,f,e,h,g);c.arc(b.x+t,b.y+y,b.radius,b.start,b.end,b.ccw);f=b.x+b.radius*O(b.end+n);n=b.y+b.radius*U(b.end+n);e=b.x+b.radius*O(b.end);h=b.y+b.radius*U(b.end);ha(d,c,a,b,e,h,f,n)}function La(d,c,a,b,f,e,h,g){var n,t;b.arrowRadius&&!a.closed&&(t=$a(g-e,h-f),t-=F,d=a.strokeWidth*O(t),n=a.strokeWidth*U(t),a=h+b.arrowRadius*O(t+b.arrowAngle/2),f=g+b.arrowRadius*U(t+b.arrowAngle/2),e=h+b.arrowRadius*O(t-b.arrowAngle/2),b=g+b.arrowRadius*U(t-b.arrowAngle/2),c.moveTo(a-d,f-n),c.lineTo(h-
        d,g-n),c.lineTo(e-d,b-n),c.moveTo(h-d,g-n),c.lineTo(h+d,g+n),c.moveTo(h,g))}function ga(d,c,a,b,f,e,h,g){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=!0);b.startArrow&&La(d,c,a,b,f,e,h,g)}function ha(d,c,a,b,f,e,h,g){b._arrowAngleConverted||(b.arrowAngle*=a._toRad,b._arrowAngleConverted=!0);b.endArrow&&La(d,c,a,b,f,e,h,g)}function Ma(d,c,a,b){var f,e,h;f=2;ga(d,c,a,b,b.x2+a.x,b.y2+a.y,b.x1+a.x,b.y1+a.y);for(void 0!==b.x1&&void 0!==b.y1&&c.moveTo(b.x1+a.x,b.y1+a.y);;)if(e=
            b["x"+f],h=b["y"+f],void 0!==e&&void 0!==h)c.lineTo(e+a.x,h+a.y),f+=1;else break;--f;ha(d,c,a,b,b["x"+(f-1)]+a.x,b["y"+(f-1)]+a.y,b["x"+f]+a.x,b["y"+f]+a.y)}function Na(d,c,a,b){var f,e,h,g,n;f=2;ga(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(void 0!==b.x1&&void 0!==b.y1&&c.moveTo(b.x1+a.x,b.y1+a.y);;)if(e=b["x"+f],h=b["y"+f],g=b["cx"+(f-1)],n=b["cy"+(f-1)],void 0!==e&&void 0!==h&&void 0!==g&&void 0!==n)c.quadraticCurveTo(g+a.x,n+a.y,e+a.x,h+a.y),f+=1;else break;--f;ha(d,c,a,b,b["cx"+(f-1)]+
        a.x,b["cy"+(f-1)]+a.y,b["x"+f]+a.x,b["y"+f]+a.y)}function Oa(d,c,a,b){var f,e,h,g,n,t,y,E;f=2;e=1;ga(d,c,a,b,b.cx1+a.x,b.cy1+a.y,b.x1+a.x,b.y1+a.y);for(void 0!==b.x1&&void 0!==b.y1&&c.moveTo(b.x1+a.x,b.y1+a.y);;)if(h=b["x"+f],g=b["y"+f],n=b["cx"+e],t=b["cy"+e],y=b["cx"+(e+1)],E=b["cy"+(e+1)],void 0!==h&&void 0!==g&&void 0!==n&&void 0!==t&&void 0!==y&&void 0!==E)c.bezierCurveTo(n+a.x,t+a.y,y+a.x,E+a.y,h+a.x,g+a.y),f+=1,e+=2;else break;--f;e-=2;ha(d,c,a,b,b["cx"+(e+1)]+a.x,b["cy"+(e+1)]+a.y,b["x"+f]+
        a.x,b["y"+f]+a.y)}function Pa(d,c,a){c*=d._toRad;c-=F/2;return a*O(c)}function Qa(d,c,a){c*=d._toRad;c-=F/2;return a*U(c)}function Ra(d,c,a,b){var f,e,h,g,n,t,y;a===b?n=g=0:(g=a.x,n=a.y);f=1;e=g=t=b.x+g;h=n=y=b.y+n;ga(d,c,a,b,e+Pa(a,b.a1,b.l1),h+Qa(a,b.a1,b.l1),e,h);for(void 0!==b.x&&void 0!==b.y&&c.moveTo(e,h);;)if(e=b["a"+f],h=b["l"+f],void 0!==e&&void 0!==h)g=t,n=y,t+=Pa(a,e,h),y+=Qa(a,e,h),c.lineTo(t,y),f+=1;else break;ha(d,c,a,b,g,n,t,y)}function sa(d,c,a){isNaN(wa(a.fontSize))||(a.fontSize+=
        "px");c.font=a.fontStyle+" "+a.fontSize+" "+a.fontFamily}function ta(d,c,a,b){var f,e;f=ca.propCache;if(f.text===a.text&&f.fontStyle===a.fontStyle&&f.fontSize===a.fontSize&&f.fontFamily===a.fontFamily&&f.maxWidth===a.maxWidth&&f.lineHeight===a.lineHeight)a.width=f.width,a.height=f.height;else{a.width=c.measureText(b[0]).width;for(e=1;e<b.length;e+=1)f=c.measureText(b[e]).width,f>a.width&&(a.width=f);c=d.style.fontSize;d.style.fontSize=a.fontSize;a.height=ba(g.css(d,"fontSize"))*b.length*a.lineHeight;
        d.style.fontSize=c}}function Sa(d,c){var a=c.maxWidth,b=c.text.split("\n"),f=[],e,h,g,n,t;for(g=0;g<b.length;g+=1){n=b[g];t=n.split(" ");e=[];h="";if(1===t.length||d.measureText(n).width<a)e=[n];else{for(n=0;n<t.length;n+=1)d.measureText(h+t[n]).width>a&&(""!==h&&e.push(h),h=""),h+=t[n],n!==t.length-1&&(h+=" ");e.push(h)}f=f.concat(e.join("\n").replace(/( (\n))|( $)/gi,"$2").split("\n"))}return f}var Ia=L.document,Ta=L.Image,ab=L.getComputedStyle,ea=L.Math,wa=L.Number,ba=L.parseFloat,ma,Z=g.extend,
        ia=g.inArray,aa=function(d){return Object.prototype.toString.call(d).slice(8,-1).toLowerCase()},da=g.isFunction,Ga=g.isPlainObject,F=ea.PI,Xa=ea.round,bb=ea.abs,U=ea.sin,O=ea.cos,$a=ea.atan2,ua=L.Array.prototype.slice,cb=g.event.fix,X={},ca={dataCache:{},propCache:{},imageCache:{}},oa={rotate:0,scaleX:1,scaleY:1,translateX:0,translateY:0,masks:[]},V={},Ua="mousedown mousemove mouseup mouseover mouseout touchstart touchmove touchend".split(" "),Y={events:{},eventHooks:{},future:{}};na.baseDefaults=
    {align:"center",arrowAngle:90,arrowRadius:0,autosave:!0,baseline:"middle",bringToFront:!1,ccw:!1,closed:!1,compositing:"source-over",concavity:0,cornerRadius:0,count:1,cropFromCenter:!0,crossOrigin:null,cursors:null,disableEvents:!1,draggable:!1,dragGroups:null,groups:null,data:null,dx:null,dy:null,end:360,eventX:null,eventY:null,fillStyle:"transparent",fontStyle:"normal",fontSize:"12pt",fontFamily:"sans-serif",fromCenter:!0,height:null,imageSmoothing:!0,inDegrees:!0,intangible:!1,index:null,letterSpacing:null,
        lineHeight:1,layer:!1,mask:!1,maxWidth:null,miterLimit:10,name:null,opacity:1,r1:null,r2:null,radius:0,repeat:"repeat",respectAlign:!1,restrictDragToAxis:null,rotate:0,rounded:!1,scale:1,scaleX:1,scaleY:1,shadowBlur:0,shadowColor:"transparent",shadowStroke:!1,shadowX:0,shadowY:0,sHeight:null,sides:0,source:"",spread:0,start:0,strokeCap:"butt",strokeDash:null,strokeDashOffset:0,strokeJoin:"miter",strokeStyle:"transparent",strokeWidth:1,sWidth:null,sx:null,sy:null,text:"",translate:0,translateX:0,translateY:0,
        type:null,visible:!0,width:null,x:0,y:0};ma=new na;J.prototype=ma;Y.extend=function(d){d.name&&(d.props&&Z(ma,d.props),g.fn[d.name]=function a(b){var f,e,h,g;for(e=0;e<this.length;e+=1)if(f=this[e],h=K(f))g=new J(b),N(f,g,b,a),S(f,h,g),d.fn.call(f,h,g);return this},d.type&&(X.drawings[d.type]=d.name));return g.fn[d.name]};g.fn.getEventHooks=function(){var d;d={};0!==this.length&&(d=this[0],d=H(d),d=d.eventHooks);return d};g.fn.setEventHooks=function(d){var c,a;for(c=0;c<this.length;c+=1)g(this[c]),
        a=H(this[c]),Z(a.eventHooks,d);return this};g.fn.getLayers=function(d){var c,a,b,f,e=[];if(0!==this.length)if(c=this[0],a=H(c),a=a.layers,da(d))for(f=0;f<a.length;f+=1)b=a[f],d.call(c,b)&&e.push(b);else e=a;return e};g.fn.getLayer=function(d){var c,a,b,f;if(0!==this.length)if(c=this[0],a=H(c),c=a.layers,f=aa(d),d&&d.layer)b=d;else if("number"===f)0>d&&(d=c.length+d),b=c[d];else if("regexp"===f)for(a=0;a<c.length;a+=1){if(ja(c[a].name)&&c[a].name.match(d)){b=c[a];break}}else b=a.layer.names[d];return b};
    g.fn.getLayerGroup=function(d){var c,a,b,f=aa(d);if(0!==this.length)if(c=this[0],"array"===f)b=d;else if("regexp"===f)for(a in c=H(c),c=c.layer.groups,c){if(a.match(d)){b=c[a];break}}else c=H(c),b=c.layer.groups[d];return b};g.fn.getLayerIndex=function(d){var c=this.getLayers();d=this.getLayer(d);return ia(d,c)};g.fn.setLayer=function(d,c){var a,b,f,e,h,M,n;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=H(this[b]),e=g(this[b]).getLayer(d)){pa(a,f,e,c);qa(a,f,e,c);ka(c);for(h in c)c.hasOwnProperty(h)&&
    (M=c[h],n=aa(M),"object"===n&&Ga(M)?(e[h]=Z({},M),ka(e[h])):"array"===n?e[h]=M.slice(0):"string"===n?0===M.indexOf("+=")?e[h]+=ba(M.substr(2)):0===M.indexOf("-=")?e[h]-=ba(M.substr(2)):!isNaN(M)&&va(M)?e[h]=ba(M):e[h]=M:e[h]=M);Ca(a,f,e);Ea(a,f,e);!1===g.isEmptyObject(c)&&P(a,f,e,"change",c)}return this};g.fn.setLayers=function(d,c){var a,b,f,e;for(b=0;b<this.length;b+=1)for(a=g(this[b]),f=a.getLayers(c),e=0;e<f.length;e+=1)a.setLayer(f[e],d);return this};g.fn.setLayerGroup=function(d,c){var a,b,
        f,e;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(e=0;e<f.length;e+=1)a.setLayer(f[e],c);return this};g.fn.moveLayer=function(d,c){var a,b,f,e,h;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=H(this[b]),e=f.layers,h=a.getLayer(d))h.index=ia(h,e),e.splice(h.index,1),e.splice(c,0,h),0>c&&(c=e.length+c),h.index=c,P(a,f,h,"move");return this};g.fn.removeLayer=function(d){var c,a,b,f,e;for(a=0;a<this.length;a+=1)if(c=g(this[a]),b=H(this[a]),f=c.getLayers(),e=c.getLayer(d))e.index=ia(e,
        f),f.splice(e.index,1),delete e._layer,pa(c,b,e,{name:null}),qa(c,b,e,{groups:null}),P(c,b,e,"remove");return this};g.fn.removeLayers=function(d){var c,a,b,f,e,h;for(a=0;a<this.length;a+=1){c=g(this[a]);b=H(this[a]);f=c.getLayers(d);for(h=0;h<f.length;h+=1)e=f[h],c.removeLayer(e),--h;b.layer.names={};b.layer.groups={}}return this};g.fn.removeLayerGroup=function(d){var c,a,b,f;if(void 0!==d)for(a=0;a<this.length;a+=1)if(c=g(this[a]),H(this[a]),c.getLayers(),b=c.getLayerGroup(d))for(b=b.slice(0),f=
        0;f<b.length;f+=1)c.removeLayer(b[f]);return this};g.fn.addLayerToGroup=function(d,c){var a,b,f,e=[c];for(b=0;b<this.length;b+=1)a=g(this[b]),f=a.getLayer(d),f.groups&&(e=f.groups.slice(0),-1===ia(c,f.groups)&&e.push(c)),a.setLayer(f,{groups:e});return this};g.fn.removeLayerFromGroup=function(d,c){var a,b,f,e=[],h;for(b=0;b<this.length;b+=1)a=g(this[b]),f=a.getLayer(d),f.groups&&(h=ia(c,f.groups),-1!==h&&(e=f.groups.slice(0),e.splice(h,1),a.setLayer(f,{groups:e})));return this};V.cursors=["grab",
        "grabbing","zoom-in","zoom-out"];V.prefix=function(){var d=ab(Ia.documentElement,"");return"-"+(ua.call(d).join("").match(/-(moz|webkit|ms)-/)||""===d.OLink&&["","o"])[1]+"-"}();g.fn.triggerLayerEvent=function(d,c){var a,b,f;for(b=0;b<this.length;b+=1)a=g(this[b]),f=H(this[b]),(d=a.getLayer(d))&&P(a,f,d,c);return this};g.fn.drawLayer=function(d){var c,a,b;for(c=0;c<this.length;c+=1)b=g(this[c]),(a=K(this[c]))&&(a=b.getLayer(d))&&a.visible&&a._method&&(a._next=null,a._method.call(b,a));return this};
    g.fn.drawLayers=function(d){var c,a,b=d||{},f,e,h,M,n,t,y,E;(M=b.index)||(M=0);for(c=0;c<this.length;c+=1)if(d=g(this[c]),a=K(this[c])){n=H(this[c]);!1!==b.clear&&d.clearCanvas();a=n.layers;for(h=M;h<a.length;h+=1)if(f=a[h],f.index=h,b.resetFire&&(f._fired=!1),t=d,y=f,e=h+1,y&&y.visible&&y._method&&(y._next=e?e:null,y._method.call(t,y)),f._masks=n.transforms.masks.slice(0),f._method===g.fn.drawImage&&f.visible){E=!0;break}if(E)break;f=n;var w=e=y=t=void 0;t=null;for(y=f.intersecting.length-1;0<=y;--y)if(t=
            f.intersecting[y],t._masks){for(w=t._masks.length-1;0<=w;--w)if(e=t._masks[w],!e.intersects){t.intersects=!1;break}if(t.intersects&&!t.intangible)break}t&&t.intangible&&(t=null);f=t;t=n.event;y=t.type;if(n.drag.layer){e=d;var w=n,C=y,u=void 0,m=void 0,k=void 0,x=k=void 0,B=void 0,k=u=u=k=void 0,k=w.drag,x=(m=k.layer)&&m.dragGroups||[],u=w.layers;if("mousemove"===C||"touchmove"===C){if(k.dragging||(k.dragging=!0,m.dragging=!0,m.bringToFront&&(u.splice(m.index,1),m.index=u.push(m)),m._startX=m.x,m._startY=
            m.y,m._endX=m._eventX,m._endY=m._eventY,P(e,w,m,"dragstart")),k.dragging)for(u=m._eventX-(m._endX-m._startX),k=m._eventY-(m._endY-m._startY),m.dx=u-m.x,m.dy=k-m.y,"y"!==m.restrictDragToAxis&&(m.x=u),"x"!==m.restrictDragToAxis&&(m.y=k),P(e,w,m,"drag"),u=0;u<x.length;u+=1)if(k=x[u],B=w.layer.groups[k],m.groups&&B)for(k=0;k<B.length;k+=1)B[k]!==m&&("y"!==m.restrictDragToAxis&&"y"!==B[k].restrictDragToAxis&&(B[k].x+=m.dx),"x"!==m.restrictDragToAxis&&"x"!==B[k].restrictDragToAxis&&(B[k].y+=m.dy))}else if("mouseup"===
        C||"touchend"===C)k.dragging&&(m.dragging=!1,k.dragging=!1,P(e,w,m,"dragstop")),w.drag={}}e=n.lastIntersected;null===e||f===e||!e._hovered||e._fired||n.drag.dragging||(n.lastIntersected=null,e._fired=!0,e._hovered=!1,P(d,n,e,"mouseout"),d.css({cursor:n.cursor}));f&&(f[y]||X.mouseEvents[y]&&(y=X.mouseEvents[y]),f._event&&f.intersects&&(n.lastIntersected=f,!(f.mouseover||f.mouseout||f.cursors)||n.drag.dragging||f._hovered||f._fired||(f._fired=!0,f._hovered=!0,P(d,n,f,"mouseover")),f._fired||(f._fired=
        !0,t.type=null,P(d,n,f,y)),!f.draggable||f.disableEvents||"mousedown"!==y&&"touchstart"!==y||(n.drag.layer=f)));null!==f||n.drag.dragging||d.css({cursor:n.cursor});h===a.length&&(n.intersecting.length=0,n.transforms=la(oa),n.savedTransforms.length=0)}return this};g.fn.addLayer=function(d){var c,a;for(c=0;c<this.length;c+=1)if(a=K(this[c]))a=new J(d),a.layer=!0,N(this[c],a,d);return this};V.props=["width","height","opacity","lineHeight"];V.propsObj={};g.fn.animateLayer=function(){function d(a,b,c){return function(){var d,
        f;for(f=0;f<V.props.length;f+=1)d=V.props[f],c[d]=c["_"+d];for(var h in c)c.hasOwnProperty(h)&&-1!==h.indexOf(".")&&delete c[h];b.animating&&b.animated!==c||a.drawLayers();c._animating=!1;b.animating=!1;b.animated=null;e[4]&&e[4].call(a[0],c);P(a,b,c,"animateend")}}function c(a,b,c){return function(d,f){var h,g,m=!1;"_"===f.prop[0]&&(m=!0,f.prop=f.prop.replace("_",""),c[f.prop]=c["_"+f.prop]);-1!==f.prop.indexOf(".")&&(h=f.prop.split("."),g=h[0],h=h[1],c[g]&&(c[g][h]=f.now));c._pos!==f.pos&&(c._pos=
        f.pos,c._animating||b.animating||(c._animating=!0,b.animating=!0,b.animated=c),b.animating&&b.animated!==c||a.drawLayers());e[5]&&e[5].call(a[0],d,f,c);P(a,b,c,"animate",f);m&&(f.prop="_"+f.prop)}}var a,b,f,e=ua.call(arguments,0),h,M;"object"===aa(e[2])?(e.splice(2,0,e[2].duration||null),e.splice(3,0,e[3].easing||null),e.splice(4,0,e[4].complete||null),e.splice(5,0,e[5].step||null)):(void 0===e[2]?(e.splice(2,0,null),e.splice(3,0,null),e.splice(4,0,null)):da(e[2])&&(e.splice(2,0,null),e.splice(3,
        0,null)),void 0===e[3]?(e[3]=null,e.splice(4,0,null)):da(e[3])&&e.splice(3,0,null));for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=K(this[b]))f=H(this[b]),(h=a.getLayer(e[0]))&&h._method!==g.fn.draw&&(M=Z({},e[1]),M=Va(this[b],h,M),Fa(M,!0),Fa(h),h.style=V.propsObj,g(h).animate(M,{duration:e[2],easing:g.easing[e[3]]?e[3]:null,complete:d(a,f,h),step:c(a,f,h)}),P(a,f,h,"animatestart"));return this};g.fn.animateLayerGroup=function(d){var c,a,b=ua.call(arguments,0),f,e;for(a=0;a<this.length;a+=1)if(c=g(this[a]),
            f=c.getLayerGroup(d))for(e=0;e<f.length;e+=1)b[0]=f[e],c.animateLayer.apply(c,b);return this};g.fn.delayLayer=function(d,c){var a,b,f,e;c=c||0;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=H(this[b]),e=a.getLayer(d))g(e).delay(c),P(a,f,e,"delay");return this};g.fn.delayLayerGroup=function(d,c){var a,b,f,e,h;c=c||0;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(h=0;h<f.length;h+=1)e=f[h],a.delayLayer(e,c);return this};g.fn.stopLayer=function(d,c){var a,b,f,e;for(b=0;b<this.length;b+=
        1)if(a=g(this[b]),f=H(this[b]),e=a.getLayer(d))g(e).stop(c),P(a,f,e,"stop");return this};g.fn.stopLayerGroup=function(d,c){var a,b,f,e,h;for(b=0;b<this.length;b+=1)if(a=g(this[b]),f=a.getLayerGroup(d))for(h=0;h<f.length;h+=1)e=f[h],a.stopLayer(e,c);return this};(function(d){var c;for(c=0;c<d.length;c+=1)g.fx.step[d[c]]=Wa})("color backgroundColor borderColor borderTopColor borderRightColor borderBottomColor borderLeftColor fillStyle outlineColor strokeStyle shadowColor".split(" "));X.touchEvents=
    {mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};X.mouseEvents={touchstart:"mousedown",touchend:"mouseup",touchmove:"mousemove"};(function(d){var c;for(c=0;c<d.length;c+=1)Za(d[c])})("click dblclick mousedown mouseup mousemove mouseover mouseout touchstart touchmove touchend contextmenu".split(" "));g.event.fix=function(d){var c,a;d=cb.call(g.event,d);if(c=d.originalEvent)if(a=c.changedTouches,void 0!==d.pageX&&void 0===d.offsetX){if(c=g(d.currentTarget).offset())d.offsetX=d.pageX-
        c.left,d.offsetY=d.pageY-c.top}else a&&(c=g(d.currentTarget).offset())&&(d.offsetX=a[0].pageX-c.left,d.offsetY=a[0].pageY-c.top);return d};X.drawings={arc:"drawArc",bezier:"drawBezier",ellipse:"drawEllipse","function":"draw",image:"drawImage",line:"drawLine",path:"drawPath",polygon:"drawPolygon",slice:"drawSlice",quadratic:"drawQuadratic",rectangle:"drawRect",text:"drawText",vector:"drawVector",save:"saveCanvas",restore:"restoreCanvas",rotate:"rotateCanvas",scale:"scaleCanvas",translate:"translateCanvas"};
    g.fn.draw=function c(a){var b,f,e=new J(a);if(X.drawings[e.type]&&"function"!==e.type)this[X.drawings[e.type]](a);else for(b=0;b<this.length;b+=1)if(g(this[b]),f=K(this[b]))e=new J(a),N(this[b],e,a,c),e.visible&&e.fn&&e.fn.call(this[b],f,e);return this};g.fn.clearCanvas=function a(b){var f,e,h=new J(b);for(f=0;f<this.length;f+=1)if(e=K(this[f]))null===h.width||null===h.height?(e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,this[f].width,this[f].height),e.restore()):(N(this[f],h,b,a),Q(this[f],
        e,h,h.width,h.height),e.clearRect(h.x-h.width/2,h.y-h.height/2,h.width,h.height),h._transformed&&e.restore());return this};g.fn.saveCanvas=function b(f){var e,h,g,n,t;for(e=0;e<this.length;e+=1)if(h=K(this[e]))for(n=H(this[e]),g=new J(f),N(this[e],g,f,b),t=0;t<g.count;t+=1)fa(h,n);return this};g.fn.restoreCanvas=function f(e){var h,g,n,t,y;for(h=0;h<this.length;h+=1)if(g=K(this[h]))for(t=H(this[h]),n=new J(e),N(this[h],n,e,f),y=0;y<n.count;y+=1){var E=g,w=t;0===w.savedTransforms.length?w.transforms=
        la(oa):(E.restore(),w.transforms=w.savedTransforms.pop())}return this};g.fn.rotateCanvas=function e(h){var g,n,t,y;for(g=0;g<this.length;g+=1)if(n=K(this[g]))y=H(this[g]),t=new J(h),N(this[g],t,h,e),t.autosave&&fa(n,y),za(n,t,y.transforms);return this};g.fn.scaleCanvas=function h(g){var n,t,y,E;for(n=0;n<this.length;n+=1)if(t=K(this[n]))E=H(this[n]),y=new J(g),N(this[n],y,g,h),y.autosave&&fa(t,E),Aa(t,y,E.transforms);return this};g.fn.translateCanvas=function M(g){var t,y,E,w;for(t=0;t<this.length;t+=
        1)if(y=K(this[t]))w=H(this[t]),E=new J(g),N(this[t],E,g,M),E.autosave&&fa(y,w),Ba(y,E,w.transforms);return this};g.fn.drawRect=function n(g){var y,E,w,C,u,m,k,x,B;for(y=0;y<this.length;y+=1)if(E=K(this[y]))w=new J(g),N(this[y],w,g,n),w.visible&&(Q(this[y],E,w,w.width,w.height),S(this[y],E,w),E.beginPath(),w.width&&w.height&&(C=w.x-w.width/2,u=w.y-w.height/2,(x=bb(w.cornerRadius))?(m=w.x+w.width/2,k=w.y+w.height/2,0>w.width&&(B=C,C=m,m=B),0>w.height&&(B=u,u=k,k=B),0>m-C-2*x&&(x=(m-C)/2),0>k-u-2*x&&
    (x=(k-u)/2),E.moveTo(C+x,u),E.lineTo(m-x,u),E.arc(m-x,u+x,x,3*F/2,2*F,!1),E.lineTo(m,k-x),E.arc(m-x,k-x,x,0,F/2,!1),E.lineTo(C+x,k),E.arc(C+x,k-x,x,F/2,F,!1),E.lineTo(C,u+x),E.arc(C+x,u+x,x,F,3*F/2,!1),w.closed=!0):E.rect(C,u,w.width,w.height)),T(this[y],E,w),W(this[y],E,w));return this};g.fn.drawArc=function t(g){var E,w,C;for(E=0;E<this.length;E+=1)if(w=K(this[E]))C=new J(g),N(this[E],C,g,t),C.visible&&(Q(this[E],w,C,2*C.radius),S(this[E],w,C),w.beginPath(),Ka(this[E],w,C,C),T(this[E],w,C),W(this[E],
        w,C));return this};g.fn.drawEllipse=function y(g){var w,C,u,m,k;for(w=0;w<this.length;w+=1)if(C=K(this[w]))u=new J(g),N(this[w],u,g,y),u.visible&&(Q(this[w],C,u,u.width,u.height),S(this[w],C,u),m=4/3*u.width,k=u.height,C.beginPath(),C.moveTo(u.x,u.y-k/2),C.bezierCurveTo(u.x-m/2,u.y-k/2,u.x-m/2,u.y+k/2,u.x,u.y+k/2),C.bezierCurveTo(u.x+m/2,u.y+k/2,u.x+m/2,u.y-k/2,u.x,u.y-k/2),T(this[w],C,u),u.closed=!0,W(this[w],C,u));return this};g.fn.drawPolygon=function E(g){var C,u,m,k,x,B,v,z,p,l;for(C=0;C<this.length;C+=
        1)if(u=K(this[C]))if(m=new J(g),N(this[C],m,g,E),m.visible){Q(this[C],u,m,2*m.radius);S(this[C],u,m);x=2*F/m.sides;B=x/2;k=B+F/2;v=m.radius*O(B);u.beginPath();for(l=0;l<m.sides;l+=1)z=m.x+m.radius*O(k),p=m.y+m.radius*U(k),u.lineTo(z,p),m.concavity&&(z=m.x+(v+-v*m.concavity)*O(k+B),p=m.y+(v+-v*m.concavity)*U(k+B),u.lineTo(z,p)),k+=x;T(this[C],u,m);m.closed=!0;W(this[C],u,m)}return this};g.fn.drawSlice=function w(C){var u,m,k,x,B;for(u=0;u<this.length;u+=1)if(g(this[u]),m=K(this[u]))k=new J(C),N(this[u],
        k,C,w),k.visible&&(Q(this[u],m,k,2*k.radius),S(this[u],m,k),k.start*=k._toRad,k.end*=k._toRad,k.start-=F/2,k.end-=F/2,k.start=Ja(k.start),k.end=Ja(k.end),k.end<k.start&&(k.end+=2*F),x=(k.start+k.end)/2,B=k.radius*k.spread*O(x),x=k.radius*k.spread*U(x),k.x+=B,k.y+=x,m.beginPath(),m.arc(k.x,k.y,k.radius,k.start,k.end,k.ccw),m.lineTo(k.x,k.y),T(this[u],m,k),k.closed=!0,W(this[u],m,k));return this};g.fn.drawLine=function C(g){var m,k,x;for(m=0;m<this.length;m+=1)if(k=K(this[m]))x=new J(g),N(this[m],x,
        g,C),x.visible&&(Q(this[m],k,x),S(this[m],k,x),k.beginPath(),Ma(this[m],k,x,x),T(this[m],k,x),W(this[m],k,x));return this};g.fn.drawQuadratic=function u(g){var k,x,B;for(k=0;k<this.length;k+=1)if(x=K(this[k]))B=new J(g),N(this[k],B,g,u),B.visible&&(Q(this[k],x,B),S(this[k],x,B),x.beginPath(),Na(this[k],x,B,B),T(this[k],x,B),W(this[k],x,B));return this};g.fn.drawBezier=function m(g){var x,B,v;for(x=0;x<this.length;x+=1)if(B=K(this[x]))v=new J(g),N(this[x],v,g,m),v.visible&&(Q(this[x],B,v),S(this[x],
        B,v),B.beginPath(),Oa(this[x],B,v,v),T(this[x],B,v),W(this[x],B,v));return this};g.fn.drawVector=function k(g){var B,v,z;for(B=0;B<this.length;B+=1)if(v=K(this[B]))z=new J(g),N(this[B],z,g,k),z.visible&&(Q(this[B],v,z),S(this[B],v,z),v.beginPath(),Ra(this[B],v,z,z),T(this[B],v,z),W(this[B],v,z));return this};g.fn.drawPath=function x(g){var v,z,p,l,A;for(v=0;v<this.length;v+=1)if(z=K(this[v]))if(p=new J(g),N(this[v],p,g,x),p.visible){Q(this[v],z,p);S(this[v],z,p);z.beginPath();for(l=1;;)if(A=p["p"+
        l],void 0!==A)A=new J(A),"line"===A.type?Ma(this[v],z,p,A):"quadratic"===A.type?Na(this[v],z,p,A):"bezier"===A.type?Oa(this[v],z,p,A):"vector"===A.type?Ra(this[v],z,p,A):"arc"===A.type&&Ka(this[v],z,p,A),l+=1;else break;T(this[v],z,p);W(this[v],z,p)}return this};g.fn.drawText=function B(v){var z,p,l,A,D,r,G,R,I,H;for(z=0;z<this.length;z+=1)if(g(this[z]),p=K(this[z]))if(l=new J(v),A=N(this[z],l,v,B),l.visible){p.textBaseline=l.baseline;p.textAlign=l.align;sa(this[z],p,l);D=null!==l.maxWidth?Sa(p,l):
        l.text.toString().split("\n");ta(this[z],p,l,D);A&&(A.width=l.width,A.height=l.height);Q(this[z],p,l,l.width,l.height);S(this[z],p,l);G=l.x;"left"===l.align?l.respectAlign?l.x+=l.width/2:G-=l.width/2:"right"===l.align&&(l.respectAlign?l.x-=l.width/2:G+=l.width/2);if(l.radius)for(G=ba(l.fontSize),null===l.letterSpacing&&(l.letterSpacing=G/500),r=0;r<D.length;r+=1){p.save();p.translate(l.x,l.y);A=D[r];R=A.length;p.rotate(-(F*l.letterSpacing*(R-1))/2);for(H=0;H<R;H+=1)I=A[H],0!==H&&p.rotate(F*l.letterSpacing),
        p.save(),p.translate(0,-l.radius),p.fillText(I,0,0),p.restore();l.radius-=G;l.letterSpacing+=G/(1E3*F);p.restore()}else for(r=0;r<D.length;r+=1)A=D[r],R=l.y+r*l.height/D.length-(D.length-1)*l.height/D.length/2,p.shadowColor=l.shadowColor,p.fillText(A,G,R),"transparent"!==l.fillStyle&&(p.shadowColor="transparent"),0!==l.strokeWidth&&p.strokeText(A,G,R);R=0;"top"===l.baseline?R+=l.height/2:"bottom"===l.baseline&&(R-=l.height/2);l._event&&(p.beginPath(),p.rect(l.x-l.width/2,l.y-l.height/2+R,l.width,
        l.height),T(this[z],p,l),p.closePath());l._transformed&&p.restore()}ca.propCache=l;return this};g.fn.measureText=function(g){var v,z;v=this.getLayer(g);if(!v||v&&!v._layer)v=new J(g);if(g=K(this[0]))sa(this[0],g,v),z=Sa(g,v),ta(this[0],g,v,z);return v};g.fn.drawImage=function v(z){function p(l,v,p,q,r){return function(){var z=g(l);null===q.width&&null===q.sWidth&&(q.width=q.sWidth=I.width);null===q.height&&null===q.sHeight&&(q.height=q.sHeight=I.height);r&&(r.width=q.width,r.height=q.height);null!==
    q.sWidth&&null!==q.sHeight&&null!==q.sx&&null!==q.sy?(null===q.width&&(q.width=q.sWidth),null===q.height&&(q.height=q.sHeight),q.cropFromCenter&&(q.sx+=q.sWidth/2,q.sy+=q.sHeight/2),0>q.sy-q.sHeight/2&&(q.sy=q.sHeight/2),q.sy+q.sHeight/2>I.height&&(q.sy=I.height-q.sHeight/2),0>q.sx-q.sWidth/2&&(q.sx=q.sWidth/2),q.sx+q.sWidth/2>I.width&&(q.sx=I.width-q.sWidth/2),Q(l,v,q,q.width,q.height),S(l,v,q),v.drawImage(I,q.sx-q.sWidth/2,q.sy-q.sHeight/2,q.sWidth,q.sHeight,q.x-q.width/2,q.y-q.height/2,q.width,
        q.height)):(Q(l,v,q,q.width,q.height),v.drawImage(I,q.x-q.width/2,q.y-q.height/2,q.width,q.height));v.beginPath();v.rect(q.x-q.width/2,q.y-q.height/2,q.width,q.height);T(l,v,q);v.closePath();q._transformed&&v.restore();ya(v,p,q);q.layer?P(z,p,r,"load"):q.load&&q.load.call(z[0],r);q.layer&&(r._masks=p.transforms.masks.slice(0),q._next&&z.drawLayers({clear:!1,resetFire:!0,index:q._next}))}}var l,A,D,r,G,R,I,F,L,O=ca.imageCache;for(A=0;A<this.length;A+=1)if(l=this[A],D=K(this[A]))r=H(this[A]),G=new J(z),
        R=N(this[A],G,z,v),G.visible&&(L=G.source,F=L.getContext,L.src||F?I=L:L&&(O[L]&&O[L].complete?I=O[L]:(I=new Ta,L.match(/^data:/i)||(I.crossOrigin=G.crossOrigin),I.src=L,O[L]=I)),I&&(I.complete||F?p(l,D,r,G,R)():(I.onload=p(l,D,r,G,R),I.src=I.src)));return this};g.fn.createPattern=function(v){function z(){r=l.createPattern(D,A.repeat);A.load&&A.load.call(p[0],r)}var p=this,l,A,D,r,G;(l=K(p[0]))?(A=new J(v),G=A.source,da(G)?(D=g("<canvas />")[0],D.width=A.width,D.height=A.height,v=K(D),G.call(D,v),
        z()):(v=G.getContext,G.src||v?D=G:(D=new Ta,G.match(/^data:/i)||(D.crossOrigin=A.crossOrigin),D.src=G),D.complete||v?z():(D.onload=z(),D.src=D.src))):r=null;return r};g.fn.createGradient=function(g){var z,p=[],l,A,D,r,G,H,I;g=new J(g);if(z=K(this[0])){g.x1=g.x1||0;g.y1=g.y1||0;g.x2=g.x2||0;g.y2=g.y2||0;z=null!==g.r1&&null!==g.r2?z.createRadialGradient(g.x1,g.y1,g.r1,g.x2,g.y2,g.r2):z.createLinearGradient(g.x1,g.y1,g.x2,g.y2);for(r=1;void 0!==g["c"+r];r+=1)void 0!==g["s"+r]?p.push(g["s"+r]):p.push(null);
        l=p.length;null===p[0]&&(p[0]=0);null===p[l-1]&&(p[l-1]=1);for(r=0;r<l;r+=1){if(null!==p[r]){H=1;I=0;A=p[r];for(G=r+1;G<l;G+=1)if(null!==p[G]){D=p[G];break}else H+=1;A>D&&(p[G]=p[r])}else null===p[r]&&(I+=1,p[r]=A+(D-A)/H*I);z.addColorStop(p[r],g["c"+(r+1)])}}else z=null;return z};g.fn.setPixels=function z(g){var l,A,D,r,G,H,I,F,L;for(A=0;A<this.length;A+=1)if(l=this[A],D=K(l)){r=new J(g);N(l,r,g,z);Q(this[A],D,r,r.width,r.height);if(null===r.width||null===r.height)r.width=l.width,r.height=l.height,
        r.x=r.width/2,r.y=r.height/2;if(0!==r.width&&0!==r.height){H=D.getImageData(r.x-r.width/2,r.y-r.height/2,r.width,r.height);I=H.data;L=I.length;if(r.each)for(F=0;F<L;F+=4)G={r:I[F],g:I[F+1],b:I[F+2],a:I[F+3]},r.each.call(l,G,r),I[F]=G.r,I[F+1]=G.g,I[F+2]=G.b,I[F+3]=G.a;D.putImageData(H,r.x-r.width/2,r.y-r.height/2);D.restore()}}return this};g.fn.getCanvasImage=function(g,p){var l,A=null;0!==this.length&&(l=this[0],l.toDataURL&&(void 0===p&&(p=1),A=l.toDataURL("image/"+g,p)));return A};g.fn.detectPixelRatio=
        function(z){var p,l,A,D,r,G,F;for(l=0;l<this.length;l+=1)p=this[l],g(this[l]),A=K(p),F=H(this[l]),F.scaled||(D=L.devicePixelRatio||1,r=A.webkitBackingStorePixelRatio||A.mozBackingStorePixelRatio||A.msBackingStorePixelRatio||A.oBackingStorePixelRatio||A.backingStorePixelRatio||1,D/=r,1!==D&&(r=p.width,G=p.height,p.width=r*D,p.height=G*D,p.style.width=r+"px",p.style.height=G+"px",A.scale(D,D)),F.pixelRatio=D,F.scaled=!0,z&&z.call(p,D));return this};Y.clearCache=function(){for(var g in ca)ca.hasOwnProperty(g)&&
    (ca[g]={})};g.support.canvas=void 0!==g("<canvas />")[0].getContext;Z(Y,{defaults:ma,setGlobalProps:S,transformShape:Q,detectEvents:T,closePath:W,setCanvasFont:sa,measureText:ta});g.jCanvas=Y;g.jCanvasObject=J});

