(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(t,e,o){var content=o(147);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("2e5fda8a",content,!0,{sourceMap:!1})},143:function(t,e,o){var content=o(152);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("63dbe101",content,!0,{sourceMap:!1})},144:function(t,e,o){var content=o(154);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(30).default)("508de1d6",content,!0,{sourceMap:!1})},145:function(t,e,o){t.exports=o.p+"img/3855352.jpg"},146:function(t,e,o){"use strict";var n=o(142);o.n(n).a},147:function(t,e,o){e=t.exports=o(29)(!1);var n=o(148),r=n(o(149)),c=n(o(150));e.push([t.i,"@font-face{font-family:ProximaNova;src:url("+r+")}.container[data-v-5d51a3d8]{font-family:ProximaNova;background-image:url("+c+");background-repeat:no-repeat;background-position:50%;background-size:cover;min-height:100vh;box-shadow:inset 0 0 0 1000px rgba(0,0,0,.5)}.container[data-v-5d51a3d8],.header[data-v-5d51a3d8]{display:flex;justify-content:center;align-items:center}.header[data-v-5d51a3d8]{flex-direction:column;text-align:center;color:#fff}.photo[data-v-5d51a3d8]{max-width:30vh;border-radius:360px;box-shadow:0 5px 10px rgba(0,0,0,.5)}.title[data-v-5d51a3d8]{display:block;font-weight:300;font-size:5em;letter-spacing:1px;margin:20px 0}.icons[data-v-5d51a3d8]{margin-top:5vh;letter-spacing:10px}.icons a[data-v-5d51a3d8]{font-size:1.7em;color:#fff}@media (max-width:600px){.photo[data-v-5d51a3d8]{max-width:25vh}.title[data-v-5d51a3d8]{font-size:2.5em}}",""])},148:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},149:function(t,e,o){t.exports=o.p+"fonts/6a38689.otf"},150:function(t,e,o){t.exports=o.p+"img/d078968.jpg"},151:function(t,e,o){"use strict";var n=o(143);o.n(n).a},152:function(t,e,o){(t.exports=o(29)(!1)).push([t.i,".card[data-v-abd67156]{display:flex;flex-direction:column;height:100%;flex:1 1;transition:.5s;color:#fff}.active[data-v-abd67156]{flex:100% 1!important}.even[data-v-abd67156]{background-color:#141414}.odd[data-v-abd67156]{background-color:#2f4f4f}.card[data-v-abd67156]:hover{flex:2 1}",""])},153:function(t,e,o){"use strict";var n=o(144);o.n(n).a},154:function(t,e,o){(t.exports=o(29)(!1)).push([t.i,".container[data-v-556f51cc]{display:flex;flex-direction:column}.projects[data-v-556f51cc]{background-color:red;height:75vh;display:flex;flex-direction:row}",""])},155:function(t,e,o){"use strict";o.r(e);o(146);var n=o(16),r=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"header"},[e("img",{staticClass:"photo",attrs:{src:o(145),alt:"Minha foto"}}),this._v(" "),e("h1",{staticClass:"title"},[this._v("Lucas Medeiros")]),this._v(" "),e("div",{staticClass:"icons"},[e("a",{attrs:{href:"https://www.linkedin.com/in/lucasmnf/",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),this._v(" "),e("a",{attrs:{href:"https://www.github.com/lukehxh/",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),this._v(" "),e("a",{attrs:{href:"https://www.facebook.com/lucas.pmm",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),this._v(" "),e("a",{attrs:{href:"https://twitter.com/lukehxh",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),this._v(" "),e("a",{attrs:{href:"mailto:lucasmed812@gmail.com",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fas","envelope"]}})],1)])])])},[],!1,null,"5d51a3d8",null).exports,c={name:"ProjectCard",props:{project:{type:Object,default:null}}},l=(o(151),{name:"Projects",components:{ProjectCard:Object(n.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"card",class:t.project.class},[o("a",{attrs:{href:t.project.site,target:"_blank"}},[t._v("\n    "+t._s(t.project.title)+"\n  ")]),t._v(" "),o("p",[t._v(t._s(t.project.description))])])},[],!1,null,"abd67156",null).exports},data:function(){return{projects:[{title:"Um título vem aqui",description:"Uma descrição vem aqui",site:"https://github.com/lukehxh",class:"even"},{title:"Usjaodb dfhdf sdfusdf",description:"Uma descrição vem aqui",site:"https://github.com/lukehxh",class:"odd"},{title:"Terceiro projeto",description:"Uma descrição vem aqui",site:"https://github.com/lukehxh",class:"even"}]}}}),d=(o(153),{components:{Intro:r,Projects:Object(n.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"projects"},this._l(this.projects,function(p){return e("project-card",{key:p.title,attrs:{project:p}})}),1)])},[],!1,null,"556f51cc",null).exports}}),f=Object(n.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Intro"),this._v(" "),e("Projects")],1)},[],!1,null,null,null);e.default=f.exports}}]);