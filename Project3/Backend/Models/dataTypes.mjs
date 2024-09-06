import DataTypes from "sequelize";
import {sequelize} from "../Controller/index.mjs"
// Define a model

// Define a model
const Userdata = sequelize.define("Usertables", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255], // Minimum length of 6 characters
    },
  },
});



// export default Userdata;

const adminProduct = sequelize.define("Producttables", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export { adminProduct, Userdata };
