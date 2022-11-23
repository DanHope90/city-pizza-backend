const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json())


const citys = [
    {name: 'manchester', restaurant: 'rudys'},
    {name: 'london', restaurant: 'pizza pilgrums'}
];

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.get('/city', (req, res) => {
    res.status(200).send(citys);
})

app.get('/city/:restaurant', (req, res) => {
    const {restaurant} = req.params;
    const city = citys.find((cities) => cities.restaurant === restaurant);

    if(city) {
        res.status(200).send(city);
    } else res.status(404).send('No restaurant found!');
    
})

module.exports = app;
