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
});

class InfoMovie {
	constructor(title, discription, url_cape, trailer_code, movie_link) {
		this.title = title;
		this.discription = discription;
		this.url_cape = url_cape;
		this.trailer_code = trailer_code;
		this.movie_link = movie_link;
	}

	getTitle() {
		return this.title
	}

	getDiscription() {
		return this.discription
	}

	getUrlCape() {
		return this.url_cape
	}

	getTrailerCode() {
		return this.trailer_code
	}

	getMovieLink() {
		return this.movie_link
	}
}

class Movie {
	constructor() {
		this.listMovies = [];
	}

	addItem(info){
		this.listMovies.push(info);
	}

	getItems(){
		return this.listMovies;
	}
}


async function getData(file) {
	const response = await fetch(`./assets/js/api/${file}`);
	const data = await response.json();
	const list = new Movie();

	/* The first item always will be put in highlight on webpage */
	list.addItem(new InfoMovie(data.highlight.title,
		data.highlight.description,
		data.highlight.url_cape,
		data.highlight.trailer_code,
		data.highlight.movie_link));

	for(let d in data.catalog){
		list.addItem(new InfoMovie(d.title, d.discription,
								   d.url_cape, d.trailer_code,
								   d.movie_link));
	};

	return list.getItems();
}

getData('films.json');