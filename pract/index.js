const numberOfFilms = prompt('Скільки фільмів ви переглянули?');

let personalMovieDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  geners : [],
  privat : false,
};

for(let i = 0; i < 2; i++){
let firstQuest = prompt('Один із останніх фільмів, який ви дивились?');
let secondQuest = prompt('На скільки ви оціните цей фільм?');

personalMovieDB.movies[firstQuest] = secondQuest;
personalMovieDB.movies[firstQuest] = secondQuest;

}

console.log(personalMovieDB);
