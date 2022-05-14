(function(){"use strict";var t={9687:function(t,s,e){var a=e(9242),n=e(3396);const i={id:"align"};function o(t,s,e,a,o,r){const l=(0,n.up)("Tasks");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l)])}var r=e(7139);const l={class:"form-task"};function c(t,s,e,i,o,c){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.wy)((0,n._)("input",{onKeypress:s[0]||(s[0]=t=>c.keyPress(t)),"onUpdate:modelValue":s[1]||(s[1]=t=>o.task=t),type:"text",placeholder:"Digite sua tarefa",class:"text-task"},null,544),[[a.nr,o.task]]),(0,n._)("button",{onClick:s[2]||(s[2]=(0,a.iM)(((...t)=>c.addTask&&c.addTask(...t)),["prevent"])),class:"button"},(0,r.zw)(e.buttonText),1)])}var d={name:"FormTask",data(){return{task:""}},props:{buttonText:String},methods:{addTask(){""!=this.task.trim()&&(this.$emit("add-task",this.task),this.task="")},keyPress(t){"Enter"==t.key&&this.addTask()}}},u=e(89);const k=(0,u.Z)(d,[["render",c]]);var f=k;const h=t=>((0,n.dD)("data-v-9d9fc1c2"),t=t(),(0,n.Cn)(),t),p={class:"container"},v=h((()=>(0,n._)("h1",null,"Tarefas",-1))),m={class:"task-item"},T={class:"changed-buttons"},y=["onClick"],b=["onClick"],g=["onClick"],_={id:"modal",class:"modal-wrapper"},w={class:"modal"},C={class:"wrapper"},O={class:"container-buttons"};function x(t,s,e,i,o,l){const c=(0,n.up)("FormTask");return(0,n.wg)(),(0,n.iD)("div",p,[v,(0,n.Wm)(c,{onAddTask:l.addTask,buttonText:"Adicionar"},null,8,["onAddTask"]),o.tasks?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(l.allTasks,((t,s)=>((0,n.wg)(),(0,n.iD)("ul",{key:s,class:"list-tasks"},[(0,n._)("li",m,[(0,n._)("span",{class:(0,r.C_)({finished:1==t.concluded})},(0,r.zw)(t.name),3),(0,n._)("div",T,[(0,n._)("i",{class:"fa fa-check icon i-check",onClick:(0,a.iM)((t=>l.finishedTask(s)),["prevent"])},null,8,y),(0,n._)("i",{class:"fa fa-edit icon i-edit",onClick:(0,a.iM)((t=>l.editTask(s)),["prevent"])},null,8,b),(0,n._)("i",{class:"fa fa-trash icon i-trash",onClick:t=>l.deleteTask(s)},null,8,g)])])])))),128)):(0,n.kq)("",!0),(0,n._)("div",_,[(0,n._)("div",w,[(0,n._)("div",C,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.task=t),id:"textarea"},null,512),[[a.nr,o.task]]),(0,n._)("div",O,[(0,n._)("button",{onClick:s[1]||(s[1]=(...t)=>l.closeModal&&l.closeModal(...t)),class:"button cancel"},"Cancelar"),(0,n._)("button",{onClick:s[2]||(s[2]=t=>l.addTask(o.task)),class:"button salve"},"Salvar")])])])])])}var M={name:"Tasks",data(){return{tasks:[],active:!1,task:"",editedTask:null,statusFinished:null}},components:{FormTask:f},methods:{addTask(t){null===this.editedTask?this.tasks.unshift({name:t,concluded:!1}):(this.tasks[this.editedTask].concluded=!1,this.tasks[this.editedTask].name=this.task,this.editedTask=null,this.closeModal())},deleteTask(t){this.tasks.splice(t,1)},editTask(t){this.task=this.tasks[t].name;let s=document.getElementById("modal");s.style.visibility="visible",s.style.opacity="1",this.editedTask=t},closeModal(){let t=document.getElementById("modal");t.style.visibility="hidden",t.style.opacity="0"},finishedTask(t){this.tasks[t].concluded=!0}},created(){localStorage.length>0&&(this.tasks=JSON.parse(localStorage.getItem("tasks")))},updated(){localStorage.setItem("tasks",JSON.stringify(this.tasks))},computed:{allTasks(){return this.tasks}}};const D=(0,u.Z)(M,[["render",x],["__scopeId","data-v-9d9fc1c2"]]);var S=D,j={name:"App",components:{FormTask:f,Tasks:S}};const F=(0,u.Z)(j,[["render",o]]);var I=F;(0,a.ri)(I).mount("#app")}},s={};function e(a){var n=s[a];if(void 0!==n)return n.exports;var i=s[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(s,a,n,i){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],i=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(d--,1);var c=n();void 0!==c&&(s=c)}}return s}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,n,i]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var n,i,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(s){return 0!==t[s]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var d=l(e)}for(s&&s(a);c<o.length;c++)i=o[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},a=self["webpackChunktodo_list_vue"]=self["webpackChunktodo_list_vue"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(9687)}));a=e.O(a)})();
//# sourceMappingURL=app.a1f98de8.js.map