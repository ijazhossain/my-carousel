console.log('added');
let index = 0;
const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
];
const imageEl = document.getElementById('carousel-img');
setInterval(() => {
    if (index == images.length) {
        index = 0;
    }
    const imageUrl = images[index];
    imageEl.setAttribute('src', imageUrl);
    // console.log(imageUrl);
    index++;
}, 1000)