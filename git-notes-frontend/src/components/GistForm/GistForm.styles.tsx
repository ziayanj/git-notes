import { styled } from 'styled-components';
import { Button } from 'antd';

export const GistFormContainer = styled.div`
  padding: 0 8rem;

  input {
    border: 1px solid #A3A3A3;
    color: #7A7A7A;

    &:focus, &:hover {
      border-color: var(--dark);
      color: #3D3D3D;
    }
  }
`;

export const GistFormHeader = styled.p`
  font-size: 25px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const GistFormContent = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

export const GistFileContainer = styled.div`
  border: 1px solid #EFEFEF;
  border-radius: 4px;
  margin-bottom: 1rem;

  .ant-form-item {
    margin-bottom: 0;
  }
  
  textarea {
    border-radius: 0;
    border: 0;
    font-size: 11px;
    color: #7A7A7A;

    &:focus {
      color: #3D3D3D;
    }
  }
`;

export const GistFileHeader = styled.div`
  background-color: #FAFAFA;
  border-bottom: 1px solid #EFEFEF;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    fill: var(--dark);
    stroke: var(--dark);
  }
`;

export const InputContainer = styled.div`
  padding: 10px;
  width: 50%;

  input {
    background-color: #FAFAFA;
  }
`;

export const FormActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddFileButton = styled(Button)`
  color: var(--dark);
  font-weight: 600;
  border: none;
  background-color: #EFEFEF;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
