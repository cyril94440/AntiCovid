import AirtableBase from "@helpers/airtable";

import useCheckbox from "@hooks/useCheckBox";

import { companiesOptions, regionsOptions } from "./config";

import Plans from "@screens/Plans";

export default function PlansContainer(props) {
    const [plans, setPlans] = React.useState([]);
    const [CompaniesOptions, companiesState] = useCheckbox(
        "Type d'entreprise",
        companiesOptions
    );
    const [RegionsOptions, regionsState] = useCheckbox("Région", regionsOptions);

    React.useEffect(() => {
        fetchData(regionsState);
    }, [regionsState.checkAll]);

    const fetchData = React.useCallback(
        regionsState => {
            AirtableBase("Dispositifs")
                .select({
                    view: "Grid view"
                })
                .firstPage((err, records) => {
                    if (err) console.error(err);
                    else {
                        const data = records
                            .map(record => record.fields)
                            .filter(record =>
                                regionsState.checkAll
                                    ? true
                                    : !regionsState.indeterminate
                                    ? false
                                    : record["Région"]
                                    ? regionsState.checkedList.includes(record["Région"][0])
                                    : true
                            );
                        console.log(data);
                        setPlans(data);
                    }
                });
        },
        [regionsState]
    );

    props = { ...props, plans, CompaniesOptions, RegionsOptions };

    return <Plans {...props} />;
}
