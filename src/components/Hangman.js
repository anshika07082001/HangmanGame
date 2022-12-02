import React, { useState } from 'react'

const Hangman = () => {
    
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const images =['1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png']
    var word='VOLLEYBALL' 
    var [answer,setAnswer]=useState([])
    var [words,setWords]=useState(['','','','','','','','','',''])
    var [count,setCount]=useState(-1)
    var [msg,setmsg]=useState('')
    let flg=''
    var [flag,setFlag]=useState(true)

    const btn=(e)=>{
        var txt = e.target.innerHTML
        flg=false
        for(var i=0;i<word.length;i++){
            if(txt===word[i]){
                words[i]=word[i]
                var ch = word.slice(i,i+1)
                setWords([...words])
                answer.push(ch)
                setAnswer([...answer])
                flg=true;
            }        
        }
        if(!flg){
            count=count+1
            setCount(count)
            if(count===10){
                setmsg('You Loose!')
                setFlag(false)
            }
        }
        else if(answer.length===10){
            setmsg('You Win!')
            setFlag(false)
        }
        e.target.disabled=true
    }

    const reset=()=>{
        setCount(-1)
        flg=false
        setWords(['','','','','','','','','',''])
        setFlag(true)
        setAnswer([])
    }

    return (
    <>
    <h1>Hangman Game</h1>
    <section className='container'>
        <div className=' container__leftDiv '>
            <img src={images[count]} alt='' style={{height:'300px',width:'300px',border:'2px solid grey'}}/>
        </div>
        <div className='container_rightDiv'>
            <div className='answerDiv'>
                {words.map((item)=>{
                    return <h1>{item}</h1>
                })}
            </div>       
            <h3>Hint: Word is Related to Sports</h3>
            {count===10 || answer.length===10?
            <>
            <h2>{msg}</h2>
            <button className='agnBtn' onClick={reset}>Play Again!</button>
            </>:<p></p>}
            {flag?
            <div className='container_rightDiv_grid'>
                {letters.map((item)=>{
                    return(
                    <button className='letters' onClick={btn}>{item}</button>
                    )
                })}
            </div>:
            <p></p>}
        </div>
    </section>
    </>
  )
}

export default Hangman