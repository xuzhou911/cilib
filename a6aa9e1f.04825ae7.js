(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{188:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(194),c=t(202),m=t(192);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(m.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(m.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items;return r.a.createElement(l.a,{title:"Blog",description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},202:function(e,a,t){"use strict";t(68);var n=t(0),r=t.n(n),l=t(190),c=t.n(l),m=t(189),o=t(192),i=t(211),s=t(123),u=t.n(s),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,d=e.children,v=e.frontMatter,p=e.metadata,E=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,N=p.date,h=p.permalink,_=p.tags,k=v.author,y=v.title,w=v.author_url||v.authorURL,O=v.author_title||v.authorTitle,P=v.author_image_url||v.authorImageURL;return r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],l=g[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},b?y:r.a.createElement(o.a,{to:h},y)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:N,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},P&&r.a.createElement("a",{className:"avatar__photo-link",href:w,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:P,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},O)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:i.a},d)),(_.length>0||E)&&r.a.createElement("footer",{className:"row margin-vert--lg"},_.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),_.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:p.permalink,"aria-label":"Read more about "+y},r.a.createElement("strong",null,"Read More")))))}},203:function(e,a,t){"use strict";(function(e){var n=t(1),r=(t(204),t(205),t(201),t(206),t(0)),l=t.n(r),c=t(190),m=t.n(c),o=t(212),i=t(210),s=t.n(i),u=t(207),g=t.n(u),d=t(208),v=t.n(d),p=t(191),E=t(122),f=t.n(E),b=t(200);(void 0!==e?e:window).Prism=b.a,t(209);var N=/{([\d,-]+)}/;a.a=function(e){var a=e.children,t=e.className,c=e.metastring,i=Object(p.a)().siteConfig.themeConfig.prism,u=void 0===i?{}:i,d=Object(r.useState)(!1),E=d[0],b=d[1],h=Object(r.useRef)(null),_=Object(r.useRef)(null),k=[];if(c&&N.test(c)){var y=c.match(N)[1];k=v.a.parse(y).filter((function(e){return e>0}))}Object(r.useEffect)((function(){var e;return _.current&&(e=new g.a(_.current,{target:function(){return h.current}})),function(){e&&e.destroy()}}),[_.current,h.current]);var w=t&&t.replace(/language-/,"");!w&&u.defaultLanguage&&(w=u.defaultLanguage);var O=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return l.a.createElement(o.a,Object(n.a)({},o.b,{theme:u.theme||s.a,code:a.trim(),language:w}),(function(e){var a=e.className,t=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.a.createElement("div",{className:f.a.codeBlockWrapper},l.a.createElement("pre",{ref:h,className:m()(a,f.a.codeBlock),style:t},r.map((function(e,a){var t=c({line:e,key:a});return k.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return l.a.createElement("span",Object(n.a)({key:a},o({token:e,key:a})))})))}))),l.a.createElement("button",{ref:_,type:"button","aria-label":"Copy code to clipboard",className:f.a.copyButton,onClick:O},E?"Copied":"Copy"))}))}}).call(this,t(67))}}]);