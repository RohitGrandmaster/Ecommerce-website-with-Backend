
const productFetchApi = async  (setProducts) => {

    try {
        const response = await fetch('http://localhost:3000/productfetch');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();     
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }


}

export default productFetchApi;