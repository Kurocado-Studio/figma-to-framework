import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{u as d,G as S,T as c}from"./exports-B7SnTMMy.js";import{S as s}from"./index-DxDhbEmF.js";import"./index-D4lIrffr.js";const x={...s.meta,title:"hooks/useMotion/createStaggerContainerProps"},r={...s.withStaggerSpeed,render:g=>{const{createStaggerContainerProps:i,createFadeProps:p}=d();return t.jsx(S,{...i(g),children:Array.from({length:2},(m,e)=>t.jsxs(c,{as:"p",...p(),children:["Element #",e]},String(e)))})}};var n,a,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...StaggerContainerStories.withStaggerSpeed,
  render: (args: StaggerContainerProps) => {
    const {
      createStaggerContainerProps,
      createFadeProps
    } = useMotion();
    return <Grid {...createStaggerContainerProps(args)}>
        {Array.from({
        length: 2
      }, (_, index) => {
        return <Typography as='p' key={String(index)} {...createFadeProps()}>
              Element #{index}
            </Typography>;
      })}
      </Grid>;
  }
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const P=["withStaggerSpeed"];export{P as __namedExportsOrder,x as default,r as withStaggerSpeed};
