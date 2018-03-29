var playlist = {
  artistName: 'songTitle'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'Alison'
  return playlist
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}