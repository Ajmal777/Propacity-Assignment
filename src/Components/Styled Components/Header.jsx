import styled from "styled-components";

export const Heading = styled.h1`
    font-size: ${({size}) => size ?? "2rem"};
    font-weight: ${({weight}) => weight ?? "500"};
    color: ${({color}) => color ?? "inherit"};
    font-family: ${({family}) => family ?? "inherit"};
`