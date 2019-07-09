(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{344:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b}),a.d(t,"_frontmatter",function(){return d});a(23),a(11),a(6),a(5),a(3),a(7),a(10);var n=a(4),r=a(0),o=a.n(r),i=a(2),c=a(354),s=a(1);function l(e,t){var a=Object.keys(e);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(e)),t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a}function p(e){for(var t=1;t<arguments.length;t++)if(t%2){var a=null!=arguments[t]?arguments[t]:{};l(a,!0).forEach(function(t){u(e,t,a[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):l(arguments[t]).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(arguments[t],a))});return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={},b=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).layout=c.a,a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.a)(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,a),components:t},Object(n.a)(s.Text,{lede:!0},"Use layers to create depth in the interface. The distance from one layer to another is measured along the z-axis."),Object(n.a)(i.MDXTag,{name:"p",components:t},"Both the size and softness of a shadow express the distance between two surfaces. For example, a surface with a shadow that is small and sharp indicates a surface’s close proximity to the surface behind it. Larger, softer shadows, express more distance."),Object(n.a)(i.MDXTag,{name:"pre",components:t},Object(n.a)(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { Z_SPACE } from '@umich-lib/core'\n")),Object(n.a)(i.MDXTag,{name:"pre",components:t},Object(n.a)(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:"live",live:!0}},"<Alert\n  intent=\"error\"\n  style={{\n    display: 'inline-block',\n    ...Z_SPACE[16]\n  }}\n>\n  Your list has been deleted.\n</Alert>\n")),Object(n.a)(i.MDXTag,{name:"h2",components:t},"Available z-spaces"),Object(n.a)(i.MDXTag,{name:"p",components:t},"Distance between surfaces is measured in ",Object(n.a)(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"z-spaces"),". Here is a preview of all shadows by ",Object(n.a)(i.MDXTag,{name:"strong",components:t,parentName:"p"},"z-space")," units."),Object(n.a)("ol",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(12rem, 1fr))",gridGap:s.SPACING.L}},Object.keys(s.Z_SPACE).map(function(e){return Object(n.a)("li",{style:p({textAlign:"center",padding:s.SPACING.XL,fontWeight:"600"},s.Z_SPACE[e])},e)})))},r}(o.a.Component);b.isMDXComponent=!0;var d={}},354:function(e,t,a){"use strict";var n=a(15),r=(a(17),a(44),a(14)),o=a(4),i=(a(0),a(355)),c=a(1),s=a(357),l=a(356),p=Object(r.default)("div",{target:"ezoplek0"})({"> div > *":{marginBottom:c.SPACING.M},"h2:not(:last-child)":{marginTop:c.SPACING["2XL"]},"h3:not(:last-child)":{marginTop:c.SPACING.XL},"h4:not(:last-child)":{marginTop:c.SPACING.XL},"h5:not(:last-child)":{marginTop:c.SPACING.XL}}),u=Object(r.default)("div",{target:"e63abck0"})({name:"1kmcw8",styles:"max-width:1024px;"}),m=Object(r.default)("div",{target:"e63abck1"})({name:"b1u16s",styles:"display:flex;justify-content:flex-end;flex-direction:column;height:auto;"}),b={borderBottom:"solid 4px "+c.COLORS.teal[400],fontWeight:"800"},d=function(e){var t=e.isPartiallyCurrent,a=e.href,n=e.location;return t&&n.pathname.match(a+"/?$")?{style:b}:{}},g=Object(r.default)(i.a,{target:"e63abck2"})({color:c.COLORS.neutral[400],display:"inline-block",padding:c.SPACING.XS+" 0",textDecoration:"none",fontWeight:"600"});t.a=function(e){var t,a=e.pageContext.frontmatter,r=a.title,i=a.navigation,b=e.location;return b.pathname&&(t="https://github.com/mlibrary/umich-lib-ui/tree/master/packages/docs/src/pages"+b.pathname.replace(/\/$/,"")+".mdx"),Object(o.a)(s.a,null,Object(o.a)("article",null,Object(o.a)(l.a,{title:r}),Object(o.a)(m,null,Object(o.a)(c.Margins,null,Object(o.a)(u,null,Object(o.a)(c.Heading,{level:1,size:"3XL",style:{paddingBottom:c.SPACING.M,marginTop:c.SPACING["2XL"]}},r),i&&Object(o.a)("ol",{css:Object(n.default)({borderBottom:"solid 1px "+c.COLORS.neutral[100]})},i.map(function(e){var t=e.text,a=e.to;return Object(o.a)("li",{key:t+a,style:{display:"inline-block",marginRight:c.SPACING.L}},Object(o.a)(g,{to:a,getProps:d},t))}))))),Object(o.a)(c.Margins,null,Object(o.a)(u,{style:{marginTop:c.SPACING.XL,marginBottom:c.SPACING["2XL"]}},Object(o.a)(p,null,e.children),t&&Object(o.a)("div",{style:{display:"block",marginTop:c.SPACING.XL}},Object(o.a)(c.Link,{href:t},"Edit this page on Github"))))))}}}]);
//# sourceMappingURL=component---src-pages-guides-layers-code-mdx-155c402a3d7813fef82c.js.map