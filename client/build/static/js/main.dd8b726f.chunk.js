(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,c){e.exports={card:"CardRecipe_card__3hbav",diets:"CardRecipe_diets__Q-oJs",diets__title:"CardRecipe_diets__title__3SOcV",diet:"CardRecipe_diet__awMvX",info:"CardRecipe_info__1CBNJ",score:"CardRecipe_score__QUnDp",score__n:"CardRecipe_score__n__EVBvL"}},18:function(e,t,c){e.exports={filters:"filters_filters__2aaAm",section:"filters_section__1SKbG",checkbox:"filters_checkbox__sht_D",title:"filters_title__2UtGD"}},21:function(e,t,c){e.exports={container:"recipes_container__2RCsc",components:"recipes_components__1zr-J",recipes:"recipes_recipes__2nAOE",msg:"recipes_msg__3xC62",loader:"recipes_loader__10uM5"}},26:function(e,t,c){e.exports={landing:"landing_landing__3qwGA",div:"landing_div__3EGsY",content:"landing_content__tAHPT",animate:"landing_animate__3-iAJ"}},27:function(e,t,c){e.exports={pagination:"pagination_pagination__u2xyJ",button:"pagination_button__284Pc",input:"pagination_input__3Ap0A"}},28:function(e,t,c){e.exports={spinner:"loader_spinner__1fVxg",circular:"loader_circular__1Zzh2",rotate:"loader_rotate__3DU4Q",path:"loader_path__1empo",dash:"loader_dash__25rdA",color:"loader_color__1qjU8"}},3:function(e,t,c){e.exports={addRecipe:"addRecipe_addRecipe__12MsV",danger:"addRecipe_danger__22u-o",diets:"addRecipe_diets__3WvUH",checkbox:"addRecipe_checkbox__1nPH9",title:"addRecipe_title__TkF54",container:"addRecipe_container__3CG8d",group:"addRecipe_group__385DE",bar:"addRecipe_bar__1GCN6",highlight:"addRecipe_highlight__3LI_v",inputHighlighter:"addRecipe_inputHighlighter__pXT3b",response:"addRecipe_response__2S2Lb"}},32:function(e,t,c){e.exports={group:"searchInput_group__2G-tC",input:"searchInput_input__NoPil",icon:"searchInput_icon__2oORQ"}},51:function(e,t,c){e.exports={home:"home_home__z3mBK"}},57:function(e,t,c){},58:function(e,t,c){},7:function(e,t,c){e.exports={container:"recipeInfo_container__3qtrl",info:"recipeInfo_info__1kj7Z",section:"recipeInfo_section__3Qk_o",img:"recipeInfo_img__2WgjS",section__info:"recipeInfo_section__info__26nFq",scores:"recipeInfo_scores__3hNRC",diet:"recipeInfo_diet__30AWl",type:"recipeInfo_type__1jk3j",score:"recipeInfo_score__1_KSm",health:"recipeInfo_health__37lb_",extra__container:"recipeInfo_extra__container__rtqc6",extra:"recipeInfo_extra__e6_OY",button:"recipeInfo_button__3WVD5",loader:"recipeInfo_loader__26iBK"}},90:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(30),s=c.n(n),r=(c(57),c(58),c(5)),i=c(13),o=c(26),l=c.n(o),d=c(0);function u(){return Object(d.jsxs)("div",{className:l.a.landing,children:[Object(d.jsxs)("div",{className:l.a.div,children:[Object(d.jsxs)("div",{className:l.a.content,children:[Object(d.jsx)("h2",{children:"HENRY"}),Object(d.jsx)("h2",{children:"HENRY"})]}),Object(d.jsxs)("div",{className:l.a.content,children:[Object(d.jsx)("h2",{children:"FOOD"}),Object(d.jsx)("h2",{children:"FOOD"})]})]}),Object(d.jsx)(i.b,{to:"/home",children:Object(d.jsx)("button",{type:"button",children:"Start Now"})})]})}var j=c(8),p=c(6),h=c(17),b=c.n(h);function m(e){var t="/recipe/".concat(e.id);return Object(d.jsx)(i.b,{to:t,style:{color:"inherit",textDecoration:"inherit"},children:Object(d.jsxs)("div",{className:b.a.card,children:[Object(d.jsx)("img",{src:e.img,alt:"",className:b.a.img}),Object(d.jsxs)("div",{className:b.a.info,children:[Object(d.jsxs)("h3",{children:[e.name," "]}),Object(d.jsx)("p",{className:b.a.diets__title,children:"Diets \u2714\ufe0e"}),Object(d.jsx)("div",{className:b.a.diets,children:e.diets.map((function(e){return Object(d.jsx)("p",{className:b.a.diet,children:e},e)}))}),Object(d.jsx)("div",{className:b.a.score,children:Object(d.jsxs)("p",{className:b.a.score__n,children:[e.score," \u272a "]})})]})]})})}var O=c(27),_=c.n(O);function x(e){var t=e.page,c=e.setPage,n=e.max,s=Object(p.c)((function(e){return e.recipes})),r=Object(a.useState)(1),i=Object(j.a)(r,2),o=i[0],l=i[1];Object(a.useEffect)((function(){l(1)}),[s]);return Object(d.jsxs)("div",{className:_.a.pagination,children:[Object(d.jsx)("button",{className:_.a.button,disabled:1===t||t<1,onClick:function(){l(parseInt(o)-1),c(parseInt(t)-1)},children:"\u25c0\ufe0e"}),Object(d.jsx)("input",{className:_.a.input,onChange:function(e){return function(e){l(e.target.value)}(e)},onKeyDown:function(e){return function(e){13==e.keyCode&&(c(parseInt(e.target.value)),parseInt(e.target.value<1)||parseInt(e.target.value)>Math.ceil(n)||isNaN(parseInt(e.target.value))?(c(1),l(1)):c(parseInt(e.target.value)))}(e)},name:"page",autoComplete:"off",value:o}),Object(d.jsxs)("p",{children:[" de ",n?Math.ceil(n):1," "]}),Object(d.jsx)("button",{className:_.a.button,disabled:t===Math.ceil(n)||t>Math.ceil(n),onClick:function(){l(parseInt(o)+1),c(parseInt(t)+1)},children:"\u25ba"})]})}var f=c(19),g=c(15),v=c.n(g),N=c(20),y=c.n(N),E=function(){return function(){var e=Object(f.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://henry-food-back.herokuapp.com/recipes");case 3:c=e.sent,console.log("accion get recipes"),console.log(c),t({type:"GET_RECIPES",payload:c.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return{type:"FILTER_DIETS",payload:e}},C=c(32),S=c.n(C);function R(){var e=Object(p.b)(),t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],s=c[1];return Object(d.jsxs)("div",{className:S.a.group,children:[Object(d.jsx)("svg",{className:S.a.icon,"aria-hidden":"true",viewBox:"0 0 24 24",children:Object(d.jsx)("g",{children:Object(d.jsx)("path",{d:"M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"})})}),Object(d.jsx)("input",{placeholder:"Search",type:"search",className:S.a.input,onChange:function(t){return function(t){var c;t.preventDefault(),s(t.target.value),""===t.target.value&&e({type:"SET_UP_RECIPES",payload:c})}(t)},onKeyDown:function(t){var c;"Enter"===t.key&&(e((c=n,function(){var e=Object(f.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://henry-food-back.herokuapp.com/recipes?name=".concat(c));case 3:a=e.sent,console.log("accion get match recipes"),console.log(a.data),t({type:"GET_RECIPES_MATCH",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),s(""))}})]})}var I=c(21),T=c.n(I),w=c(28),D=c.n(w);function P(){return Object(d.jsx)("div",{className:D.a.loader,children:Object(d.jsx)("div",{className:D.a.spinner,children:Object(d.jsx)("svg",{className:D.a.circular,viewBox:"25 25 50 50",children:Object(d.jsx)("circle",{className:D.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"3",strokeMiterlimit:"10"})})})})}function A(){var e=Object(p.c)((function(e){return e.recipes})),t=Object(a.useState)(1),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(9),o=Object(j.a)(r,2),l=o[0],u=(o[1],e.length/l);return Object(a.useEffect)((function(){console.log("Renderin Recipes")}),[]),Object(a.useEffect)((function(){s(1)}),[e]),e.length>0||e.msg?Object(d.jsxs)("div",{className:T.a.container,children:[Object(d.jsxs)("div",{className:T.a.components,children:[Object(d.jsx)(R,{}),Object(d.jsx)(x,{page:n,setPage:s,max:u})]}),Object(d.jsx)(i.b,{to:"/createRecipe",children:" Create recipe "}),Object(d.jsx)("div",{className:T.a.recipes,children:e.length>0?e.slice((n-1)*l,(n-1)*l+l).map((function(e){return Object(d.jsx)(m,{id:e.id,img:e.img,name:e.name,diets:e.diets,score:e.score},e.id)})):Object(d.jsx)("h2",{className:T.a.msg,children:e.msg})})]}):Object(d.jsx)("div",{className:T.a.loader,children:Object(d.jsx)(P,{})})}var B=c(16),F=c(18),L=c.n(F);function q(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.diets})),c=Object(a.useState)([]),n=Object(j.a)(c,2),s=n[0],r=n[1];Object(a.useEffect)((function(){console.log("filters"),console.log(t),document.getElementById("all").checked=!0}),[]),Object(a.useEffect)((function(){console.log(s),s.length<1&&r("all"),s.length>0&&e(k(s))}),[s]);var i=function(e){if(!0===e.target.checked)if("all"===e.target.value){document.getElementsByName("di").forEach((function(e){return e.checked=!1})),r(e.target.value)}else{document.getElementById("all").checked=!1;var t="all"!==s?[].concat(Object(B.a)(s),[e.target.value]):[e.target.value];r(t)}if(!1===e.target.checked){var c=s.filter((function(t){return t!==e.target.value}));r(c)}};return Object(d.jsxs)("div",{className:L.a.filters,children:[Object(d.jsxs)("section",{className:L.a.section,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Sort by name"}),Object(d.jsxs)("select",{name:"nameFilter",id:"name",onChange:function(t){return function(t){t.preventDefault(),""!==t.target.value&&e({type:"SORT_BY_NAME",payload:t.target.value})}(t)},children:[Object(d.jsx)("option",{value:"",children:"Elige una opci\xf3n"}),Object(d.jsx)("option",{value:"AZ",children:"A - Z"}),Object(d.jsx)("option",{value:"ZA",children:"Z - A"})]})]}),Object(d.jsxs)("section",{className:L.a.section,children:[Object(d.jsx)("label",{htmlFor:"score",children:"Sort by Score"}),Object(d.jsxs)("select",{name:"scoreFilter",id:"score",onChange:function(t){return function(t){t.preventDefault(),""!==t.target.value&&e({type:"SORT_BY_SCORE",payload:t.target.value})}(t)},children:[Object(d.jsx)("option",{value:"",children:"Elige una opci\xf3n"}),Object(d.jsx)("option",{value:"hihgLow",children:"High to low"}),Object(d.jsx)("option",{value:"lowHigh",children:"Low to high"})]})]}),Object(d.jsx)("section",{className:L.a.section,children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[Object(d.jsx)("p",{className:L.a.title,children:"Diets"}),t.map((function(e){return Object(d.jsxs)("div",{className:L.a.checkbox,children:[Object(d.jsx)("input",{type:"checkbox",name:"di",value:e.name,onChange:function(e){return i(e)}},e.id),e.name]},e.name)})),Object(d.jsxs)("div",{className:L.a.checkbox,children:[Object(d.jsx)("input",{type:"checkbox",id:"all",value:"all",onChange:function(e){return i(e)}}),"All types of Diet"]},"all")]})})]})}var H=c(51),M=c.n(H);function G(){var e=Object(p.c)((function(e){return e.recipes})),t=Object(p.b)();return Object(a.useEffect)((function(){console.log("renderizando home"),e.length<1&&(t(E()),t(function(){var e=Object(f.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://henry-food-back.herokuapp.com/types");case 3:c=e.sent,console.log("accion get types"),console.log(c),t({type:"GET_TYPES",payload:c.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[]),Object(d.jsxs)("div",{className:M.a.home,children:[Object(d.jsx)(q,{}),Object(d.jsx)(A,{})]})}var Y=c(7),z=c.n(Y);function J(){var e=Object(r.e)().idRecipe,t=Object(p.c)((function(e){return e.info})),c=Object(p.b)();return Object(a.useEffect)((function(){var t;c((t=e,function(){var e=Object(f.a)(v.a.mark((function e(c){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://henry-food-back.herokuapp.com/recipes/".concat(t));case 3:a=e.sent,console.log("accion get recipe info"),console.log(a.data),c({type:"GET_RECIPE_INFO",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))}),[c,e]),"".concat(t.id)===e?Object(d.jsx)("div",{className:z.a.container,children:Object(d.jsxs)("div",{className:z.a.info,children:[Object(d.jsx)(i.b,{to:"/home",children:Object(d.jsx)("button",{className:z.a.button,children:" \u2190 Back"})}),Object(d.jsx)("h1",{children:t.name}),Object(d.jsxs)("div",{className:z.a.section,children:[t.img?Object(d.jsx)("img",{src:t.img,className:z.a.img,alt:""}):Object(d.jsx)("img",{src:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505",className:z.a.img,alt:""}),Object(d.jsxs)("div",{className:z.a.section__info,children:[Object(d.jsx)("h3",{children:"Diets"}),Object(d.jsx)("ul",{children:t.diets?t.diets.map((function(e){return Object(d.jsx)("li",{className:z.a.diet,children:e},e)})):Object(d.jsx)("li",{children:"No diets"})}),Object(d.jsx)("h3",{children:"Dish types"}),Object(d.jsx)("ul",{children:t.dishTypes?t.dishTypes.map((function(e){return Object(d.jsx)("li",{className:z.a.type,children:e},e)})):Object(d.jsx)("li",{children:"No dish type"})}),Object(d.jsxs)("div",{className:z.a.scores,children:[Object(d.jsx)("div",{className:z.a.score,children:Object(d.jsxs)("p",{children:["\u272a ",t.score]})}),Object(d.jsx)("div",{className:z.a.health,children:Object(d.jsxs)("p",{children:["\u2665\ufe0e ",t.healthScore]})})]})]})]}),Object(d.jsxs)("div",{className:z.a.extra__container,children:[Object(d.jsx)("h3",{children:"Summary"}),Object(d.jsx)("div",{className:z.a.extra,dangerouslySetInnerHTML:{__html:t.summary}})]}),Object(d.jsxs)("div",{className:z.a.extra__container,children:[Object(d.jsx)("h3",{children:"Instructions"}),Object(d.jsx)("div",{className:z.a.extra,dangerouslySetInnerHTML:{__html:t.instructions}})]})]})}):Object(d.jsx)("div",{className:z.a.loader,children:Object(d.jsx)(P,{})})}var U=c(25),Z=c(2),K=c(3),Q=c.n(K);function V(){var e=Object(p.c)((function(e){return e.diets})),t=Object(p.c)((function(e){return e.created})),c=Object(p.b)(),n=Object(a.useState)({name:"",summary:"",score:"",healthScore:"",instructions:"",diets:[]}),s=Object(j.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)({}),l=Object(j.a)(o,2),u=l[0],h=l[1],b=function(e){i(Object(Z.a)(Object(Z.a)({},r),{},Object(U.a)({},e.target.name,e.target.value))),h(function(e){var t={};return e.name?"string"!==(e.name,!1)&&null!==e.name||(t.name="Name is invalid"):t.name="Name is required",e.score?("number"===(e.score,!1)||e.score<0||e.score>100)&&(t.score="score is invalid"):t.score="score is required",e.healthScore?("number"===(e.healthScore,!1)||e.healthScore<0||e.healthScore>100)&&(t.healthScore="healthScore is invalid"):t.healthScore="healthScore is required",e.summary?"string"===(e.summary,!1)&&(t.summary="summary is invalid"):t.summary="summary is required",e.instructions?"string"===(e.instructions,!1)&&(t.instructions="instructions is invalid"):t.instructions="instructions is required",t}(Object(Z.a)(Object(Z.a)({},r),{},Object(U.a)({},e.target.name,e.target.value))))},m=function(e){if(!0===e.target.checked)if("all"===e.target.value){document.getElementsByName("di").forEach((function(e){return e.checked=!1})),i(Object(Z.a)(Object(Z.a)({},r),{},{diets:[]}))}else{document.getElementById("all").checked=!1;var t=r.diets!==[]?[].concat(Object(B.a)(r.diets),[e.target.value]):[e.target.value];i(Object(Z.a)(Object(Z.a)({},r),{},{diets:t}))}if(!1===e.target.checked){var c=r.diets.filter((function(t){return t!==e.target.value}));i(Object(Z.a)(Object(Z.a)({},r),{},{diets:c}))}};return Object(d.jsxs)("div",{className:Q.a.addRecipe,children:[Object(d.jsxs)("div",{className:Q.a.container,children:[Object(d.jsxs)("div",{className:Q.a.group,children:[Object(d.jsx)("input",{required:!0,className:Q.a.input,name:"name",type:"",onChange:function(e){return b(e)}}),Object(d.jsx)("span",{className:Q.a.highlight}),Object(d.jsx)("span",{className:Q.a.bar}),Object(d.jsx)("label",{children:" Name "}),u.name&&Object(d.jsx)("p",{className:Q.a.danger,children:u.name})]}),Object(d.jsxs)("div",{className:Q.a.group,children:[Object(d.jsx)("input",{required:!0,className:Q.a.input,name:"score",type:"number",onChange:function(e){return b(e)}}),Object(d.jsx)("span",{className:Q.a.highlight}),Object(d.jsx)("span",{className:Q.a.bar}),Object(d.jsx)("label",{children:" Score "}),u.score&&Object(d.jsx)("p",{className:Q.a.danger,children:u.score})]}),Object(d.jsxs)("div",{className:Q.a.group,children:[Object(d.jsx)("input",{required:!0,className:Q.a.input,name:"healthScore",type:"number",onChange:function(e){return b(e)}}),Object(d.jsx)("span",{className:Q.a.highlight}),Object(d.jsx)("span",{className:Q.a.bar}),Object(d.jsx)("label",{children:" Health Score "}),u.healthScore&&Object(d.jsx)("p",{className:Q.a.danger,children:u.healthScore})]}),Object(d.jsxs)("div",{className:Q.a.group,children:[Object(d.jsx)("input",{required:!0,className:Q.a.input,name:"summary",type:"",onChange:function(e){return b(e)}}),Object(d.jsx)("span",{className:Q.a.highlight}),Object(d.jsx)("span",{className:Q.a.bar}),Object(d.jsx)("label",{children:" Summary "}),u.summary&&Object(d.jsx)("p",{className:Q.a.danger,children:u.summary})]}),Object(d.jsxs)("div",{className:Q.a.group,children:[Object(d.jsx)("input",{required:!0,className:Q.a.input,name:"instructions",type:"",onChange:function(e){return b(e)}}),Object(d.jsx)("span",{className:Q.a.highlight}),Object(d.jsx)("span",{className:Q.a.bar}),Object(d.jsx)("label",{children:" Instructios "}),u.instructions&&Object(d.jsx)("p",{className:Q.a.danger,children:u.instructions})]})]}),Object(d.jsx)("section",{children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(d.jsx)("p",{className:Q.a.title,children:"Diets"}),Object(d.jsxs)("div",{className:Q.a.diets,children:[e.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:Q.a.checkbox,type:"checkbox",name:"di",value:e.id,onChange:function(e){return m(e)}},e.id),e.name]},e.name)})),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:Q.a.checkbox,type:"checkbox",id:"all",value:"all",onChange:function(e){return m(e)}}),"No Diets"]},"all")]})]})}),Object(d.jsx)("button",{onClick:function(){var e;!u==={}&&c((e=r,function(){var t=Object(f.a)(v.a.mark((function t(c){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post("https://henry-food-back.herokuapp.com/recipes",e);case 3:a=t.sent,console.log("accion post recipe"),console.log(a),E(),c({type:"POST_RECIPE",payload:a.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Done"}),t&&Object(d.jsx)("h2",{className:Q.a.response,children:t.msg})]})}var W=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(r.a,{exact:!0,path:"",component:u}),Object(d.jsx)(r.a,{exact:!0,path:"/home",component:G}),Object(d.jsx)(r.a,{exact:!0,path:"/recipe/:idRecipe",component:J}),Object(d.jsx)(r.a,{exact:!0,path:"/createRecipe",component:V})]})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},$=c(39),ee={recipes:[],diets:[],allRecipes:[],info:[],created:""};var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":return Object(Z.a)(Object(Z.a)({},e),{},{allRecipes:t.payload,recipes:t.payload});case"GET_RECIPES_MATCH":return Object(Z.a)(Object(Z.a)({},e),{},{recipes:t.payload});case"SET_UP_RECIPES":return Object(Z.a)(Object(Z.a)({},e),{},{recipes:e.allRecipes});case"GET_TYPES":return Object(Z.a)(Object(Z.a)({},e),{},{diets:t.payload});case"GET_RECIPE_INFO":return Object(Z.a)(Object(Z.a)({},e),{},{info:t.payload});case"POST_RECIPE":return Object(Z.a)(Object(Z.a)({},e),{},{created:t.payload});case"SORT_BY_NAME":var c=Object(B.a)(e.recipes);return c="AZ"===t.payload?c.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1})):c.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1})),Object(Z.a)(Object(Z.a)({},e),{},{recipes:c});case"SORT_BY_SCORE":var a=Object(B.a)(e.recipes);return"lowHigh"===t.payload?(a=a.sort((function(e,t){return e.score-t.score})),console.log(a)):(a=a.sort((function(e,t){return t.score-e.score})),console.log(a)),Object(Z.a)(Object(Z.a)({},e),{},{recipes:a});case"FILTER_DIETS":if("all"===t.payload)return Object(Z.a)(Object(Z.a)({},e),{},{recipes:e.allRecipes});var n=e.recipes.length>1?e.recipes:e.allRecipes;return t.payload.forEach((function(e){var t;console.log(e.toLowerCase()),n=null===(t=n)||void 0===t?void 0:t.filter((function(t){return t.diets.includes(e.toLowerCase())||t.diets.includes(e)}))})),n.length<1&&(n={msg:"Noting matches"}),console.log(n),Object(Z.a)(Object(Z.a)({},e),{},{recipes:n});default:return Object(Z.a)({},e)}},ce=c(52),ae=Object($.b)(te,Object($.a)(ce.a));s.a.render(Object(d.jsx)(p.a,{store:ae,children:Object(d.jsx)(i.a,{basename:"/TrumanEc.github.io/Henry-Food",children:Object(d.jsx)(W,{})})}),document.getElementById("root")),X()}},[[90,1,2]]]);
//# sourceMappingURL=main.dd8b726f.chunk.js.map