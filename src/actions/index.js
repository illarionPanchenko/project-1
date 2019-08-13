export const inc = (nr) => {
    return{
        type: "INC",
        payload: nr
    }
};
export const dec = () => {
    return{
        type: "DEC"
    }
};

export const change = (x) => {
    return{
        type: "change",
        payload: x
    }
};

export const category = (x) => {
  return{
      type: 'category',
      payload: x
  }
};

export const onChange = (x) => {
    return{
        type: 'onChange',
        payload: x
    }
};



