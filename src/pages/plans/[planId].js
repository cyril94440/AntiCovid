import PlanDetail from "@components/PlanDetail";

const PlanPage = props => <PlanDetail {...props} />;

PlanPage.getInitialProps = async ({ query }) => {
    return { query };
};
