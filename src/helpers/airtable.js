const Airtable = require("airtable");

const AirtableBase = new Airtable({
    apiKey: `keymHkPTuEpFEmOBw`
}).base(`appa5E38MXXODf7uE`);

export const AirtableContactBase = new Airtable({
    apiKey: `keymHkPTuEpFEmOBw`
}).base(`appg8PbzpUHqLvEsB`);

export function doesPropertyContain(propertyArray, allowedValuesArray) {
    if (propertyArray) {
        for (const i in propertyArray) {
            const value = propertyArray[i];
            if (allowedValuesArray.indexOf(value) !== -1) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    }
    return true;
    return allowedValuesArray.indexOf("") !== -1;
}

export default AirtableBase;
