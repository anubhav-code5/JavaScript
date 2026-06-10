var btn = document.querySelector('button');
var main = document.querySelector('main');

var arr = ['Anubhav is smart', 'abhishek lives in Delhi', ' Aditya is an enginner', 'Noida is tech hub ', ' Harsh is a police officer ', 'I am great']
btn.addEventListener('click', () => {
    var h1 = document.createElement('h1')
    var a = Math.floor(Math.random() * arr.length)
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 100)
    var r = Math.floor(Math.random() * 100)
    var fontSize = Math.floor(Math.random() * 100)
    h1.innerHTML = arr[a]
    main.appendChild(h1)
    h1.style.color = 'gold'
    h1.style.position = 'absolute'
    h1.style.left = x + '%'
    h1.style.bottom = y + '%'
    h1.style.rotate = r + 'deg'
    h1.style.fontSize = fontSize + 'px'


})