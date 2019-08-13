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

