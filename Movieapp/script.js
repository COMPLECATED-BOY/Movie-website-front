const API_URL ="https://api.themoviedb.org/3/discover/movie?api_key=b012366eaaf2a64981ca51f955714327&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const  IMG_PATH="https://image.tmdb.org/t/p/w500/"
const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=b012366eaaf2a64981ca51f955714327&query="

let main=document.getElementById("mainbody")
let search=document.getElementById("searchbox")
let form=document.getElementById("form")

async function getmovies(url){

   const res = await fetch(url)
   const data= await res.json()
   console.log(data.results)
   show(data.results);
}


getmovies(API_URL);
function show(obb){
    main.innerHTML="";
  obb.forEach(element => {
    let elm= document.createElement("div")
    elm.className="movie"
    elm.innerHTML=` <img src="${IMG_PATH+element.poster_path}" alt="This is the Poster">
    <div class="info">
        <h1 class="title">${element.title}</h1>
        <div class=" rating rating${getclass(element.vote_average)}">${element.vote_average}</div>
    </div>
    <div class="overview">
        <h3>${element.title}</h3>
        <p>${element.overview}</p>
    </div>`
    main.appendChild(elm)
   });
}

function getclass(num){
    if (num>=8) {
        return 'green'
    }
    if (num>5) {
        return 'yellow'
    }
    return 'red'
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const term=search.value;
    if(term!=''&& term){
        getmovies(SEARCH_URL+term)
        term.value='';
    }else{
        window.location.reload();
    }
})




