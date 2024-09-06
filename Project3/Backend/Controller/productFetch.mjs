import { adminProduct } from './index.mjs';

const productFetch = async (req, res) => {
  try {
    const products = await adminProduct.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: error.message });
  }
};

export default productFetch;
