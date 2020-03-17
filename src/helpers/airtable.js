const Airtable = require("airtable");

const AirtableBase = new Airtable({
    apiKey: `${process.env.AIRTABLE_API_KEY}`,
    endpointUrl: `${process.env.AIRTABLE_ENDPOINT}`
}).base(`${process.env.AIRTABLE_BASE}`);

export default AirtableBase;
