const app = require("./app");
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 3000;

app.listen(port, () => {
    console.log(`Api listening on PORT: ${port}`);
});
