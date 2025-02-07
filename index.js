const express = require("express");
const pdfMaster = require("pdf-master");
const fs = require("fs")
const path = require("path");
const app = express();
const port = 5000;
app.use(express.json());
app.use("/certificates", express.static('certificates'));
// for single Certificate Genration 
app.post("/genrate-pdf", async (req, res) => {
    try {
        const d = new Date();
        const date = d.toLocaleDateString().split("/").join("-");
        const time = d.toLocaleTimeString("it-IT");
        //  data store
        const user = req.body;
        user.date = date
        user.time = time

        let options = {
            displayHeaderFooter: false,
            format: "A4",
            page: 1,
            margin: "50px",
        };


        let PDF = await pdfMaster.generatePdf(`certificate.hbs`, user, options); //  pdf genrated -

        const username = user.name.split(" ").join("-"); // find userName for Pdf
        const fileName = `${username}.${Date.now()}.pdf`; // assign name to pdf
        const filePath = path.join(__dirname, "./certificates", fileName);

        await fs.promises.writeFile(filePath, PDF); // Write the  data to Empty file
        // console.log(`PDF saved to:${filePath}`);   // pdf path 

        return res.status(200).json({ sucess: true, message: "sucessFully Pdf Genrated", fileUrl: `${req.protocol}://${req.hostname}:${port}/certificates/${fileName}` });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ sucess: false, message: "internal server Error", error })
    }
});
app.listen((port), () => {
    console.log(`Server is running on port : ${port}`);
});
