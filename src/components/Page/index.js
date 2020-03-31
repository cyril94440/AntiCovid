import Router from "next/router";
import NProgress from "nprogress";

import Meta from "./Meta";
import Layout from "./Layout";

export default function Page(props) {
	React.useEffect(() => {
		Router.onRouteChangeStart = () => {
			NProgress.start();
		};

		Router.onRouteChangeComplete = () => {
			NProgress.done();
		};

		Router.onRouteChangeError = () => {
			console.error("Erreur lors du changement de page");
			NProgress.done();
		};
	}, []);

	return (
		<React.Fragment>
			<Meta {...props} />
			<Layout {...props} />
		</React.Fragment>
	);
}
