import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Edit3, Trash2, Check, X, CheckCircle2, Circle, Calendar } from "lucide-react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch todos from backend on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:8080/items");
      setTodos(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching todos:", err);
      setIsLoading(false);
    }
  };

  const addTodo = async () => {
    if (input.trim() === "") return;

    const newTodo = {
      data: input,
      status: false,
      date: new Date().toISOString(),
    };

    try {
      const response = await axios.post("http://localhost:8080/items", newTodo);
      setTodos([...todos, response.data]);
      setInput("");
      console.log(response);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const toggleStatus = async (listId) => {
    const todoToUpdate = todos.find((todo) => todo.listId === listId);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, status: !todoToUpdate.status };

    try {
      await axios.put("http://localhost:8080/items", updatedTodo);
      setTodos(
        todos.map((todo) =>
          todo.listId === listId ? updatedTodo : todo
        )
      );
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  const deleteTodo = async (listId) => {
    try {
      await axios.delete(`http://localhost:8080/items/${listId}`);
      setTodos(todos.filter((todo) => todo.listId !== listId));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const startEdit = (todo) => {
    setEditingId(todo.listId);
    setEditText(todo.data);
  };

  const saveEdit = async (listId) => {
    if (editText.trim() === "") return;

    const todoToUpdate = todos.find((todo) => todo.listId === listId);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, data: editText };

    try {
      await axios.put("http://localhost:8080/items", updatedTodo);
      setTodos(
        todos.map((todo) =>
          todo.listId === listId ? updatedTodo : todo
        )
      );
      setEditingId(null);
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  const clearCompleted = async () => {
    const completedIds = todos.filter((todo) => todo.status).map((todo) => todo.listId);
    
    try {
      await Promise.all(
        completedIds.map((id) =>
          axios.delete(`http://localhost:8080/items/${id}`)
        )
      );
      setTodos(todos.filter((todo) => !todo.status));
    } catch (err) {
      console.error("Error deleting completed todos:", err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const completedCount = todos.filter(todo => todo.status).length;
  const activeCount = todos.filter(todo => !todo.status).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Todo Mastery
          </h1>
          <p className="text-gray-600 text-lg">Organize your life, one task at a time</p>
          <div className="flex justify-center gap-8 mt-6">
            <div className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-indigo-600">{activeCount}</div>
              <div className="text-sm text-gray-500">Active</div>
            </div>
            <div className="bg-white rounded-2xl px-6 py-3 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>

        {/* Add Todo Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="What needs to be done today?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all duration-200 bg-gray-50 focus:bg-white"
                onKeyDown={(e) => { if (e.key === "Enter") addTodo(); }}
              />
            </div>
            <button
              onClick={addTodo}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 font-semibold"
            >
              <Plus size={20} />
              Add Task
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {["all", "active", "completed"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 capitalize ${
                  filter === filterType
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading your tasks...</p>
            </div>
          ) : filteredTodos.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {filter === "completed" ? "No completed tasks yet" : 
                 filter === "active" ? "No active tasks" : "No tasks yet"}
              </h3>
              <p className="text-gray-500">
                {filter === "all" ? "Add your first task to get started!" : 
                 filter === "active" ? "All caught up! Great work!" : 
                 "Complete some tasks to see them here."}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo, index) => (
              <div
                key={todo.listId}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleStatus(todo.listId)}
                    className="flex-shrink-0 transition-all duration-200 hover:scale-110"
                  >
                    {todo.status ? (
                      <CheckCircle2 size={24} className="text-green-500" />
                    ) : (
                      <Circle size={24} className="text-gray-400 hover:text-indigo-500" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    {editingId === todo.listId ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full px-4 py-2 text-lg border-2 border-indigo-300 rounded-xl focus:border-indigo-500 focus:outline-none"
                        autoFocus
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveEdit(todo.listId);
                          if (e.key === "Escape") cancelEdit();
                        }}
                      />
                    ) : (
                      <div>
                        <p
                          className={`text-lg font-medium transition-all duration-200 ${
                            todo.status
                              ? "line-through text-gray-500"
                              : "text-gray-800"
                          }`}
                        >
                          {todo.data}
                        </p>
                        {todo.date && (
                          <div className="flex items-center gap-1 mt-1 text-sm text-gray-500">
                            <Calendar size={14} />
                            {formatDate(todo.date)}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {editingId === todo.listId ? (
                      <>
                        <button
                          onClick={() => saveEdit(todo.listId)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200"
                        >
                          <Check size={18} />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="p-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                        >
                          <X size={18} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => startEdit(todo)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => deleteTodo(todo.listId)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={clearCompleted}
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-3 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;