const adminProductEditApi = async (productId, updatedProduct, setEditingProduct) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        if (response.ok) {
            // Assuming `response.json()` returns the updated products array
            const updatedProducts = await response.json();
            
            // setProducts(updatedProducts);
            setEditingProduct(null);

            // Alert successful update
            alert('Product updated successfully!');
            
            // Reload the page
            window.location.reload();
        } else {
            console.error('Failed to update product');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export default adminProductEditApi;
