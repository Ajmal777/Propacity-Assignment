import styled from "styled-components";
import { FlexBox } from "./Container";

export const Card = styled(FlexBox)`
    background-color: ${({bgColor}) => bgColor ?? "transparent"};
    border: 1px solid rgb(224, 224, 224);
    border-radius: ${({radius}) => radius ?? "10px"};
    transition: 0.2s ease;
    min-height: 60px;
    cursor: pointer;
    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }
`

const CardBaseText = styled.p`
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25;
    padding: 0.5rem;
    margin: 0;
`

export const CardTitle = styled(CardBaseText)`
    font-weight: 500;
    line-height: 1.5;
    padding-bottom: 0;
`

export const CardBody = styled(CardBaseText)`
    font-size: 0.85rem;
    padding-top: 0;
`