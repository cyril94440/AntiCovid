import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckbox";

import { companiesOptions, regionsOptions } from "./config";

import Plans from "@screens/Plans";

export default function PlansContainer(props) {
    const [CompaniesOptions, companiesState] = useCheckbox(
        "Type d'entreprise",
        companiesOptions
    );
    const [RegionsOptions, regionsState] = useCheckbox("Région", regionsOptions);

    props = { ...props, CompaniesOptions, RegionsOptions };

    return <Plans {...props} />;
}
