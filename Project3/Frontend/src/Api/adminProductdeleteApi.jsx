const adminProductdeleteApi = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/adminItems/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("working", id);
      if (response.ok) {
        alert('product deleted successfully');
        window.location.reload();
        return true;
      } else {
        alert('Failed to delete item from cart');
        return false;
      }
    } catch (error) {
      alert('Network error: Failed to delete item from cart');
      return false;
    }
  };
  
  export default adminProductdeleteApi;
  