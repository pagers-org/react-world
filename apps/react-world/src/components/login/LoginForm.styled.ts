import styled from '@emotion/styled';

export const LoginErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
  margin-left: 5px;
  font-size: 14px;
`;

export const StyledLoginButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => (props.disabled ? '#bbb' : '#5cb85c')};
  border-color: ${props => (props.disabled ? '#bbb' : '#5cb85c')};
  color: white;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 10px 20px; // 기본 버튼 패딩
`;
