import React, { useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
 import { adminProductdeleteApi, productFetchApi ,adminProductEditApi} from '../index';
import { useNavigate } from 'react-router-dom';
 
function AdminCart() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({ name: '', price: '', image: '' });
  const navigate = useNavigate();

   

  useEffect(() => {
    productFetchApi(setProducts);
  }, []);

  const handleDelete = async (id) => {
    adminProductdeleteApi(id);
    
  };

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setUpdatedProduct({ name: product.name, price: product.price, image: product.image });
  };
  

  const handleSave =  (productId) => {
    adminProductEditApi(productId, updatedProduct, setEditingProduct, );
  };
  const handleLogout = () => {
    alert("Admin logout successful")

    navigate("/")
  }
  

  return (

    <div className="relative">
    <div className="fixed top-0 left-0 w-full bg-lime-600 p-4 z-50 flex justify-between items-center border border-black">
      <Card.Title className="text-2xl font-bold flex  justify-center items-center w-full">
        <ShoppingCartIcon className="mr-2" /> Shopping Products
      </Card.Title>
      <Button className="bg-red-600 flex items-center" variant="danger" onClick={handleLogout}>
        <PowerSettingsNewIcon className="mr-1" /> 
      </Button>
    </div>
    <div className="mt-20 flex flex-wrap justify-around p-4">
      {products.map((product) => (
        <Card key={product.id} className="border border-black p-4 m-2 bg-fuchsia-600 w-1/4">
          <Card.Title className="text-center">
            <ShoppingCartIcon /> {product.name}
          </Card.Title>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 border border-black"
          />
          <Card.Body>
            {editingProduct === product.id ? (
              <div>
                <input
                  type="text"
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  className="w-full mb-2 p-2 border border-gray-300"
                />
                <input
                  type="text"
                  value={updatedProduct.price}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  className="w-full mb-2 p-2 border border-gray-300"
                />
                <input
                  type="text"
                  value={updatedProduct.image}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  className="w-full mb-2 p-2 border border-gray-300"
                />
                <Button className="bg-green-600 w-full" variant="success" onClick={() => handleSave(product.id)}>
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="text-lg">{product.name}</h2>
                <p className="text-black">Price: {product.price}</p>
                <Button className="bg-yellow-600 w-full mb-2" variant="warning" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
                <Button className="bg-red-600 w-full" variant="danger" onClick={() => handleDelete(product.id)}>
                  <DeleteIcon /> Delete
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  </div>
  );
}

export default AdminCart;
