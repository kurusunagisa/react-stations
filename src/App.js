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
    <header className="header__style"><h1>Dog アプリ</h1></header>
    <body><p><span className="description">犬の画像を表示するサイトです</span></p>
    <img src={dogUrl} alt="犬の画像" width="320px" height="240px"/>
    <button onClick={() => fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(result => (setDogUrl(result.message)))} className="reflesh__button">更新</button>
    <hr></hr>
    </body></html>
  )
}
