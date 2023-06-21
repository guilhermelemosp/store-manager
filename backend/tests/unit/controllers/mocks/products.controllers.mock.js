const mockControllersNotFound = {
  type: 404,
  message: 'Product not found',
};
  
const mockControllersAllProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
   id: 3,
   name: 'Escudo do Capitão América',
  },
];

const newProduct = {
  name: 'Travesseiro de Pedra',

};
  
module.exports = { 
  mockControllersNotFound,
  mockControllersAllProducts,
  newProduct,
};