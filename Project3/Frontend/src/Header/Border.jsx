import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import PersonIcon from "@mui/icons-material/Person";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

function Border({ cartItemCount }) {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Add your search logic here
  };

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  return (
    <div>
      <div className="border border-black w-full h-14 bg-amber-600 fixed top-0 left-0 z-50 flex justify-between items-center px-4">
        <div className="font-extrabold text-2xl text-white">
          E-Commerce <LocalMallIcon />
        </div>
        <Form onSubmit={handleSearch} className="flex items-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            value={searchItem}
            onChange={handleChange}
          />
          <Button className="bg-green-600" variant="success" type="submit">
            <Icon path={mdiMagnify} size={1} />
          </Button>
        </Form>
        <Button
          className="bg-blue-600"
          variant="primary"
          onClick={handleLogout}
        >
          <PowerSettingsNewIcon />
        </Button>
      </div>
      <nav className="border border-black w-full h-14 bg-lime-900 fixed top-14 left-0 z-50 flex justify-between items-center px-4">
        <ul className="flex gap-4 text-white">
          <li className="font-bold">
            <Link to="/home">
              <HomeIcon />
            </Link>
          </li>
          <li className="font-bold">
            <Link to="/store">
              <StoreIcon />
            </Link>
          </li>
          <li className="">
            <Link to="/admin">
              <AccountCircleIcon />{" "}
            </Link>
          </li>
        </ul>
        <div className="font-bold text-white">
          <Link to="/shoppingcart">
            <ShoppingCartIcon />
            {cartItemCount}
          </Link>
        </div>
      </nav>
      <div className="mt-40">
        {" "}
        {/* Add margin to push content below the fixed navbar */}
      </div>
    </div>
  );
}

export default Border;
