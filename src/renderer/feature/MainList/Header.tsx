import React from 'react'
import Spinner from '../../components/Spinner'
import BaseStyleProps from '../../components/BaseStyleProps'
import IconButton, { IconType } from '../../components/Iconbutton'
import { devLog } from '../../../util/common'
import { TRepository } from '../../../@type/TRepository'

interface HeaderProps extends BaseStyleProps {
  repositoryList: TRepository[]
}

const Header = (props: HeaderProps) => {
  const { styles, repositoryList } = props

  devLog(JSON.stringify(repositoryList))

  const styleList: string[] = ['flex', 'items-end', styles ?? '']
  // const targets = [
  //   { label: 'Print(And)', value: 'pa' },
  //   { label: 'Print(ios)', value: 'pi' }
  // ]
  const targets = repositoryList.map((repo) => {
    return {label:repo.displayName, value: repo.displayName}
  })
  devLog(JSON.stringify(targets))
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
    window.settingApi.showSettings()
  }

  /**
   * コピークリック
   */
  const onCopyClick = () => {
    devLog("onCopyClick")
  }

  return (
    <div className={styleList.join(' ').trim()}>
      <Spinner title="target" options={targets} />
      <Spinner title="branch" options={branches} styles="ms-[1em]" />
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
