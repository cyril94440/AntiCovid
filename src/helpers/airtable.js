const Airtable = require("airtable");
Airtable.configure({
    endpointUrl: process.env.AIRTABLE_ENDPOINT,
    apiKey: process.env.AIRTABLE_API_KEY
});

const AirtableBase = Airtable.base(process.env.AIRTABLE_BASE);

export default AirtableBase;
