const connection = require('./connection');

const getAll = async () => {
    const [sales] = await connection.execute(
    `SELECT 
    sp.sale_id AS saleId, 
    s.date, 
    sp.product_id AS productId, 
    sp.quantity 
    FROM StoreManager.sales_products AS sp 
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    ORDER BY sp.sale_id, sp.product_id`,
    );
    return sales;
};
const getID = async (id) => {
    const [salesId] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sale_id = ?;`,
    [id],
    );
    return salesId;
};

const postProductInSale = async (created, sale) => {
    await connection.execute(
        'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [created, sale.productId, sale.quantity],
    );

    const [result] = await connection.execute(
        `SELECT product_id AS productId, quantity
        FROM sales_products WHERE sale_id = ?`,
        [created],
    );
    return result;
};

const createIdSale = async () => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO sales (date) VALUES (DEFAULT);',
    );
    return insertId;
};

const salePost = async () => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO sales (date) VALUES (NOW())',
    );
        return insertId;
};

const deleteSale = async (id) => {
    const [sid] = await connection.execute(
        'DELETE FROM sales WHERE id = ?;',
        [id],
      );
    
      return sid;
};

module.exports = {
    getAll,
    getID,
    salePost,
    createIdSale,
    postProductInSale,
    deleteSale,
};