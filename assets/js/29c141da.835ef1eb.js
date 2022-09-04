"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[63],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(t),u=o,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6261:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=t(3117),o=t(102),r=(t(7294),t(3905)),l=["components"],i={title:"Numeric Format",sidebar_position:2},s="Props",m={unversionedId:"numeric_format",id:"numeric_format",title:"Numeric Format",description:"allowLeadingZeros boolean",source:"@site/docs/numeric_format.md",sourceDirName:".",slug:"/numeric_format",permalink:"/docs/numeric_format",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/numeric_format.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Numeric Format",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/intro"},next:{title:"Pattern Format",permalink:"/docs/pattern_format"}},p={},d=[{value:"allowLeadingZeros <code>boolean</code>",id:"allowleadingzeros-boolean",level:3},{value:"allowNegative <code>boolean</code>",id:"allownegative-boolean",level:3},{value:"allowedDecimalSeparators <code>Array&lt;string&gt;</code>",id:"alloweddecimalseparators-arraystring",level:3},{value:"customInput <code>React.Component&lt;any&gt;</code>",id:"custominput-reactcomponentany",level:3},{value:"decimalScale <code>number</code>",id:"decimalscale-number",level:3},{value:"decimalSeparator <code>string</code>",id:"decimalseparator-string",level:3},{value:"defaultValue <code>number | string</code>",id:"defaultvalue-number--string",level:3},{value:"displayType <code>text | input</code>",id:"displaytype-text--input",level:3},{value:"getInputRef <code>elm =&gt; void</code>",id:"getinputref-elm--void",level:3},{value:"isAllowed <code>(values) =&gt; boolean</code>",id:"isallowed-values--boolean",level:3},{value:"valueIsNumericString <code>boolean</code>",id:"valueisnumericstring-boolean",level:3},{value:"onValueChange <code>(values, sourceInfo) =&gt; {}</code>",id:"onvaluechange-values-sourceinfo--",level:3},{value:"prefix <code>string</code>",id:"prefix-string",level:3},{value:"renderText <code>(formattedValue, customProps) =&gt; React Element</code>",id:"rendertext-formattedvalue-customprops--react-element",level:3},{value:"suffix <code>string</code>",id:"suffix-string",level:3},{value:"thousandsGroupStyle <code>string</code>",id:"thousandsgroupstyle-string",level:3},{value:"type <code>string</code>",id:"type-string",level:3},{value:"value <code>number | string</code>",id:"value-number--string",level:3},{value:"Common Props",id:"common-props",level:3}],c={toc:d};function u(e){var a=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"props"},"Props"),(0,r.kt)("h3",{id:"allowleadingzeros-boolean"},"allowLeadingZeros ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"By default, on blur of an input, leading zeros are removed. To disable the behaviour, set ",(0,r.kt)("inlineCode",{parentName:"p"},"allowLeadingZeros")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat value="020020220" allowLeadingZeros thousandSeparator="," />;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/allowleadingzeros-demo-ji97mv?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowLeadingZeros-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"allownegative-boolean"},"allowNegative ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("p",null,"Is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", negative numbers will not be allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value=\"-12\" allowNegative />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/allownegative-demo-dx8gdf?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowNegative-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"alloweddecimalseparators-arraystring"},"allowedDecimalSeparators ",(0,r.kt)("inlineCode",{parentName:"h3"},"Array<string>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Characters which when pressed result in a decimal separator. When missing, decimal separator and '.' are used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value=\"12\" allowedDecimalSeparators={['%']} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/allownegative-demo-forked-3ufso6?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"allowNegative-demo (forked)",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"custominput-reactcomponentany"},"customInput ",(0,r.kt)("inlineCode",{parentName:"h3"},"React.Component<any>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("p",null,"This allow supporting custom input components with number format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\nimport { TextField } from '@mui/material';\n\n<NumericFormat value={12323} customInput={TextField} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/custominput-demo-u3wg9m?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"customInput-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"decimalscale-number"},"decimalScale ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"If defined, it limits the number of digits after the decimal point."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={12323} decimalScale={3} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/decimalscale-demo-uc92li?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"decimalScale-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"decimalseparator-string"},"decimalSeparator ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": '.'"),(0,r.kt)("p",null,"Defines the decimal character."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={12323.3333} decimalSeparator=\",\" />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/decimalseparator-demo-tv9ptw?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"decimalSeparator-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"defaultvalue-number--string"},"defaultValue ",(0,r.kt)("inlineCode",{parentName:"h3"},"number | string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Value to be used as default value if value is not provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat defaultValue=\"12312\" />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/defaultvalue-demo-1qc7fk?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"defaultValue-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"displaytype-text--input"},"displayType ",(0,r.kt)("inlineCode",{parentName:"h3"},"text | input")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"input")),(0,r.kt)("p",null,"If value is ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),", it renders an input element where formatting happens as you type characters. If value is ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),", it renders formatted text in a span tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat displayType="input" value={110} />;\n<NumericFormat displayType="text" value="110" />;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/displaytype-demo-hgcvs9?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"displayType-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"getinputref-elm--void"},"getInputRef ",(0,r.kt)("inlineCode",{parentName:"h3"},"elm => void")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is deprecated in favour of passing ref directly instead of using getInputRef."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("p",null,"Method to get reference of input, span (based on displayType prop) or the customInput's reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\nimport { useRef } from 'react';\n\nexport default function App() {\n  let ref = useRef();\n  return (\n    <NumericFormat\n      getInputRef={(inputRef) => {\n        ref = inputRef;\n        console.log(ref);\n      }}\n    />\n  );\n}\n")),(0,r.kt)("h3",{id:"isallowed-values--boolean"},"isAllowed ",(0,r.kt)("inlineCode",{parentName:"h3"},"(values) => boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"A checker function to validate the input value. If this function returns false, the onChange method will not get triggered and the input value will not change."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\nconst MAX_LIMIT = 1000;\n\n<NumericFormat\n  value={11}\n  isAllowed={(values, sourceInfo) => {\n    const { value } = values;\n    return value < MAX_LIMIT;\n  }}\n/>;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/isallowed-demo-3hrw7z?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"isAllowed-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"valueisnumericstring-boolean"},"valueIsNumericString ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": false"),(0,r.kt)("p",null,"If value is passed as string representation of numbers (unformatted) then this should be passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat\n  value={val}\n  type="text"\n  value="123456789"\n  decimalSeparator=","\n  displayType="input"\n  type="text"\n/>;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/valueIsNumericString-demo-gjdqgr?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"valueIsNumericString-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"onvaluechange-values-sourceinfo--"},"onValueChange ",(0,r.kt)("inlineCode",{parentName:"h3"},"(values, sourceInfo) => {}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": undefined"),(0,r.kt)("p",null,"A handler which recieves any changes on the value, triggered from user input or prop change. It recieves ",(0,r.kt)("a",{parentName:"p",href:"#valueObject"},"valueObject")," as first param, and ",(0,r.kt)("a",{parentName:"p",href:"#sourceInfo"},"sourceInfo")," as second param."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat\n  value={123441234123}\n  prefix=\"$\"\n  onValueChange={(values, sourceInfo) => {\n    console.log(values, sourceInfo);\n  }}\n/>;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/onvaluechange-demo-c5nl2f?fontsize=14&hidenavigation=1&theme=dark&view=editor",className:"csb",title:"onvaluechange-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"prefix-string"},"prefix ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),":",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Adds the prefix character before the input value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} prefix={'$'} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/prefix-demo-6ibo72?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"prefix-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"rendertext-formattedvalue-customprops--react-element"},"renderText ",(0,r.kt)("inlineCode",{parentName:"h3"},"(formattedValue, customProps) => React Element")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"A renderText method useful if you want to render formattedValue in different element other than span. It also returns the custom props that are added to the component which can allow passing down props to the rendered element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat\n  value={1231231}\n  thousandsGroupStyle="lakh"\n  thousandSeparator=","\n  displayType="text"\n  renderText={(value) => <b>{value}</b>}\n/>;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/rendertext-demo-lg3dml?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"renderText-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"suffix-string"},"suffix ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Adds the suffix after the input value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} suffix={'/ -'} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/suffice-demo-7tlerm?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"suffice-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"thousandsgroupstyle-string"},"thousandsGroupStyle ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},",")),(0,r.kt)("p",null,"Defines the thousand grouping style."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Supported types. thousand style (thousand) : 123,456,789, indian style (lakh) : 12,34,56,789, chinese style (wan) : 1,2345,6789."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat type="text" value={1231231} thousandsGroupStyle="lakh" thousandSeparator="," />;\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/thousandsgroupstyle-demo-u3ip59?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"thousandsGroupStyle-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"type-string"},"type ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"text")),(0,r.kt)("p",null,"This allows passing the input type attribute value, Supported types include ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"tel")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"password")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} type=\"text\" />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/type-demo-4qwwjk?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"type-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"value-number--string"},"value ",(0,r.kt)("inlineCode",{parentName:"h3"},"number | string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"This is the value for the input field. It can be a float number or a formatted string."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the value passed is a string representation of the number, the ",(0,r.kt)("a",{parentName:"p",href:"#valueIsNumericString"},(0,r.kt)("inlineCode",{parentName:"a"},"valueIsNumericString"))," props should be passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"true")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} />;\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Demo"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/value-demo-ziuzcp?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"value-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,r.kt)("h3",{id:"common-props"},"Common Props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/props"},"See Common Props"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Other than this it accepts all the props which can be given to a input or span based on displayType you selected.")))}u.isMDXComponent=!0}}]);