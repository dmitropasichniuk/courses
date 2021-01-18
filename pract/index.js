let personalMovieDB = {

  count : 0,
  movies : {},
  actors : {},
  genres : [],
  private : false,

  start: function(){
    personalMovieDB.count = prompt('Скільки фільмів ви переглянули?');
    while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
      personalMovieDB.count = prompt('Введіть коректні дані. Скільки фільмів ви переглянули?');
    }
  },
  
  rememberMyFilms: function(){
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
  },

  detectPersonalLevel: function(){
  if(personalMovieDB.count <= 10){
    console.log('Просмотрено довольно мало фильмов');
  } else if(personalMovieDB.count <= 30 && personalMovieDB.count > 10){
    console.log('Вы классический зритель');
  } else if(personalMovieDB.count > 30){
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
  },

  writeYourGenres: function(){
      for(i = 1; i < 4; i++){
        let Ganre = prompt(`Ваш любимый жанр под номером ${i}`)

        while(Ganre == '' || Ganre == null || Ganre.length > 50 || Ganre === " "){
          Ganre = prompt('Введіть бажаний жанр коректно!');
        } 
        personalMovieDB.genres[i-1] = Ganre;
        
        personalMovieDB.genres.forEach(() => {
          console.log(`Любимый жанр ${i} - это ${this.genres[i-1]}`);
        });

      }
  },

  showMyDB: function(){
     if(personalMovieDB.private == false){
       console.log(personalMovieDB)
     }
  },

  // toggleVisibleMyDB: function(){
  //   if(personalMovieDB.private){
  //     personalMovieDB.private = false;
  //   } else {
  //     personalMovieDB.private = true;
  //   }
  // },
}

console.log(personalMovieDB.start())
console.log(personalMovieDB.rememberMyFilms())
console.log(personalMovieDB.detectPersonalLevel())
console.log(personalMovieDB.writeYourGenres())
// console.log(personalMovieDB.toggleVisibleMyDB())
console.log(personalMovieDB.showMyDB())