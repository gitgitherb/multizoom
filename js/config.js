var assets;// 読み込まれたファイルが配列に入る
var ZOOM_MAGNI = 2;// 画像の表示倍率
var STAGE_W_ZOOM = 160 * ZOOM_MAGNI;// 画面サイズ(横)
var STAGE_H_ZOOM = 180 * ZOOM_MAGNI;// 画面サイズ(縦)
var STAGE_W = 160;// 画面サイズ(横)
var STAGE_H = 180;// 画面サイズ(縦)
var GROUND_LINE = 156;// 地面の位置
var GRAVITY = 0.75;// 重力(毎フレーム下方向にかかる力)
var CHAR_W_ZOOM = 32 * ZOOM_MAGNI;// キャラクターのサイズ
var CHAR_H_ZOOM = 32 * ZOOM_MAGNI;// キャラクターのサイズ
var CHAR_W = 32;// キャラクターのサイズ
var CHAR_H = 32;// キャラクターのサイズ
var CHAR_SPACING = 1 * ZOOM_MAGNI;// キャラクターのspritesheet設定で使用
var CHAR_MARGIN = 1 * ZOOM_MAGNI;// キャラクターのspritesheet設定で使用
var IMAGE_PATH = "./image/";
var SOUND_PATH = "./sound/";
var FRIENDS_FLG_SABA = 0;
var FRIENDS_FLG_BAG = 1;
var L1CLOUDTOP01_BASE_Y = 45;
var L1CLOUDTOP01_BASE_Y_MARGIN = 20;
var L1CLOUDTOP01_BASE_Y = 80;
var L1CLOUDTOP01_BASE_Y_MARGIN = 15;
var baseContainer;// stageを乗せるコンテナ
var debugContainer;// デバッグ用コンテナ
var debugText;// デバッグ用テキスト
var statusGame;// ゲームの状態：0 = 読み込み中、1 = 再生中
// フレンズの状態：run、jump、damage、down、dash
var statusFriends;
var activeFriends = 0;
var friendsList = {
  // サバちゃん
  0:{
    name:"saba",
    speed:3,
    dashSpeed:3,
    initV:8,
    damageV:13,
    downV:16
  },
  // バッグちゃん
  1:{
    name:"bag",
    speed:1.5,
    dashSpeed:2.5,
    initV:6,
    damageV:10,
    downV:14
  }
};
var debagMode = 0;
var stage;
var l1CloudTop01;
var l1CloudUnder01;
var l1Forest01;
var l1Forest02;
var l2Tree01;
var spriteSheetChar;// スプライトシート
var spriteSheetSaba;// スプライトシート
var spriteSheetBag;// スプライトシート
var spriteChar;// スプライト
var spriteSaba;// スプライト
var spriteBag;// スプライト
var l4Grass01Obj1;// 手前の草
var l4Grass01Obj2;
var l4Grass01Obj3;
var l4_grass01_list;
var maskShape

var friendsSubX;
var friendsSubY;
var jumpPower;// ジャンプのエネルギー
var scrollSpeed;// スクロールスピード(カメラのスピード)
