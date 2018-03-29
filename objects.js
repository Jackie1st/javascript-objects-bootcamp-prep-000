var playlist = {
  artistName: 'songTitle'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist = {Slowdive: Alison,
    'My Bloody Valentine': Sometimes,
    'Phil Ochs': 'Here\'s to you Mississippi'
  }
  return playlist
}
function removeFromPlaylist(playlistObject, artistName) {
  delete playlist.artistName;
  return playlist;
}