import React, { useState, useEffect } from 'react';

export const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  const handleSaveClick = () => {
    onUpdate(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};