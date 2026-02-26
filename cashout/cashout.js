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

        if (convertedToPin === 1234) {
            const sum = convertedToMinBalance - convertedToAmount;
            document.getElementById('min_balence').innerText = sum;
            // if (convertedToNumber === 11) {
            //     alert('successfull')
            // }

            // else {
            //     alert('incorrct your number');
            // }
        }

        else {
            alert('incorrct your pin');
        }
    });