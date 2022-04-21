
var back = document.querySelector('div .back');
var black2 = document.querySelector('div .black2');
var notif = document.querySelector('div .not');


var rch = document.querySelector('.cont');
var backup = document.querySelector('.backup');
var header = document.querySelector('header');
var flr = document.querySelector('flr');

back.addEventListener('click', (e)=> {
    // e.defaultPrevented()
    rch.style.display= 'block';
    backup.style.display= 'block';
    notif.style.display= 'none';

});
backup.addEventListener('click', (e)=> {
    // e.defaultPrevented()
    rch.style.display= 'none';
    backup.style.display= 'none';
    notif.style.display= 'none';

});
// header.addEventListener('click', ()=> {
//     rch.style.display= 'none';
//     backup.style.display= 'none';
// });
black2.addEventListener('click', (e)=> {
    // e.defaultPrevented()
    notif.style.display= 'block';
    backup.style.display= 'block';
    rch.style.display= 'none';
});


