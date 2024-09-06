import DataTypes from "sequelize";
import {sequelize} from "../Controller/index.mjs"



const Usercartdata = sequelize.define("userCartData", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    }
    
  });


  export default Usercartdata;