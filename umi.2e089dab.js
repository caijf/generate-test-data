(function(e){function a(a){for(var n,o,s=a[0],c=a[1],i=a[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var c=t[s];0!==l[c]&&(n=!1)}n&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},l={0:0},r=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/generate-test-data/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var i=0;i<s.length;i++)a(s[i]);var u=c;r.push([0,1]),t()})({0:function(e,a,t){e.exports=t("tB8F")},"1Fg/":function(e,a,t){"use strict";t.r(a);t("1YHl");var n=t("VNzZ"),l=(t("fu2T"),t("gK9i")),r=(t("14J3"),t("BMrR")),o=(t("jCWc"),t("kPKH")),s=(t("/zsF"),t("PArb")),c=t("tJVT"),i=t("q1tI"),u=t("TDIF"),m=t("unPl"),d=t("+tnx"),p=t("X+Qv"),b=t("wUTL"),f=t("jmhH"),v=t("srlG"),E=t("fq/a"),g=t("GH+L"),h=t("FxZV"),j=t("cpxw"),y=t("knIx"),O=[{label:"\u5355\u8272",value:"single"},{label:"\u6e10\u53d8",value:"gradient"}],k=[{label:"\u7ebf\u6027",value:"linear"},{label:"\u5f84\u5411",value:"radial"}],C=e=>{var a=e.form,t=e.listNamePath;return i["createElement"](i["Fragment"],null,i["createElement"](g["a"],{name:[t,"colorType"],label:"\u989c\u8272\u7c7b\u578b",options:O,radioGroupProps:{optionType:"button",buttonStyle:"solid"}}),i["createElement"](h["a"],{shouldUpdate:(e,a)=>e[t].colorType!==a[t].colorType,style:{marginBottom:0}},(()=>a.getFieldValue([t,"colorType"])===O[0].value?i["createElement"](j["a"],{name:[t,"color"],label:"\u989c\u8272",colorProps:{placement:"topLeft"}}):i["createElement"](i["Fragment"],null,i["createElement"](g["a"],{name:[t,"gradient","type"],label:"\u6e10\u53d8\u7c7b\u578b",options:k}),i["createElement"](r["a"],null,i["createElement"](o["a"],{span:12},i["createElement"](y["a"],{name:[t,"gradient","colorStops"]},(e=>i["createElement"](h["a"],{label:"\u6e10\u53d8\u8272"},e.map(((a,t)=>i["createElement"]("span",{key:a.key},i["createElement"](j["a"],{name:[a.name,"color"],label:"\u6e10\u53d8\u8272",noStyle:!0,colorProps:{placement:"topLeft"}}),i["createElement"](f["a"],{name:[a.name,"offset"],label:"\u6e10\u53d8\u504f\u79fb",inputProps:{min:0,max:1,step:.1},hidden:!0}),t!==e.length-1?" ":""))))))),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:[t,"gradient","rotation"],label:"\u65cb\u8f6c",inputProps:{min:0}})))))))},x=C,w=(t("OaEy"),t("2fM7")),P=(t("+L6B"),t("2/Rp")),T=t("b/rc"),S=t.n(T),N=t("I/S7"),D=t("dF/Y"),z=t("52V8"),A=t.n(z),R=[{label:"PNG",value:"png"},{label:"JPEG",value:"jpeg"},{label:"WEBP",value:"webp"},{label:"SVG",value:"svg"}],I=e=>{var a=e.options,t=i["useRef"](),n=i["useRef"](null),l=Object(N["a"])(!1),r=Object(c["a"])(l,2),o=r[0],u=r[1],m=i["useState"](R[0].value),d=Object(c["a"])(m,2),p=d[0],b=d[1],f=i["useCallback"]((()=>{var e;null===(e=t.current)||void 0===e||e.download({extension:p})}),[p]);return i["useEffect"]((()=>{t.current||(t.current=new S.a,t.current.append(n.current)),t.current.update(a),setTimeout((()=>{var e;u(((null===(e=n.current)||void 0===e?void 0:e.querySelectorAll("*").length)||0)>0)}),100)}),[a,u]),i["createElement"]("div",{className:A.a.wrapper},i["createElement"]("div",{ref:n,className:A.a.qrcode}),o&&i["createElement"]("div",{className:A.a.download},i["createElement"](P["a"],{size:"large",icon:i["createElement"](D["a"],null),onClick:f},"\u70b9\u51fb\u4e0b\u8f7d"),i["createElement"](s["a"],{type:"vertical"}),i["createElement"](w["a"],{options:R,value:p,onChange:b,size:"large",style:{width:100}})))},B=I,q=t("rAM+"),V=new Map;function F(e){if(V.has(e))return V.get(e);var a,t=Object(q["a"])(V);try{for(t.s();!(a=t.n()).done;){var n=a.value,l=Object(c["a"])(n,2),r=l[0],o=l[1];URL.revokeObjectURL(o),V.delete(r)}}catch(s){t.e(s)}finally{t.f()}return V.set(e,URL.createObjectURL(e)),V.get(e)}var M=F,J=[{label:"canvas",value:"canvas"},{label:"svg",value:"svg"}],_=[{label:"\u6b63\u65b9\u5f62",value:"square"},{label:"\u5706\u5f62",value:"circle"}],L=[{label:"Numeric",value:"Numeric"},{label:"Alphanumeric",value:"Alphanumeric"},{label:"Byte",value:"Byte"},{label:"Kanji",value:"Kanji"}],U=[{label:"\u4f4e",value:"L"},{label:"\u4e2d\u7b49",value:"M"},{label:"\u9ad8",value:"Q"},{label:"\u6700\u9ad8",value:"H"}],Q=[{label:"anonymous",value:"anonymous"},{label:"use-credentials",value:"use-credentials"}],Y=[{label:"\u5706\u5f62",value:"rounded"},{label:"\u70b9",value:"dots"},{label:"\u4f18\u96c5",value:"classy"},{label:"\u4f18\u96c5\u5706\u6da6",value:"classy-rounded"},{label:"\u6b63\u65b9\u5f62",value:"square"},{label:"\u8d85\u5706\u89d2",value:"extra-rounded"}],K=[{label:"\u9ed8\u8ba4",value:""},{label:"\u70b9",value:"dot"},{label:"\u6b63\u65b9\u5f62",value:"square"},{label:"\u8d85\u5706\u89d2",value:"extra-rounded"}],X=[{label:"\u9ed8\u8ba4",value:""},{label:"\u70b9",value:"dot"},{label:"\u6b63\u65b9\u5f62",value:"square"}],Z={data:"https://caijf.github.io/generate-test-data/index.html",type:"canvas",width:300,height:300,shape:"square",margin:0,qrOptions:{typeNumber:0,mode:"Byte",errorCorrectionLevel:"Q"},imageOptions:{hideBackgroundDots:!0,imageSize:.4,margin:0,crossOrigin:"anonymous"},dotsOptions:{type:"square",colorType:"single",color:"#000",gradient:{type:"linear",rotation:0,colorStops:[{offset:0,color:"#000"},{offset:1,color:"#000"}]}},backgroundOptions:{colorType:"single",color:"#fff",gradient:{type:"linear",rotation:0,colorStops:[{offset:0,color:"#fff"},{offset:1,color:"#fff"}]}},cornersSquareOptions:{type:"",colorType:"single",color:"",gradient:{type:"linear",rotation:0,colorStops:[{offset:0,color:""},{offset:1,color:""}]}},cornersDotOptions:{type:"",colorType:"single",color:"",gradient:{type:"linear",rotation:0,colorStops:[{offset:0,color:""},{offset:1,color:""}]}}};function H(e){e&&("single"===e.colorType?e.gradient=null:e.gradient&&(e.color=void 0,e.gradient.rotation=e.gradient.rotation/180*Math.PI),delete e.colorType)}function W(e){var a=JSON.parse(JSON.stringify(e));return Array.isArray(e.image)&&e.image.length>0?a.image="string"===typeof e.image[0].url?e.image[0].url:M(e.image[0].originFileObj):a.image=void 0,H(a.dotsOptions),H(a.backgroundOptions),H(a.cornersDotOptions),H(a.cornersSquareOptions),a}function G(){var e=m["a"].useForm(),a=Object(c["a"])(e,1),t=a[0],g=i["useState"]((()=>W(Z))),h=Object(c["a"])(g,2),j=h[0],y=h[1],O=i["useRef"](),k=Object(u["a"])(y,300),C=k.run,w=e=>{C(W(e))};return i["createElement"](E["a"],{leftTitle:"\u57fa\u672c\u4fe1\u606f",leftContent:i["createElement"](m["a"],{form:t,submitter:!1,initialValues:Z,onFinish:w,onValuesChange:(e,a)=>{var n,l,r,o;clearTimeout(O.current),null!==e&&void 0!==e&&null!==(n=e.dotsOptions)&&void 0!==n&&n.colorType||null!==e&&void 0!==e&&null!==(l=e.backgroundOptions)&&void 0!==l&&l.colorType||null!==e&&void 0!==e&&null!==(r=e.cornersDotOptions)&&void 0!==r&&r.colorType||null!==e&&void 0!==e&&null!==(o=e.cornersSquareOptions)&&void 0!==o&&o.colorType?O.current=setTimeout((()=>{t.submit()}),300):w(a)}},i["createElement"](d["a"],{name:"data",label:"\u6587\u672c/\u7f51\u5740"}),i["createElement"](s["a"],{orientation:"left"},"\u914d\u7f6e\u9879"),i["createElement"](r["a"],null,i["createElement"](o["a"],{span:24},i["createElement"](p["a"],{name:"image",label:"Logo/\u56fe\u7247",type:"image",maxCount:1})),i["createElement"](o["a"],{span:12},i["createElement"](b["a"],{name:"shape",label:"\u5f62\u72b6",options:_})),i["createElement"](o["a"],{span:12},i["createElement"](b["a"],{name:"type",label:"\u6e32\u67d3\u5143\u7d20",options:J})),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:"width",label:"\u5bbd",inputProps:{min:150}})),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:"height",label:"\u9ad8",inputProps:{min:150}})),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:"margin",label:"\u5916\u8fb9\u7559\u767d",inputProps:{min:0}}))),i["createElement"](l["a"],null,i["createElement"](l["a"].Panel,{header:"Logo/\u56fe\u7247\u9009\u9879",key:"2",forceRender:!0},i["createElement"](r["a"],null,i["createElement"](o["a"],{span:12},i["createElement"](v["a"],{name:["imageOptions","hideBackgroundDots"],label:"\u9690\u85cf\u80cc\u666f\u70b9"})),i["createElement"](o["a"],{span:12},i["createElement"](b["a"],{name:["imageOptions","crossOrigin"],label:"crossOrigin",options:Q})),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:["imageOptions","imageSize"],label:"\u56fe\u50cf\u5927\u5c0f",inputProps:{min:0,max:1,step:.1}})),i["createElement"](o["a"],{span:12},i["createElement"](f["a"],{name:["imageOptions","margin"],label:"\u5916\u8fb9\u7559\u767d",inputProps:{min:0}})))),i["createElement"](l["a"].Panel,{header:"\u80cc\u666f\u9009\u9879",key:"4",forceRender:!0},i["createElement"](x,{form:t,listNamePath:"backgroundOptions"})),i["createElement"](l["a"].Panel,{header:"\u70b9\u9009\u9879",key:"3",forceRender:!0},i["createElement"](b["a"],{name:["dotsOptions","type"],label:"\u6837\u5f0f",options:Y}),i["createElement"](x,{form:t,listNamePath:"dotsOptions"})),i["createElement"](l["a"].Panel,{header:"\u89d2\u843d\u65b9\u6846\u9009\u9879",key:"5",forceRender:!0},i["createElement"](b["a"],{name:["cornersSquareOptions","type"],label:"\u6837\u5f0f",options:K}),i["createElement"](x,{form:t,listNamePath:"cornersSquareOptions"})),i["createElement"](l["a"].Panel,{header:"\u89d2\u843d\u70b9\u9009\u9879",key:"6",forceRender:!0},i["createElement"](b["a"],{name:["cornersDotOptions","type"],label:"\u6837\u5f0f",options:X}),i["createElement"](x,{form:t,listNamePath:"cornersDotOptions"})),i["createElement"](l["a"].Panel,{header:"\u4e8c\u7ef4\u7801\u9009\u9879",key:"1",forceRender:!0},i["createElement"](f["a"],{name:["qrOptions","typeNumber"],label:"\u578b\u53f7",inputProps:{min:0,max:40}}),i["createElement"](b["a"],{name:["qrOptions","mode"],label:"\u6a21\u5f0f",options:L}),i["createElement"](b["a"],{name:["qrOptions","errorCorrectionLevel"],label:"\u7ea0\u9519\u7ea7\u522b",options:U})))),rightTitle:"\u4e8c\u7ef4\u7801",rightContent:i["createElement"](n["a"],null,i["createElement"](B,{options:j}))})}a["default"]=G},"52V8":function(e,a,t){e.exports={wrapper:"wrapper___3j22_",qrcode:"qrcode___VDNok",download:"download___3trfc"}},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},Bh0z:function(e,a,t){"use strict";t.r(a);t("1YHl");var n=t("VNzZ"),l=t("0Owb"),r=(t("14J3"),t("BMrR")),o=(t("jCWc"),t("kPKH")),s=(t("/zsF"),t("PArb")),c=t("tJVT"),i=(t("fu2T"),t("gK9i")),u=t("q1tI"),m=t("unPl"),d=t("+tnx"),p=t("wUTL"),b=t("cpxw"),f=t("jmhH"),v=t("srlG"),E=t("JVNx"),g=t("TDIF"),h=t("fq/a"),j=t("PpiC"),y=t("YsXA"),O=t.n(y),k=["CODE128","CODE128A","CODE128B","CODE128C"],C=e=>!e||k.includes(e),x=e=>{var a=e.type,t=void 0===a?"canvas":a,n=e.value,l=Object(j["a"])(e,["type","value"]),r=u["useRef"](null),o=u["useState"](null),s=Object(c["a"])(o,2),i=s[0],m=s[1],d=()=>{if(r.current){var e=l||{},a=n||void 0;C(e.format)?(delete e.flat,delete e.lastChar):"EAN13"===e.format?delete e.ean128:"EAN8"===e.format||"UPC"===e.format?(delete e.ean128,delete e.lastChar):(delete e.ean128,delete e.flat,delete e.lastChar);try{O()(r.current,a,e),m(null)}catch(t){m(t)}}};return u["useEffect"]((()=>{d()})),u["createElement"](u["Fragment"],null,u["createElement"]("div",{style:{display:i?"none":"block"}},n?u["createElement"](t,{ref:r,key:t}):null),i)},w=x,P=i["a"].Panel,T=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"},{value:"img",label:"img"}],S=[{label:"CODE128",value:"CODE128"},{label:"CODE128A",value:"CODE128A"},{label:"CODE128B",value:"CODE128B"},{label:"CODE128C",value:"CODE128C"},{label:"EAN13",value:"EAN13"},{label:"EAN8",value:"EAN8"},{label:"EAN5",value:"EAN5"},{label:"EAN2",value:"EAN2"},{label:"UPC",value:"UPC"},{label:"CODE39",value:"CODE39"},{label:"ITF",value:"ITF"},{label:"ITF-14",value:"ITF-14"},{label:"MSI",value:"MSI"},{label:"MSI10",value:"MSI10"},{label:"MSI11",value:"MSI11"},{label:"MSI1010",value:"MSI1010"},{label:"MSI1110",value:"MSI1110"},{label:"Pharmacode",value:"pharmacode"},{label:"Codabar",value:"codabar"}],N=[{label:"\u4e0b",value:"bottom"},{label:"\u4e0a",value:"top"}],D=[{label:"\u5de6",value:"left"},{label:"\u4e2d",value:"center"},{label:"\u53f3",value:"right"}],z=[{label:"monospace",value:"monospace"},{label:"fantasy",value:"fantasy"},{label:"OCRB",value:"OCRB"}],A=[{label:"\u6b63\u5e38",value:""},{label:"\u7c97\u4f53",value:"bold"},{label:"\u659c\u4f53",value:"italic"},{label:"\u7c97\u4f53\uff0c\u659c\u4f53",value:"bold italic"}],R={element:"canvas",text:"123456789",options:{format:"CODE128",lineColor:"#000",background:"#fff",width:2,height:100,displayValue:!0,margin:10,font:"monospace",fontSize:20,textAlign:"center",textPosition:"bottom",textMargin:2,fontOptions:"",ean128:!1,flat:!1,lastChar:""}};function I(){var e=u["useState"](R),a=Object(c["a"])(e,2),t=a[0],j=a[1],y=Object(g["a"])(j,300);return u["createElement"](h["a"],{leftTitle:"\u57fa\u672c\u4fe1\u606f",leftContent:u["createElement"](m["a"],{submitter:!1,initialValues:R,onValuesChange:(e,a)=>y.run(a)},u["createElement"](d["a"],{name:"text",label:"\u6761\u5f62\u7801\u5185\u5bb9"}),u["createElement"](s["a"],{orientation:"left"},"\u914d\u7f6e\u9879"),u["createElement"](r["a"],null,u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:["options","format"],label:"\u683c\u5f0f",options:S})),u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:"element",label:"\u6e32\u67d3\u5143\u7d20",options:T})),u["createElement"](o["a"],{span:12},u["createElement"](b["a"],{name:["options","lineColor"],label:"\u7ebf\u6761\u989c\u8272"})),u["createElement"](o["a"],{span:12},u["createElement"](b["a"],{name:["options","background"],label:"\u80cc\u666f\u989c\u8272"})),u["createElement"](o["a"],{span:12},u["createElement"](f["a"],{name:["options","width"],label:"\u7ebf\u6761\u5bbd"})),u["createElement"](o["a"],{span:12},u["createElement"](f["a"],{name:["options","height"],label:"\u7ebf\u6761\u9ad8",inputProps:{min:0}})),u["createElement"](o["a"],{span:12},u["createElement"](f["a"],{name:["options","margin"],label:"\u5916\u8fb9\u7559\u767d",inputProps:{min:0}})),u["createElement"](o["a"],{span:12},u["createElement"](v["a"],{name:["options","displayValue"],label:"\u663e\u793a\u6587\u672c"}))),u["createElement"](i["a"],null,u["createElement"](P,{header:"\u66f4\u591a\u914d\u7f6e",key:"1",forceRender:!0},u["createElement"](r["a"],null,u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:["options","font"],label:"\u6587\u672c\u5b57\u4f53",options:z})),u["createElement"](o["a"],{span:12},u["createElement"](f["a"],{name:["options","fontSize"],label:"\u6587\u5b57\u5927\u5c0f",inputProps:{min:0}})),u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:["options","fontOptions"],label:"\u6587\u5b57\u7c97\u7ec6",options:A})),u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:["options","textAlign"],label:"\u6587\u672c\u5bf9\u9f50",options:D})),u["createElement"](o["a"],{span:12},u["createElement"](p["a"],{name:["options","textPosition"],label:"\u6587\u672c\u4f4d\u7f6e",options:N,style:{marginBottom:0}})),u["createElement"](o["a"],{span:12},u["createElement"](f["a"],{name:["options","textMargin"],label:"\u6587\u672c\u95f4\u8ddd",style:{marginBottom:0}})))),u["createElement"](P,{header:"\u7279\u6b8a\u914d\u7f6e",key:"2",forceRender:!0},u["createElement"](r["a"],null,u["createElement"](o["a"],{span:12},u["createElement"](v["a"],{name:["options","ean128"],label:"ean128",tooltip:"\u4ec5 CODE128 \u751f\u6548"})),u["createElement"](o["a"],{span:12},u["createElement"](v["a"],{name:["options","flat"],label:"flat",tooltip:"\u4ec5 EAN13 EAN8 UPC \u751f\u6548"})),u["createElement"](o["a"],{span:12},u["createElement"](E["a"],{name:["options","lastChar"],label:"lastChar",tooltip:"\u4ec5 EAN13 \u751f\u6548"})))))),rightTitle:"\u6761\u5f62\u7801",rightContent:u["createElement"](n["a"],null,u["createElement"](w,Object(l["a"])({type:t.element,value:t.text},t.options)))})}a["default"]=I},"F+kV":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u4ecb\u7ecd"},l.a.createElement(r["AnchorLink"],{to:"#\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ecb\u7ecd"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u672c\u9879\u76ee\u6240\u751f\u6210\u7684\u6570\u636e\u4ec5\u7528\u4e8e\u6d4b\u8bd5\uff01\uff01\uff01")),l.a.createElement("p",null,l.a.createElement("strong",null,"\u672c\u9879\u76ee\u6240\u751f\u6210\u7684\u6570\u636e\u4ec5\u7528\u4e8e\u6d4b\u8bd5\uff01\uff01\uff01")),l.a.createElement("p",null,l.a.createElement("strong",null,"\u672c\u9879\u76ee\u6240\u751f\u6210\u7684\u6570\u636e\u4ec5\u7528\u4e8e\u6d4b\u8bd5\uff01\uff01\uff01")),l.a.createElement("h2",{id:"\u7d22\u5f15"},l.a.createElement(r["AnchorLink"],{to:"#\u7d22\u5f15","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7d22\u5f15"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"/bank-card"},"\u94f6\u884c\u5361\u751f\u6210\u5668")," - \u9002\u7528\u4e8e\u94f6\u884c\u5361 OCR \u6d4b\u8bd5\u573a\u666f"),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"/bar-code"},"\u6761\u5f62\u7801\u751f\u6210\u5668")," - \u6761\u5f62\u7801\u751f\u6210\u5668"),l.a.createElement("li",null,l.a.createElement(r["Link"],{to:"/qr-code"},"\u4e8c\u7ef4\u7801\u751f\u6210\u5668")," - \u4e8c\u7ef4\u7801\u751f\u6210\u5668"))))}));a["default"]=e=>{var a=l.a.useContext(r["context"]),t=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}},FfOG:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return r}));var n=t("YS25"),l={basename:"/"};window.routerBase&&(l.basename=window.routerBase);var r=Object({NODE_ENV:"production"}).__IS_SERVER?null:Object(n["b"])(l),o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e||(r=Object(n["b"])(l)),r}},MHWc:function(e,a,t){e.exports={cardNoWrapper:"cardNoWrapper___QU40-",cardNo:"cardNo___3QdJs"}},"N/pX":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),o=l.a.memo((e=>{e.demos;var a=t("Bh0z").default;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u6761\u5f62\u7801\u751f\u6210\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u6761\u5f62\u7801\u751f\u6210\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6761\u5f62\u7801\u751f\u6210\u5668"),l.a.createElement("p",null,"\u57fa\u4e8e ",l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/jsbarcode"},"jsbarcode")," \u5b9e\u73b0\u3002")),l.a.createElement(a,null)))}));a["default"]=e=>{var a=l.a.useContext(r["context"]),t=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}},RnhZ:function(e,a,t){var n={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function l(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id="RnhZ"},afA6:function(e,a,t){"use strict";t.r(a);var n=t("0Owb"),l=t("q1tI"),r=t.n(l),o=t("q3YX"),s={},c=t("x2v5"),i=t("KcUY"),u=t.n(i);a["default"]=e=>r.a.createElement(u.a,Object(n["a"])({},e,{config:o,demos:s,apis:c}))},bCY9:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rlch"),l=new n["b"]({validKeys:["modifyClientRenderOpts","patchRoutes","rootContainer","render","onRouteChange","__mfsu"]})},c6gP:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),o=l.a.memo((e=>{e.demos;var a=t("1Fg/").default;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u4e8c\u7ef4\u7801\u751f\u6210\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8c\u7ef4\u7801\u751f\u6210\u5668")),l.a.createElement(a,null)))}));a["default"]=e=>{var a=l.a.useContext(r["context"]),t=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}},dHR2:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),o=l.a.memo((e=>{e.demos;var a=t("gaTz").default;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u94f6\u884c\u5361\u751f\u6210\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u94f6\u884c\u5361\u751f\u6210\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u94f6\u884c\u5361\u751f\u6210\u5668"),l.a.createElement("p",null,"\u9002\u7528\u4e8e\u94f6\u884c\u5361 OCR \u6d4b\u8bd5\u573a\u666f\u3002")),l.a.createElement(a,null)))}));a["default"]=e=>{var a=l.a.useContext(r["context"]),t=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}},"fq/a":function(e,a,t){"use strict";t.d(a,"b",(function(){return m}));t("14J3");var n=t("BMrR"),l=t("k1fw"),r=(t("jCWc"),t("kPKH")),o=t("0Owb"),s=(t("/zsF"),t("PArb")),c=t("PpiC"),i=t("q1tI"),u={xs:24,xl:12},m=[{xs:8,sm:24},{xs:16,sm:24}],d=e=>{var a=e.leftTitle,t=e.leftContent,d=e.leftColProps,p=e.rightTitle,b=e.rightContent,f=e.rightColProps,v=Object(c["a"])(e,["leftTitle","leftContent","leftColProps","rightTitle","rightContent","rightColProps"]);return i["createElement"](n["a"],Object(o["a"])({gutter:m},v),i["createElement"](r["a"],Object(o["a"])({},u,d),a&&i["createElement"](s["a"],{orientation:"left"},a),t),i["createElement"](r["a"],Object(o["a"])({},u,f,{style:Object(l["a"])({background:"#f5f5f5"},null===f||void 0===f?void 0:f.style)}),p&&i["createElement"](s["a"],{orientation:"left"},p),b))};a["a"]=d},gaTz:function(e,a,t){"use strict";t.r(a);t("R9oj");var n=t("ECub"),l=(t("14J3"),t("BMrR")),r=(t("7Kak"),t("9yH6")),o=(t("jCWc"),t("kPKH")),s=(t("5NDa"),t("5rEg")),c=(t("5Dmo"),t("3S7+")),i=(t("+L6B"),t("2/Rp")),u=(t("O3gP"),t("lrIw")),m=(t("OaEy"),t("2fM7")),d=t("tJVT"),p=t("q1tI"),b=t("rLCj"),f=t("unPl"),v=t("wUTL"),E=t("MwOd"),g=t("9woW"),h=t("fq/a");function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e-- >0){var t=Math.floor(10*Math.random());return j(e,a+t)}return a}function y(e){for(var a=(e+"").replace(/\D/g,"").split("").reverse(),t=0,n=0;n<a.length;n++){var l=parseInt(a[n]);t+=n%2===0?2*l-(l>4?9:0):l}var r=t%10;return 0!==r?10-r:0}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,t=j(a-e.length-1,e);return t+y(t)}var k=O,C=t("MHWc"),x=t.n(C),w=[g["a"].CC,g["a"].DC,g["a"].SCC,g["a"].PC],P=w.map((e=>({label:g["b"][e],value:g["a"][e]}))),T=[{label:"\u65e0\u683c\u5f0f",value:"0"},{label:"\u56db\u4f4d\u95f4\u9694",value:"4"},{label:"\u516d\u4f4d\u95f4\u9694",value:"6"}];function S(){var e=f["a"].useForm(),a=Object(d["a"])(e,1),t=a[0],j=p["useState"]({bankCode:"ICBC",cardType:g["a"].DC}),y=Object(d["a"])(j,2),O=y[0],C=y[1],w=p["useState"]([]),S=Object(d["a"])(w,2),N=S[0],D=S[1],z=p["useState"](),A=Object(d["a"])(z,2),R=A[0],I=A[1],B=p["useState"]([]),q=Object(d["a"])(B,2),V=q[0],F=q[1],M=p["useState"](""),J=Object(d["a"])(M,2),_=J[0],L=J[1],U=p["useState"](T[1].value),Q=Object(d["a"])(U,2),Y=Q[0],K=Q[1],X=p["useState"](""),Z=Object(d["a"])(X,2),H=Z[0],W=Z[1];p["useEffect"]((()=>{t.setFieldsValue(O),D(g["d"].filter((e=>e.bankCode===O.bankCode&&e.cardType===O.cardType)))}),[t]),p["useEffect"]((()=>{var e=g["d"].filter((e=>e.bankCode===O.bankCode&&e.cardType===O.cardType));D(e),I(e[0])}),[O]);var G=p["useCallback"]((()=>{if(R){var e=new Array(10).fill(void 0).map((()=>k(R.cardBin,R.len).substring(R.cardBin.length)));F(e.map((e=>({label:e,value:e})))),L(e[0])}else F([])}),[R]);return p["useEffect"]((()=>{G()}),[R,G]),p["useEffect"]((()=>{if(R){var e=R.cardBin+_;"4"===Y?e=Object(E["a"])(e):"6"===Y&&(e=e.substring(0,6)+" "+e.substring(6)),W(e)}}),[_,R,Y]),p["createElement"](h["a"],{leftTitle:"\u57fa\u672c\u4fe1\u606f",leftContent:p["createElement"](f["a"],{form:t,onValuesChange:(e,a)=>C(a),submitter:!1},p["createElement"](v["a"],{name:"bankCode",label:"\u94f6\u884c",options:g["c"],selectProps:{showSearch:!0,fieldNames:{label:"name",value:"code"},filterOption:(e,a)=>(null===a||void 0===a?void 0:a.name.indexOf(e))>-1||(null===a||void 0===a?void 0:a.code.indexOf(e))>-1}}),p["createElement"](v["a"],{name:"cardType",label:"\u5361\u7c7b\u578b",options:P})),rightTitle:"\u5c55\u793a",rightContent:N.length>0&&R?p["createElement"](l["a"],{gutter:h["b"]},p["createElement"](o["a"],{span:24},p["createElement"](s["a"].Group,{compact:!0,style:{display:"flex"}},p["createElement"](m["a"],{options:N,placeholder:"\u8bf7\u9009\u62e9\u5361Bin",showSearch:!0,style:{width:130},fieldNames:{label:"cardBin",value:"cardBin"},value:R.cardBin,onChange:(e,a)=>I(a)}),p["createElement"](u["a"],{placeholder:"\u8bf7\u8f93\u5165\u94f6\u884c\u5361\u53f7",options:V,style:{flex:1},value:_,onChange:e=>L(e.replace(/\D/g,"").substring(0,R.len-R.cardBin.length))}),p["createElement"](c["a"],{title:"\u70b9\u51fb\u968f\u673a\u751f\u6210\u5361\u53f7"},p["createElement"](i["a"],{icon:p["createElement"](b["a"],null),onClick:G})))),p["createElement"](o["a"],{span:24},p["createElement"](r["a"].Group,{optionType:"button",buttonStyle:"solid",options:T,value:Y,onChange:e=>K(e.target.value)})),p["createElement"](o["a"],{span:24},p["createElement"]("div",{className:x.a.cardNoWrapper},p["createElement"]("div",{className:x.a.cardNo},H)))):p["createElement"](n["a"],{description:"\u6682\u65e0\u6570\u636e",style:{marginBottom:12}})})}a["default"]=S},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"\u4ecb\u7ecd","meta":{}},{"title":"\u94f6\u884c\u5361\u751f\u6210\u5668","path":"/bank-card","meta":{"__fallback":true},"children":[]},{"title":"\u6761\u5f62\u7801\u751f\u6210\u5668","path":"/bar-code","meta":{"__fallback":true},"children":[]},{"title":"\u4e8c\u7ef4\u7801\u751f\u6210\u5668","path":"/qr-code","meta":{"__fallback":true},"children":[]}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{},"title":"generate-test-data","logo":"https://www.caijinfeng.com/logo.png","mode":"doc","repository":{"url":"","branch":"master"},"theme":{}}')},tB8F:function(e,a,t){"use strict";t.r(a);t("pNMO"),t("4Brf"),t("tjZM"),t("3I1R"),t("7+kd"),t("KhsS"),t("gOCb"),t("a57n"),t("GXvd"),t("I1Gw"),t("gXIK"),t("lEou"),t("ma9I"),t("TeQF"),t("BIHw"),t("XbcX"),t("pjDv"),t("yq1k"),t("yXV3"),t("4mDm"),t("uqXc"),t("2B1R"),t("E9XD"),t("9N29"),t("Junv"),t("+2oP"),t("ToJy"),t("94Xl"),t("pDQq"),t("QGkA"),t("c9m3"),t("wZ/5"),t("rOQg"),t("7+zs"),t("tW5y"),t("DEfu"),t("Tskq"),t("Uydy"),t("QFcT"),t("I9xj"),t("w1rZ"),t("toAj"),t("zKZe"),t("Eqjn"),t("5xtp"),t("T63A"),t("wfmh"),t("27RR"),t("v5b1"),t("W/eh"),t("07d7"),t("B6y2"),t("5s+n"),t("p532"),t("pv2x"),t("SuFq"),t("ftMj"),t("TWNs"),t("U3f4"),t("JfAA"),t("YGK4"),t("inlA"),t("JTJg"),t("Rm1S"),t("hDyC"),t("TZCg"),t("UxlC"),t("hByQ"),t("EnZy"),t("LKBx"),t("SYor"),t("HiXI"),t("7ueG"),t("z8NH"),t("SpvK"),t("/Yfv"),t("iwkZ"),t("FDzp"),t("XMab"),t("ilnZ"),t("hMMk"),t("+ywr"),t("IL/d"),t("gvgV"),t("7JcK"),t("s5qe"),t("cvf0"),t("ENF9"),t("H+LF"),t("66V8"),t("iIM6"),t("2tOg"),t("gYJb"),t("EDT/"),t("j+VE"),t("wgYD"),t("R3/m"),t("l/vG"),t("0q/z"),t("n5pg"),t("zu+z"),t("ihrJ"),t("Q7Pz"),t("unQa"),t("Vnov"),t("nIe3"),t("CUyW"),t("qc1c"),t("5921"),t("VOz1"),t("Thag"),t("9D6x"),t("cOPa"),t("vdRX"),t("KrxN"),t("SL6q"),t("lehK"),t("eO0o"),t("NqR8"),t("w7s6"),t("uWhJ"),t("WPzJ"),t("NV22"),t("ny8l"),t("a5/B"),t("vzwy"),t("pevA"),t("8go2"),t("DrvE"),t("kCkZ"),t("++zV"),t("Y4C7"),t("ZsH6"),t("vZi8"),t("5r1n"),t("sQ9d"),t("bdeN"),t("AwgR"),t("qgGA"),t("49+q"),t("AVoK"),t("hcok"),t("dNT4"),t("3uUd"),t("tijO"),t("1kQv"),t("ZY7T"),t("C1JJ"),t("lmH4"),t("Co1j"),t("5JV0"),t("ctDJ"),t("8r4s"),t("JwUS"),t("qaHo"),t("Si40"),t("BGb9"),t("fN96"),t("UzNg"),t("DhMN"),t("rZ3M"),t("apDx"),t("4XaG"),t("6V7H"),t("cfiF"),t("702D"),t("TJ79"),t("Z4nd"),t("8STE"),t("spTT"),t("rb3L"),t("FZtP"),t("3bBZ"),t("Ew+T"),t("n5b4"),t("Kz25"),t("vxnP"),t("mGGf"),t("97ZR");var n=t("bCY9"),l=t("FfOG"),r=t("rlch"),o=t("/dmz"),s=t("tJVT");function c(){var e=[{path:"/~demos/:uuid",layout:!1,wrappers:[t("afA6").default],component:e=>{var a=t("q1tI"),n=t("F4QJ"),l=n.default,r=t("Zxc8"),o=r.default,c=t("dEAq"),i=c.usePrefersColor,u=c.context,m=a.useContext(u),d=m.demos,p=a.useState([]),b=Object(s["a"])(p,2),f=b[0],v=b[1];switch(a.useLayoutEffect((()=>{v(l(e,d))}),[e.match.params.uuid,e.location.query.wrapper,e.location.query.capture]),i(),f.length){case 1:return f[0];case 2:return a.createElement(o,f[0],f[1]);default:return"Demo ".concat(e.match.params.uuid," not found :(")}}},{path:"/_demos/:uuid",redirect:"/~demos/:uuid"},{__dumiRoot:!0,layout:!1,path:"/",wrappers:[t("afA6").default,t("0Bia").default],routes:[{path:"/bank-card",component:t("dHR2").default,exact:!0,meta:{filePath:"src/BankCard/index.md",updatedTime:1649823648e3,componentName:"BankCard",group:{title:"\u94f6\u884c\u5361\u751f\u6210\u5668",__fallback:!0,path:"/bank-card"},slugs:[{depth:1,value:"\u94f6\u884c\u5361\u751f\u6210\u5668",heading:"\u94f6\u884c\u5361\u751f\u6210\u5668"}],title:"\u94f6\u884c\u5361\u751f\u6210\u5668"},title:"\u94f6\u884c\u5361\u751f\u6210\u5668 - generate-test-data"},{path:"/bar-code",component:t("N/pX").default,exact:!0,meta:{filePath:"src/BarCode/index.md",updatedTime:1649823648e3,componentName:"BarCode",group:{title:"\u6761\u5f62\u7801\u751f\u6210\u5668",__fallback:!0,path:"/bar-code"},slugs:[{depth:1,value:"\u6761\u5f62\u7801\u751f\u6210\u5668",heading:"\u6761\u5f62\u7801\u751f\u6210\u5668"}],title:"\u6761\u5f62\u7801\u751f\u6210\u5668"},title:"\u6761\u5f62\u7801\u751f\u6210\u5668 - generate-test-data"},{path:"/qr-code",component:t("c6gP").default,exact:!0,meta:{filePath:"src/QrCode/index.md",updatedTime:1649823648e3,componentName:"QrCode",group:{title:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668",__fallback:!0,path:"/qr-code"},slugs:[{depth:1,value:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668",heading:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668"}],title:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668"},title:"\u4e8c\u7ef4\u7801\u751f\u6210\u5668 - generate-test-data"},{path:"/",component:t("F+kV").default,exact:!0,meta:{filePath:"docs/index.md",updatedTime:1649823648e3,slugs:[{depth:1,value:"\u4ecb\u7ecd",heading:"\u4ecb\u7ecd"},{depth:2,value:"\u7d22\u5f15",heading:"\u7d22\u5f15"}],title:"\u4ecb\u7ecd"},title:"\u4ecb\u7ecd - generate-test-data"}],title:"generate-test-data",component:e=>e.children}];return n["a"].applyPlugins({key:"patchRoutes",type:r["a"].event,args:{routes:e}}),e}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].applyPlugins({key:"render",type:r["a"].compose,initialValue:()=>{var a=n["a"].applyPlugins({key:"modifyClientRenderOpts",type:r["a"].modify,initialValue:{routes:e.routes||c(),plugin:n["a"],history:Object(l["a"])(e.hot),isServer:Object({NODE_ENV:"production"}).__IS_SERVER,rootElement:"root",defaultTitle:"generate-test-data"}});return Object(o["a"])(a)},args:e})},u=i();a["default"]=u();window.g_umi={version:"3.5.21"}},x2v5:function(e){e.exports=JSON.parse("{}")}});