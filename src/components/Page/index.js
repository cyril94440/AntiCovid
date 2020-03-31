import Meta from "./Meta";
import Layout from "./Layout";

const Page = props => (
	<React.Fragment>
		<Meta {...props} />
		<Layout {...props} />
	</React.Fragment>
);

export default Page;
