let numberOfFilms;

function start(){
  numberOfFilms = prompt('Скільки фільмів ви переглянули?');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Введіть коректні дані. Скільки фільмів ви переглянули?');
  }
}

start();

let personalMovieDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres : [],
  private : false,
};

function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
  if(personalMovieDB.count <= 10){
    console.log('Просмотрено довольно мало фильмов');
  } else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10){
    console.log('Вы классический зритель');
  } else if(personalMovieDB.count > 30){
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
  
}

detectPersonalLevel();

function showMyDB(){
  if(personalMovieDB.private == false){
    console.log(personalMovieDB)
  }
}

showMyDB();

function writeYourGenres(){
  for(i = 1; i < 4; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();
//console.log(personalMovieDB);
