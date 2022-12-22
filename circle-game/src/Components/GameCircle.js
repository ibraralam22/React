import React from 'react';
import '../Game.css';

const onClick = (e, id) => {
  alert('OnClick' + id);
};

function GameCircle({ id, children }) {
  return (
    <div
      className={`gameCircle ${id % 2 === 0 ? 'odd' : 'even'}`}
      onClick={(e) => onClick(e, id)}
    >
      {children}
    </div>
  );
}

export default GameCircle;
