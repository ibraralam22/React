import React from 'react'

const onClick = (e, id, value) => {
    alert("OnClick" + id)
}

function GameCircle({id, value, children}) {
    console.log(id)
  return (
    <div onClick = {(e) => onClick(e, id, value)}>
        {children}
    </div>
  )
}

export default GameCircle