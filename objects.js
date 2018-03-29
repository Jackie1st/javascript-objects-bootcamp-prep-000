var playlist = {
  artistName: 'songTitle'
}
function updatePlaylist(playlist, artistName, songTitle) {
  this.playlist = playlist
  this.artistName = Slowdive
  this.songTitle = Alison
  return playlist
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}