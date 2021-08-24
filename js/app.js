'use strict';

let category_list = ['action.png','adventure.png','animation.png','comedy.png','detective.png',
  'fantasy.png','history.png','horror.png','musical.png','pirate.png','romantic.png',
  'sci-fi.png','war.png','western.png'];

let form = document.getElementById('data');
let result_div = document.getElementById('result');
let table = document.createElement('table');
result_div.appendChild(table);

function movie (name , img , release){
  this.name = name;
  this.img = img;
  this.release = release;
  movie.all_movies.push(this);
}
movie.prototype.render = function(){
  let tr = document.createElement('tr');
  table.appendChild(tr);
    
  let td_x = document.createElement('td');
  td_x .textContent = "X";
  tr.appendChild(td_x);

  let td_img = document.createElement('td');
  let img = document.createElement('img');
  img.src = this.img;
  td_img.appendChild(img);
  tr.appendChild(td_img);

  let td_name = document.createElement('td');
  td_name .textContent = this.name;
  tr.appendChild(td_name);

  let td_relearse = document.createElement('td');
  td_relearse .textContent = this.release;
  tr.appendChild(td_relearse);

}
movie.all_movies =[];
//  console.log(JSON.parse(localStorage.data));
// console.log(movie.all_movies.length)
// if(true){}
let data_array = JSON.parse(localStorage.data);

// checking the loccal storage 
if (data_array){
  for (let i=0; i < data_array.length;i++){
  new movie(data_array[i].name,data_array[i].img,data_array.release);
}
// console.log(movie.all_movies)
  for (let i =0 ; i < movie.all_movies.length;i++){
  movie.all_movies[i].render();
}
}


form.addEventListener('submit',add_movie);

function add_movie(e){

  e.preventDefault();
  let new_name = e.target.name.value;
  let new_img = e.target.imag.value.toLowerCase();
  let new_release = e.target.release.value;

  let new_movie = new movie(new_name,'img/'+new_img+'.png',new_release);
  new_movie.render();
//   console.log(movie.all_movies);
  localStorage.data =JSON.stringify(movie.all_movies);

}

