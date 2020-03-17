import PlanDetail from "@screens/PlanDetail";

const DescriptionPage = props => <PlanDetail {...props} />;

DescriptionPage.getInitialProps = async ({ query }) => {
    const { planId } = query;

    return { recordId: planId };
};

export default DescriptionPage;
