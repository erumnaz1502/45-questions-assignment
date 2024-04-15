function make_album(artistName, album_title, tracks) {
    var album = {
        artist: artistName,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Kim taehyung", "layover");
console.log(album1);
var album2 = make_album("Kim Soek Jin", "super tunna");
console.log(album2);
var album3 = make_album("Kim Namjoon", "life", 16);
console.log(album3);
