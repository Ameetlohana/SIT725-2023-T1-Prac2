var express = require('express');
var app = express();
var port = process.env.port || 4050;

app.use(express.static(__dirname+'/public_html'));
app.use(express.json());
app.use(express.urlencoded({extends:false}));

app.get('/', function(req,res) {
    res.render('index.html');
});

function addNumbers(number1, number2) {
    return number1 + number2;
    }

    app.get('/addTwoNumbers', (req, res) => {
        var number1 = req.query.number1;
        var number2 = req.query.number2;
        var result = addNumbers(number1,number2);
        res.json({statusCode:200, data:result, message: 'success'});
    });

    app.listen(port, () => {
        console.log('app listening to: ' + port);
    });