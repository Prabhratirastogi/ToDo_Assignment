import React, { useState, useEffect } from 'react';
import './App.css';
import { getTasks, addTask, updateTask, deleteTask } from './api';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoTabs from './components/TodoTabs';

function App() {
  // State variables for managing todos and edit mode
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [currentEdit, setCurrentEdit] = useState("");
  const [currentEditedItem, setCurrentEditedItem] = useState("");

  // Fetch todos when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      // Separate completed and incomplete todos
      const todos = response.data.filter(todo => todo.status !== 'Completed');
      const completed = response.data.filter(todo => todo.status === 'Completed');
      setTodos(todos);
      setCompletedTodos(completed);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Add a new todo
  const handleAddTodo = async (newTitle, newDescription) => {
    if (!newTitle.trim()) {
      alert('Task title is required');
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

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Mark a todo as completed
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

  // Edit a todo
  const handleEdit = (ind, item) => {
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  // Update the title of the todo being edited
  const handleUpdateTitle = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, title: value };
    });
  };

  // Update the description of the todo being edited
  const handleUpdateDescription = (value) => {
    setCurrentEditedItem((prev) => {
      return { ...prev, description: value };
    });
  };

  // Update the edited todo
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
      {/* Todo input component */}
      <TodoInput onAdd={handleAddTodo} />
      {/* Todo tabs component */}
      <TodoTabs
        isCompleteScreen={isCompleteScreen}
        setIsCompleteScreen={setIsCompleteScreen}
      />
      {/* Todo list component */}
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
