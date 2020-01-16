import styled from '@emotion/styled';

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
`;

export { Flex }