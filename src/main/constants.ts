/**
 * データファイル関連
 */
enum FilePath {
  /**
   * アプリデータフォルダ
   */
  AppDirectory = 'MyExercise',
  /**
   * ファイル
   */
  PhraseFcList =  `MyExercise\\list.json`,
  /**
   * 設定情報
   */
  Settings = `MyExercise\\setting.json`,
}

/**
 * プロセス間インターフェース定義(メイン画面)
 */
enum ProcIfDefMain {

}

/**
 * プロセス間インターフェース定義(設定画面)
 */
enum ProcIfDefSetting {
  ShowSettings = 'my-git-log-setting:show-settings'
}


/**
 * プロセス間インターフェース定義
 */
enum ProcIfDef {
  LoadSetting = 'my-app:load-setting',

  /**
   * 文章フラッシュカードをインポート
   */
  ImportPhraseFcFile = 'my-app:import-phrase-fc-file',

  /**
   * 文章フラッシュカードをエクスポート
   */
  ExportPhraseFcFile  = 'my-app:export-phrase-fc-file',
  
  /**
   * 文章フラッシュカードリストの取得
   */
  LoadPhraseFcList = 'my-app:load-phrase-fc-list',
  /**
   * 文章フラッシュカードリストの保存
   */
  SavePhraseFcList = 'my-app:save-phrase-fc-list',
  /**
   * 文章フラッシュカードのリストを送信
   */
  SendPhraseFcList = 'my-app:send-phrase-fc-list',

  /**
   * 文章フラッシュカードの取得
   */
  LoadPhraseFcFile = 'my-app:load-phrase-fc-file',

  /**
   * 文章フラッシュカードの保存
   */
  SavePhraseFcFile = 'my-app:save-phrase-fc-file',

  /**
   * ウィンドウタイトル設定
   */
  SetWindowTitle = 'my-app:set-window-title',

  /**
   * リセット(デバッグ用でTOPに戻す)
   */
  Reset ='my-app:reset',
}

/**
 * ローカルストレージ キー定義
 */
enum DataKey {
  /**
   * 文章フラッシュカードのリスト
   **/
  PharasFcFileList = 'data-key:phrase-fc-file-list',
  /**
   * 現在のフラッシュカード
   */
  PhraseFcFile = 'data-key:phrase-fc-file',
  /**
   * プリファレンス
   */
  Preference = 'data-key:preference',
  /**
   * 現在のインデックス
   */
  CurrentIndex = 'data-kye:current-index',
}

/**
 * 出題順の定義
 */
enum OrderDef {
  /**
   * 先頭から
   */
  FromTheBeginning = "FromTheBeginning",
  /**
   * 出題数が少ない
   */
  LessNumberOfQuestion = "lessNumberOfQuestion",
  /**
   * 正答率が少ない
   */
  LowAccuracyRate = "lowAccuracyRate",
  /**
   * ランダム
   */
  Random = "random",
}

/**
 * 回答ボタンの状態
 */
enum AnswerButtonState {
  /**
   * 回答表示前
   */
  BeforeShowAnswer,
  /**
   * 正解(ユーザー未選択)
   */
  CorrectAnswer,
  /**
   * 不正解(ユーザー未選択)
   */
  WrongAnswer,
  /**
   * 正解
   */
  Correct,
  /**
   * 不正解
   */
  Wrong,
}

export { 
  ProcIfDefMain,
  ProcIfDefSetting,
  FilePath, ProcIfDef, DataKey, OrderDef, AnswerButtonState }


