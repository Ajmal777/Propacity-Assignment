import { createContext, useState } from "react";

const NotesContext = createContext();
export { NotesContext }
const NotesContextProvider = (props) =>{
    const [search, setSearch] = useState("");
    const [notesList, setNotesList] = useState(() => {
        const list = localStorage.getItem("notes");
        if (!list) return [];
        else return JSON.parse(list);
    });
    

    return <NotesContext.Provider value={{notesList, setNotesList, search, setSearch}}>
        {props.children}
    </NotesContext.Provider>
}

export default NotesContextProvider;