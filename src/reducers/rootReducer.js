const initState = {
    mybudies:[
        {key:"01",name:"danush", age:"20",profession:"Artist",mobile :"1234"},
        {key:"02",name:"dhyan", age:"22",profession:"Composer",mobile :"5678"},
        {key:"03",name:"drushya", age:"25",profession:"Guitarist",mobile :"9101213"}

    ]
}

const rootReducers = (state = initState, action ) =>{
    if(action.type === "ADD_OBJECT"){        
        return {
            mybudies:  [...state.mybudies,action.data]
        }
    }
    console.log(state)
    return state;
}
export default rootReducers