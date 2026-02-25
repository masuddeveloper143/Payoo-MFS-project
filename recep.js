document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    // console.log('button cliked');
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    console.log(typeof amount);
})