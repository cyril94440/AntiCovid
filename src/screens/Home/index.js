import styled from "styled-components";

import { BLUE } from "@constants/style";

import Page from "@components/Page";
import BaseButton from "@components/Button";

import PlansFilters from "./Filters";
import PlansList from "./PlansList";

const Plans = () => {
	const [filters, setFilters] = React.useState({
		"Nature de l'aide": "aide professionnelle"
	});

	React.useEffect(() => {
		const script1 = document.createElement("script");
		script1.type = "text/javascript";
		script1.textContent = `/* - - - CONFIGURATION VARIABLES - - - */

        var gc_params = {
          graphcomment_id: 'AntiCovid'
        };
      
        /* - - - DON'T EDIT BELOW THIS LINE - - - */
      
        
        (function() {
          var gc = document.createElement('script'); gc.type = 'text/javascript'; gc.async = true;
          gc.src = 'https://graphcomment.com/js/integration.js?' + Math.round(Math.random() * 1e8);
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(gc);
        })();`;

		document.body.appendChild(script1);

		return () => {
			document.body.removeChild(script1);
		};
	}, []);

	return (
		<Page title="Mes aides">
			<PlansFilters filters={filters} setFilters={setFilters} />
			<PlansList filters={filters} setFilters={setFilters} />

			<HelpButtonContainer>
				<HelpButton>
					<HelpLink
						className="text-white"
						href="https://airtable.com/shroZVJ5EV8tpsaNd"
						target="_blank"
					>
						SOUMETTRE UNE AIDE
					</HelpLink>
				</HelpButton>
			</HelpButtonContainer>
		</Page>
	);
};

const HelpButtonContainer = styled.div`
	text-align: center;
	padding-top: 10px;
	padding-bottom: 40px;
`;

const HelpButton = styled(BaseButton)`
	padding: 0 30px;
	transition: all 0.5s;
	background-color: ${BLUE};
`;
const HelpLink = styled.a`
	color: white;

	&:hover {
		color: white;
	}
`;

export default Plans;
