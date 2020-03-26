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
		key: "Localisation",
		data: new Set()
	};
	activitiesFullKey = {
		default: "default",
		Soc: "Activité de la société",
		Auto: "Activité de l'auto-entreprise / micro-entreprise",
		Ind: "Activité de l'indépendant"
	};

	filteredAids = computedFn(function getFilteredAids(filters) {
		let results = this.aids;

		console.log(filters);

		for (var key in filters) {
			results = results.filter(a =>
				doesPropertyContain(a[key], [filters[key]])
			);
		}

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

						if (r["Activité de la société"]) {
							r["Activité de la société"].forEach(v => {
								this.filterActivity.data.Soc.add(v);
							});
						}
						if (r["Activité de l'indépendant"]) {
							r["Activité de l'indépendant"].forEach(v => {
								this.filterActivity.data.Ind.add(v);
							});
						}
						if (
							r[
								"Activité de l'auto-entreprise / micro-entreprise"
							]
						) {
							r[
								"Activité de l'auto-entreprise / micro-entreprise"
							].forEach(v => {
								this.filterActivity.data.Auto.add(v);
							});
						}
					});
				}
			});
	}
}

const store = new AidStore();
store.loadAids();

export default store;
