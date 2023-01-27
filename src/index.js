import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cld8mpr860qwg01rof8ev10x6/master",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        tiny_blog {
          title
          subtitle
          slug
          content {
            html
            json
            references {
        ... on Asset {
          id
          url
          mimeType
        }
      }
          }
          coverimg {
            url
            id
          }
        }
      }
    `,
  })
  .then((result) => console.log("Connected API"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
