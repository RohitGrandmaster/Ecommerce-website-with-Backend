import { adminProduct } from './index.mjs';

const productCreate = async (req, res) => {
  const { name, price, image, url } = req.body;

  console.log(name, price, image, url);

  try {
    const product = await adminProduct.create({ name, price, image, url });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(400).json({ error: error.message });
  }
};

export default productCreate;
