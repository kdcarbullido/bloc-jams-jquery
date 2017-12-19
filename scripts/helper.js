class Helper {

    playPauseAndUpdate (song) {
        player.playPause(song);
        let totalTime = player.prettyTime(player.getDuration());
        $('#time-control .total-time').text(totalTime);
    }
}

const helper = new Helper();