import { Dish } from './entities/Dish';
import { Position } from './entities/Position';
import { Menu } from './entities/Menu';
import { Restaurant } from './entities/Restaurant';
import { Cart } from './entities/Cart';
import { Order } from './entities/Order';
import { User } from './entities/User';
import { Courier } from './entities/Courier';

const menu = new Menu(1, 'Main Menu', new Date());
const pizza = new Dish(1, 'Pizza Margherita', 550, 'Tomato, mozzarella, basil');
const sushi = new Dish(2, 'Sushi Set', 890, '12 rolls');
menu.addDish(pizza);
menu.addDish(sushi);

const restaurant = new Restaurant(1, 'Tasty Point', 'Pushkina 10', 4.7, menu);
const cart = new Cart(1, new Date());

const pos1 = new Position(1, pizza, 2);
const pos2 = new Position(2, sushi, 1);
cart.addPosition(pos1);
cart.addPosition(pos2);

const user = new User(1, 'Ivan', '+7 999 123-45-67', 'ivan@mail.ru', cart);

console.log('=== Cart ===');
console.log('Positions:', cart.positions.length);
console.log('Total:', cart.totalSum);

const order = new Order(Date.now(), new Date(), 'created', cart.totalSum, user.id, cart.positions);
user.addOrder(order);

console.log('=== Order ===');
console.log('Status:', order.status);
console.log('Sum:', order.totalSum);

const courier = new Courier(1, 'Petr', '+7 999 765-43-21');
courier.acceptOrder();

console.log('=== Courier ===');
console.log('Name:', courier.name);
console.log('Status:', courier.status);

order.updateStatus('on the way');
courier.deliver();

console.log('=== After delivery ===');
console.log('Order:', order.status);
console.log('Courier:', courier.status);
console.log('User orders:', user.orders.length);