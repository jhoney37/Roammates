const prev = document.getElementById('carousel-left');
const next = document.getElementById('carousel-right');
const list = document.getElementById('content');
const itemWidth = 200;
const padding = 10;

prev.addEventListener('click', ()=> {
    list.scrollLeft -= (itemWidth + padding);
});

next.addEventListener('click', ()=> {
    list.scrollLeft += (itemWidth + padding);
});
