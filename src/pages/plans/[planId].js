import Description from "@screens/Description";

const DescriptionPage = props => <Description {...props} />;

DescriptionPage.getInitialProps = async ({ query }) => {
    const { planId } = query;

    return { recordId: planId };
};

export default DescriptionPage;
