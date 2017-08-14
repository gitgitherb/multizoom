// 全ファイル読み込み終了時の処理
function handleComplete() {
  for (var i = 0; i < assets.length; i++) {
    var event = assets[i];
    var id = event.item.id;
    var result = event.result;

    // x、y、nameをセットする無名関数
    var xynameSet = function(obj, x, y, name) {
      obj.x = x * ZOOM_MAGNI;
      obj.y = y * ZOOM_MAGNI;
      obj.name = name;
    };

    switch (id) {
      case "background":
        // 背景表示
        background = new createjs.Bitmap(result);
        // 基準点を調整する
        background.regX = 0;
        background.regY = 0;
        background.name = 'background';
        baseContainer.addChild(background);
        break;
      case "l1_cloud_under01":
        // 雲表示
        l1CloudUnder01 = new createjs.Bitmap(result);
        // 座標
        l1CloudUnder01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1CloudUnder01.baseX = l1CloudUnder01.subX;
        // l1CloudUnder01.y = Math.round((Math.random() * (95 - 80) + 80) * ZOOM_MAGNI);
        l1CloudUnder01.baseY = Math.round(80);//(80 * ZOOM_MAGNI);
        // l1CloudUnder01.x = l1CloudUnder01.baseX * ZOOM_MAGNI;
        // l1CloudUnder01.y = l1CloudUnder01.baseY * ZOOM_MAGNI;
        // l1CloudUnder01.name = 'l1CloudUnder01';
        xynameSet(l1CloudUnder01, l1CloudUnder01.baseX, l1CloudUnder01.baseY, 'l1CloudUnder01');
        baseContainer.addChild(l1CloudUnder01);
        break;
      case "l1_cloud_top01":
        // 雲表示
        l1CloudTop01 = new createjs.Bitmap(result);
        // 座標
        l1CloudTop01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1CloudTop01.baseX = l1CloudTop01.subX;
        // l1CloudTop01.y = Math.round((Math.random() * (65 - 45) + 45) * ZOOM_MAGNI);
        l1CloudTop01.baseY = Math.round(45);//(45 * ZOOM_MAGNI)
        // l1CloudTop01.x = l1CloudTop01.baseX * ZOOM_MAGNI;
        // l1CloudTop01.y = l1CloudTop01.baseY * ZOOM_MAGNI;
        // l1CloudTop01.name = 'l1CloudTop01';
        xynameSet(l1CloudTop01, l1CloudTop01.baseX, l1CloudTop01.baseY, 'l1CloudTop01');
        baseContainer.addChild(l1CloudTop01);
        break;
      case "l1_forest01":
        // 雲表示
        l1Forest01 = new createjs.Bitmap(result);
        // 座標
        l1Forest01.subX = Math.random() * (STAGE_W - 0) + 0;
        l1Forest01.baseX = l1Forest01.subX;
        l1Forest01.baseY = (132 - 8);// * ZOOM_MAGNI
        // l1Forest01.x = l1Forest01.baseX * ZOOM_MAGNI;
        // l1Forest01.y = l1Forest01.baseY * ZOOM_MAGNI;
        // l1Forest01.name = 'l1Forest01';
        xynameSet(l1Forest01, l1Forest01.baseX, l1Forest01.baseY, 'l1Forest01');
        baseContainer.addChild(l1Forest01);
        break;
      case "l1_forest02":
        // 雲表示
        l1Forest02 = new createjs.Bitmap(result);
        // 座標
        l1Forest02.subX = Math.random() * (STAGE_W - 0) + 0;
        l1Forest02.baseX = l1Forest02.subX;
        l1Forest02.baseY = (132 - 8);// * ZOOM_MAGNI
        // l1Forest02.x = l1Forest02.baseX * ZOOM_MAGNI;
        // l1Forest02.y = l1Forest02.baseY * ZOOM_MAGNI;
        // l1Forest02.name = 'l1Forest02';
        xynameSet(l1Forest02, l1Forest02.baseX, l1Forest02.baseY, 'l1Forest02');
        baseContainer.addChild(l1Forest02);
        break;
      case "l2_tree01":
        // 雲表示
        l2Tree01 = new createjs.Bitmap(result);
        // 座標
        l2Tree01.subX = Math.random() * (STAGE_W - 0) + 0;
        l2Tree01.baseX = l2Tree01.subX;
        l2Tree01.baseY = (133 - 24);// * ZOOM_MAGNI
        // l2Tree01.x = l2Tree01.baseX * ZOOM_MAGNI;
        // l2Tree01.y = l2Tree01.baseY * ZOOM_MAGNI;
        // l2Tree01.name = 'l2Tree01';
        xynameSet(l2Tree01, l2Tree01.baseX, l2Tree01.baseY, 'l2Tree01');
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
        spriteChar.baseX = spriteChar.subX;
        spriteChar.baseY = GROUND_LINE - CHAR_H;//
        // spriteChar.x = spriteChar.baseX * ZOOM_MAGNI;
        // spriteChar.y = spriteChar.baseY * ZOOM_MAGNI;
        // spriteChar.name = 'spriteChar';
        xynameSet(spriteChar, spriteChar.baseX, spriteChar.baseY, 'spriteChar');
        baseContainer.addChild(spriteChar);
        break;
      case "l4_grass01":
        // 雲表示
        l4Grass01Obj1 = new createjs.Bitmap(result);
        l4Grass01Obj2 = new createjs.Bitmap(result);
        l4Grass01Obj3 = new createjs.Bitmap(result);
        // 基準点を調整する
        l4Grass01Obj1.subX = 0;// * ZOOM_MAGNI
        l4Grass01Obj1.baseX = l4Grass01Obj1.subX;
        l4Grass01Obj1.baseY = STAGE_H - 24;// * ZOOM_MAGNI
        // l4Grass01Obj1.x = l4Grass01Obj1.baseX * ZOOM_MAGNI;
        // l4Grass01Obj1.y = l4Grass01Obj1.baseY * ZOOM_MAGNI;
        // l4Grass01Obj1.name = 'l4Grass01Obj1';
        xynameSet(l4Grass01Obj1, l4Grass01Obj1.baseX, l4Grass01Obj1.baseY, 'l4Grass01Obj1');
        baseContainer.addChild(l4Grass01Obj1);
        l4Grass01Obj2.subX = 120;// * ZOOM_MAGNI
        l4Grass01Obj2.baseX = l4Grass01Obj2.subX;
        l4Grass01Obj2.baseY = STAGE_H - 24;// * ZOOM_MAGNI
        // l4Grass01Obj2.x = l4Grass01Obj2.baseX * ZOOM_MAGNI;
        // l4Grass01Obj2.y = l4Grass01Obj2.baseY * ZOOM_MAGNI;
        // l4Grass01Obj2.name = 'l4Grass01Obj2';
        xynameSet(l4Grass01Obj2, l4Grass01Obj2.baseX, l4Grass01Obj2.baseY, 'l4Grass01Obj2');
        baseContainer.addChild(l4Grass01Obj2);
        l4Grass01Obj3.subX = 240;// * ZOOM_MAGNI
        l4Grass01Obj3.baseX = l4Grass01Obj3.subX;
        l4Grass01Obj3.baseY = STAGE_H - 24;// * ZOOM_MAGNI
        // l4Grass01Obj3.x = l4Grass01Obj3.baseX * ZOOM_MAGNI;
        // l4Grass01Obj3.y = l4Grass01Obj3.baseY * ZOOM_MAGNI;
        // l4Grass01Obj3.name = 'l4Grass01Obj3';
        xynameSet(l4Grass01Obj3, l4Grass01Obj3.baseX, l4Grass01Obj3.baseY, 'l4Grass01Obj3');
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
