// https://spectrum.chat/next-js/general/file-upload-using-api-routes~f4c70ce5-b23c-43de-8943-a048ebb946d4

import formidable from "formidable";

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if (err) console.error(err);
        console.log(files);
        res.json({ fields, files });
    });
};

export const config = {
    api: {
        bodyParser: false
    }
};
