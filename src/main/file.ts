import { TbSettings } from "react-icons/tb";
import { EmptySetting, TSetting } from "../@type/TSetting";
import fs   from 'fs';


// Todo ：一旦、エラーハンドリングは無視

/**
 * 設定情報を読み込む
 * @returns 設定情報
 */
export const loadSettings = async(): Promise<TSetting> => {
  const settingFile = getSettingFile()
  if (fs.existsSync(settingFile)) {
    return JSON.parse(fs.readFileSync(settingFile, "utf8"))
  } else {
    return EmptySetting
  }
}

/**
 * 設定情報を保存する
 * @param settings 保存する設定情報
 */
export const saveSettings = async(settings: TSetting) => {
  const settingFile = getSettingFile()
  if (fs.existsSync(settingFile)) {
    fs.unlinkSync(settingFile)
  }
  fs.writeFileSync(settingFile, JSON.stringify(settings))
}

/**
 * 設定ファイルを取得する
 * @param string 
 * @returns 
 */
const getSettingFile = ():string => {
  const app = require('electron').app
  return `${app.getPath('userData')}/setting.data`
}