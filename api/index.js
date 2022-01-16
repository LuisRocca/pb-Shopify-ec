require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const { ACCESS_TOKEN, DOMAIN } = process.env;
const { Shopify } = require("@shopify/shopify-api");
app.set("PORT", process.env.PORT || 3001);
const port = app.get("PORT");
// middleweares
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  next();

});

const productFromShopify = async () => {
  const client = new Shopify.Clients.Rest(`${DOMAIN}`, `${ACCESS_TOKEN}`);
  const data = await client.get({
    path: "products",
  });

  return data.body.products;
};

// productFromShopify();

//recibir las peticiones desde el front : rutas
// TO DO : modularizar para manejo de rutas en archivo separado ==>  app.use("/",{nomnbreArchivoImportado})

app.get("/products", async (req, res) => {
  const data = await productFromShopify();

  return res.json({ respuesta: data });
});

app.listen(port, () => {
  console.log("SERVER on port ", port);
});