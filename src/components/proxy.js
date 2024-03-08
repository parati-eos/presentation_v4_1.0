const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/proxy",
  createProxyMiddleware({
    target: "https://script.google.com",
    changeOrigin: true,
    pathRewrite: {
      "^/proxy": "",
    },
  })
);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
