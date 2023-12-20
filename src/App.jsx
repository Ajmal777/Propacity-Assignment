import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { FlexBox } from "./Components/Styled Components/Container";
import { GoPlus } from "react-icons/go";
import { Button, Empty, FloatButton, Tooltip } from "antd";
import Note from "./Components/Note";
import Form from "./Components/Form";
import { NotesContext } from "./Context/NotesContext";
import Search from "./Components/Search";
import { Heading } from "./Components/Styled Components/Header";
function App() {
    const { notesList, setNotesList, search } = useContext(NotesContext);
    const [filteredList, setFilteredList] = useState([...notesList]);
    // this useState opens/closes the create note modal
    const [createNote, setCreateNote] = useState(false);
    const [note, setNote] = useState({ title: "", body: "", color: "#ffff", key: "", });
    
    useEffect(() => {
        setFilteredList(
            notesList.filter((note) => {
                const title = note.title,
                    body = note.body;
                if (
                    title.toLowerCase().includes(search.toLowerCase()) ||
                    body.toLowerCase().includes(search.toLowerCase())
                ) {
                    return note;
                }
            })
        );
    }, [search]);

    useEffect(() => {
        const arr = JSON.stringify(notesList) ?? "[]";
        localStorage.setItem("notes", arr);
        setFilteredList([...notesList]);
    }, [JSON.stringify(notesList)]);

    function handleCreateNote() {
        if (!note.title && !note.body) return;
        setCreateNote(false);
        setNotesList((list) => [...list, { ...note, key: Date.now() }]);
        setNote({ title: "", body: "", color: "#ffff", key: "" });
    }    

    function handleCancel() {
        setCreateNote(false);
    }

    return (
        <>
            <FlexBox align="center" justify="center">
                <Heading>Google keep clone</Heading>
            </FlexBox>
            <FlexBox margin="auto" gap="1rem" justify="center" align="center" maxWidth="800px">
                <Search />
                    <Tooltip title="Create a new note">
                        <FloatButton
                            className="create-btn-sm"
                            type="primary"
                            icon={<GoPlus />}
                            onClick={() => setCreateNote(true)}
                        />
                    </Tooltip>
                    <Button type="primary" className="create-btn-lg" onClick={() => setCreateNote(true)}>Create Note</Button>                    
            </FlexBox>
            <FlexBox
                maxWidth="1240px"
                justify="center"
                gap="1rem"
                style={{ margin: "0 auto" }}
            >
                {filteredList.length > 0 &&
                    filteredList.map((note) => (
                        <Note key={note.key} data={note} />
                    ))}
            </FlexBox>
            {filteredList.length == 0 && (
                <FlexBox align="center" justify="center">
                    <Empty />
                </FlexBox>
            )}
            <Form.Create
                isModalOpen={createNote}
                handleOk={handleCreateNote}
                handleCancel={handleCancel}
                setNote={setNote}
                note={note}
            />
        </>
    );
}

export default App;
