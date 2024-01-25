import { Button } from 'antd';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: white;
  color: var(--dark);
`;

const invertedButtonStyles = css`
  background-color: var(--dark);
  color: white;
`;

const getButtonStyles = (props: any) => (
  !!props.inverted ? invertedButtonStyles : buttonStyles
);

const CustomButtonContainer = styled(Button)`
  font-weight: 600;
  border: none;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getButtonStyles}
`;

const CustomButton = ({ ...otherProps }) => (
  <CustomButtonContainer {...otherProps} />
);

export default CustomButton;
