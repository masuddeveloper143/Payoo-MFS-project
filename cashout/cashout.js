document.getElementById('cashout_btn')
    .addEventListener('click', function (even) {
        even.preventDefault();

        const accountNumber = document.getElementById('acount_number').value;
        const pin = document.getElementById('cashout_pin').value;
        const amount = document.getElementById('cashout_amount').value;
        const minBalance = document.getElementById('min_balence').innerText;

        //    string convert to Number 
        const convertedToNumber = parseFloat(accountNumber);
        const convertedToPin = parseFloat(pin);
        const convertedToAmount = parseFloat(amount);
        const convertedToMinBalance = parseFloat(minBalance);

        if (convertedToPin === 1234) {

            if (convertedToAmount > convertedToMinBalance) {
                alert("Insufficient Balance");
                return;
            }

            const sum = convertedToMinBalance - convertedToAmount;
            document.getElementById('min_balence').innerText = sum;

            alert("Cash Out Successful");

        } else {
            alert('Incorrect Pin');
        }
    });