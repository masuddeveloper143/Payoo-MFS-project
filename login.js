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
        let 

        if (inputNumber.length === 11) {
            // console.log('number succesfull');
            if (inputDigit === 7755) {
                console.log('corrct your pin');
            }

            else {
                console.log('invalid your pin');
            }

        }
        else {
            console.log('invalid your number');
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