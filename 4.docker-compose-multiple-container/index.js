const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({ url: "redis://redis-server:6379" });

(async () => {
    console.log("Kepanggil");
    client.on("error", (err) => {
        console.log(err);
        process.exit(0);
    });
    await client.connect();
    await client.set("visits", 0);
})();

app.get("/", async (_, res) => {
    process.exit(0);
    let visits = await client.get("visits");

    await client.set("visits", +visits + 1);
    res.send("Number of visits is " + visits);
});

app.get("/check", (_, res) => {
    res.send("Check");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
