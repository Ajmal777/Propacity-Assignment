import { Button, ConfigProvider, Modal } from "antd";
import React, { useContext } from "react";
import FormBody from "../FormBody";
import { FormContext } from "../../../Context/FormContext";
import ModalConfig from "./ModalConfig";

export const CreateForm = ({
    isModalOpen,
    handleOk,
    handleCancel,
    setNote,
    note,
}) => {
    const { colorChange, titleChange, bodyChange } = useContext(FormContext);

    return (
        <>
            <ModalConfig color={note.color}>
                <Modal
                    title="Take a note..."
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button
                            type="text"
                            key="btn-cancel"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>,
                        <Button type="primary" key="btn-ok" onClick={handleOk}>
                            OK
                        </Button>,
                    ]}
                >
                    <FormBody
                        title={note.title}
                        body={note.body}
                        handleBody={(e) => bodyChange(e, setNote)}
                        handleTitle={(e) => titleChange(e, setNote)}
                        handleColorChange={(val) => colorChange(val, setNote)}
                    />
                </Modal>
            </ModalConfig>
        </>
    );
};
