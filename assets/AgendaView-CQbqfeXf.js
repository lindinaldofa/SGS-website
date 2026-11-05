import{Dt as e,Et as t,Fn as n,M as r,Nt as i,Ot as a,Pt as o,Qt as s,Rn as c,St as l,Tt as u,Xt as d,Yt as f,Zt as p,a as ee,ct as m,gt as h,jt as g,kt as _,l as v,ln as y,mt as b,qt as x,r as S,un as C,vt as w,yn as T,zt as E}from"./button-f44Yfa5Q.js";import{t as D}from"./select-127M5hfn.js";import{g as O,m as k}from"./index-T3ugMksk.js";import{t as te}from"./skeleton-BjJYgb2m.js";import{t as ne}from"./EventoCard-DlViYjIU.js";import{t as A}from"./FiltroBusca-7W50OtC0.js";import{t as j}from"./useFiltrosUrl-f0TI7J1A.js";import{t as M}from"./AppPagination-CYd-KNoZ.js";import{t as N}from"./AsyncState-DqbEe8j5.js";import{t as P}from"./PageHeader-DseE3hDS.js";import{t as F}from"./useSeo-CV7BkUvy.js";var I=r.extend({name:`togglebutton`,style:`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-togglebutton p-component`,{"p-togglebutton-checked":t.active,"p-invalid":t.$invalid,"p-togglebutton-fluid":n.fluid,"p-togglebutton-sm p-inputfield-sm":n.size===`small`,"p-togglebutton-lg p-inputfield-lg":n.size===`large`}]},content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,label:`p-togglebutton-label`}}),L={name:`BaseToggleButton`,extends:k,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:`Yes`},offLabel:{type:String,default:`No`},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:I,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function R(e){"@babel/helpers - typeof";return R=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},R(e)}function z(e,t,n){return(t=B(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){var t=V(e,`string`);return R(t)==`symbol`?t:t+``}function V(e,t){if(R(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(R(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var H={name:`ToggleButton`,extends:L,inheritAttrs:!1,emits:[`change`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit(`change`,e))},onBlur:function(e){var t,n;(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return w(this.onLabel)&&w(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:`\xA0`},dataP:function(){return m(z({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:v}},U=[`tabindex`,`disabled`,`aria-pressed`,`aria-label`,`aria-labelledby`,`data-p-checked`,`data-p-disabled`,`data-p`],W=[`data-p`];function G(e,r,i,o,l,u){var f=s(`ripple`);return C((x(),_(`button`,E({type:`button`,class:e.cx(`root`),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:r[0]||=function(){return u.onChange&&u.onChange.apply(u,arguments)},onBlur:r[1]||=function(){return u.onBlur&&u.onBlur.apply(u,arguments)}},u.getPTOptions(`root`),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":u.active,"data-p-disabled":e.disabled,"data-p":u.dataP}),[t(`span`,E({class:e.cx(`content`)},u.getPTOptions(`content`),{"data-p":u.dataP}),[d(e.$slots,`default`,{},function(){return[d(e.$slots,`icon`,{value:e.d_value,class:n(e.cx(`icon`))},function(){return[e.onIcon||e.offIcon?(x(),_(`span`,E({key:0,class:[e.cx(`icon`),e.d_value?e.onIcon:e.offIcon]},u.getPTOptions(`icon`)),null,16)):a(``,!0)]}),t(`span`,E({class:e.cx(`label`)},u.getPTOptions(`label`)),c(u.label),17)]})],16,W)],16,U)),[[f]])}H.render=G;var re=r.extend({name:`selectbutton`,style:`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,classes:{root:function(e){var t=e.props;return[`p-selectbutton p-component`,{"p-invalid":e.instance.$invalid,"p-selectbutton-fluid":t.fluid}]}}}),K={name:`BaseSelectButton`,extends:k,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:re,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function q(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=X(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function J(e){return ae(e)||ie(e)||X(e)||Y()}function Y(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(e,t){if(e){if(typeof e==`string`)return Z(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function ie(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ae(e){if(Array.isArray(e))return Z(e)}function Z(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var Q={name:`SelectButton`,extends:K,inheritAttrs:!1,emits:[`change`],methods:{getOptionLabel:function(e){return this.optionLabel?h(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?h(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?h(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?h(e,this.optionDisabled):!1},isOptionReadonly:function(e){if(this.allowEmpty)return!1;var t=this.isSelected(e);return this.multiple?t&&this.d_value.length===1:t},onOptionSelect:function(e,t,n){var r=this;if(!(this.disabled||this.isOptionDisabled(t)||this.isOptionReadonly(t))){var i=this.isSelected(t),a=this.getOptionValue(t),o;if(this.multiple){if(i){if(o=this.d_value.filter(function(e){return!b(e,a,r.equalityKey)}),!this.allowEmpty&&o.length===0)return}else o=this.d_value?[].concat(J(this.d_value),[a]):[a]}else{if(i&&!this.allowEmpty)return;o=i?null:a}this.writeValue(o,e),this.$emit(`change`,{originalEvent:e,value:o})}},isSelected:function(e){var t=!1,n=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=q(this.d_value),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(b(a,n,this.equalityKey)){t=!0;break}}}catch(e){r.e(e)}finally{r.f()}}}else t=b(this.d_value,n,this.equalityKey);return t}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return m({invalid:this.$invalid})}},directives:{ripple:v},components:{ToggleButton:H}},oe=[`aria-labelledby`,`data-p`];function $(n,r,i,a,o,s){var u=p(`ToggleButton`);return x(),_(`div`,E({class:n.cx(`root`),role:`group`,"aria-labelledby":n.ariaLabelledby},n.ptmi(`root`),{"data-p":s.dataP}),[(x(!0),_(l,null,f(n.options,function(r,i){return x(),e(u,{key:s.getOptionRenderKey(r),modelValue:s.isSelected(r),onLabel:s.getOptionLabel(r),offLabel:s.getOptionLabel(r),disabled:n.disabled||s.isOptionDisabled(r),unstyled:n.unstyled,size:n.size,readonly:s.isOptionReadonly(r),onChange:function(e){return s.onOptionSelect(e,r,i)},pt:n.ptm(`pcToggleButton`)},g({_:2},[n.$slots.option?{name:`default`,fn:y(function(){return[d(n.$slots,`option`,{option:r,index:i},function(){return[t(`span`,E({ref_for:!0},n.ptm(`pcToggleButton`).label),c(s.getOptionLabel(r)),17)]})]}),key:`0`}:void 0]),1032,[`modelValue`,`onLabel`,`offLabel`,`disabled`,`unstyled`,`size`,`readonly`,`onChange`,`pt`])}),128))],16,oe)}Q.render=$;var se={class:`container-site py-10`},ce={class:`grid gap-3 md:grid-cols-[auto_14rem_minmax(0,1fr)] md:items-center`},le={class:`mt-8 grid gap-4 md:grid-cols-2`},ue={class:`mt-8 grid gap-4 md:grid-cols-2`},de=o({__name:`AgendaView`,setup(e){F({titulo:`Agenda`,descricao:`Assembleias, reuniões, atos e cursos do sindicato.`});let n=S(),{query:r,texto:a,pagina:o,definir:s}=j(),c=[{value:`proximos`,label:`Próximos`},{value:`passados`,label:`Passados`}],d=u(()=>n.config?.opcoes?.evento_tipos??[]),p=u(()=>a(`periodo`)===`passados`?`passados`:`proximos`),m=u(()=>!!(a(`tipo`)||a(`q`))),{data:h,loading:g,error:v,recarregar:b}=O(e=>ee.eventos({periodo:p.value,tipo:a(`tipo`),q:a(`q`),page:o.value,per_page:12},e),r),C=u(()=>h.value?.data??[]),w=u(()=>m.value?`Nenhum evento encontrado com esses filtros.`:p.value===`proximos`?`Nenhum evento programado no momento.`:`Nenhum evento passado registrado.`);return(e,n)=>(x(),_(`div`,null,[i(P,{titulo:`Agenda`,descricao:`Assembleias, reuniões, atos e cursos da categoria.`,migalhas:[{titulo:`Agenda`}]}),t(`section`,se,[t(`div`,ce,[i(T(Q),{"model-value":p.value,options:c,"option-label":`label`,"option-value":`value`,"allow-empty":!1,"aria-label":`Período`,"onUpdate:modelValue":n[0]||=e=>T(s)({periodo:e===`passados`?e:null})},null,8,[`model-value`]),i(T(D),{"model-value":T(a)(`tipo`)||null,options:d.value,"option-label":`label`,"option-value":`value`,placeholder:`Todos os tipos`,"aria-label":`Tipo de evento`,"show-clear":``,fluid:``,"onUpdate:modelValue":n[1]||=e=>T(s)({tipo:e})},null,8,[`model-value`,`options`]),i(A,{"model-value":T(a)(`q`),rotulo:`Buscar na agenda`,"onUpdate:modelValue":n[2]||=e=>T(s)({q:e})},null,8,[`model-value`])]),n[3]||=t(`h2`,{class:`sr-only`},`Eventos`,-1),i(N,{loading:T(g),error:T(v),empty:!C.value.length,"empty-text":w.value,onRetry:T(b)},{loading:y(()=>[t(`div`,le,[(x(),_(l,null,f(6,e=>i(T(te),{key:e,height:`7rem`})),64))])]),default:y(()=>[t(`ul`,ue,[(x(!0),_(l,null,f(C.value,e=>(x(),_(`li`,{key:e.id},[i(ne,{evento:e},null,8,[`evento`])]))),128))]),i(M,{meta:T(h)?.meta},null,8,[`meta`])]),_:1},8,[`loading`,`error`,`empty`,`empty-text`,`onRetry`])])]))}});export{de as default};