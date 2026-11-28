import './scss/styles.scss';
import { Cart } from './components/models/Cart';
import { Catalog } from './components/models/Catalog';
import { Customer } from './components/models/Customer';
import { apiProducts } from './utils/data';
import { LarekApi } from './components/models/LarekApi';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';
import { TPayment } from './types';

const productsModel = new Catalog();

productsModel.products = apiProducts.items;
if(productsModel.products.length > 0) {
  console.log(`Каталог успешно заполнен`)
}

console.log(`Массив товаров из каталога: `, productsModel.products);

console.log('производится поиск товара с id-854cef69-976d-4c2a-a18c-2aa45046c390');
console.log(productsModel.getProductById('854cef69-976d-4c2a-a18c-2aa45046c390'));

console.log('производится сохранение товара с id-854cef69-976d-4c2a-a18c-2aa45046c390');
const item = productsModel.products.find(item => {
  return item.id === '854cef69-976d-4c2a-a18c-2aa45046c390';
});
if(item){
  productsModel.selectedProduct = item;
} else {
  console.log(`Товар не найден`)
}

console.log('производится отображение выбранного товара');
console.log(productsModel.selectedProduct);

const cartModel = new Cart();

console.log('производится добавление товаров в корзину');
cartModel.addItem(apiProducts.items[3]);
cartModel.addItem(apiProducts.items[0]);
if(cartModel.items.length > 0) {
  console.log(`Товар успешно добавлен в корзину`)
}

console.log('Товары в корзине', cartModel.items);

console.log('производится удаление товара из корзины');
if(item) {
  cartModel.removeItem(item);
}else {
  console.log(`Товар для удаления не найден`)
}

console.log('Товары в корзине', cartModel.items);

console.log(`Общая стоимость корзины ${cartModel.getPrice()}`);

console.log(`Количество товаров в корзине ${cartModel.getCount()}`);

console.log('Поиск товара в корзине по id-854cef69-976d-4c2a-a18c-2aa45046c390');
console.log(cartModel.hasItem('854cef69-976d-4c2a-a18c-2aa45046c390'));

console.log('производится очистка корзины');
cartModel.clearCart();
console.log(cartModel.items);

const customerModel = new Customer();

console.log('Вывод введенных пользователем данных');
const obj = {payment: 'card' as TPayment, email: 'babai@gmail.ru', phone: '+7912'};
customerModel.setInfo(obj);
console.log(customerModel.getInfo());

console.log('валидация данных');
console.log(customerModel.validator());

console.log('очистка полей');
customerModel.clearInfo();
console.log(customerModel.getInfo());

const api = new Api(API_URL);
const orderModel = new LarekApi(api);

console.log('Получение массива товаров с сервера');
console.log(orderModel.getProduct());

const apiArr = orderModel.getProduct();

console.log('Отправка данных на сервер');
const datas = {payment: 'card' as TPayment, email: 'babai@gmail.ru', phone: '+7912',address: 'address', total: 750, items: ['854cef69-976d-4c2a-a18c-2aa45046c390']};
orderModel.postOrder(datas)
.then(result => {
  console.log(result);
}).catch(e => {
  console.error(`Ошибка отправки`, e);
})

apiArr.then(result => {
  productsModel.products = result.items;
  console.log(`Массив товаров из каталога: `, productsModel.products);
}).catch(e => {
  console.error(`Ошибка загрузки`, e);
})