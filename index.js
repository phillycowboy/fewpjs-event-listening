const input = document.querySelector('#input');
const main = document.querySelector('#main')


function addingEventListener(e) {
    input.addEventListener('click', ()=>{
        alert('I was clicked!');
    })
};

main.addEventListener('mouseover', function (e) {
    main.style.color = 'blue';
    main.style.fontSize = '200px';
})
addingEventListener();
