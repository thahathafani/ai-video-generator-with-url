const express = require("express");
const uniqid = require("uniqid");
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('server ');
});

app.get('/story', async (req, res) => {
    try {
        const { GPTScript, RunEventType } = await import("@gptscript-ai/gptscript");

        const url = req.query.url;
        if (!url) {
            return res.status(400).json({ error: "Missing 'url' query parameter" });
        }

        const id = uniqid();
        const dir = id;
        const path = './stories/' + dir;
        fs.mkdirSync(path, { recursive: true });

        console.log({ url });

        const gptscript = new GPTScript();
        const run = await gptscript.run('./story.gpt', {
            input: `--url ${url} --dir ${dir}`,
            disableCache: true,
        });

        run.on(RunEventType.Event, (ev) => {
            if (ev.type === RunEventType.CallFinish && ev.output) {
                console.log(ev.output);
            }
        });

        const result = await run.text();

        return res.json(result);
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({ error: "An internal error occurred" });
    }
});

app.listen(8000, () => console.log('server started...'));
