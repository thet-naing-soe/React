import Header from './components/Header'
import Body from './components/Body'
import {useState} from 'react'
function App() {
  const [userName, setUserName] = useState("John")

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  )
}

export default App
