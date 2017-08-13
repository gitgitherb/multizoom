function playSound(seId) {
  console.log("se");
  //Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
  createjs.Sound.play(seId);
  // var instance = createjs.Sound.play(seId);
  // if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
  // 	return;
  // }
}
