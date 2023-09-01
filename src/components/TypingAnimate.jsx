import {useState, useEffect} from 'react'

const TypingAnimate = () => {
    const [text, setText] = useState("")
    const messages = ['Frontend Engineer', '']
useEffect(() => {
  let i =0

  const typingInterval = setInterval(() => {
    setText((prevText)=>prevText + messages[i].charAt(prevText.length) )
    if (text === messages[i]) {
        i++
        clearInterval(typingInterval)

        setTimeout(()=>{
            setText('')
            if (i === messages.length) {
                i =0
            }
        }, 1000)
    }
  }, 150);

  return () => {
    clearInterval(typingInterval)
  }
}, [text])

  return (
    <div>{text}</div>
  )
}

export default TypingAnimate