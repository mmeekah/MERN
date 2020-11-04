import React from 'react'

const Styled = ({word, color, bg}) => {
    const style ={
        color: color,
        backgroundColor: bg
    }
    return (
        <div>
            <div className="jumbotron">
                <h1>Styled Input</h1>
                
            </div>
            <h1 style={style}>The word is: {word}</h1>
        </div>
    )
}
export default Styled ;