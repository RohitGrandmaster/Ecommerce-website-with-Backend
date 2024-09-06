import React from 'react'

function newUserCart({ cartItems, setCartItems }) {

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        alert('Item deleted from cart successfully!');
      };
    
      const totalCartPrice = cartItems.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
    
      const handleTotalBuyNow = () => {
        setCartItems([]);
        alert('Cart cleared!');
      };
    
      const handleBuyNow = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
        alert('Thank you for purchasing!');
      };

  return (
    <div>
  <Card className="border border-black p-4 bg-fuchsia-600">
        <Card.Title className="text-center">
          <ShoppingCartIcon /> Shopping Cart
        </Card.Title>
        <Card.Text className="font-weight-bold absolute right-5 top-1">
          <ShoppingCartIcon /> Total: {totalCartPrice.toFixed(2)}
        </Card.Text>
        <div className="d-flex absolute right-5">
          <Button onClick={handleTotalBuyNow} variant="success" className="mt-3">
            Buy All
          </Button>
        </div>
      </Card>
      <div className="d-flex flex-wrap justify-content-center">
        {cartItems.map((item) => (
          <Card key={item.id} className="mt-3 mx-2" style={{ width: '200px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Img src={item.image} alt={item.name} className="w-50 h-50 border border-black mb-3" />
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price: {item.price}</Card.Text>
              <div className="d-flex">
                <Button onClick={() => removeFromCart(item.id)} variant="danger" className="mr-2 bg-red-600">
                  <DeleteIcon /> Remove
                </Button>
                <Button onClick={() => handleBuyNow(item.id)} className='bg-green-600' variant="success">
                  Buy Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default newUserCart