import { Card } from 'antd';
import { styled } from 'styled-components';

export const CustomCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CardContent = styled.div`
  height: 300px;
  overflow: hidden;
  padding: 1rem;
  background-color: #FAFAFA;
  overflow-wrap: break-word;
`;
