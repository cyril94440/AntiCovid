const Airtable = require("airtable");

const AirtableBase = new Airtable({
    apiKey: `keyjwkLQP9bny6W38`
}).base(`appa5E38MXXODf7uE`);

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
