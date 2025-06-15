import { TRepository } from "./TRepository"

/**
 * 設定情報
 */
export type TSetting = {
  /** JIRAのエンドポイント */
  endPoint: string
  /** チケットのプレフィクス */
  ticketPrefix: string
  /** レポジトリ情報の一覧 */
  repositoryList: TRepository[]
}

export const EmptySetting: TSetting = {
  endPoint: "",
  ticketPrefix: "",
  repositoryList: []
}