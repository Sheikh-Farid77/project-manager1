export const generateId = (state)=>{
    const nextId = state.reduce(((prev, current) => prev && prev.id > current.id ? prev.id : current.id), 0);

    return nextId + 1;
}