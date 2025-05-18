/**
 * コミット情報
 */
export type TCommit = {
  /** コミットID */
  id: string
  /** メッセージ */
  message: string
  /** コミッター */
  author: string
  /** 更新日 */
  date: string
}