import './scss/styles.scss';
import { Cart } from './components/models/Cart';
import { Catalog } from './components/models/Catalog';
import { Customer } from './components/models/Customer';
import { apiProducts } from './utils/data';
import { Order } from './components/models/Order';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';

const productsModel = new Catalog();

productsModel.products = apiProducts.items;
if(productsModel.products.length > 0) {
  console.log(`Каталог успешно заполнен`)
}

console.log(`Массив товаров из каталога: `, productsModel.products);

console.log(productsModel.getProductById('854cef69-976d-4c2a-a18c-2aa45046c390'));

const item = productsModel.products.find(item => {
  return item.id === 'c101ab44-ed99-4a54-990d-47aa2bb4e7d9';
});
if(item){
  productsModel.selectedProduct = item;
} else {
  console.log(`Товар не найден`)
}

console.log(productsModel.selectedProduct);

const cartModel = new Cart();

cartModel.addItem(apiProducts.items[3]);
cartModel.addItem(apiProducts.items[0]);
if(cartModel.items.length > 0) {
  console.log(`Товар успешно добавлен в корзину`)
}

console.log(cartModel.items);

if(item) {
  cartModel.removeItem(item);
}else {
  console.log(`Товар для удаления не найден`)
}

console.log(cartModel.getPrice());

console.log(cartModel.getCount());

console.log(cartModel.hasItem('854cef69-976d-4c2a-a18c-2aa45046c390'));

cartModel.clearCart();
console.log(cartModel.items);

const customerModel = new Customer();

customerModel.setInfo('card', 'valezovka d15', 'babai@gmail.ru');
console.log(customerModel.getInfo());
customerModel.setInfo('cash', undefined, 'nik@yandex.com');
console.log(customerModel.getInfo());

console.log(customerModel.validator('address'));
console.log(customerModel.validator('phone'));

customerModel.clearInfo();
console.log(customerModel.getInfo());

const api = new Api(API_URL);
const orderModel = new Order(api);

console.log(orderModel.getProduct());

const apiArr = orderModel.getProduct();

apiArr.then(result => {
  productsModel.products = result.items;
  console.log(`Массив товаров из каталога: `, productsModel.products);
})