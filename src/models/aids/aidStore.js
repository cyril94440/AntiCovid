import { observable,action } from "mobx"
import AirtableBase from "@helpers/airtable";

class AidStore{

    constructor(){
        this.loadAids()
    }

    @observable aids = []
    @observable count = 0

    @action loadAids(){
        AirtableBase("Dispositifs")
        .select({
            view: "Grid view"
        })
        .firstPage((err, records) => {
            if (err) console.error(err);
            else {
                const data = records.map(record => record.fields);
                this.aids = data
            }
        });
    }
}

export default new AidStore();