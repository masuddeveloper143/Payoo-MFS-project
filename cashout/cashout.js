document.getElementById('cashout_btn')
    .addEventListener('click', function (even) {
        even.preventDefault();

        const accountNumber = document.getElementById('acount_number').value;
        const pin = document.getElementById('pin').value;
        const amount = document.getElementById('amount').value;
        const minBalance = document.getElementById('min_balence').innerText;

        //    string convert to Number 
        const convertedToNumber = parseFloat(accountNumber);
        const convertedToPin = parseFloat(pin);
        const convertedToAmount = parseFloat(amount);
        const convertedToMinBalance = parseFloat(minBalance)

        if (convertedToPin === 6644) {
            const sum = convertedToAmount - convertedToMinBalance;
            document.getElementById('min_balence').innerText = sum;
        }
    });