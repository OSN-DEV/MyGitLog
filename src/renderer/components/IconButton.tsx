import React from 'react'
import BaseStyleProps from './BaseStyleProps'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineFileUnknown } from 'react-icons/ai'
import { MdOutlineContentCopy, MdOutlineSearch, MdSearch, MdSettings } from 'react-icons/md'
import { IoMdGitBranch } from 'react-icons/io'

/**
 * アイコンの種別
 */
export enum IconType {
  /** 検索 */
  Search,
  /** 設定 */
  Settings,
  /** コピー */
  Copy,
  /** Git */
  Git
}

interface IconButtonProps extends BaseStyleProps {
  iconType: IconType
  onClick: () => void
}

const IconButton = (props: IconButtonProps) => {
  const { iconType, styles, onClick } = props
  const Icon = getIcon(iconType)
  const styleList = [
    styles ?? '',
    'cursor-pointer',
  ]
  return (
    <div onClick={onClick}>
      <Icon className={styleList.join(' ').trim()}/>
    </div>
  )
}

/**
 * アイコンのコンポーネントを取得
 * @param type アイコンの種別
 * @returns コンポーネント
 */
const getIcon = (type: IconType): React.ComponentType<{ className?: string }> => {
  switch (type) {
    case IconType.Search:
      // return <MdOutlineSearch/>
      return MdOutlineSearch
    case IconType.Settings:
      return MdSettings
    case IconType.Copy:
      return MdOutlineContentCopy
    case IconType.Git:
      return IoMdGitBranch
    default:
      return AiOutlineFileUnknown
  }
}

export default IconButton
