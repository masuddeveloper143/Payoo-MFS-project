document.getElementById('cashout_btn')
    .addEventListener('click', function (even) {
        even.preventDefault();

        const accountNumber = document.getElementById('acount_number').value;
        const pin = document.getElementById('pin');
        const amount = document.getElementById('amount');

        //    string convert to Number 
        const convertedToNumber = parseFloat(accountNumber);
        const convertedToPin = parseFloat(pin);
        const convertedToAmount = parseFloat(amount);

        if (convertedToPin === 6644) {

        }
    });