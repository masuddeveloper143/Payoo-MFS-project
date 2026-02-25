document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        // console.log(typeof amount);
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseFloat(pin);
        const minBalance = document.getElementById('min_balence')
            .innerText;
        // console.log(typeof minBalance);
        const convertedBalance = parseFloat(minBalance);
        // console.log(typeof convertedBalance);

        if (convertedPin === 1234) {
            // console.log('Add money succsesfule')
            const sum = convertedBalance + convertedAmount;
            minBalance = document.getElementById('min_balence').innerText = sum;
            
        }
        else {
            console.log('incrroct your Pin');

        }

    })