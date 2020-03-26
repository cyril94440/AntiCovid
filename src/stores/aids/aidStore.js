import { observable, action, computed } from "mobx";
import AirtableBase from "@helpers/airtable";
import { computedFn } from "mobx-utils";
import { doesPropertyContain } from "../../helpers/airtable";

class AidStore {
	@observable aids = [];
	@observable filterType = {
		title: "Vous êtes",
		key: "Type structure",
		data: new Set()
	};
	@observable filterActivity = {
		title: "Votre activité",
		key: "Activité",
		data: {
			default: [],
			Soc: new Set(),
			Ind: new Set(),
			Auto: new Set()
		}
	};
	@observable filterLocalisation = {
		title: "Localisation géographique",
		key: "localization",
		data: new Set()
	};

	filteredAids = computedFn(function getFilteredAids(regionArray) {
		if (regionArray[0] === undefined) return this.aids;
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
		AirtableBase("Derniere version")
			.select({
				view: "Grid view"
			})
			.firstPage((err, records) => {
				console.log("results received from AirTable");
				if (err) console.error(err);
				else {
					let data = records.map(record => record.fields);
					data = data.filter(record => record["online"]);
					this.aids = data;

					this.aids.forEach(r => {
						if (r["Type structure"])
							this.filterType.data.add(r["Type structure"][0]);
						if (r["Localisation"])
							this.filterLocalisation.data.add(
								r["Localisation"][0]
							);

						if (r["Activité de la société"])
							this.filterActivity.data.Soc.add(
								r["Activité de la société"][0]
							);
						if (r["Activité de l'indépendant"])
							this.filterActivity.data.Ind.add(
								r["Activité de l'indépendant"][0]
							);
						if (
							r[
								"Activité de l'auto-entreprise / micro-entreprise"
							]
						)
							this.filterActivity.data.Auto.add(
								r[
									"Activité de l'auto-entreprise / micro-entreprise"
								][0]
							);
					});
				}
			});
	}
}

const store = new AidStore();
store.loadAids();

export default store;
