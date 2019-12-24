const axios = require('axios');
const express = require('express')
const cors = require('cors');
const app = express()

const config = {
    PORT: 3000,
    GOOGLE_BOOK_API: 'https://www.googleapis.com/books/v1/',
    TIMEOUT: 3000
}
const http = axios.create({
    baseURL: config.GOOGLE_BOOK_API,
    timeout: config.TIMEOUT,
    headers: { 'Content-Type': 'application/json' }
});


app.use(cors({origin: '*'}));

app.get('/', (req, res) => {
    res.send('Microservice - search book OK').status(200)
})

app.get('/search/isbn/:isbn', (req, res) => {
    const isbnRegex = /^(97(8|9))?\d{9}(\d|X)$/;
    const ISBN = req.params.isbn
    const isISBN = isbnRegex.test(ISBN)
    if (!isISBN)
        return res.status(400).send({
            message: 'Invalid ISBN'
        });

    http.get(`volumes?q=${ISBN}`).then(result => {
        const response = result.data
        if (response.totalItems === 0) {
            return res.status(400).send({
                message: 'Not found book'
            });
        }
        return res.status(200).json(response.items[0])
    })
})

app.listen(config.PORT, () => {
    console.log('Start microservice - search book at port', config.PORT)
})



