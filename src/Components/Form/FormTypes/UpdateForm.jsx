import React, { useContext } from "react";
import { Button, ConfigProvider, Modal, Popconfirm, message } from "antd";
import FormBody from "../FormBody";
import { FormContext } from "../../../Context/FormContext";
import ModalConfig from "./ModalConfig";

export const UpdateForm = ({
    isModalOpen,
    data,
    setData,
    handleCancel,
    handleUpdate,
    handleDelete,
}) => {
    const confirm = (e) => {
        handleDelete();
        message.success("Note Deleted");
        handleCancel();
    };
    const { colorChange, titleChange, bodyChange } = useContext(FormContext);
    return (
        <ModalConfig color={data.color}>
            <Modal
                title="Take a note..."
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button type="text" key={"btn-cancel"} onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button type="primary" key={"btn-update"} onClick={handleUpdate}>
                        Update
                    </Button>,
                    <Popconfirm
                        title="Delete the note"
                        description="Are you sure to delete this note?"
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                        key={"btn-delete"}
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>,
                ]}
            >
                <FormBody
                    title={data.title}
                    body={data.body}
                    handleColorChange={(val) => colorChange(val, setData)}
                    handleBody={(e) => bodyChange(e, setData)}
                    handleTitle={(e) => titleChange(e, setData)}
                />
            </Modal>
        </ModalConfig>
    );
};
