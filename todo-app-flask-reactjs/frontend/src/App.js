import React, { useState, useEffect } from 'react';
import './App.css';
import { getTasks, addTask, updateTask, deleteTask } from './api';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoTabs from './components/TodoTabs';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      const todos = response.data.filter(todo => todo.status !== 'Completed');
      const completed = response.data.filter(todo => todo.status === 'Completed');
      setTodos(todos);
      setCompletedTodos(completed);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTodo = async (newTitle, newDescription) => {
    if (!newTitle.trim()) { // Ensure title is not empty
      alert('Task title is required'); // Alert message if title is empty
      return;
    }

    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      status: 'Not Completed'
    };

    try {
      await addTask(newTodoItem);
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleComplete = async (id) => {
    const completedTask = {
      ...allTodos.find(todo => todo.id === id),
      status: 'Completed'
    };
    try {
      await updateTask(id, completedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value };
    });
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value };
    });
  };

  const handleUpdateToDo = async () => {
    try {
      await updateTask(currentEdit, currentEditedItem);
      setCurrentEdit("");
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="App">
      <h1>My Todos</h1>
      <TodoInput onAdd={handleAddTodo} />
      <TodoTabs
        isCompleteScreen={isCompleteScreen}
        setIsCompleteScreen={setIsCompleteScreen}
      />
      <TodoList
        todos={isCompleteScreen ? completedTodos : allTodos}
        isCompleteScreen={isCompleteScreen}
        onDelete={handleDeleteTodo}
        onComplete={handleComplete}
        onEdit={handleEdit}
        onUpdateTitle={handleUpdateTitle}
        onUpdateDescription={handleUpdateDescription}
        currentEdit={currentEdit}
        currentEditedItem={currentEditedItem}
        onUpdate={handleUpdateToDo}
      />
    </div>
  );
}

export default App;
