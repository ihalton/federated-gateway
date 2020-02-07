import require from "reekwire";

const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

async function main () {
  const gateway = new ApolloGateway({
    serviceList: []
  });

  const server = new ApolloServer({
    gateway,
    subscriptions: false
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

main();
