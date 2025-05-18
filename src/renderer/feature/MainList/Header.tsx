import React from 'react'
import Spinner from '../../components/Spinner'
import BaseStyleProps from '../../components/BaseStyleProps'
import IconButton, { IconType } from '../../components/Iconbutton'
import { devLog } from '../../../util/common'

interface HeaderProps extends BaseStyleProps {}

const Header = (props: HeaderProps) => {
  const { styles } = props
  const styleList: string[] = ['flex', 'items-end', styles ?? '']
  const targets = [
    { label: 'Print(And)', value: 'pa' },
    { label: 'Print(ios)', value: 'pi' }
  ]
  const branches = [
    { label: 'v7.0/develop', value: 'v7dev' },
    { label: 'v8.0/develop', value: 'v8dev' }
  ]
  const tags = [
    { label: 'v7.0/sprint88', value: 'sp88' },
    { label: 'v7.0/Final', value: 'v7final' }
  ]

  /**
   * 検索ボタンクリック
   */
  const onSearchClick =() => {
    devLog("onSearchClick")
  }

  /**
   * 設定クリック
   */
  const onSettingsClick = () => {
    devLog("onSettingsClick")
  }

  /**
   * コピークリック
   */
  const onCopyClick = () => {
    devLog("onCopyClick")
  }

  return (
    <div className={styleList.join(' ').trim()}>
      <Spinner title="target" options={branches} />
      <Spinner title="branch" options={targets} styles="ms-[1em]" />
      <Spinner title="tag" options={tags} styles="ms-[1em]" />
      <IconButton 
      iconType={IconType.Search} 
      onClick={onSearchClick}
      styles="ms-[1em]" />
      <div className="flex-auto" />
      <IconButton 
      iconType={IconType.Settings} 
      onClick={onSettingsClick}/>
      <IconButton 
      iconType={IconType.Copy} 
      onClick={onCopyClick}
      styles="ms-[0.5em]" />
    </div>
  )
}

export default Header
