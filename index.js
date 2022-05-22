import express from "express";
import resolvers from "./resolvers.js";
import schema from "./schema.js";

import {graphqlHTTP} from "express-graphql";

const app = express();
const root = resolvers;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});