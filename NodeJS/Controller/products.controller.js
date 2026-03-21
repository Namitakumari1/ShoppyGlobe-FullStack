import productModel from "../Model/products.model.js";

/* 
   CREATE PRODUCT (POST /api/products)
   This API adds a new product to MongoDB
 */
export function createProduct(req, res) {
    try {
        const { title, thumbnail, price, description } = req.body;

        // Basic validation
        if (!title || !price) {
            return res.status(400).json({ message: "Title and Price are required" });
        }

        const newProduct = new productModel({
            title,
            thumbnail,
            price,
            description,
        });

        // Save product to DB
        newProduct.save()
            .then((data) => {
                res.status(201).json(data); // 201 = created
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


/* 
   FETCH ALL PRODUCTS (GET /api/products)
   This API returns all products from MongoDB
 */
export function fetchProducts(req, res) {
    productModel.find()
        .then((data) => {

            // If no products found
            if (data.length === 0) {
                return res.status(404).json({ message: "No products found" });
            }

            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
}


/* 
   FETCH SINGLE PRODUCT BY ID (GET /api/products/:id)
   This API returns one product using MongoDB _id
*/
export function fetchProductById(req, res) {
    const { id } = req.params;

    productModel.findById(id)
        .then((product) => {

            // If product not found
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
}


// UPDATE SINGLE PRODUCT BY ID (PUT /api/products/:id)

export async function updateProduct(req, res) {
    try {
        const { id } = req.params;
        const { title, thumbnail, price, description } = req.body;

        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            { title, thumbnail, price, description },
            { new: true } // returns updated data
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// DELETE SINGLE PRODUCT BY ID(DELETE /api/products/:id)

export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;

        const deletedProduct = await productModel.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

