parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"tng/":[function(require,module,exports) {

},{}],"yK1t":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"7pNp":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(r){return e.exec(r).slice(1)};function s(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i=o>=0?arguments[o]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,n="/"===i.charAt(0))}return(n?"/":"")+(e=t(s(e.split("/"),function(r){return!!r}),!n).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),n="/"===o(r,-1);return(r=t(s(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&n&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(s(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),o=Math.min(n.length,s.length),i=o,u=0;u<o;u++)if(n[u]!==s[u]){i=u;break}var l=[];for(u=i;u<n.length;u++)l.push("..");return(l=l.concat(s.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){var t=n(r),e=t[0],s=t[1];return e||s?(s&&(s=s.substr(0,s.length-1)),e+s):"."},exports.basename=function(r,t){var e=n(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},exports.extname=function(r){return n(r)[3]};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"yK1t"}],"6YF+":[function(require,module,exports) {
var process = require("process");
var e=require("process"),n=require("fs"),r=require("path");function o(e){console.log("[dotenv][DEBUG] ".concat(e))}function t(e,n){var r=Boolean(n&&n.debug),t={};return e.toString().split("\n").forEach(function(e,n){var a=e.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);if(null!=a){var c=a[1],l=a[2]||"",i=l?l.length:0;i>0&&'"'===l.charAt(0)&&'"'===l.charAt(i-1)&&(l=l.replace(/\\n/gm,"\n")),l=l.replace(/(^['"]|['"]$)/g,"").trim(),t[c]=l}else r&&o("did not match key and value when parsing line ".concat(n+1,": ").concat(e))}),t}function a(a){var c=r.resolve(e.cwd(),".env"),l="utf8",i=!1;a&&(null!=a.path&&(c=a.path),null!=a.encoding&&(l=a.encoding),null!=a.debug&&(i=!0));try{var u=t(n.readFileSync(c,{encoding:l}),{debug:i});return Object.keys(u).forEach(function(n){e.env.hasOwnProperty(n)?i&&o('"'.concat(n,'" is already defined in `process.env` and will not be overwritten')):e.env[n]=u[n]}),{parsed:u}}catch(s){return{error:s}}}module.exports.config=a,module.exports.load=a,module.exports.parse=t;
},{"fs":"tng/","path":"7pNp","process":"yK1t"}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("dotenv"));function t(e){return e&&e.__esModule?e:{default:e}}e.default.config();var n={apiKey:"AIzaSyDW-eJbSyibAc4j-z0wtWZDfZYZTKOqbD0",authDomain:"casetoolsproject.firebaseapp.com",databaseURL:"https://casetoolsproject.firebaseio.com",projectId:"casetoolsproject",storageBucket:"casetoolsproject.appspot.com",messagingSenderId:"611886262425"};function a(){document.querySelector("#main").scrollIntoView({behavior:"smooth"})}function o(e){return e>9?""+e:"0"+e}firebase.initializeApp(n);var s=new Date("Feb 13, 2019 15:37:25").getTime(),l=setInterval(function(){var e=(new Date).getTime(),t=s-e,n=o(Math.floor(t/864e5)),a=o(Math.floor(t%864e5/36e5)),r=o(Math.floor(t%36e5/6e4)),c=o(Math.floor(t%6e4/1e3));document.getElementById("countdown").innerHTML='<span class="countdown_item"><span class="countdown_num">'+n+'</span><span class="countdown_unit"> Days </span></span><span class="countdown_item"><span class="countdown_num">'+a+'</span><span class="countdown_unit"> Hours </span></span><span class="countdown_item"><span class="countdown_num">'+r+'</span><span class="countdown_unit"> Minutes </span></span><span class="countdown_item"><span class="countdown_num">'+c+'</span><span class="countdown_unit"> Seconds </span></span>',t<0&&(clearInterval(l),document.getElementById("countdown").innerHTML="Event Started!")},1e3);function r(e){var t=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-n>=0)}function c(){document.getElementById("loading_screen").classList.toggle("disp_none"),document.body.classList.remove("noscroll")}function u(){document.getElementById("name").value="",document.getElementById("college").value="",document.getElementById("phno").value="",document.getElementById("email").value="",document.getElementById("name").focus()}window.addEventListener("scroll",function(e){var t=document.querySelector("#hero_left .nav-toggle"),n=document.querySelector("#hero_right #right_nav");r(t)&&r(n)?document.getElementById("top_bar").style.transform="translateY(-60px)":document.getElementById("top_bar").style.transform="translateY(0)"}),document.getElementById("register_form").onsubmit=function(e){e.preventDefault(),c();var t=document.getElementById("phno").value,n=document.getElementById("email").value;if(Number.isNaN(Number(t))||t.indexOf("e")>=0||t.length>=11||t.length<10)return alert("Invalid phone number"),u(),void c();firebase.auth().createUserWithEmailAndPassword(n,t).catch(function(e){var t=e.message;"The email address is badly formatted."===t?alert("Invalid email"):"The email address is already in use by another account."===t?alert("Already registered."):alert("Something went wrong please try again"),u(),c()})},firebase.auth().onAuthStateChanged(function(e){if(e){var t=document.getElementById("name").value,n=document.getElementById("college").value,a=document.getElementById("phno").value,o=document.getElementById("email").value;firebase.database().ref("users/"+e.uid).set({username:t,college:n,phone:a,email:o},function(e){e?alert("Something went wrong please try again"):(document.body.classList.toggle("noscroll"),alert("You are successfully registered")),u(),c()}),firebase.auth().signOut()}});
},{"dotenv":"6YF+"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map