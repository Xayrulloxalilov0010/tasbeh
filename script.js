document.querySelector('.button').addEventListener( 'click', function () {
    a = document.querySelector('.ecran')
    a.value =parseInt(a.value) +1
    console.log(a.value);
})
document.querySelector('.delete').addEventListener( 'click', function(){
    a = document.querySelector('.ecran')
    ochirish = 0
    a.value = ochirish
    console.log(ochirish);
})