const DATE = '2023-05-26T22:27:55.000Z';

const mockAllSales = [
  {
    saleId: 1,
    date: DATE,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: DATE,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: DATE,
    productId: 3,
    quantity: 15,
  },
  ];
  
const mockSalesId = [
  {
    date: '2023-05-27T12:13:53.000Z',
    productId: 1,
    quantity: 5,
 },
 {
   date: '2023-05-27T12:13:53.000Z',
   productId: 2,
   quantity: 10,
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
  
  module.exports = {
    mockAllSales,
    mockSalesId,
    mockSalesCreated,
  };