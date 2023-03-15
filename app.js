const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.listen(3000, () => {
    console.log('selamat datang di aplikasi transformasi 2D')
    console.log('author info:')
    console.log('    NAMA   : Muhammad Azka Adhisetama')
    console.log('    NIM    : 21/477807/TK/52628\n')
    console.log('app ini dibuat menggunakan Node.js dan dicompile menjadi .exe')
    console.log('silakan membuka link http://localhost:3000 dalam browser anda\n')
    console.log('listening at port: 3000')
})