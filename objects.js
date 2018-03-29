var playlist = {
  Slowdive: 'Alison',
  My Bloody Valentine: 'Sometimes',
  Phil Och: 'Here\'s to you Mississippi'
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