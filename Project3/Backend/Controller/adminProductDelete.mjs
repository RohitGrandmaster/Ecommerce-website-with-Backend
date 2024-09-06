import { adminProduct } from "./index.mjs";

const adminProductDelete = async (req, res) => {
  const { id } = req.params; // Get id from params
  console.log(id);

  try {
    const item = await adminProduct.findOne({ where: { id } });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.destroy();
    return res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while deleting the item' });
  }
};

export default adminProductDelete;
