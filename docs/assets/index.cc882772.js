import{j as h,n as r,r as d,R as E,a as w}from"./vendor.8d1a1790.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};C();var k="/criptos-app/assets/imagen-criptos.c0430b0f.png";const I=[{id:"USD",nombre:"Dolar de Estados Unidos"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],e=h.exports.jsx,n=h.exports.jsxs,y=h.exports.Fragment,P=r.label`
	color: #fff;
	display: block;
	font-family: 'Lato', sans-serif;
	font-size: 24px;
	font-weight: 700;
	margin: 15px 0;
`,A=r.select`
	width: 100%;
	font-size: 18px;
	padding: 14px;
	border-radius: 10px;
`,S=(s,a)=>{const[i,c]=d.exports.useState("");return[i,()=>n(y,{children:[e(P,{children:s}),n(A,{value:i,onChange:t=>c(t.target.value),children:[e("option",{value:"",children:"-- Seleccione --"}),a.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},L=r.div`
	background-color: #b7322c;
	color: #fff;
	padding: 15px;
	font-size: 22px;
	text-transform: uppercase;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	text-align: center;
`,M=({children:s})=>e(L,{children:s}),N=r.input`
	background-color: #9497ff;
	border: none;
	width: 100%;
	padding: 10px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease-in-out;
	margin-top: 30px;

	&:hover {
		background-color: #7470fe;
	}
`,D=({setMonedas:s})=>{const[a,i]=d.exports.useState([]),[c,o]=d.exports.useState(!1),[t,l]=S("Elige tu Moneda",I),[p,u]=S("Elige tu Cripto Moneda",a);return d.exports.useEffect(()=>{(async()=>{const v=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")).json()).Data.map(b=>({id:b.CoinInfo.Name,nombre:b.CoinInfo.FullName}));i(v)})()},[]),n(y,{children:[c&&e(M,{children:"Todos los campos son obligatorios"}),n("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){o(!0),setTimeout(()=>{o(!1)},3e3);return}o(!1),s({monedaseleccionada:t,criptoseleccionada:p})},children:[e(l,{}),e(u,{}),e(N,{type:"submit",value:"Cortizar"})]})]})},j=r.div`
	color: #fff;
	font-family: 'Lato', sans-serif;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 30px;
`,m=r.p`
	font-size: 18px;
`,R=r.p`
	font-size: 24px;

	span {
		font-weight: 700;
	}
`,z=r.img`
	display: block;
	width: 100px;
`,F=({resultado:s})=>{const{PRICE:a,HIGHDAY:i,LOWDAY:c,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=s;return n(j,{children:[e(z,{src:`https://cryptocompare.com/${t}`,alt:"imagen cripto"}),n("div",{children:[n(R,{children:["El Precio es de: ",e("span",{children:a})]}),n(m,{children:["Precio m\xE1s alto del d\xEDa: ",e("span",{children:i})]}),n(m,{children:["Precio m\xE1s bajo del d\xEDa: ",e("span",{children:c})]}),n(m,{children:["Variaci\xF3n \xFAltimas 24 horas: ",e("span",{children:o})]}),n(m,{children:["\xDAltima actualizaci\xF3n: ",e("span",{children:l})]})]})]})};const O=r.div`
	margin-top: 2rem;
`,$=()=>e(O,{children:n("div",{className:"sk-chase",children:[e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"}),e("div",{className:"sk-chase-dot"})]})}),T=r.div`
	max-width: 900px;
	margin: 0 auto;
	width: 90%;
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`,U=r.img`
	max-width: 400px;
	width: 80px;
	margin: 100px auto 0 auto;
	display: block;
`,H=r.h1`
	font-family: 'Lato', sans-serif;
	color: #fff;
	text-align: center;
	font-weight: 700;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
		margin: 10px auto 0 auto;
	}
`,G=()=>{const[s,a]=d.exports.useState({}),[i,c]=d.exports.useState({}),[o,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(s).length>0&&(async()=>{t(!0),c({});const{monedaseleccionada:p,criptoseleccionada:u}=s,x=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${u}&tsyms=${p}`,g=await(await fetch(x)).json();c(g.DISPLAY[u][p]),t(!1)})()},[s]),n(T,{children:[e(U,{src:k,alt:"imagen criptomonedas"}),n("div",{children:[e(H,{children:"Cotiza Criptomonedas al Instante"}),e(D,{setMonedas:a}),o&&e($,{}),i.PRICE&&e(F,{resultado:i})]})]})};E.render(e(w.StrictMode,{children:e(G,{})}),document.getElementById("root"));
