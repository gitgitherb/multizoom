// 全ファイル読み込み終了時の処理
function handleComplete() {
  for (var i = 0; i < assets.length; i++) {
    var event = assets[i];
    var id = event.item.id;
    var result = event.result;

    switch (id) {
      case "background":
        // 背景表示
        background = new createjs.Bitmap(result);
        // 基準点を調整する
        background.regX = 0;
        background.regY = 0;
        baseContainer.addChild(background);
        break;
      case "l1_cloud_under01":
        // 雲表示
        l1CloudUnder01 = new createjs.Bitmap(result);
        // 座標
        l1CloudUnder01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1CloudUnder01.x = l1CloudUnder01.subX;
        // l1CloudUnder01.y = Math.round((Math.random() * (95 - 80) + 80) * ZOOM_MAGNI);
        l1CloudUnder01.y = Math.round(80);//(80 * ZOOM_MAGNI);
        baseContainer.addChild(l1CloudUnder01);
        break;
      case "l1_cloud_top01":
        // 雲表示
        l1CloudTop01 = new createjs.Bitmap(result);
        // 座標
        l1CloudTop01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1CloudTop01.x = l1CloudTop01.subX;
        // l1CloudTop01.y = Math.round((Math.random() * (65 - 45) + 45) * ZOOM_MAGNI);
        l1CloudTop01.y = Math.round(45);//(45 * ZOOM_MAGNI)
        baseContainer.addChild(l1CloudTop01);
        break;
      case "l1_forest01":
        // 雲表示
        l1Forest01 = new createjs.Bitmap(result);
        // 座標
        l1Forest01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1Forest01.x = l1Forest01.subX;
        l1Forest01.y = (132 - 8);// * ZOOM_MAGNI
        baseContainer.addChild(l1Forest01);
        break;
      case "l1_forest02":
        // 雲表示
        l1Forest02 = new createjs.Bitmap(result);
        // 座標
        l1Forest02.subX = Math.random() * (STAGE_W - 0) + 0;
        l1Forest02.x = l1Forest02.subX;
        l1Forest02.y = (132 - 8);// * ZOOM_MAGNI
        baseContainer.addChild(l1Forest02);
        break;
      case "l2_tree01":
        // 雲表示
        l2Tree01 = new createjs.Bitmap(result);
        // 座標
        l2Tree01.subX = Math.random() * (STAGE_W - 0) + 0;
        l2Tree01.x = l2Tree01.subX;
        l2Tree01.y = (133 - 24);// * ZOOM_MAGNI
        baseContainer.addChild(l2Tree01);
        break;
      case "spritesheet_char":
        spriteSheetChar = new createjs.SpriteSheet({
            framerate: 12,
            "images": [result],
            "frames": {width:CHAR_W_ZOOM, height:CHAR_H_ZOOM, regY:0, regX:0, spacing:CHAR_SPACING, margin:CHAR_MARGIN},
            // define two animations, run (loops, 1.5x speed) and jump (returns to run):
            "animations": {
              // サバちゃん
              "saba_run": {
                // ダッシュの1/2のスピード
                frames: [0,0,1,1]
              },
              "saba_dash": [0, 1],
              "saba_jump": [1],
              "saba_damage": [2],
              "saba_down": [3],
              // バッグちゃん
              "bag_run": {
                // ダッシュの1/2のスピード
                frames: [4,4,5,5]
              },
              "bag_dash": [4, 5],
              "bag_jump": [5],
              "bag_damage": [6],
              "bag_down": [7]
            }
          });
        spriteChar = new createjs.Sprite(spriteSheetChar, friendsList[activeFriends]['name']+"_run");// 初期値はrun(走る)
        spriteChar.subX = (STAGE_W / 2) - (CHAR_W / 2);// 画面中央 - キャラサイズ半分分ずらす
        spriteChar.x = spriteChar.subX;
        spriteChar.y = GROUND_LINE - CHAR_H;//
        baseContainer.addChild(spriteChar);
        break;
      case "l4_grass01":
        // 雲表示
        l4Grass01Obj1 = new createjs.Bitmap(result);
        l4Grass01Obj2 = new createjs.Bitmap(result);
        l4Grass01Obj3 = new createjs.Bitmap(result);
        // 基準点を調整する
        l4Grass01Obj1.subX = 0;// * ZOOM_MAGNI
        l4Grass01Obj1.x = l4Grass01Obj1.subX;
        l4Grass01Obj1.y = STAGE_H - 24;// * ZOOM_MAGNI
        baseContainer.addChild(l4Grass01Obj1);
        l4Grass01Obj2.subX = 120;// * ZOOM_MAGNI
        l4Grass01Obj2.x = l4Grass01Obj2.subX;
        l4Grass01Obj2.y = STAGE_H - 24;// * ZOOM_MAGNI
        baseContainer.addChild(l4Grass01Obj2);
        l4Grass01Obj3.subX = 240;// * ZOOM_MAGNI
        l4Grass01Obj3.x = l4Grass01Obj3.subX;
        l4Grass01Obj3.y = STAGE_H - 24;// * ZOOM_MAGNI
        baseContainer.addChild(l4Grass01Obj3);
        break;
      case "se_jump":
        // 読み込み終わった時点で再生できるようになってる？
        break;

    }
  }
  statusGame = 1;// 処理開始

  // デバッグ用表示エリア
  var shape = new createjs.Shape();
  shape.graphics.beginFill("DarkRed"); // 赤色で描画するように設定
  shape.graphics.drawRect(0, STAGE_H - 20, 80, 20); // 長方形を描画
  shape.graphics.alpha = 0.5;
  debugContainer.addChild(shape); // 表示リストに追加
  debugText = new createjs.Text("debug","","#ffffff");
  debugText.x = 0 + 5;
  debugText.y = STAGE_H - 20 + 5;
  debugContainer.addChild(debugText);

  // debugText.text = dispW+':'+dispH;
  handleResize();
}
