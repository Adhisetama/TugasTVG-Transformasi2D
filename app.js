const express = require('express')

app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.listen(8080, () => {
    console.log(
`   ___  ___    ______                  ___                    __  _         
  |_  |/ _ \\  /_  __/______ ____  ___ / _/__  ______ _  ___ _/ /_(_)__  ___ 
 / __// // /   / / / __/ _ \`/ _ \\(_-</ _/ _ \\/ __/  ' \\/ _ \`/ __/ / _ \\/ _ \\
/____/____/   /_/ /_/  \\_,_/_//_/___/_/ \\___/_/ /_/_/_/\\_,_/\\__/_/\\___/_//_/
                                                                            `
    )
    console.log('selamat datang di aplikasi transformasi 2D')
    console.log('author info:')
    console.log('    NAMA   : Muhammad Azka Adhisetama')
    console.log('    NIM    : 21/477807/TK/52628\n')
    console.log('app ini dibuat menggunakan Node.js dan dicompile menjadi .exe')
    console.log('silakan membuka link http://localhost:8080 dalam browser anda\n')
    console.log('listening at port: 8080')
})