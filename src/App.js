// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/terrier-tibetan/n02097474_3058.jpg")
  return (<html language="ja">
    <header> <title>Dog アプリ</title></header>
    <body><p>犬の画像を表示するサイトです</p><img src={dogUrl} alt="犬の画像" /></body></html>
  )
}
