var playlist = {
  artistName: 'songTitle'
};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, artistName, Slowdive)
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}