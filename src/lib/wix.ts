import { createClient, OAuthStrategy } from "@wix/sdk";
import { dataItems } from "@wix/data-items"; 

const client = createClient({
  modules: { dataItems },
  auth: OAuthStrategy({
    clientId: process.env.WIX_CLIENT_ID!,
  }),
});

export default client;
