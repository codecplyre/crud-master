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
    };
};
