import express from "express";
const app = express();
const port = 3000;

let counter = 0;

app.get("/counter", (request, response) => {
    const increment = Number(request.query.incrementby=5 );
    counter = counter + increment;
    response.send("totaal" + counter);
});

app.get("/", (repeat, response) => {
    response.send("Jordy is top G");
});

app.listen(port, () => {
    console.log(`API draait op ${port}`);
});