const imgArray = [
    'slider/assets/1643924638_497384_1643925029_noticia_normal.jpg',
    'slider/assets/aros.jpg',
    'slider/assets/baile.webp',
    'slider/assets/fiesta.png'
]

const img = document.querySelector('#slide')

let i = 0

const slideShow = () => {
    img.src = imgArray[i]
    i = (i < imgArray.length - 1) ? i + 1 : 0
}

const interval = () => {
    setInterval(slideShow, 3500)
}