const counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'INC':
            return state + action.payload;
        case 'DEC':
            return state - 1;
        default: return state;
    }
};
const termReducer = (state='', action) => {
    switch (action.type) {
        case "change":
            return state = action.payload;
        default: return state;
    }
};
const categoryReducer = (state='/', action) => {
  switch (action.type) {
      case "category":
          return state = action.payload;
      default: return state;
  }
};
const onChangeReducer = (state='', action) => {
    switch (action.type) {
        case "onChange":
            return state = action.payload;
        default: return state;
    }
};



export {counterReducer, termReducer, categoryReducer, onChangeReducer};
