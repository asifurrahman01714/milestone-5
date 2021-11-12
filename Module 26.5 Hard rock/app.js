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
        const title = singleSong.title;
        const artist = singleSong.artist.name;
        console.log(title,artist);
        
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML =`
        <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9" id="lyricsContainer">
                        <h3 class="lyrics-name" id="lyricsName">${title}</h3>
                        <p class="author lead">Album by <span id="authorName">${artist}</span></p>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button class="btn btn-success" onClick="getLyrics('${title}','${artist}')">Get Lyrics</button>
                    </div>
            </div>
        `;
        searchResults.appendChild(resultDiv);
    }
 }

 const getLyrics = (title, artist) => {
     console.log(title, artist);
     const url=`https://api.lyrics.ovh/v1/${artist}/${title}`;
        fetch(url)
        .then(response => response.json())
        .then(data => displayLyrics(data))
 }

 const displayLyrics = (data) => {
     console.log(data.lyrics);
     const lyricsContainer = document.getElementById('lyricsContainer');
     let lyricsContent = document.getElementById('lyricsContent');
     lyricsContent = data.lyrics;
     if (lyricsContent === undefined) {
         lyricsContainer.innerHTML = '<h2>No Lyrics Found</h2>'
     } else {
         lyricsContainer.innerHTML = lyricsContent;
     }
 }