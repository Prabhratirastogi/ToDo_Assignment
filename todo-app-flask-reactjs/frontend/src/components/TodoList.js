import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

function TodoList({
  todos,
  isCompleteScreen,
  onDelete,
  onComplete,
  onEdit,
  onUpdateTitle,
  onUpdateDescription,
  currentEdit,
  currentEditedItem,
  onUpdate
}) {
  return (
    <div className="todo-list">
      {todos.map((item, index) => {
        if (currentEdit === item.id) {
          return (
            <div className='edit__wrapper' key={index}>
              <input
                placeholder='Updated Title'
                onChange={(e) => onUpdateTitle(e.target.value)}
                value={currentEditedItem.title}
              />
              <textarea
                placeholder='Updated Description'
                rows={4}
                onChange={(e) => onUpdateDescription(e.target.value)}
                value={currentEditedItem.description}
              />
              <button
                type="button"
                onClick={onUpdate}
                className="primaryBtn"
              >
                Update
              </button>
            </div>
          );
        } else {
          return (
            <div className="todo-list-item" key={index}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div>
                <AiOutlineDelete
                  className="icon"
                  onClick={() => onDelete(item.id)}
                  title="Delete?"
                />
                {!isCompleteScreen && (
                  <>
                    <BsCheckLg
                      className="check-icon"
                      onClick={() => onComplete(item.id)}
                      title="Complete?"
                    />
                    <AiOutlineEdit
                      className="check-icon"
                      onClick={() => onEdit(item.id, item)}
                      title="Edit?"
                    />
                  </>
                )}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default TodoList;
