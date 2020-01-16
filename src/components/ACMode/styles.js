import styled from '@emotion/styled';

const InheritedButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
    border-radius: 100%;
    transition: all ease-in-out .4s;
    width: 88px;
    height: 88px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
`;

const Flake = styled(InheritedButton)`
    background-color: #8195FF;
    margin-right: 0.5em;
    opacity: ${props => props.active ? 1 : 0.5}
`;

const Fire = styled(InheritedButton)`
    background-color: #FF7171;
    margin-left: 0.5em;
    opacity: ${props => props.active ? 1 : 0.5}
`;

export { Flake, Fire };