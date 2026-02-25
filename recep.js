document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        // console.log('button cliked');
        event.preventDefault();

        const amount = document.getElementById('amount').value;
        // console.log(typeof amount);
        const pin = document.getElementById('pin').value;
        // console.log( typeof pin);
        const min_balence = document.getElementById('min_balence').innerText;

        const convertedAmount = parseFloat(amount);

        const convertedPin = parseFloat(pin);

        const convertedBalance = parseFloat(min_balence);
        // console.log( typeof convertedBalance);

        if (convertedPin === 1234) {
            const sum = convertedAmount + convertedBalance;
            document.getElementById('min_balence').innerText = sum;
        }
        else {
            console.log('incorroct pin');
        }
    });