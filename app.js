const pictures = [
	{
		artist: "Steve Green'hitch",
		date: "October 26 2016",
		title: "Mountain Lake",
		img: "assets/forest.jpg",
	},
	{
		artist: "John Rocks",
		date: "November 02 2026",
		title: "Pacfic Ocean",
		img: "assets/ocean.jpg",
	},
	{
		artist: "Suzy Fallia",
		date: "April 01 1999",
		title: "Oregon Falls",
		img: "assets/waterfall.jpg",
	},
	{
		artist: "Elisabeth Hickio",
		date: "March 12 2012",
		title: "Down The Road",
		img: "assets/hiking.jpg",
	},
	{
		artist: "Miranda Brand",
		date: "June 06 2018",
		title: "Mediteranean Sea",
		img: "assets/sea.jpg",
	},
];

const imgs = document.querySelectorAll("button");

function creatDes(tab, index) {
	const $h3 = document.createElement("h3");
	const $p = document.createElement("p");
	const $div = document.createElement("div");
	const $h2 = document.createElement("h2");

	for (let j = 0; j < imgs.length; j++) {
		imgs[j].classList.remove("carousel-btn-active");
		imgs[j].innerHTML = "";
		for (let i = 0; i < tab.length; i++) {
			if (imgs[i] == index) {
				index.classList.add("carousel-btn-active");
				$h3.textContent = tab[i].artist;
				$p.textContent = tab[i].date;
				$h2.textContent = tab[i].title;
			}
		}
		index.append($div, $h2);
		$div.append($h3, $p);
	}

	$div.classList.add("carousel-btn-description");

	index.append($div, $h2);
	$div.append($h3, $p);
}

for (let i = 0; i < imgs.length; i++) {
	let img = imgs[i];
	img.addEventListener("click", () => {
		creatDes(pictures, img);
	});
}
