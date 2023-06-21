const connection = require('./connection');

const getAll = async () => {
    const [products] = await connection.execute('SELECT * FROM StoreManager.products');
    return products;
};

const getID = async (id) => {
    const [[productId]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
    );

    return productId;
};

const postProduct = async (name) => {
    await connection.execute(
        'INSERT INTO StoreManager.products (name) VALUE (?)',
        [name],    
    );
    
    const [[product]] = await connection.execute(
        'SELECT * FROM StoreManager.products WHERE name = ?',
        [name],
        );

        return product;
};

const allProductId = async () => {
    const [[{ id }]] = await connection.execute(
        'SELECT MAX(id) AS id FROM products',
    );
    return id;
};

const updateProduct = async (id, name) => {
   const [pid] = await connection.execute(
        `UPDATE products SET name = ?
        WHERE id = ?`,
        [name, id],
    );
    
    return pid;
};

const deleteProduct = async (idProduct) => {
    const [id] = await connection.execute(
        'DELETE FROM StoreManager.products WHERE id = ?;',
        [idProduct],
    );
    return id;
};

module.exports = {
    getAll,
    getID,
    postProduct,
    allProductId,
    updateProduct,
    deleteProduct,
};