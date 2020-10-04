var braintree = require("braintree");

var gateway = braintree.connect({
  environment:  braintree.Environment.Sandbox,
  merchantId:   'rzkz8yqy9nkzwyyh',
  publicKey:    'wkjmct5j26vgcqxz',
  privateKey:   '8329e620670da48b108a78c4bbe15cbe'
});



exports.getToken =(req, res) => {
    gateway.clientToken.generate({
      
    },
         function (err, response) {
          // var clientToken = response.clientToken
        if(err){
            res.status(500).json(err)
        }
        else{
            res.send(response)
        }
      });
}

exports.processPayment = (req, res) => {
    let nonceFromTheClient = req.body.payment_method_nonce

    let amountFromTheClient = req.body.amount

    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
        if(err){
            res.status(500).json(err)
        }
        else{
            res.send(result)
        }
      });
}