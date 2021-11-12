const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value;
    console.log(searchValue);
    displaySong(searchValue);
})

const displaySong = (searchValue) => {
    const url =`https://api.lyrics.ovh/suggest/${searchValue}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displaySongData(data.data))
}

const displaySongData = (data) => {
    console.log(data);
    const lyricsName = document.getElementById('lyricsName');
    const authorName = document.getElementById('authorName');
    const searchResults = document.getElementById('searchResults');
    for (let i = 0; i < data.length; i++) {
        const singleSong = data[i];
        console.log(singleSong);
        console.log(singleSong.title);
        console.log(singleSong.artist.name);
        
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML =`
        <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9" id="lyricsContainer">
                        <h3 class="lyrics-name" id="lyricsName">${singleSong.title}</h3>
                        <p class="author lead">Album by <span id="authorName">${singleSong.artist.name}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success" onClick="getLyrics()">Get Lyrics</button>
                    </div>
            </div>
        `;
        searchResults.appendChild(resultDiv);
    }
 }

 const getLyrics = () => {
     console.log('lyrics collected');
 }