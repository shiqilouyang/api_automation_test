webpackJsonp([8],{103:function(t,e,n){var r=n(56),o=n(55),i=n(120),a=n(84),s=n(79),u=function(t,e,n){var c,l,f,d=t&u.F,p=t&u.G,m=t&u.S,g=t&u.P,h=t&u.B,v=t&u.W,y=p?o:o[e]||(o[e]={}),b=y.prototype,x=p?r:m?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(l=!d&&x&&void 0!==x[c])&&s(y,c)||(f=l?x[c]:n[c],y[c]=p&&"function"!=typeof x[c]?n[c]:h&&l?i(f,r):v&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):g&&"function"==typeof f?i(Function.call,f):f,g&&((y.virtual||(y.virtual={}))[c]=f,t&u.R&&b&&!b[c]&&a(b,c,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},104:function(t,e,n){var r=n(82);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},105:function(t,e,n){var r=n(106)("keys"),o=n(97);t.exports=function(t){return r[t]||(r[t]=o(t))}},106:function(t,e,n){var r=n(55),o=n(56),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(96)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},107:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},108:function(t,e,n){var r=n(115);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},109:function(t,e){e.f=Object.getOwnPropertySymbols},112:function(t,e,n){t.exports=!n(78)&&!n(83)(function(){return 7!=Object.defineProperty(n(113)("div"),"a",{get:function(){return 7}}).a})},113:function(t,e,n){var r=n(82),o=n(56).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},114:function(t,e,n){var r=n(79),o=n(81),i=n(122)(!1),a=n(105)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~i(c,n)||c.push(n));return c}},115:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},116:function(t,e,n){var r=n(94);t.exports=function(t){return Object(r(t))}},120:function(t,e,n){var r=n(121);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},121:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},122:function(t,e,n){var r=n(81),o=n(123),i=n(124);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=o(u.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},123:function(t,e,n){var r=n(95),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},124:function(t,e,n){var r=n(95),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},130:function(t,e,n){t.exports={default:n(131),__esModule:!0}},131:function(t,e,n){n(132),t.exports=n(55).Object.assign},132:function(t,e,n){var r=n(103);r(r.S+r.F,"Object",{assign:n(133)})},133:function(t,e,n){"use strict";var r=n(93),o=n(109),i=n(99),a=n(116),s=n(108),u=Object.assign;t.exports=!u||n(83)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,l=o.f,f=i.f;u>c;)for(var d,p=s(arguments[c++]),m=l?r(p).concat(l(p)):r(p),g=m.length,h=0;g>h;)f.call(p,d=m[h++])&&(n[d]=p[d]);return n}:u},150:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iIzcwYmYyYiIgZD0iTTE0MTIgNzM0cTAtMjgtMTgtNDZsLTkxLTkwcS0xOS0xOS00NS0xOXQtNDUgMTlsLTQwOCA0MDctMjI2LTIyNnEtMTktMTktNDUtMTl0LTQ1IDE5bC05MSA5MHEtMTggMTgtMTggNDYgMCAyNyAxOCA0NWwzNjIgMzYycTE5IDE5IDQ1IDE5IDI3IDAgNDYtMTlsNTQzLTU0M3ExOC0xOCAxOC00NXptMjUyIDE2MnEwIDIwOS0xMDMgMzg1LjV0LTI3OS41IDI3OS41LTM4NS41IDEwMy0zODUuNS0xMDMtMjc5LjUtMjc5LjUtMTAzLTM4NS41IDEwMy0zODUuNSAyNzkuNS0yNzkuNSAzODUuNS0xMDMgMzg1LjUgMTAzIDI3OS41IDI3OS41IDEwMyAzODUuNXoiLz4KPC9zdmc+Cg=="},151:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNzkyIDE3OTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0iI2RkNDY0NiIgZD0iTTEyNzcgMTEyMnEwLTI2LTE5LTQ1bC0xODEtMTgxIDE4MS0xODFxMTktMTkgMTktNDUgMC0yNy0xOS00NmwtOTAtOTBxLTE5LTE5LTQ2LTE5LTI2IDAtNDUgMTlsLTE4MSAxODEtMTgxLTE4MXEtMTktMTktNDUtMTktMjcgMC00NiAxOWwtOTAgOTBxLTE5IDE5LTE5IDQ2IDAgMjYgMTkgNDVsMTgxIDE4MS0xODEgMTgxcS0xOSAxOS0xOSA0NSAwIDI3IDE5IDQ2bDkwIDkwcTE5IDE5IDQ2IDE5IDI2IDAgNDUtMTlsMTgxLTE4MSAxODEgMTgxcTE5IDE5IDQ1IDE5IDI3IDAgNDYtMTlsOTAtOTBxMTktMTkgMTktNDZ6bTM4Ny0yMjZxMCAyMDktMTAzIDM4NS41dC0yNzkuNSAyNzkuNS0zODUuNSAxMDMtMzg1LjUtMTAzLTI3OS41LTI3OS41LTEwMy0zODUuNSAxMDMtMzg1LjUgMjc5LjUtMjc5LjUgMzg1LjUtMTAzIDM4NS41IDEwMyAyNzkuNSAyNzkuNSAxMDMgMzg1LjV6Ii8+Cjwvc3ZnPgo="},19:function(t,e,n){"use strict";function r(t){n(514)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(393),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);var s=n(516),u=n(1),c=r,l=u(i.a,s.a,!1,c,null,null);e.default=l.exports},393:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(87),i=r(o),a=n(130),s=r(a),u=n(57);e.default={data:function(){return{filters:{name:""},project:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,options:[{label:"Web",value:"Web"},{label:"App",value:"App"}],editFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},editForm:{name:"",version:"",type:"",description:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入版本号",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},addForm:{name:"",version:"",type:"",description:""}}},methods:{getProjectList:function(){this.listLoading=!0;var t=this,e={page:t.page,name:t.filters.name},n={Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,u.getProject)(n,e).then(function(e){t.listLoading=!1;var n=e.msg,r=e.code,o=e.data;"999999"===r?(t.total=o.total,t.project=o.data):t.$message.error({message:n,center:!0})})},handleDel:function(t,e){var n=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){n.listLoading=!0;var t=n,r={ids:[e.id]},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,u.delProject)(o,r).then(function(e){var n=e.msg,r=e.code;e.data;"999999"===r?t.$message({message:"删除成功",center:!0,type:"success"}):t.$message.error({message:n,center:!0}),t.getProjectList()})})},handleChangeStatus:function(t,e){var n=this;this.listLoading=!0;var r={project_id:e.id},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};e.status?(0,u.disableProject)(o,r).then(function(t){var r=t.msg,o=t.code;t.data;n.listLoading=!1,"999999"===o?(n.$message({message:"禁用成功",center:!0,type:"success"}),e.status=!e.status):n.$message.error({message:r,center:!0})}):(0,u.enableProject)(o,r).then(function(t){var r=t.msg,o=t.code;t.data;n.listLoading=!1,"999999"===o?(n.$message({message:"启用成功",center:!0,type:"success"}),e.status=!e.status):n.$message.error({message:r,center:!0})})},handleCurrentChange:function(t){this.page=t,this.getProjectList()},handleEdit:function(t,e){this.editFormVisible=!0,this.editForm=(0,s.default)({},e)},handleAdd:function(){this.addFormVisible=!0},editSubmit:function(){var t=this,e=this;this.$refs.editForm.validate(function(n){n&&t.$confirm("确认提交吗？","提示",{}).then(function(){e.editLoading=!0;var t={project_id:e.editForm.id,name:e.editForm.name,type:e.editForm.type,version:e.editForm.version,description:e.editForm.description},n={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,u.updateProject)(n,t).then(function(t){var n=t.msg,r=t.code;t.data;e.editLoading=!1,"999999"===r?(e.$message({message:"修改成功",center:!0,type:"success"}),e.$refs.editForm.resetFields(),e.editFormVisible=!1,e.getProjectList()):e.$message.error({message:n,center:!0})})})})},addSubmit:function(){var t=this;this.$refs.addForm.validate(function(e){if(e){var n=t;t.$confirm("确认提交吗？","提示",{}).then(function(){n.addLoading=!0;var t=(0,i.default)({name:n.addForm.name,type:n.addForm.type,version:n.addForm.version,description:n.addForm.description}),e={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,u.addProject)(e,t).then(function(t){var e=t.msg,r=t.code;t.data;n.addLoading=!1,"999999"===r?(n.$message({message:"添加成功",center:!0,type:"success"}),n.$refs.addForm.resetFields(),n.addFormVisible=!1,n.getProjectList()):"999997"===r?n.$message.error({message:e,center:!0}):(n.$message.error({message:e,center:!0}),n.$refs.addForm.resetFields(),n.addFormVisible=!1,n.getProjectList())})})}})},selsChange:function(t){this.sels=t},batchRemove:function(){var t=this,e=this.sels.map(function(t){return t.id});this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then(function(){t.listLoading=!0;var n=t,r={ids:e},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,u.delProject)(o,r).then(function(t){var e=t.msg,r=t.code;t.data;"999999"===r?n.$message({message:"删除成功",center:!0,type:"success"}):n.$message.error({message:e,center:!0}),n.getProjectList()})})}},mounted:function(){this.getProjectList()}}},45:function(t,e,n){"use strict";function r(t){return"[object Array]"===M.call(t)}function o(t){return"[object ArrayBuffer]"===M.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function a(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function s(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===M.call(t)}function d(t){return"[object File]"===M.call(t)}function p(t){return"[object Blob]"===M.call(t)}function m(t){return"[object Function]"===M.call(t)}function g(t){return l(t)&&m(t.pipe)}function h(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function v(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=x(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)b(arguments[n],t);return e}function T(t,e,n){return b(e,function(e,r){t[r]=n&&"function"==typeof e?w(e,n):e}),t}var w=n(49),j=n(60),M=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:j,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:d,isBlob:p,isFunction:m,isStream:g,isURLSearchParams:h,isStandardBrowserEnv:y,forEach:b,merge:x,extend:T,trim:v}},47:function(t,e,n){"use strict";(function(e){function r(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=n(45),i=n(63),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(50):void 0!==e&&(t=n(50)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){s.headers[t]={}}),o.forEach(["post","put","patch"],function(t){s.headers[t]=o.merge(a)}),t.exports=s}).call(e,n(62))},49:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},50:function(t,e,n){"use strict";var r=n(45),o=n(64),i=n(66),a=n(67),s=n(68),u=n(51);t.exports=function(t){return new Promise(function(e,c){var l=t.data,f=t.headers;r.isFormData(l)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",m=t.auth.password||"";f.Authorization="Basic "+btoa(p+":"+m)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:d.status,statusText:d.statusText,headers:n,config:t,request:d};o(e,c,i),d=null}},d.onerror=function(){c(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){c(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n(69),h=(t.withCredentials||s(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;h&&(f[t.xsrfHeaderName]=h)}if("setRequestHeader"in d&&r.forEach(f,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete f[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),c(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},51:function(t,e,n){"use strict";var r=n(65);t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},514:function(t,e,n){var r=n(515);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(14)("07a4f1fa",r,!0,{})},515:function(t,e,n){e=t.exports=n(13)(!1),e.push([t.i,"",""])},516:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[r("el-form",{attrs:{inline:!0,model:t.filters},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getProjectList(e)}},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.getProjectList}},[t._v("查询")])],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增")])],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.project,"highlight-current-row":""},on:{"selection-change":t.selsChange}},[r("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"30%",sortable:"","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-icon",{attrs:{name:"name"}}),t._v(" "),e.row.status?r("router-link",{staticStyle:{cursor:"pointer",color:"#0000FF","text-decoration":"underline"},attrs:{to:{name:"项目概况",params:{project_id:e.row.id}}}},[t._v("\n                    "+t._s(e.row.name)+"\n                ")]):t._e(),t._v("\n                "+t._s(e.row.status?"":e.row.name)+"\n            ")]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"version",label:"项目版本","min-width":"12%",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"9%",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"LastUpdateTime",label:"最后修改时间","min-width":"16%",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"9%",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:n(150)}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:n(151)}})]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作","min-width":"19%"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{size:"small"},on:{click:function(n){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(n){return t.handleDel(e.$index,e.row)}}},[t._v("删除")]),t._v(" "),r("el-button",{attrs:{type:"info",size:"small"},on:{click:function(n){return t.handleChangeStatus(e.$index,e.row)}}},[t._v(t._s(!1===e.row.status?"启用":"禁用"))])]}}])})],1),t._v(" "),r("el-col",{staticClass:"toolbar",attrs:{span:24}},[r("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:t.batchRemove}},[t._v("批量删除")]),t._v(" "),r("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":t.total},on:{"current-change":t.handleCurrentChange}})],1),t._v(" "),r("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"编辑",visible:t.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.editFormVisible=e}}},[r("el-form",{ref:"editForm",attrs:{model:t.editForm,"label-width":"80px",rules:t.editFormRules}},[r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1),t._v(" "),r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.editForm.type,callback:function(e){t.$set(t.editForm,"type",e)},expression:"editForm.type"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"版本号",prop:"version"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editForm.version,callback:function(e){t.$set(t.editForm,"version",e)},expression:"editForm.version"}})],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",rows:6},model:{value:t.editForm.description,callback:function(e){t.$set(t.editForm,"description",e)},expression:"editForm.description"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(e){t.editFormVisible=!1}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.editLoading},nativeOn:{click:function(e){return t.editSubmit(e)}}},[t._v("提交")])],1)],1),t._v(" "),r("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"新增",visible:t.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.addFormVisible=e}}},[r("el-form",{ref:"addForm",attrs:{model:t.addForm,"label-width":"80px",rules:t.addFormRules}},[r("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name","string"==typeof e?e.trim():e)},expression:"addForm.name"}})],1),t._v(" "),r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:t.addForm.type,callback:function(e){t.$set(t.addForm,"type",e)},expression:"addForm.type"}},t._l(t.options,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1),t._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"版本号",prop:"version"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addForm.version,callback:function(e){t.$set(t.addForm,"version","string"==typeof e?e.trim():e)},expression:"addForm.version"}})],1)],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",rows:6},model:{value:t.addForm.description,callback:function(e){t.$set(t.addForm,"description",e)},expression:"addForm.description"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(e){t.addFormVisible=!1}}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.addLoading},nativeOn:{click:function(e){return t.addSubmit(e)}}},[t._v("提交")])],1)],1)],1)},o=[],i={render:r,staticRenderFns:o};e.a=i},52:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},53:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},55:function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},56:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.delApiGroup=e.updateApiGroup=e.addApiGroup=e.getApiGroupList=e.addApiDetail=e.getTestTenResult=e.getTestTenTime=e.getTestResultList=e.addEmailConfig=e.delEmailConfig=e.getEmailConfigDetail=e.getProjectMemberList=e.getProjectDynamicList=e.addHost=e.updateHost=e.enableHost=e.disableHost=e.delHost=e.getHost=e.getProjectDetail=e.addProject=e.updateProject=e.enableProject=e.disableProject=e.delProject=e.getProject=e.recordVisitor=e.requestLogin=e.dingLogin=e.dingConfig=e.url=e.pretest=e.test=void 0;var r=n(58),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=e.test="http://127.0.0.1:8000";e.pretest="http://127.0.0.1:8001",e.url="http://127.0.0.1",e.dingConfig=function(t){return o.default.get(i+"/api/user/dingConfig",t).then(function(t){return t.data})},e.dingLogin=function(t){return o.default.post(i+"/api/user/dingConfig",t).then(function(t){return t.data})},e.requestLogin=function(t){return o.default.post(i+"/api/user/login",t).then(function(t){return t.data})},e.recordVisitor=function(t){return o.default.post(i+"/api/user/VisitorRecord",t).then(function(t){return t.data})},e.getProject=function(t,e){return o.default.get(i+"/api/project/project_list",{params:e,headers:t}).then(function(t){return t.data})},e.delProject=function(t,e){return o.default.post(i+"/api/project/del_project",e,{headers:t}).then(function(t){return t.data})},e.disableProject=function(t,e){return o.default.post(i+"/api/project/disable_project",e,{headers:t}).then(function(t){return t.data})},e.enableProject=function(t,e){return o.default.post(i+"/api/project/enable_project",e,{headers:t}).then(function(t){return t.data})},e.updateProject=function(t,e){return o.default.post(i+"/api/project/update_project",e,{headers:t}).then(function(t){return t.data})},e.addProject=function(t,e){return o.default.post(i+"/api/project/add_project",e,{headers:t}).then(function(t){return t.data})},e.getProjectDetail=function(t,e){return o.default.get(i+"/api/title/project_info",{params:e,headers:t}).then(function(t){return t.data})},e.getHost=function(t,e){return o.default.get(i+"/api/global/host_total",{params:e,headers:t}).then(function(t){return t.data})},e.delHost=function(t,e){return o.default.post(i+"/api/global/del_host",e,{headers:t}).then(function(t){return t.data})},e.disableHost=function(t,e){return o.default.post(i+"/api/global/disable_host",e,{headers:t}).then(function(t){return t.data})},e.enableHost=function(t,e){return o.default.post(i+"/api/global/enable_host",e,{headers:t}).then(function(t){return t.data})},e.updateHost=function(t,e){return o.default.post(i+"/api/global/update_host",e,{headers:t}).then(function(t){return t.data})},e.addHost=function(t,e){return o.default.post(i+"/api/global/add_host",e,{headers:t}).then(function(t){return t.data})},e.getProjectDynamicList=function(t,e){return o.default.get(i+"/api/dynamic/dynamic",{params:e,headers:t}).then(function(t){return t.data})},e.getProjectMemberList=function(t,e){return o.default.get(i+"/api/member/project_member",{params:e,headers:t}).then(function(t){return t.data})},e.getEmailConfigDetail=function(t,e){return o.default.get(i+"/api/member/get_email",{params:e,headers:t}).then(function(t){return t.data})},e.delEmailConfig=function(t,e){return o.default.post(i+"/api/member/del_email",e,{headers:t}).then(function(t){return t.data})},e.addEmailConfig=function(t,e){return o.default.post(i+"/api/member/email_config",e,{headers:t}).then(function(t){return t.data})},e.getTestResultList=function(t,e){return o.default.get(i+"/api/report/auto_test_report",{params:e,headers:t}).then(function(t){return t.data})},e.getTestTenTime=function(t,e){return o.default.get(i+"/api/report/test_time",{params:e,headers:t}).then(function(t){return t.data})},e.getTestTenResult=function(t,e){return o.default.get(i+"/api/report/lately_ten",{params:e,headers:t}).then(function(t){return t.data})},e.addApiDetail=function(t,e){return o.default.post(i+"/api/api/add_api",e,{headers:t}).then(function(t){return t.data})},e.getApiGroupList=function(t,e){return o.default.get(i+"/api/api/group",{params:e,headers:t}).then(function(t){return t.data})},e.addApiGroup=function(t,e){return o.default.post(i+"/api/api/add_group",e,{headers:t}).then(function(t){return t.data})},e.updateApiGroup=function(t,e){return o.default.post(i+"/api/api/update_name_group",e,{headers:t}).then(function(t){return t.data})},e.delApiGroup=function(t,e){return o.default.post(i+"/api/api/del_group",e,{headers:t}).then(function(t){return t.data})}},58:function(t,e,n){t.exports=n(59)},59:function(t,e,n){"use strict";function r(t){var e=new a(t),n=i(a.prototype.request,e);return o.extend(n,a.prototype,e),o.extend(n,e),n}var o=n(45),i=n(49),a=n(61),s=n(47),u=r(s);u.Axios=a,u.create=function(t){return r(o.merge(s,t))},u.Cancel=n(53),u.CancelToken=n(75),u.isCancel=n(52),u.all=function(t){return Promise.all(t)},u.spread=n(76),t.exports=u,t.exports.default=u},60:function(t,e){/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},61:function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new a,response:new a}}var o=n(47),i=n(45),a=n(70),s=n(71);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,{method:"get"},this.defaults,t),t.method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},62:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){g&&p&&(g=!1,p.length?m=p.concat(m):h=-1,m.length&&s())}function s(){if(!g){var t=o(a);g=!0;for(var e=m.length;e;){for(p=m,m=[];++h<e;)p&&p[h].run();h=-1,e=m.length}p=null,g=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,m=[],g=!1,h=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new u(t,e)),1!==m.length||g||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},63:function(t,e,n){"use strict";var r=n(45);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},64:function(t,e,n){"use strict";var r=n(51);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},65:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},66:function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(45);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var a=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)?e+="[]":t=[t],o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),a.push(r(e)+"="+r(t))}))}),i=a.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},67:function(t,e,n){"use strict";var r=n(45),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}}),a):a}},68:function(t,e,n){"use strict";var r=n(45);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},69:function(t,e,n){"use strict";var r=n(45);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},70:function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(45);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},71:function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(45),i=n(72),a=n(52),s=n(47),u=n(73),c=n(74);t.exports=function(t){return r(t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return a(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},72:function(t,e,n){"use strict";var r=n(45);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},73:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},74:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},75:function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(53);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},76:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},78:function(t,e,n){t.exports=!n(83)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},79:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},81:function(t,e,n){var r=n(108),o=n(94);t.exports=function(t){return r(o(t))}},82:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},83:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},84:function(t,e,n){var r=n(85),o=n(92);t.exports=n(78)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},85:function(t,e,n){var r=n(91),o=n(112),i=n(104),a=Object.defineProperty;e.f=n(78)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},87:function(t,e,n){t.exports={default:n(88),__esModule:!0}},88:function(t,e,n){var r=n(55),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},91:function(t,e,n){var r=n(82);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},92:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},93:function(t,e,n){var r=n(114),o=n(107);t.exports=Object.keys||function(t){return r(t,o)}},94:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},95:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},96:function(t,e){t.exports=!0},97:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},99:function(t,e){e.f={}.propertyIsEnumerable}});