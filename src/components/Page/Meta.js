import Head from "next/head";

const Meta = ({ title }) => (
	<Head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link
			href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap"
			rel="stylesheet"
		/>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
		/>
		<script
			type="text/javascript"
			dangerouslySetInnerHTML={{
				__html: `(function(b,o,n,g,s,r,c){if(b[s])return;b[s]={};b[s].scriptToken="Xy02MjA5NjAxMjY";b[s].callsQueue=[];b[s].api=function(){b[s].callsQueue.push(arguments);};r=o.createElement(n);c=o.getElementsByTagName(n)[0];r.async=1;r.src=g;r.id=s+n;c.parentNode.insertBefore(r,c);})(window,document,"script","https://cdn.oribi.io/Xy02MjA5NjAxMjY/oribi.js","ORIBI");`
			}}
		/>
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id=UA-162058754-1"
		></script>
		<script
			dangerouslySetInnerHTML={{
				__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'UA-162058754-1');`
			}}
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1746518,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
			}}
		/>
		<title>{title}</title>
	</Head>
);

export default Meta;
