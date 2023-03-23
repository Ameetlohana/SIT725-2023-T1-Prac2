var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static("public_html"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function(req,res) {
    res.render('index.html');
});

function complexMath(num1, num2) {
    return parseInt(num1) = parseInt(num2);
    }

    app.get('/addTwoNumbers', (req, res) => {
        var number1 = req.query.number1;
        var number2 = req.query.number2;
        var result = complexMath(number1,number2);
        res.json({statusCode:200, data:result, message: 'success'});
    });

    app.listen(port, () => {
        console.log('app listening to: ' + port);
    });