const url = require('url');
const express = require('express');
const path = require('path');
const qs = require('querystring');
const http = require("http");
const https = require('https');
const fs = require("fs");
const net = require('net');

const app = express();

app.get('/nowy', (req, res) => {
    const x = url.resolve(req.url, '/serwer1');
    res.redirect(x);
});

app.get('/s1', (req, res) => {
    res.send(JSON.stringify(req.query));
});

app.get('/s2/:id', (req, res) => {
   res.send(req.params['id']);
});

app.get(/^\/s3\/(\w+)$/, (req, res) => {
    res.send(req.params[0]);
});

app.post('/s4', (req, res) => {
    res.send(req.body);
});


app.get('/witaj', (req, res) => {
    const params = qs.decode(req.url.split('?')[1]);
    res.send(`witaj ${params.imie} ${params.nazwisko}`);
});

app.get('/strona', (req, res) => {
    http.request('http://example.com', (msg) => {
        msg.setEncoding('utf8');
        msg.on('data', (chunk) => {
           console.log(chunk);
        });
        msg.on('end', () => {
            res.send('');
        })
    }).end();
});

app.get('/nowa', (req, res) => {
    res.write('nowa strona\n');
    res.write(new Date().toJSON());
    setTimeout(() => {
        res.write(new Date().toJSON());
        res.end();
    }, 1000);
});

app.get('/klient', (req, res) => {
    res.send(JSON.stringify({
        data: new Date
    }));
});

app.get('/pogoda', (req, res) => {
    http.request('http://goweather.herokuapp.com/weather/Bielsko-Biala', (msg) => {
        let jsonstr = '';
        msg.on('data', chunk => {
            jsonstr += chunk;
        });
        msg.on('end', () => {
            const data = JSON.parse(jsonstr);
            jsonstr = '';

            res.send(`Temperatura w Bielsku Bialej: ${data.temperature}, wiatr ${data.wind}`);
        })
    }).end();
});

setInterval(() => {
    http.request('http://localhost:8000/klient', (msg) => {
       msg.on('data', chunk => {
           console.log('KLIENT: ' + chunk);
       })
    }).end();
}, 1000);

app.route('/s1').get((req, res) => {
    res.send('s1');
});

const server = app.listen(8000, () => {
    console.log(`>> listening on ${server.address().port} <<`);
});

const server2 = https.createServer({
    key: fs.readFileSync(__dirname + '/selfsigned.key'),
    cert: fs.readFileSync(__dirname + '/selfsigned.crt'),
}, app);

server2.listen(8443, () => {
    console.log(`>> SECURE listening on ${server2.address().port} <<`);
})

const server3 = net.createServer((c) => {
    console.log(`SERVER: hello`);

    c.on('data', data => {
        console.log('SERVER: od klienta - ' + data.toString());
        c.end();
    })
});

server3.listen(8001);

const client = net.createConnection({port: 8001}, (c) => {
    console.log('CLIENT: hello');
});

client.on('data', data => {
    console.log('CLIENT: od serwera - ' + data.toString());
});

client.write('siema');