$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    stagePadding: 50,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

let apiFilm = {
    title: '',
    description: '',
    url_cape: '',
    trailer_code: '',
    movie_link: ''
}

async function getData(file) {
    const response = await fetch(`./js/api/${file}`);
    const data = await response.json();
    
    apiFilm.title = data.highlight.title;
    apiFilm.description = data.highlight.description;
    apiFilm.url_cape = data.highlight.url_cape;
    apiFilm.trailer_code = data.highlight.trailer_code;
    apiFilm.movie_link = data.highlight.movie_link;
    console.log(apiFilm);

    return apiFilm;
}

getData('films.json');
/* const data = getData();
console.log(data.highlight.title); */