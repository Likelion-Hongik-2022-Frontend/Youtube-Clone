import styled from 'styled-components';
import { WrapperProps } from '../../interface';

export const Section = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
`;

export const Row = styled.div.attrs<WrapperProps>((props) => ({
  marginBottom: props.marginBottom || '0',
  marginTop: props.marginTop || '0',
  justifyContent: props.justifyContent || '',
  alignItems: props.alignItems || '',
  gap: props.gap || '0',
}))<WrapperProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};
  gap: ${(props) => props.gap};
`;

export const Column = styled.div.attrs<WrapperProps>((props) => ({
  marginBottom: props.marginBottom || '0',
  justifyContent: props.justifyContent || '',
  alignItems: props.alignItems || '',
  gap: props.gap || '0',
}))<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  margin-bottom: ${(props) => props.marginBottom};
  gap: ${(props) => props.gap};
`;
