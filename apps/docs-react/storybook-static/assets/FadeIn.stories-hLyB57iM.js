import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{u as h,G as m,T as n}from"./exports-B7SnTMMy.js";import{F as s}from"./index-DxDhbEmF.js";import"./index-D4lIrffr.js";const O={...s.meta,title:"hooks/useMotion/createFadeProps"},r={...s.withStaggerOrder,render:o=>{const{createStaggerContainerProps:t,createFadeProps:d}=h();return a.jsxs(m,{...t(),children:[a.jsx(n,{...d({staggerOrder:0}),children:"Not being edited"}),a.jsx(n,{...d(o),children:"Being edited by you"})]})}},e={...s.withPlayground,render:o=>{const{createFadeProps:t}=h();return a.jsx(n,{...t(o),children:"Stand Alone"})}};var i,p,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...FadeStories.withStaggerOrder,
  render: (args: FadePropsOptions) => {
    const {
      createStaggerContainerProps,
      createFadeProps
    } = useMotion();
    return <Grid {...createStaggerContainerProps()}>
        <Typography {...createFadeProps({
        staggerOrder: 0
      })}>
          Not being edited
        </Typography>
        <Typography {...createFadeProps(args)}>Being edited by you</Typography>
      </Grid>;
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var c,u,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...FadeStories.withPlayground,
  render: (args: FadePropsOptions) => {
    const {
      createFadeProps
    } = useMotion();
    return <Typography {...createFadeProps(args)}>Stand Alone</Typography>;
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const w=["withStaggerOrder","withPlayground"];export{w as __namedExportsOrder,O as default,e as withPlayground,r as withStaggerOrder};
