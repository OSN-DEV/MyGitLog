import { ColumnDef } from "@tanstack/react-table"

/**
 * チケット情報
 */
export type TTicket = {
  /** チケットのタイトル */
  title: string
  /** チケットナンバー */
  no: string
  /** チケットのステータス */
  status: string
  /** チケットの担当者 */
  asignee: string
}

/**
 * カラム定義
 */
export const TicketColumn: ColumnDef<TTicket>[] = [
  
]