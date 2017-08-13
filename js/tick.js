// 1/30秒毎に実行される
function tick(event) {
  // 画像がすべて読み込まれてから実行する。
  if (statusGame > 0) {
    // フレンズ
    if (statusFriends == 'jump') {
      // 上昇〜下降
      spriteChar.baseY -= jumpPower;// Y座標の移動
      jumpPower -= GRAVITY;// ジャンプ力の重量修正
      // debugText.text = 'jump! '+spriteSaba.baseY;
      // debugText.text = 'jump! '+jumpPower/2;

      if (spriteChar.baseY > GROUND_LINE - CHAR_H) {
        // 着地
        spriteChar.baseY = GROUND_LINE - CHAR_H;
        if (statusFriends == 'jump') {
          // ジャンプ中のみ処理
          if (friendsList[activeFriends]['downV'] < -jumpPower) {
            // console.log('down:'+jumpPower);
            // ダウン
            statusFriends = 'down';
            spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_down");// ダウンの絵に変更
            playSound("se_down");// SE再生
          } else if (friendsList[activeFriends]['damageV'] < -jumpPower) {
            // console.log('damage:'+jumpPower);
            // ダメージ
            statusFriends = 'damage';
            spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_damage");// ダメージの絵に変更
            playSound("se_damage");// SE再生
          } else {
            spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_run");// 走るアニメに変更
            statusFriends = 'run';
          }
        }
      }
    } else if (statusFriends == 'dash') {
      // ダッシュ
      spriteChar.baseX += friendsList[activeFriends]['dashSpeed'];
      if (spriteChar.baseX > (STAGE_W / 2) - (CHAR_W / 2)) {
        // 画面中央に戻ったらrunに戻る
        spriteChar.baseX = (STAGE_W / 2) - (CHAR_W / 2);
        statusFriends = 'run';
        spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_run");// 走るアニメに変更
      }
    } else if (statusFriends == 'damage') {
      // ダメージ
      spriteChar.baseX -= friendsList[activeFriends]['speed'];
      if (spriteChar.baseX < 0) {
        // ある程度したらダッシュ状態に移行
        statusFriends = 'dash';
        spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_dash");//
      }
    } else if (statusFriends == 'down') {
      // ダウン
      spriteChar.baseX -= friendsList[activeFriends]['speed'];
      if (spriteChar.baseX < 0 - CHAR_W * 2) {
        // フレームアウトしたらダッシュ状態に移行
        statusFriends = 'dash';
        // キャラ入れ替え
        if (activeFriends == FRIENDS_FLG_SABA) {
          // バッグちゃんにチェンジ
          activeFriends = FRIENDS_FLG_BAG;
        } else {
          // サバちゃんにチェンジ
          activeFriends = FRIENDS_FLG_SABA;
        }
        spriteChar.gotoAndPlay(friendsList[activeFriends]['name']+"_dash");//
        scrollSpeed = friendsList[activeFriends]['speed'];
      }
    }

    l4Grass01Obj1.subX -= scrollSpeed * 1.5;
    l4Grass01Obj1.baseX = l4Grass01Obj1.subX;
    l4Grass01Obj2.subX -= scrollSpeed * 1.5;
    l4Grass01Obj2.baseX = l4Grass01Obj2.subX;
    l4Grass01Obj3.subX -= scrollSpeed * 1.5;
    l4Grass01Obj3.baseX = l4Grass01Obj3.subX;
    if (l4Grass01Obj1.subX < 0 - 120) {
      l4Grass01Obj1.subX = 120 * 2;
      l4Grass01Obj1.baseX = l4Grass01Obj1.subX;
    }
    if (l4Grass01Obj2.subX < 0 - 120) {
      l4Grass01Obj2.subX = 120 * 2;
      l4Grass01Obj2.baseX = l4Grass01Obj2.subX;
    }
    if (l4Grass01Obj3.subX < 0 - 120) {
      l4Grass01Obj3.subX = 120 * 2;
      l4Grass01Obj3.baseX = l4Grass01Obj3.subX;
    }

    l1CloudUnder01.subX -= 0.1;
    l1CloudUnder01.baseX = Math.round(l1CloudUnder01.subX);
    if (l1CloudUnder01.subX < 0 - 48) {
      l1CloudUnder01.subX = STAGE_W + 48
    }
    l1CloudTop01.subX -= 0.2;
    l1CloudTop01.baseX = Math.round(l1CloudTop01.subX);
    if (l1CloudTop01.subX < 0 - 64) {
      l1CloudTop01.subX = STAGE_W + 64
    }

    l1Forest01.subX -= 0.1;
    l1Forest01.baseX = Math.round(l1Forest01.subX);
    if (l1Forest01.subX < 0 - 24) {
      l1Forest01.subX = STAGE_W + 24
    }
    l1Forest02.subX -= 0.1;
    l1Forest02.baseX = Math.round(l1Forest02.subX);
    if (l1Forest02.subX < 0 - 48) {
      l1Forest02.subX = STAGE_W + 48
    }
    l2Tree01.subX -= 0.2;
    l2Tree01.baseX = Math.round(l2Tree01.subX);
    if (l2Tree01.subX < 0 - 32) {
      l2Tree01.subX = STAGE_W + 32
    }
    for (var i = 0; i < baseContainer.children.length; i++) {
      // console.log("name : "+baseContainer.children[i].name);
      // for (var j in baseContainer.children[i]) {
      //   console.log("ppt"+i+" : "+j+" : "+baseContainer.children[i][j]);
      // }
      baseContainer.children[i].x = baseContainer.children[i].baseX * ZOOM_MAGNI;
      baseContainer.children[i].y = baseContainer.children[i].baseY * ZOOM_MAGNI;
      // console.log(baseContainer.children[i].id+":x = "+baseContainer.children[i].x);
      // console.log(baseContainer.children[i].id+":y = "+baseContainer.children[i].y);
    }
  }
  // statusGame = -1;// 1回の処理でアプリを止めます。

  stage.update(event); // important!!
}
