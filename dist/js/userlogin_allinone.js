/*! jquery-ajax-control 2015-08-04 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&a(window.jQuery)}(function(a){var b=function(b){return function(c,d,e){var f=this.skipAjaxControl||!1;(f||"function"==typeof b&&a.ajaxControl(c,d,e))&&b(c,d,e)}},c=a.ajax;a.ajax=function(a){a.success=new b(a.success),c(a)};var d=function(){var a=!0;return console.log("$.ajaxControl has not implemented."),a};a.ajaxControl=a.ajaxControl||d});;/*! dotpl 2015-08-06 */
"use strict";(function(){function _diving(a,b){var c=a.split("."),d=0;do if(b=b[c[d++]],null==b)break;while(d<c.length&&"object"==typeof b);return b}function _applyMapTpl(a,b,c,d,e){var f=new RegExp(_opener+"([^"+_closer+"]+?)"+_closer,"ig"),g=a.replace(f,function(a,f){try{var g=_diving(f,b);if(g=null==g?"":g,"boolean"==typeof g)return g;var h=null;if(h="object"==typeof c?c.renderer:c,"function"==typeof h){var i=h(f,g,b,d,e);return null==i?g:i}return g}catch(j){throw new Error(f+(j.message||j))}});return g}function _request(a,b,c){var d=null;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),d.onreadystatechange=function(){if(4===d.readyState)try{b(d.responseText,d.status)}catch(a){throw a}};try{var e=(new Date).getTime();a+=-1===a.indexOf("?")?"?_="+e:"&_="+e,d.open("GET",a,!!c),d.setRequestHeader("If-Modified-Since","0"),d.setRequestHeader("Cache-Control","no-cache"),d.send()}catch(f){throw f}return d}function _applyTpl(tpl,data,renderer,pk,parent){var __regx=new RegExp("\\"+_topener+"("+_tag+"\\d?)\\s+([^\\"+_tcloser+"]+?)\\"+_tcloser+"([\\s\\S]+?)\\"+_topener+"\\/\\1\\"+_tcloser,"ig");return __regx.test(tpl)&&(tpl=tpl.replace(__regx,function($0,$1,$2,$3){for(var output="",kv=null,attr={},__subg=/(\w+)\s*=\s*(['|"]{1})([^\2]+?)\2\s*/gi;null!=(kv=__subg.exec($2));)attr[kv[1].toLowerCase()]=kv[3];var forkey=attr["for"];if(null!=forkey){var arr=data;if("."!==forkey&&(arr=_diving(forkey,data)),"object"==typeof renderer&&renderer.beforeLoop&&(arr=renderer.beforeLoop(arr,forkey,pk,parent||data)),null!=arr&&arr.length>0)for(var i=0;i<arr.length;i++){var item={};"object"!=typeof arr[i]?item.__val=arr[i]:item=arr[i],item.__offset=i,"object"==typeof renderer&&renderer.skip&&renderer.skip(item,forkey,arr,pk,parent||data)||(output+=_applyTpl($3,item,renderer,forkey,data))}else null!=attr.emptytext&&(output=attr.emptytext)}else if(null!=attr["if"])try{var strflag=_applyTpl(attr["if"],data,renderer,pk,parent);if("string"==typeof strflag&&(strflag=eval("Boolean("+strflag+")")),strflag)return _applyTpl($3,data,renderer,pk,parent);null!=attr.emptytext&&(output=attr.emptytext)}catch(e){throw new Error(attr["if"]+(e.message||e))}return output})),_applyMapTpl(tpl,data,renderer,pk,parent)}var _opener="\\$\\{",_closer="\\}",_tag="tpl",_topener="<",_tcloser=">",dotpl={diving:_diving,applyTpl:_applyTpl,applyRTpl:function(a,b,c,d){_request(a,function(e,f){if(200!==f)throw new Error("Error "+f+":"+a);c(_applyTpl(e,b,d))})},setDelimiters:function(a,b,c){_opener=a,_closer=b,c=c||"<tpl>",_tag=c.substring(1,c.length-1),_topener=c.substring(0,1),_tcloser=c.substring(c.length-1)}},root=this,previous_dotpl=root.dotpl;"undefined"!=typeof module&&module.exports?module.exports=dotpl:root.dotpl=dotpl,dotpl.noConflict=function(){return root.dotpl=previous_dotpl,dotpl}}).call(this);;/*! bootstrap-user-login 2015-08-10 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&a(window.jQuery)}(function(a){var b=a(".user-signin-panel"),c=a(".user-signout-panel"),d=null,e=function(b,c){this.form=b,this.opt=c,b.on("submit",a.proxy(this.submit,this)),this.url=b.attr("action"),a(".user-signout-btn").on("click",a.proxy(this.doSignout,this)),null==d&&a.get("/api/auth",a.proxy(this.signin,this))},f=null;e.prototype={constructor:e,signin:function(e){d=e.data,a(".user-name",this.signinPanel).text(d.name),b.removeClass("hidden"),c.addClass("hidden"),this.form.trigger("signin",[e])},submit:function(b){var c=a(b.target);return f=c,a.ajax(a.extend({method:c.data("method")||"POST",url:this.url,data:c.serialize(),success:a.proxy(this.success,this),skipAjaxControl:!!c.data().skipAjaxControl},this.opt)),!1},doSignout:function(){a.get("/api/auth/signout",a.proxy(this.signout,this))},signout:function(){b.addClass("hidden"),c.removeClass("hidden"),d=null},success:function(b){-1!==this.url.indexOf("signin")?window.location.href="/":-1!==this.url.indexOf("forgot")?a(".alert-success").removeClass("hidden"):-1!==this.url.indexOf("verify")&&1===b.code}},a.fn.userlogin=function(b){var c=arguments;return this.each(function(){var d=a(this),f=d.data("userlogin"),g="object"==typeof b?b:{};f||"string"==typeof b?"string"==typeof b&&f[b].apply(f,Array.prototype.slice.call(c,1)):d.data("userlogin",new e(d,g))})};var g=a('<div class="user-message hidden"><div style="padding: 5px;"><div class="alert alert-danger .alert-dismissible user-inner-message"><button type="button" class="close" aria-label="Close">&times;</button><p></p></div></div></div>');a.ajaxControl=function(b){var c=!1;if("string"==typeof b)c=!0;else if(void 0===b.code)c=!0;else if(1===b.code)c=!0;else if(0===b.code);else{g.removeClass("hidden");var d=null;a.userMsg&&(d=a.userMsg[b.code]),a("p",g).html(d||b.code)}return c},a(".close",g).on("click",function(){g.addClass("hidden")}),a("body").append(g),a(document).ajaxError(function(b,c,d,e){a("p",g).html(e),g.removeClass("hidden")}).ajaxSend(function(){g.addClass("hidden"),null!=f&&a("button[type=submit]",f).button("loading")}).ajaxComplete(function(){if(null!=f){var b=a("button[type=submit]",f);b.button("reset"),f=null}})});