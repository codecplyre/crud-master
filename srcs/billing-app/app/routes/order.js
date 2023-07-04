import order from '../controller/order.js';
export default (app, db) => {
    const controller = order(db);
    app.get('/api/billing', controller.getOrders);
    app.post('/api/billing', controller.createOrder);
};
