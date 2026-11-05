import{$t as e,Dt as t,Et as n,Fn as r,M as i,Mt as a,Ot as o,Pt as s,Qt as c,Rn as l,Tt as u,Xt as d,Zt as f,ct as p,f as m,fn as h,kt as g,l as _,ln as v,mn as y,qt as b,un as x,zt as S}from"./button-f44Yfa5Q.js";import{T as C,y as w}from"./index-T3ugMksk.js";var T=i.extend({name:`message`,style:`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-icon {
        flex-shrink: 0;
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-icon {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-icon {
        font-size: dt('message.close.icon.sm.size');
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-icon {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`,classes:{root:function(e){var t=e.props;return[`p-message p-component p-message-`+t.severity,{"p-message-outlined":t.variant===`outlined`,"p-message-simple":t.variant===`simple`,"p-message-sm":t.size===`small`,"p-message-lg":t.size===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`}}),E={name:`BaseMessage`,extends:m,props:{severity:{type:String,default:`info`},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:T,provide:function(){return{$pcMessage:this,$parentInstance:this}}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},D(e)}function O(e,t,n){return(t=k(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=A(e,`string`);return D(t)==`symbol`?t:t+``}function A(e,t){if(D(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(D(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var j={name:`Message`,extends:E,inheritAttrs:!1,emits:[`close`,`life-end`],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit(`life-end`)},this.life)},methods:{close:function(e){this.visible=!1,this.$emit(`close`,e)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return p(O(O({outlined:this.variant===`outlined`,simple:this.variant===`simple`},this.severity,this.severity),this.size,this.size))}},directives:{ripple:_},components:{TimesIcon:w}};function M(e){"@babel/helpers - typeof";return M=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},M(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?N(Object(n),!0).forEach(function(t){F(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function F(e,t,n){return(t=I(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=L(e,`string`);return M(t)==`symbol`?t:t+``}function L(e,t){if(M(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(M(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var R=[`data-p`],z=[`data-p`],B=[`data-p`],V=[`aria-label`,`data-p`],ee=[`data-p`];function H(i,a,s,l,u,p){var m=f(`TimesIcon`),h=c(`ripple`);return b(),t(C,S({name:`p-message`,appear:``},i.ptmi(`transition`)),{default:v(function(){return[u.visible?(b(),g(`div`,S({key:0,class:i.cx(`root`),role:`alert`,"aria-live":`assertive`,"aria-atomic":`true`,"data-p":p.dataP},i.ptm(`root`)),[n(`div`,S({class:i.cx(`contentWrapper`)},i.ptm(`contentWrapper`)),[i.$slots.container?d(i.$slots,`container`,{key:0,closeCallback:p.close}):(b(),g(`div`,S({key:1,class:i.cx(`content`),"data-p":p.dataP},i.ptm(`content`)),[d(i.$slots,`icon`,{class:r(i.cx(`icon`))},function(){return[(b(),t(e(i.icon?`span`:null),S({class:[i.cx(`icon`),i.icon],"data-p":p.dataP},i.ptm(`icon`)),null,16,[`class`,`data-p`]))]}),i.$slots.default?(b(),g(`div`,S({key:0,class:i.cx(`text`),"data-p":p.dataP},i.ptm(`text`)),[d(i.$slots,`default`)],16,B)):o(``,!0),i.closable?x((b(),g(`button`,S({key:1,class:i.cx(`closeButton`),"aria-label":p.closeAriaLabel,type:`button`,onClick:a[0]||=function(e){return p.close(e)},"data-p":p.dataP},P(P({},i.closeButtonProps),i.ptm(`closeButton`))),[d(i.$slots,`closeicon`,{},function(){return[i.closeIcon?(b(),g(`i`,S({key:0,class:[i.cx(`closeIcon`),i.closeIcon],"data-p":p.dataP},i.ptm(`closeIcon`)),null,16,ee)):(b(),t(m,S({key:1,class:[i.cx(`closeIcon`),i.closeIcon],"data-p":p.dataP},i.ptm(`closeIcon`)),null,16,[`class`,`data-p`]))]})],16,V)),[[h]]):o(``,!0)],16,z))],16)],16,R)):o(``,!0)]}),_:3},16)}j.render=H;var U=[`id`,`for`],W={key:0,class:`text-primary`,"aria-hidden":`true`},G=[`id`],K=[`id`],q=s({__name:`CampoForm`,props:{id:{},label:{},erro:{},ajuda:{},obrigatorio:{type:Boolean}},setup(e){let t=e,r=u(()=>`${t.id}-ajuda`),i=u(()=>`${t.id}-erro`),s=u(()=>({id:t.id,invalid:!!t.erro,"aria-invalid":t.erro?`true`:void 0,"aria-required":t.obrigatorio?`true`:void 0,"aria-describedby":[t.erro?i.value:null,t.ajuda?r.value:null].filter(Boolean).join(` `)||void 0}));return(t,c)=>(b(),g(`div`,null,[n(`label`,{id:`${e.id}-rotulo`,for:e.id,class:`mb-1.5 block text-sm font-semibold`},[a(l(e.label)+` `,1),e.obrigatorio?(b(),g(`span`,W,`*`)):o(``,!0)],8,U),d(t.$slots,`default`,{campo:s.value}),e.ajuda?(b(),g(`p`,{key:0,id:r.value,class:`mt-1 text-sm text-muted-color`},l(e.ajuda),9,G)):o(``,!0),e.erro?(b(),g(`p`,{key:1,id:i.value,class:`mt-1 flex items-start gap-1.5 text-sm font-medium text-(--p-red-700)`},[c[0]||=n(`i`,{class:`pi pi-exclamation-circle mt-0.5 text-xs`,"aria-hidden":`true`},null,-1),n(`span`,null,l(e.erro),1)],8,K)):o(``,!0)]))}});function J(){let e=y(0),t;function n(){clearInterval(t),t=void 0}function r(r){n(),e.value=r,t=setInterval(()=>{--e.value,e.value<=0&&n()},1e3)}return h(n),{segundos:e,aguardando:u(()=>e.value>0),iniciar:r}}var Y=e=>e.replace(/\D/g,``);function X(e){return Y(e).slice(0,11).replace(/^(\d{3})(\d)/,`$1.$2`).replace(/^(\d{3})\.(\d{3})(\d)/,`$1.$2.$3`).replace(/\.(\d{3})(\d{1,2})$/,`.$1-$2`)}function Z(e){return Y(e).slice(0,8).replace(/^(\d{5})(\d)/,`$1-$2`)}function Q(e){let t=Y(e).slice(0,11);if(t.length<=2)return t.length?`(${t}`:``;let n=t.length===11?7:6,r=t.slice(2,n),i=t.slice(n);return`(${t.slice(0,2)}) ${r}${i?`-${i}`:``}`}function $(e){let t=Y(e);if(t.length!==11||/^(\d)\1{10}$/.test(t))return!1;let n=e=>{let n=0;for(let r=0;r<e;r++)n+=Number(t[r])*(e+1-r);let r=n*10%11;return r===10?0:r};return n(9)===Number(t[9])&&n(10)===Number(t[10])}var te=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());function ne(){let e=new Date,t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function re(e){let t=e?.querySelector(`[aria-invalid="true"], .p-invalid`);t&&(t.matches(`input, textarea, select, [tabindex]`)?t:t.querySelector(`input, textarea, [tabindex]`))?.focus()}var ie=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n};export{re as a,X as c,q as d,j as f,te as i,Q as l,Y as n,ne as o,$ as r,Z as s,ie as t,J as u};