const movies = [
  {
    title: "The Batman",
    img: "https://pelikulamania.com/wp-content/uploads/2022/02/The-Batman-2024-1024x683.jpeg",
  },
  {
    title: "Spider-Man: No Way Home",
    img: "https://images.justwatch.com/poster/300177312/s718/spider-man-no-way-home.jpg",
  },
  {
    title: "Top Gun: Maverick",
    img: "https://ts2.mm.bing.net/th?id=OIP.-Yknjjiimy8LkMxPwrXYjwHaJQ&pid=15.1&o=7&rm=3",
  },
  {
    title: "Avatar: The Way of Water",
    img: "https://ts4.mm.bing.net/th?id=OIP.zSiUb-3ZIW9AtF0k4-4uzQHaK_&pid=15.1&o=7&rm=3",
  },
  {
    title: "M3gan",
    img: "https://amazingstories.com/wp-content/uploads/2023/02/Figure-1-M3GAN-Poster-CENTER.jpg",
  },
  {
    title: "Everything Everywhere All at Once",
    img: "https://www.antiquesboutique.com/upload/images/shopprod/159790/everything-everywhere-all-at-once-1-sheet-film-movie-poster-james-jean_159790_pic1_size1.jpg",
  },
  {
    title: "Teen Wolf: The Movie",
    img: "https://image.tmdb.org/t/p/original/kvw5jYWp01zwv5yXSqd3VnumS1m.jpg",
  },
  {
    title: "Mission Majnu",
    img: "https://i.gadgets360cdn.com/large/mission_majnu_poster_2_1674044945384.jpg",
  },
];

const popularRow = document.getElementById("popular");

movies.forEach((movie) => {
  const div = document.createElement("div");
  div.className = "poster";

  const img = document.createElement("img");
  img.src = movie.img;
  img.alt = movie.title;

  const caption = document.createElement("p");
  caption.innerText = movie.title;
  caption.style.textAlign = "center";
  caption.style.marginTop = "5px";

  div.appendChild(img);
  div.appendChild(caption);
  popularRow.appendChild(div);
});
