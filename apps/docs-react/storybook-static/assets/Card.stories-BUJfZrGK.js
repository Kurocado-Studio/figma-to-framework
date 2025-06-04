import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./exports-B7SnTMMy.js";import"./index-D4lIrffr.js";function B(g){return a.jsx(r,{...g})}const N={title:"Components/Card",component:B,argTypes:{children:{description:"Is the Input disabled?"},className:{control:"text",description:"Optional Tailwind CSS class for styling"}},tags:["autodocs"]},e={name:"With Card Body",args:{children:a.jsx(r.Body,{children:a.jsx("p",{className:"text-sm",children:"Card Body"})})},tags:["autodocs"]},s={name:"With Framer Motion Props",args:{children:a.jsx(r.Body,{children:a.jsx("p",{className:"text-base",children:"Card Body"})}),initial:{opacity:0},animate:{opacity:1},transition:{duration:1}},tags:["autodocs"]},t={name:"With Card Header",args:{children:a.jsxs(a.Fragment,{children:[a.jsx(r.Header,{children:a.jsx("h1",{className:"text-3xl",children:"Card Header"})}),a.jsx(r.Body,{children:a.jsx("p",{className:"text-base",children:"Card Body"})})]})},tags:["autodocs"]},d={name:"With Card Footer",args:{children:a.jsxs(a.Fragment,{children:[a.jsx(r.Header,{children:a.jsx("h1",{className:"text-3xl",children:"Card Header"})}),a.jsx(r.Body,{children:a.jsx("p",{className:"text-base",children:"Card Body"})}),a.jsx(r.Footer,{children:a.jsx("p",{className:"text-base",children:"Card Footer"})})]})},tags:["autodocs"]};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'With Card Body',
  args: {
    children: <Card.Body>
        <p className='text-sm'>Card Body</p>
      </Card.Body>
  },
  tags: ['autodocs']
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'With Framer Motion Props',
  args: {
    children: <Card.Body>
        <p className='text-base'>Card Body</p>
      </Card.Body>,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 1
    }
  },
  tags: ['autodocs']
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,h,C;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'With Card Header',
  args: {
    children: <>
        <Card.Header>
          <h1 className='text-3xl'>Card Header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-base'>Card Body</p>
        </Card.Body>
      </>
  },
  tags: ['autodocs']
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var x,y,u;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'With Card Footer',
  args: {
    children: <>
        <Card.Header>
          <h1 className='text-3xl'>Card Header</h1>
        </Card.Header>
        <Card.Body>
          <p className='text-base'>Card Body</p>
        </Card.Body>
        <Card.Footer>
          <p className='text-base'>Card Footer</p>
        </Card.Footer>
      </>
  },
  tags: ['autodocs']
}`,...(u=(y=d.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const H=["WithCardBody","WithFramerMotionProps","WithCardHeader","WithCardFooter"];export{e as WithCardBody,d as WithCardFooter,t as WithCardHeader,s as WithFramerMotionProps,H as __namedExportsOrder,N as default};
