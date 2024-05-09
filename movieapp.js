const MOVIES_APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const POSTER_IMGPATH = "https://image.tmdb.org/t/p/w1280";
const MOVIES_SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    
    const moviebox = document.querySelector("#moviesbox");
    const getmovies = async (myapi) =>{
        const response_api = await fetch(myapi);
        const movies_data =    await response_api.json();
        // console.log(movies_data);
        showallmovies(movies_data.results);
    }

    const showallmovies = (data) =>{
        moviebox.innerHTML = "";
        data.forEach(

            (item) => {
                console.log(item);
            const box = document.createElement("div");
            box.classList.add("card");
            box.innerHTML = `
            
            <img src="${POSTER_IMGPATH + item.poster_path}" alt="" srcset="">
            <div class="card-overlay">
                <div class="card-title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>Overview:</h3>
                <p>${item.overview}</p>
            </div>
        
            `;
            moviebox.appendChild(box);
        });
    }

    document.querySelector("#searchmovie").addEventListener(
        "keyup",
        function(event){
            if(event.target.value != ""){
              getmovies(MOVIES_SEARCHAPI + event.target.value);
              //searched movies      
            }
            else{
                getmovies(MOVIES_APIURL);
            }
        }
    )
    // init call
    getmovies(MOVIES_APIURL);