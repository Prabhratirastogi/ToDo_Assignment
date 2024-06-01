import React from 'react';

function TodoTabs({ isCompleteScreen, setIsCompleteScreen }) {
  return (
    <div className="btn-area">
      <button
        className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
        onClick={() => setIsCompleteScreen(false)}
      >
        Todo
      </button>
      <button
        className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
        onClick={() => setIsCompleteScreen(true)}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoTabs;
