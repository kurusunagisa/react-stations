// DO NOT DELETE

import * as React from 'react'
import './Reset.css'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/terrier-tibetan/n02097474_3058.jpg")
  return (<div>
    <header><h1>Dog アプリ</h1></header>
    <p><span className="description">犬の画像を表示するサイトです</span></p>
    <img src={dogUrl} alt="犬の画像" height="240px"/>
    <button onClick={() => fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json()).then(result => (setDogUrl(result.message)))}>更新</button>
    <hr></hr>
    </div>
  )
}
