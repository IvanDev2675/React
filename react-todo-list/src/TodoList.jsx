import { useReducer, useState } from "react";

// 1. Función reducer para manejar las tareas
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    default:
      return state;
  }
}

// 2. Componente TodoList
function TodoLiist() {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });
  const [inputValue, setInputValue] = useState('');

  // Función para agregar nueva tarea
  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  // Función para manejar Enter en el input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Lista de Tareas 📝</h2>
      
      {/* Input para nueva tarea */}
      <div style={{ marginBottom: '20px' }}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe una nueva tarea..."
          style={{
            padding: '10px',
            marginRight: '10px',
            width: '200px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <div>
        {state.todos.length === 0 ? (
          <p>No hay tareas. ¡Agrega una!</p>
        ) : (
          state.todos.map(todo => (
            <div
              key={todo.id}
              style={{
                padding: '10px',
                margin: '5px 0',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: todo.completed ? '#f0f0f0' : 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? '#888' : 'black',
                  flex: 1
                }}
              >
                {todo.text}
              </span>
              
              <div>
                <button
                  onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    backgroundColor: todo.completed ? '#FFA500' : '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  {todo.completed ? 'Deshacer' : 'Completar'}
                </button>
                
                <button
                  onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                  style={{
                    marginLeft: '10px',
                    padding: '5px 10px',
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: 'pointer'
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Contador de tareas */}
      <div style={{ marginTop: '20px', color: '#666' }}>
        <p>Total: {state.todos.length} | 
           Completadas: {state.todos.filter(todo => todo.completed).length} |
           Pendientes: {state.todos.filter(todo => !todo.completed).length}
        </p>
      </div>
    </div>
  );
}

export default TodoLiist;