let head = document.querySelector('.head');
let button = document.querySelector('.button');
let heading = document.querySelector('.heading');
const value = "Random Color Generator"
let pallete = document.querySelectorAll('.pallete');
window.addEventListener('load', () => {
    setTimeout(() => {
        button.click();
        head.style.top = '-100%';
    }, 2400);
})


for (let i = 0; i < value.length; i++) {
    setTimeout(() => {
        heading.innerHTML += value[i];
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);// 16777215 is max 24 bit value 
        heading.style.color = "#" + randomColor;
    }, i * 95);
}

const palltete_reset = () => {
    pallete.forEach(e => {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let color_element = e.querySelector('.color');
        color_element.style.backgroundColor = '#' + randomColor;
        let span_element = e.querySelector('.name');
        span_element.innerHTML = '#' + randomColor;

    });
}
button.addEventListener('click', palltete_reset);

pallete.forEach(e => {
    e.addEventListener('click', () => {

        let span = e.querySelector('.name');
        let temp = span.innerHTML;
        navigator.clipboard.writeText(temp);
        span.innerHTML = 'Copied !'
        setTimeout(() => {
            span.innerHTML = temp;
        }, 2000);

    })
})