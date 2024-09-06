const productCreateApi = async (newProduct) => {
  try {
    const response = await fetch('http://localhost:3000/productcreate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (response.ok) { // Check if the response status is OK
      const data = await response.json();
      console.log('Success:', data);
      alert('Product saved successfully!');
    } else {
      throw new Error('Failed to save product'); // Handle non-OK responses
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to save product: ' + error.message);
  }
};

export default productCreateApi; // Exporting the function correctly
