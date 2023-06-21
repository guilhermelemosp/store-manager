const mockServiceAllSales = [
    {
      saleId: 1,
      date: '2023-05-26T22:27:55.000Z',
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: '2023-05-26T22:27:55.000Z',
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: '2023-05-26T22:27:55.000Z',
      productId: 3,
      quantity: 15,
    },
  ];

const mockServiceSalesByEspecificId = {
    date: '2023-05-26T22:27:55.000Z',
    productId: 2,
    quantity: 10,
  };

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

const mockAllSales = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    productId: 3,
    quantity: 15,
  },
  {
    saleId: 3,
    productId: 1,
    quantity: 1,
  },
  {
    saleId: 3,
    productId: 2,
    quantity: 5,
  },
];

module.exports = {
  mockServiceAllSales,
  mockServiceSalesByEspecificId,
  mockSalesCreated,
  mockSaleCreated201,
  mockAllSales,
};