import React, { useContext, useState } from "react";
import { Card, CardBody, CardTitle } from "../Styled Components/Card";
import Form from "../Form";
import { NotesContext } from "../../Context/NotesContext";

const Note = ({ data: noteData }) => {
    const { notesList, setNotesList } = useContext(NotesContext);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({ ...noteData });

    function handleCancel() {
        setShowModal(false);
        setData({ ...noteData });
    }

    function handleUpdate() {
        const updatedList = notesList.map((note) => {
            if (note.key === data.key) {
                return data;
            }
            return note;
        });
        setNotesList(updatedList);
        setShowModal(false);
    }

    function handleDelete() {
        const updatedList = notesList.filter((note) => note.key !== data.key);
        setNotesList(updatedList);
        setShowModal(false);
    }

    return (
        <>
            <Card
                flexDir="column"
                bgColor={noteData.color}
                width="240px"
                gap="1rem"
                onClick={() => setShowModal(true)}
            >
                <CardTitle>
                    {noteData.title.length > 50
                        ? noteData.title.substr(0, 50) + "..."
                        : noteData.title}
                </CardTitle>
                <CardBody>
                    {noteData.body.length > 200
                        ? noteData.body.substr(0, 200) + "..."
                        : noteData.body}
                </CardBody>
            </Card>
            <Form.Update
                isModalOpen={showModal}
                data={data}
                setData={setData}
                handleCancel={handleCancel}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default Note;
