const searchButton = document.getElementById('searchButton');
const spinner = document.getElementById('spinner');
var searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keypress", function(event) {
    if (event.keyCode == 13){
        searchButton.click();
    }
});


searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    console.log(searchValue);
    // spinner.style.display = 'block';
    toggleSpinner(true);
    displaySong(searchValue);
})

const displaySong = async(searchValue) => {
    const url =`https://api.lyrics.ovh/suggest/${searchValue}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySongData(data.data)
    } catch (error) {
        errorFunction("Something went wrong!!!");
    }
        
}

const displaySongData = (data) => {
    console.log(data);
    const lyricsName = document.getElementById('lyricsName');
    const authorName = document.getElementById('authorName');
    let searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = " ";
    data.forEach(singleSong => {
        const title = singleSong.title;
        const artist = singleSong.artist.name;
        console.log(title,artist);
        
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML =`
        <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9" id="lyricsContainer">
                        <h3 class="lyrics-name" id="lyricsName">${title}</h3>
                        <p class="author lead">Album by <span id="authorName">${artist}</span></p>
                        <audio controls>
                            <source src="${singleSong.preview}" type="audio/ogg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success" onClick="getLyrics('${title}','${artist}')">Get Lyrics</button>
                    </div>
            </div>
        `;
        searchResults.appendChild(resultDiv);
        // spinner.style.display = 'none';
        toggleSpinner(false);
    });
    // for (let i = 0; i < data.length; i++) {
    //     const singleSong = data[i];
    //     const title = singleSong.title;
    //     const artist = singleSong.artist.name;
    //     console.log(title,artist);
        
    //     const resultDiv = document.createElement('div');
    //     resultDiv.innerHTML =`
    //     <div class="single-result row align-items-center my-3 p-3">
    //                 <div class="col-md-9" id="lyricsContainer">
    //                     <h3 class="lyrics-name" id="lyricsName">${title}</h3>
    //                     <p class="author lead">Album by <span id="authorName">${artist}</span></p>
    //                 </div>
    //                 <div class="col-md-3 text-md-right text-center">
    //                     <button class="btn btn-success" onClick="getLyrics('${title}','${artist}')">Get Lyrics</button>
    //                 </div>
    //         </div>
    //     `;
    //     searchResults.appendChild(resultDiv);
    // }
 }

 const getLyrics = (title, artist) => {
     console.log(title, artist);
     const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
        fetch(url)
        .then(response => response.json())
        .then(data => displayLyrics(data.lyrics))
        .catch(error => errorFunction("Something went wrong!!!"));
 }

 const displayLyrics = (lyrics) => {
     console.log(lyrics);
     let lyricsContainer = document.getElementById('lyricsContainer');
     lyricsContainer.innerText = lyrics;
    //  if (lyricsContent === undefined) {
    //      lyricsContainer.innerHTML = '<h2>No Lyrics Found</h2>'
    //  } else {
    //      lyricsContainer.innerHTML = lyricsContent;
    //  }
 }

 const errorFunction = (err) => {
        console.log(err);
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.innerText = err;
 }

 const toggleSpinner = (show) => {
     const spinner = document.getElementById('spinner');
     if (show) {
         spinner.style.display = 'block';
     } else {
         spinner.style.display = 'none';
     }
 }