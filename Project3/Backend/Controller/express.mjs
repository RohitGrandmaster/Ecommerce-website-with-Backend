// index.mjs
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { signupCreate ,loginCheck, productCreate,productFetch,adminProductDelete,adminProductEdit} from "./index.mjs";
 

 

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/signup", signupCreate);
app.post("/login", loginCheck);
app.post("/adminlogin", loginCheck);
app.post ("/productcreate",productCreate)
app.get("/productfetch",productFetch)
app.delete("/adminItems/:id", adminProductDelete);
app.put("/products/:id", adminProductEdit);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
