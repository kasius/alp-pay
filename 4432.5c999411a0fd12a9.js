(self.webpackChunkpay=self.webpackChunkpay||[]).push([[4432],{2509:(L,f,c)=>{c.d(f,{c:()=>m});const m=l=>{const u=l;let b;return{hasLegacyControl:()=>{if(void 0===b){const o=void 0!==u.label||t(u),s=u.hasAttribute("aria-label")||u.hasAttribute("aria-labelledby")&&null===u.shadowRoot;b=!0===u.legacy||!o&&!s}return b}}},t=l=>null!==l.shadowRoot&&!!(g.includes(l.tagName)&&null!==l.querySelector('[slot="label"]')||x.includes(l.tagName)&&""!==l.textContent),g=["ION-RANGE"],x=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4432:(L,f,c)=>{c.r(f),c.d(f,{ion_radio:()=>s,ion_radio_group:()=>_});var m=c(5861),t=c(9816),g=c(6406),x=c(2509),l=c(9397),u=c(1178),b=c(2854);const s=class{constructor(e){(0,t.r)(this,e),this.ionStyle=(0,t.d)(this,"ionStyle",7),this.ionFocus=(0,t.d)(this,"ionFocus",7),this.ionBlur=(0,t.d)(this,"ionBlur",7),this.inputId="ion-rb-"+v++,this.radioGroup=null,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onClick=()=>{this.checked=this.nativeInput.checked},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.legacy=void 0,this.justify="space-between"}valueChanged(){this.updateState()}setFocus(e){var r=this;return(0,m.Z)(function*(){e.stopPropagation(),e.preventDefault(),r.el.focus()})()}setButtonTabindex(e){var r=this;return(0,m.Z)(function*(){r.buttonTabindex=e})()}connectedCallback(){this.legacyFormController=(0,x.c)(this.el),void 0===this.value&&(this.value=this.inputId);const e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,l.a)(e,"ionValueChange",this.updateState))}disconnectedCallback(){const e=this.radioGroup;e&&((0,l.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,l.i)(this.el)))}styleChanged(){this.emitStyle()}emitStyle(){const e={"interactive-disabled":this.disabled};this.legacyFormController.hasLegacyControl()&&(e["radio-checked"]=this.checked),this.ionStyle.emit(e)}get hasLabel(){return""!==this.el.textContent}renderRadioControl(){return(0,t.h)("div",{class:"radio-icon",part:"container"},(0,t.h)("div",{class:"radio-inner",part:"mark"}),(0,t.h)("div",{class:"radio-ripple"}))}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()}renderRadio(){const{checked:e,disabled:r,inputId:i,color:n,el:h,justify:p,labelPlacement:d,inheritedAttributes:w,hasLabel:C}=this,E=(0,g.b)(this),k=(0,b.h)("ion-item",h);return(0,t.h)(t.H,{onClick:this.onClick,class:(0,b.c)(n,{[E]:!0,"in-item":k,"radio-checked":e,"radio-disabled":r,[`radio-justify-${p}`]:!0,[`radio-label-placement-${d}`]:!0,"ion-activatable":!k,"ion-focusable":!k})},(0,t.h)("label",{class:"radio-wrapper"},(0,t.h)("input",Object.assign({type:"radio",checked:e,disabled:r,id:i,ref:I=>this.nativeInput=I},w)),(0,t.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!C}},(0,t.h)("slot",null)),(0,t.h)("div",{class:"native-wrapper"},this.renderRadioControl())))}renderLegacyRadio(){this.hasLoggedDeprecationWarning||((0,u.p)('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,u.p)('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{inputId:e,disabled:r,checked:i,color:n,el:h,buttonTabindex:p}=this,d=(0,g.b)(this),{label:w,labelId:C,labelText:E}=(0,l.e)(h,e);return(0,t.h)(t.H,{"aria-checked":`${i}`,"aria-hidden":r?"true":null,"aria-labelledby":w?C:null,role:"radio",tabindex:p,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,b.c)(n,{[d]:!0,"in-item":(0,b.h)("ion-item",h),interactive:!0,"radio-checked":i,"radio-disabled":r,"legacy-radio":!0})},this.renderRadioControl(),(0,t.h)("label",{htmlFor:e},E),(0,t.h)("input",{type:"radio",checked:i,disabled:r,tabindex:"-1",id:e,ref:k=>this.nativeInput=k}))}get el(){return(0,t.f)(this)}static get watchers(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}}};let v=0;s.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%}:host(.in-item[slot=start]:not(.legacy-radio)),:host(.in-item[slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%}:host(.in-item[slot=start]:not(.legacy-radio)),:host(.in-item[slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}'};const _=class{constructor(e){(0,t.r)(this,e),this.ionChange=(0,t.d)(this,"ionChange",7),this.ionValueChange=(0,t.d)(this,"ionValueChange",7),this.inputId="ion-rg-"+y++,this.labelId=`${this.inputId}-lbl`,this.setRadioTabindex=r=>{const i=this.getRadios(),n=i.find(d=>!d.disabled),h=i.find(d=>d.value===r&&!d.disabled);if(!n&&!h)return;const p=h||n;for(const d of i)d.setButtonTabindex(d===p?0:-1)},this.onClick=r=>{r.preventDefault();const i=r.target&&r.target.closest("ion-radio");if(i){const h=i.value;h!==this.value?(this.value=h,this.emitValueChange(r)):this.allowEmptySelection&&(this.value=void 0,this.emitValueChange(r))}},this.allowEmptySelection=!1,this.name=this.inputId,this.value=void 0}valueChanged(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})}componentDidLoad(){this.setRadioTabindex(this.value)}connectedCallback(){var e=this;return(0,m.Z)(function*(){const r=e.el.querySelector("ion-list-header")||e.el.querySelector("ion-item-divider");if(r){const i=e.label=r.querySelector("ion-label");i&&(e.labelId=i.id=e.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}emitValueChange(e){const{value:r}=this;this.ionChange.emit({value:r,event:e})}onKeydown(e){const r=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target))return;const i=this.getRadios().filter(n=>!n.disabled);if(e.target&&i.includes(e.target)){const n=i.findIndex(d=>d===e.target),h=i[n];let p;if(["ArrowDown","ArrowRight"].includes(e.key)&&(p=n===i.length-1?i[0]:i[n+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(p=0===n?i[i.length-1]:i[n-1]),p&&i.includes(p)&&(p.setFocus(e),r||(this.value=p.value,this.emitValueChange(e))),[" "].includes(e.key)){const d=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:h.value,(d!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}render(){const{label:e,labelId:r,el:i,name:n,value:h}=this,p=(0,g.b)(this);return(0,l.d)(!0,i,n,h,!1),(0,t.h)(t.H,{role:"radiogroup","aria-labelledby":e?r:null,onClick:this.onClick,class:p})}get el(){return(0,t.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let y=0},2854:(L,f,c)=>{c.d(f,{c:()=>g,g:()=>l,h:()=>t,o:()=>b});var m=c(5861);const t=(a,o)=>null!==o.closest(a),g=(a,o)=>"string"==typeof a&&a.length>0?Object.assign({"ion-color":!0,[`ion-color-${a}`]:!0},o):o,l=a=>{const o={};return(a=>void 0!==a?(Array.isArray(a)?a:a.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(a).forEach(s=>o[s]=!0),o},u=/^[a-z][a-z0-9+\-.]*:/,b=function(){var a=(0,m.Z)(function*(o,s,v,_){if(null!=o&&"#"!==o[0]&&!u.test(o)){const y=document.querySelector("ion-router");if(y)return s?.preventDefault(),y.push(o,v,_)}return!1});return function(s,v,_,y){return a.apply(this,arguments)}}()}}]);