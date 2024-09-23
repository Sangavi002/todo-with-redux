export const todoReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter(todo => todo.id !== action.payload);
      case "UPDATE":
        return state.map(todo =>
          todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
      default:
        return state;
    }
  };
  
  