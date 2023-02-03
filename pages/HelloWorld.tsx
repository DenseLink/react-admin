import type { FC } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  text-align: center;
`;

const HelloWorld: FC = () => <Title>Hello, world!</Title>;

export default HelloWorld;
