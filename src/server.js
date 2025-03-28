const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { isHashValid } = require('./validateHash');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/validate', (req, res) => {
    const { moduleName, hash } = req.body;

    if (!moduleName || !hash) {
        return res.status(400).json({ error: "Missing params" });
    }

    if (isHashValid(moduleName, hash)) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Hash Validator API running on port ${PORT}`);
});
