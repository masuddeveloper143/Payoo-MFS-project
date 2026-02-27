// alert("allow the permition");
// console.log('masud rana');

document.getElementById('btn-login')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // console.log('hello masud');
        let inputNumber = document.getElementById('input-number').value;
        let inputDigit = document.getElementById('input-digit').value;
        // console.log('Account Number: ', inputNumber);
        // console.log('OTP: ', inputDigit);
        let convertedDigit = parseInt(inputDigit);

        if (inputNumber.length === 11) {
            // console.log('number succesfull');
            if (convertedDigit === 7755) {
                window.location.href = "./min_login.html";
                alert('successfull login🎉');
                return;
            }

            else {
                alert('invalid your pin');
            }

        }
        else {
            alert('invalid your number');
        }

        // else {
        //     console.log('incorrect number', inputNumber);
        // };

        // if (inputDigit.length === 4) {
        //     console.log('OTP succesfull');
        // }


        // else {
        //     console.log('incorrect OTP');
        // };
    })