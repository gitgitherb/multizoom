// クリック時の処理
function handleClick(event) {
  // debugText.text = 'click!';
  if (statusFriends == 'run' || statusFriends == 'jump') {
    // debugText.text = 'jump!';
    statusFriends = 'jump';// ジャンプ
    spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_jump");// ジャンプ中の絵に変更
    jumpPower = friendsList[activeFriends]['initV'];
    playSound("se_jump");// SE再生
  }
}

// ダブルクリック時の処理
// ※1度目のクリックはclickイベントに拾われてしまう。
function handleDblclick(event) {
  // debugText.text = 'dbclick!';
}

// リサイズ処理
function handleResize(event) {
   // 画面幅・高さを取得
   var w = window.innerWidth;
   var h = window.innerHeight - 70;
   // Canvas要素の大きさを画面幅・高さに合わせる
   stage.canvas.width = w;
   stage.canvas.height = h;

    if (statusGame > 0) {
      // 画面をウィンドウサイズに合わせて拡大縮小
      var dispW;
      var dispH;
      var stageX, stageY;
      if (w > h) {
        // 横が大きいときは横に合わせる
        dispW = h / STAGE_H_ZOOM;
        dispH = h / STAGE_H_ZOOM;
        stageX = (w - dispW * STAGE_W_ZOOM) / 2;
        stageY = 0;
      } else {
        // 縦が大きいときは縦に合わせる
        dispH = w / STAGE_W_ZOOM;
        dispW = w / STAGE_W_ZOOM;
        stageX = 0;
        stageY = (h - dispH * STAGE_H_ZOOM) / 2;
      }
      // dispW = w / STAGE_W;// 仮
      // dispH = h / STAGE_H;// 仮
      baseContainer.scaleX = dispW;
      baseContainer.scaleY = dispH;
      maskShape.scaleX = dispW;
      maskShape.scaleY = dispH
      // 画面を中央に表示
      baseContainer.x = stageX;//40;//w - dispW / 2;
      baseContainer.y = stageY;//0;//h - dispH / 2;
      maskShape.x = stageX;
      maskShape.y = stageY;
      debugContainer.x = stageX;
      debugContainer.y = stageY;
      debugText.text = stageX+':'+stageY;

      // debugText.text = 'resize:'+dispW+':'+dispH;
    }
   // 画面更新する
   stage.update();
}

// 読み込み開始時の処理？必要ないかも
function handleFileLoad(event) {
  assets.push(event);
}
