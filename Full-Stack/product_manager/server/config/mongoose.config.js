
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected =================="))
    .catch(err => console.log("Error", err))