import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{G as W,C as p}from"./exports-B7SnTMMy.js";import"./index-D4lIrffr.js";const O={title:"Layout/Grid",component:W,tags:["autodocs"],argTypes:{columns:{control:"object",description:'Number of columns or responsive map, e.g. `"3"` or `{ base: "1", md: "4" }`'},rows:{control:"object",description:'Number of rows or responsive map, e.g. `"2"` or `{ base: "1", md: "3" }`'},direction:{control:"object",description:'Flow direction: `"vertical"` or `"horizontal"`, or responsive map'},gap:{control:"object",description:'Gap size or responsive map, e.g. `"4"` or `{ base: "2", md: "6" }`'},justify:{control:"object",description:'Justify-items or responsive map, e.g. `"start"` or `{ md: "center" }`'},items:{control:"object",description:'Align-items or responsive map, e.g. `"stretch"` or `{ lg: "end" }`'},minW:{control:"object",description:'Min-width or responsive map, e.g. `"full"` or `{ md: "0" }`'},minH:{control:"object",description:'Min-height or responsive map, e.g. `"screen"` or `{ lg: "max" }`'},children:{table:{disable:!0}}}},e=N=>Array.from({length:N},(E,m)=>l.jsx(p,{className:"w-full",children:l.jsx(p.Body,{children:m+1})},m)),n={name:"Default (Static)",args:{columns:"3",rows:"2",gap:"4",children:e(6)}},s={name:"Columns Responsive",args:{columns:{base:"1",md:"3",lg:"5"},rows:"1",gap:"4",children:e(8)}},r={name:"Rows Responsive",args:{columns:"1",rows:{base:"1",md:"2",lg:"4"},gap:"4",children:e(8)}},o={name:"Direction Responsive",args:{columns:"4",rows:"1",direction:{base:"vertical",md:"horizontal"},gap:"4",children:e(6)}},a={name:"Alignment Responsive",args:{columns:"3",rows:"1",gap:"4",justify:{base:"start",md:"center",lg:"between"},items:{base:"start",md:"center",lg:"end"},children:e(6)}},i={name:"Min-Size Responsive",args:{columns:"2",rows:"1",gap:"4",minW:{base:"0",md:"full",lg:"fit"},minH:{base:"0",md:"screen",lg:"max"},children:e(4)}},t={name:"Columns Per Breakpoint",args:{columns:{base:"1",sm:"2",md:"3",lg:"4",xl:"5","2xl":"6"},rows:"1",gap:"4",children:e(6)}},c={name:"Rows Per Breakpoint",args:{columns:"1",rows:{base:"1",sm:"2",md:"3",lg:"4",xl:"5","2xl":"6"},gap:"4",children:e(6)}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Default (Static)',
  args: {
    columns: '3',
    rows: '2',
    gap: '4',
    children: renderBoxes(6)
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,v,w;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Columns Responsive',
  args: {
    columns: {
      base: '1',
      md: '3',
      lg: '5'
    },
    rows: '1',
    gap: '4',
    children: renderBoxes(8)
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var R,h,x;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Rows Responsive',
  args: {
    columns: '1',
    rows: {
      base: '1',
      md: '2',
      lg: '4'
    },
    gap: '4',
    children: renderBoxes(8)
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,B,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Direction Responsive',
  args: {
    columns: '4',
    rows: '1',
    direction: {
      base: 'vertical',
      md: 'horizontal'
    },
    gap: '4',
    children: renderBoxes(6)
  }
}`,...(S=(B=o.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,C,k;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Alignment Responsive',
  args: {
    columns: '3',
    rows: '1',
    gap: '4',
    justify: {
      base: 'start',
      md: 'center',
      lg: 'between'
    },
    items: {
      base: 'start',
      md: 'center',
      lg: 'end'
    },
    children: renderBoxes(6)
  }
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var y,z,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Min-Size Responsive',
  args: {
    columns: '2',
    rows: '1',
    gap: '4',
    minW: {
      base: '0',
      md: 'full',
      lg: 'fit'
    },
    minH: {
      base: '0',
      md: 'screen',
      lg: 'max'
    },
    children: renderBoxes(4)
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var P,A,G;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Columns Per Breakpoint',
  args: {
    columns: {
      base: '1',
      sm: '2',
      md: '3',
      lg: '4',
      xl: '5',
      '2xl': '6'
    },
    rows: '1',
    gap: '4',
    children: renderBoxes(6)
  }
}`,...(G=(A=t.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var M,_,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Rows Per Breakpoint',
  args: {
    columns: '1',
    rows: {
      base: '1',
      sm: '2',
      md: '3',
      lg: '4',
      xl: '5',
      '2xl': '6'
    },
    gap: '4',
    children: renderBoxes(6)
  }
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const T=["DefaultStatic","ColumnsResponsive","RowsResponsive","DirectionResponsive","AlignmentResponsive","SizeResponsive","ColumnsPerBreakpoint","RowsPerBreakpoint"];export{a as AlignmentResponsive,t as ColumnsPerBreakpoint,s as ColumnsResponsive,n as DefaultStatic,o as DirectionResponsive,c as RowsPerBreakpoint,r as RowsResponsive,i as SizeResponsive,T as __namedExportsOrder,O as default};
