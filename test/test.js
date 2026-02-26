document.getElementById('bangladesh_btn')
    .addEventListener('click', function () {
        document.getElementById('bd').style.display = 'block';
        document.getElementById('usa').style.display = 'none';

    });

document.getElementById('usa_btn')
    .addEventListener('click', function () {
        document.getElementById('bd').style.display = 'none';
        document.getElementById('usa').style.display = 'block';
    })