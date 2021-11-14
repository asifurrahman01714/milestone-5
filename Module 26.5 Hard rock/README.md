# hard-rock-solution
### Search Song
api link: https://api.lyrics.ovh/suggest/:searchText

example: https://api.lyrics.ovh/suggest/hello

### Lyric
lyric link: https://api.lyrics.ovh/v1/:artist/:title

example: https://api.lyrics.ovh/v1/Adele/Hello

## Live site:
https://hard-rock-music-by-asifurrahman.netlify.app/

##       javascript Synchronize and Asynchronize function declaration
### Synchronization
```bash
const mySynchronizationFunction = () => {
    const url =`https://jsonplaceholder.typicode.com/users`;
    .fetch(url);
    .then(response => response.json());
    .then(data => console.log(data));
}
```
### Asynchronization
```bash
const myAsynchronizationFunction = () => {
    const url =`https://jsonplaceholder.typicode.com/users`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
```