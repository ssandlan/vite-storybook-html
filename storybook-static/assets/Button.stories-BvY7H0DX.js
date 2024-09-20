const Q=`<div class="button button-large button-full-dark">\r
  <button type="button">\r
    <span>Large <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,U=`<div class="button button-large button-full-light">\r
  <button type="button">\r
    <span>Large <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,V=`<div class="button button-large button-outline-dark">\r
  <button type="button">\r
    <span>Large <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,X=`<div class="button button-large button-outline-light">\r
  <button type="button">\r
    <span>Large <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,Y=`<div class="button button-small button-full-dark">\r
  <button type="button">\r
    <span>Small <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,Z=`<div class="button button-small button-full-light">\r
  <button type="button">\r
    <span>Small <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,$=`<div class="button button-small button-outline-dark">\r
  <button type="button">\r
    <span>Small <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,tt=`<div class="button button-small button-outline-light">\r
  <button type="button">\r
    <span>Small <strong>Button</strong></span>\r
  </button>\r
</div>\r
`,nt=`<div class="button button-large button-full-dark">\r
  <a href="#">\r
    <span>Large <strong>Button</strong> as Link</span>\r
  </a>\r
</div>\r
`,rt={title:"Core-Components/Button",parameters:{layout:"centered"}},e=()=>Q,a=()=>nt,o=()=>V,s={parameters:{backgrounds:{default:"dark"}},render(){return X}},l={parameters:{backgrounds:{default:"dark"}},render(){return U}},u=()=>Y,c={parameters:{backgrounds:{default:"dark"}},render(){return Z}},i=()=>$,d={parameters:{backgrounds:{default:"dark"}},render(){return tt}},m={render:n=>{const t=document.createElement("div"),r=document.createElement("button");return t.appendChild(r),r.innerText=n.label,r.setAttribute("onclick",n.onClick),t.className=["button","button-large","button-full-dark"].join(" "),t},decorators:[n=>{const t=document.createElement("div");return t.style.padding="1rem",t.appendChild(n()),t}],args:{label:"Responsive container example",onClick:'alert("Button was clicked")'},parameters:{layout:"fullscreen"}},b={render:n=>{const t=document.createElement("div"),r=document.createElement("button");return t.appendChild(r),r.innerText=n.label,r.setAttribute("onclick",n.onClick),t.className=["button","button-large","button-full-dark"].join(" "),t},args:{label:"Custom button with click event",onClick:'alert("Button was clicked")'}};var p,g,k;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"() => ButtonLargeFullDark",...(k=(g=e.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var L,B,S;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:"() => LinkLargeFullDark",...(S=(B=a.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var C,h,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"() => ButtonLargeOutlineDark",...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,D,F;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render() {
    return ButtonLargeOutlineLight;
  }
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var O,y,E;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render() {
    return ButtonLargeFullLight;
  }
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var x,A,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"() => ButtonSmallFullDark",...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,_,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render() {
    return ButtonSmallFullLight;
  }
}`,...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var N,R,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"() => ButtonSmallOutlineDark",...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,M,P;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  render() {
    return ButtonSmallOutlineLight;
  }
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,G,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    btnContainer.appendChild(btn);
    btn.innerText = args.label;
    btn.setAttribute("onclick", args.onClick);
    btnContainer.className = ["button", "button-large", "button-full-dark"].join(" ");
    return btnContainer;
  },
  decorators: [story => {
    const decorator = document.createElement("div");
    decorator.style.padding = "1rem";
    decorator.appendChild(story());
    return decorator;
  }],
  args: {
    label: "Responsive container example",
    onClick: \`alert("Button was clicked")\`
  },
  parameters: {
    layout: "fullscreen"
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    btnContainer.appendChild(btn);
    btn.innerText = args.label;
    btn.setAttribute("onclick", args.onClick);
    btnContainer.className = ["button", "button-large", "button-full-dark"].join(" ");
    return btnContainer;
  },
  args: {
    label: "Custom button with click event",
    onClick: \`alert("Button was clicked")\`
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const et=["LargeFullDark","LargeFullDarkAsLink","LargeOutlineDark","LargeOutlineLight","LargeFullLight","SmallFullDark","SmallFullLight","SmallOutlineDark","SmallOutlineLight","ResponsiveContainerExample","CustomButtonWithArgs"],at=Object.freeze(Object.defineProperty({__proto__:null,CustomButtonWithArgs:b,LargeFullDark:e,LargeFullDarkAsLink:a,LargeFullLight:l,LargeOutlineDark:o,LargeOutlineLight:s,ResponsiveContainerExample:m,SmallFullDark:u,SmallFullLight:c,SmallOutlineDark:i,SmallOutlineLight:d,__namedExportsOrder:et,default:rt},Symbol.toStringTag,{value:"Module"}));export{at as B,e as L};
