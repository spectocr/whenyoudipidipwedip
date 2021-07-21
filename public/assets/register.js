
// open modal
document.getElementById('regNow').addEventListener('click',
function() {
    document.querySelector('.reg-modal').style.display = 'flex';
});

// close modal
document.querySelector('.close').addEventListener('click',
function() {
    document.querySelector('.reg-modal').style.display = 'none';
});



document.getElementById('passNow').addEventListener('click',
function() {
    document.querySelector('.passReset').style.display = 'flex';
});

document.getElementsByClassName('close2').addEventListener('click', 
function() {
    document.querySelector('.passReset').style.display = 'none';
});
