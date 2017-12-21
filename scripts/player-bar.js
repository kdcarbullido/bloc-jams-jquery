{
   $('button#play-pause').on('click', function() {
       const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
       const currentSong = album.songs[currentSongIndex];
       helper.playPauseAndUpdate(currentSong);
       $(this).attr('playState', player.playState);
   });

   $('button#next').on('click', function() {
        if (player.playState !== 'playing') { return; }

        const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
        const nextSongIndex = currentSongIndex + 1;
        if (nextSongIndex >= album.songs.length) { return; }

        const nextSong = album.songs[nextSongIndex];
        helper.playPauseAndUpdate(nextSong);
   });

   $('button#previous').on('click', function() {
       if (player.playState !== 'playing') { return; }

       const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
       const prevSongIndex = currentSongIndex - 1;
       if (prevSongIndex < 0) { return; }

       const prevSong = album.songs[prevSongIndex];
       helper.playPauseAndUpdate(prevSong);
   });

   $('#time-control input').on('input', function (event) {
        player.skipTo(event.target.value);
   });

   $('#volume-control').on('input', function (event) {
       player.setVolume(event.target.value);
   });

   setInterval( () => {
       if (player.playState !== 'playing') { return; };
       var currentTime = player.getTime();
       var duration = player.getDuration();
       var percent = (currentTime / duration) * 100;
       currentTime = player.prettyTime(currentTime);
       $('#time-control .current-time').text(currentTime);
       $('#time-control input').val(percent);
   }, 1000);
}
