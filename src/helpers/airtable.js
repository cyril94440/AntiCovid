const Airtable = require("airtable");

const AirtableBase = new Airtable({
    apiKey: `${process.env.AIRTABLE_API_KEY}`
}).base(`tblrZvxk7eK6X1HfT`);

export default AirtableBase;
