import styled, { keyframes } from 'styled-components'

export const Pulse = keyframes`
0% {
   transform: scale(0.7);
   box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
 }
 50% {
   transform: scale(1);
   box-shadow: 0 0 0 30 rgba(0, 0, 0, 0);
 }
 100% {
   transform: scale(0.7);
 }
`

export const VERIFYAREA = styled.section`
   & img {
      animation: ${Pulse} 2s infinite;
   }
`