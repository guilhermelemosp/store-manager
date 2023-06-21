const mockControllersNotFound = {
    type: 404,
    message: 'Sale not found',
    };
const data = '2023-05-27T12:13:53.000Z';

 const mockControllersAllSales = [
  {
    saleId: 1,
    date: data,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: data,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: data,
    productId: 3,
    quantity: 15,
  },
];

const mockFoundSalesId = [
  {
    date: data,
    productId: 1,
    quantity: 5,
  },
  {
    date: data,
    productId: 2,
    quantity: 10,
  },
  {
    date: data,
    productId: 3,
    quantity: 15,
  },
];

const mockSalesCreated = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const mockSaleCreated201 = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

  module.exports = { 
    mockControllersNotFound,
    mockControllersAllSales,
    mockFoundSalesId,
    mockSalesCreated,
    mockSaleCreated201,
  };