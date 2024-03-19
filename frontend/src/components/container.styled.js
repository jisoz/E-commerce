import styled from 'styled-components';
import colors from '../assets/colors';
export const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  position: ${({ position }) => position || 'relative'}; /* Default to relative positioning */
  top: ${({ top }) => top || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  background-color: ${({ isdarkmode }) => (isdarkmode === 'true' ? 'red' : '#efae45')};


`;

