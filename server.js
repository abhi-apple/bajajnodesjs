const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
    const requestData = req.body.data;

    if (!requestData || !Array.isArray(requestData)) {
        return res.status(400).json({ is_success: false, error: "Tha data format is Invalid" });
    }

    const numbers = requestData.filter(item => !isNaN(item));
    const singleCharAlphabets = requestData.filter(item => typeof item === 'string' && item.length === 1 && isNaN(item));

    if (requestData.some(item => typeof item === 'string' && item.length !== 1 && isNaN(item))) {
        return res.status(400).json({ is_success: false, error: "Tha data format is Invalid" });
    }
    const alph=[...singleCharAlphabets]
    const userResponse = {
        is_success: true,
        user_id: "abhinay_prakash_reddy_01122002",
        email: "gujjala.abhinay2020@vitbhopal.ac.in",
        roll_number: "20BCE10928",
        numbers,
        alphabets: alph,
        highest_alphabet : singleCharAlphabets.length > 0 ? [singleCharAlphabets.sort()[singleCharAlphabets.length - 1]] : []

    };

    res.json(userResponse);
});

app.get("/bfhl", (req, res) => {
    const responseData = {
        "operation_code": 1
    };

    res.status(200).json(responseData);
});

app.get("/", (req, res) => {
    res.status(200).send("Hello, this is your root URL!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
