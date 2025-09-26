const User = require('./model');

const getUsers = (req, res, next) => {
    User.find()
        .then(response => res.json({ response }))
        .catch(error => res.json({ error }));
};

const addUser = (req, res, next) => {
    const user = new User({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        contact: req.body.contact,
        email: req.body.email,
        position: req.body.position,
    });

    user.save()
        .then(response => res.json({ response }))
        .catch(error => res.json({ error }));
};

const updateUser = (req, res, next) => {
    const { id, name, age, contact, email, position } = req.body;
    User.updateOne({ id }, { $set: { name, age, contact, email, position } })
        .then(response => res.json({ response }))
        .catch(error => res.json({ message: error }));
};

const deleteUser = (req, res, next) => {
    const id = req.body.id;
    User.deleteOne({ id })
        .then(response => res.json({ response }))
        .catch(error => res.json({ message: error }));
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
