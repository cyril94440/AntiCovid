import { observable, action, computed } from "mobx";
import AirtableBase from "@helpers/airtable";
import { computedFn } from "mobx-utils";
import { doesPropertyContain } from "../../helpers/airtable";

class AidStore {
    constructor() {
        this.loadAids();
    }

    @observable aids = [];

    filteredAids = computedFn(function getFilteredAids(companyTypesArray, regionArray) {
        var results = this.aids.filter(a =>
            doesPropertyContain(a["Type entreprise"], companyTypesArray)
        );
        results = results.filter(a => doesPropertyContain(a["Région"], regionArray));
        return results;
    });

    getRecordById = computedFn(function getRecord(recordId) {
        const result = this.aids.find(record => record.ID === recordId);

        return result;
    });

    @action loadAids() {
        AirtableBase("Dispositifs")
            .select({
                view: "Grid view"
            })
            .firstPage((err, records) => {
                console.log("results received from AirTable");
                if (err) console.error(err);
                else {
                    const data = records.map(record => record.fields);
                    this.aids = data;
                }
            });
    }
}

export default new AidStore();
