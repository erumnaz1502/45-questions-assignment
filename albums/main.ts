function make_album(artistName: string , album_title: string , tracks?: number){
    let album: {artist: string, title: string, tracks?: number} ={

        artist: artistName,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return  album;

}

let album1 = make_album("Kim taehyung","layover");

console.log(album1);

let album2 = make_album("Kim Soek Jin", "super tunna");
console.log(album2);

let album3 = make_album("Kim Namjoon", "life", 16);
console.log(album3);