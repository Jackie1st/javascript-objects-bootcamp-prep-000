var playlist = {
  artistName: 'songTitle'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle'
  return playlist
}
updatePlaylist = {Slowdive: Alison, My Bloody Valentine: Sometimes, Phil Ochs: Heres to you Mississippi}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}