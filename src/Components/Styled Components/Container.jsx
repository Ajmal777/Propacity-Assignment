import styled from "styled-components";

const Container = styled.div`
    background-color: ${({ bgColor }) =>
        bgColor ?? "transparent"};
    color: ${({ color }) => color ?? "var(--light-theme-font-black)"};
    display: ${({ display }) => display ?? "block"};
    position: ${({ pos }) => pos ?? "static"};
    border-radius: ${({ radius }) => radius ?? "0px"};
    border: ${({ border }) => border ?? "0px"};
    margin: ${({ margin }) => margin ?? "0"};
    padding: ${({ padding }) => padding ?? "0.5rem 0.5rem"};
    font-size: ${({ fontSize }) => fontSize ?? "1rem"};
    width: ${({width}) => width ?? "auto"};
    height: ${({height}) => height ?? "auto"};
    max-width: ${({maxWidth}) => maxWidth ?? ""};
`;

const FlexBox = styled(Container)`
    display: flex;
    flex-direction: ${({ flexDir }) => flexDir ?? "row"};
    align-items: ${({ align }) => align ?? "start"};
    justify-content: ${({ justify }) => justify ?? "start"};
    gap: ${({gap}) => gap ?? "0"};
    flex-wrap: ${({wrap}) => wrap ?? "wrap"}
`;

const LightContainer = styled(Container)`
    background-color: var(--light-theme-bg-white);
    color: var(--light-theme-font-black);
`;

const DarkContainer = styled(Container)`
    background-color: var(--dark-theme-bg-black);
    color: var(--dark-theme-font-white);
`;

export { Container, FlexBox, LightContainer, DarkContainer };
