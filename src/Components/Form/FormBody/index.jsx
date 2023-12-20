import React from "react";
import { FlexBox } from "../../Styled Components/Container";
import { ColorPicker, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormBody = ({ title, body, handleTitle, handleBody, handleColorChange }) => {
    return (
        <FlexBox flexDir="column" gap="1.1rem" bgColor="transparent">
            <Input
                placeholder="Title"
                bordered={false}
                onChange={handleTitle}
                value={title}
            />
            <TextArea
                placeholder="Note"
                autoSize
                bordered={false}
                value={body}
                onChange={handleBody}
            />
            <ColorPicker showText onChange={handleColorChange} />
        </FlexBox>
    );
};

export default FormBody;
