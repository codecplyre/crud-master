export default (db) => {
    return {
        getOrders(req, res) {
            console.log('/api/billing');
            db.order
                .findAll()
                .then((orders) => {
                    res.json(orders);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
        createOrder(req, res) {
            console.log('/api/billing', req.body, res.body);
            const { movieId, customerId } = req.body;
            db.order
                .create({
                    movieId: Number(movieId),
                    customerId: Number(customerId),
                })
                .then((order) => {
                    res.json(order);
                })
                .catch((err) => {
                    console.log(err);
                    res.json(err.errors);
                });
        },
    };
};
