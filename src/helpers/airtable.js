const Airtable = require("airtable");

const AirtableBase = new Airtable({
    apiKey: `${process.env.AIRTABLE_API_KEY}`
}).base(`${process.env.AIRTABLE_BASE}`);

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
