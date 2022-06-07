import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import got from "got";

const app = fastify();

app.register(fastifyCors, {
    origin: true,
});

app.get("/playlists", async (request, reply) => {
    const response = await got("https://api.deezer.com/chart/0/playlists",{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + process.env.DEEZER_TOKEN,
        },
    })
    // const data = JSON.parse(response.body);
    // reply.send(data.data);
    reply.send(response.body);
});


app.listen(8000, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
});