import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    mainApi: IMainApi
    settingApi: ISettingsApi
  }
}

export interface IMainApi {
  ping: () => void
  setTitle: (title: string) => void
  openFile: () => Promise<string>
  counterValue: (value: number) => void
  onUpdateCounter: (callback: (event: any, value: number) => void) => void

  /**
   * 設定情報を取得
   * @returns 設定情報
   */
  getSetting:() => Promise<TSetting>

}

export interface ISettingsApi {
  /**
   * 設定画面を表示
   */
  showSettings:() => void,
  /**
   * 設定画面のクローズ
   * @param callback コールバック
   * @param callback.iSave true:設定を保存、false:それ以外
   */
  onSettingsClosed:(callback: (isSave: boolean) => void) => void, 
}