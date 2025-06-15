import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron'
import { ProcIfDef, ProcIfDefSetting } from '../main/constants'
import { TSetting } from '../@type/TSetting'

contextBridge.exposeInMainWorld('mainApi', {
  ping: () => ipcRenderer.send('ping'),
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  counterValue: (value: number) => ipcRenderer.send('counter-value', value),
  onUpdateCounter: (callback: (event: any, value: number) => void) => {
    ipcRenderer.on('update-counter', (ev: IpcRendererEvent, value: number) => callback(ev, value))
  },

    /**
   * 設定情報を取得
   * @returns 設定情報
   */
    getSetting:() => ipcRenderer.invoke(ProcIfDef.LoadSetting)

})


contextBridge.exposeInMainWorld('settingApi', {
  /**
 * 設定画面を表示
 */
  showSettings:() => ipcRenderer.send(ProcIfDefSetting.ShowSettings),

  /**
   * 設定画面のクローズ
   * @param callback コールバック
   * @param callback.iSave true:設定を保存、false:それ以外
   */
  // onSettingsClosed:(callback: (isSave: boolean) => void) => void, 
})