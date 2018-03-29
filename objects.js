var playlist = {
  artistName: 'songTitle'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
  return playlist
}
updatePlaylist = {Slowdive: Alison}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}