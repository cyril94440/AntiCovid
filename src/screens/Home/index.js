import Page from "@components/Page";
import HomeImage from "./Image";
import HomeDescription from "./Description";
import HomeMobile from "./HomeMobile";
import { MobileOnly, DesktopOnly } from "@components/ResponsiveCompo"
const Home = () => {
    return (
        <Page title="Accueil">
            <MobileOnly>
                <HomeMobile />
            </MobileOnly>
            <DesktopOnly>
                <HomeImage />
                <HomeDescription />
            </DesktopOnly>
        </Page>
    );
};

export default Home;
