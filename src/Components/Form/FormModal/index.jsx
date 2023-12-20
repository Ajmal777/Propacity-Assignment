import { Modal } from "antd";
import React from "react";
import FormBody from "../FormBody";

const FormModal = (footer) => {
    return (
        <Modal
            title="Take a note..."
            open={isModalOpen}
            onCancel={handleCancel}
            footer={footer}
        >
            <FormBody
                title={data.title}
                body={data.body}
                handleColorChange={(val) => colorChange(val, setData)}
                handleBody={(e) => bodyChange(e, setData)}
                handleTitle={(e) => titleChange(e, setData)}
            />
        </Modal>
    );
};

export default FormModal;
