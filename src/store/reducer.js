const defaultvalue={
    inputvalue:'default',
    list:[1,2,3]
}
export default(state = defaultvalue,action)=>{
    if(action.type === 'change_this_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputvalue = action.value;
        return newState;
    }
    if(action.type === 'clickbtn'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputvalue);
        newState.inputvalue = '';
        return newState;
    }
    return state;
}