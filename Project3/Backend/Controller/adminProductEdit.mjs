import { adminProduct } from "./index.mjs";

const adminProductEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, image } = req.body;

        console.log("rohit",id, name, price, image);
        const product = await adminProduct.findByPk(id);
        if (product) {
            product.name = name;
            product.price = price;
            product.image = image;
            await product.save();
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update product', error });
    }
}

export default adminProductEdit;
