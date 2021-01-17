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

if(firstQuest === " " || firstQuest === "" || firstQuest.length > 50 || firstQuest == null){
  firstQuest = prompt('Введіть один із переглянутих фільмів коректно!')
} 

let secondQuest = prompt('На скільки ви оціните цей фільм від 0 до 10?');

if(isNaN(secondQuest) || secondQuest == null){
  secondQuest = prompt('Введіть коректне значення оцінки фільму в числовому вигляді!');
}

personalMovieDB.movies[firstQuest] = secondQuest;
}

if(personalMovieDB.count <= 10){
  console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10){
  console.log('Вы классический зритель');
} else if(personalMovieDB.count > 30){
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
