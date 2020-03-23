import { observable, action, computed } from "mobx";
import AirtableBase from "@helpers/airtable";
import { computedFn } from "mobx-utils";
import { doesPropertyContain } from "../../helpers/airtable";

class AidStore {
    @observable aids = [];

    filteredAids = computedFn(function getFilteredAids(regionArray) {
        if(regionArray[0]===undefined)return this.aids
        const results = this.aids.filter(a =>
            doesPropertyContain(a["Localisation géographique"], regionArray)
        );

        return results;
    });

    getRecordById = computedFn(function getRecord(recordId) {
        const result = this.aids.find(record => {
            return record.ID == recordId;
        });

        return result;
    });

    @action loadAids() {
        AirtableBase("Dispositif_VF")
            .select({
                view: "Grid view"
            })
            .firstPage((err, records) => {
                console.log("results received from AirTable");
                if (err) console.error(err);
                else {
                    let data = records.map(record => record.fields);
                    data = data.filter(record => record["online"])
                    this.aids = data;
                }
            });
    }
}

const store = new AidStore();
store.loadAids();

export default store;
