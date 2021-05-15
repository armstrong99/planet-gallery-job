import styled from 'styled-components'
import { IUploadedArea } from '../../@types/modal'

export const WRAPPER = styled.div`
    height: auto;
    background: #f3f3f3;
    border-radius: .45rem;
    overflow: hidden;
    & section {
        height: 11rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        margin-top: 1.5rem;   
        & button {
            background: white;
            padding: .5rem;
            border-radius: .45rem;
            font-weight: 500;
            outline: none;
            border: none;
        }
        & button:nth-child(2) {
            width: 17rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            & img {
                width: 10rem;
                height: 2.5rem;
            }
        }
        // & button:first-child {
        //     border: #fd961a .001px solid
        // }
     }
     & h2 {
         color: #fd961a;
         display: flex;
         justify-content: space-between;
         align-items: center;
     }
     & p {
         margin-top: 1.2rem;
     }
  @media screen and (min-width:48rem) {
      width: calc(100% - 50.5rem);
  }
   @media screen and (max-width: 48rem) {
    width: calc(100% - 1.5rem);
   
   }
`
export const UPLOADAREA = styled.section<IUploadedArea>`
 
          display:flex;
         justify-content: space-evenly;
         align-items: center;
         display: flex;
         flex-direction: row;
          flex-wrap: wrap;
          overflow: auto;
    
   border: 1.4px dashed gray;
   background: ${props => props.imageReady > 0 ? '#fff' : 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY_5nn-tQ-TxPpfBqAXMDLNKJik7EaL7ofW59Pyo25oWvGxS57cYA9Yr-8wmu-BQM7LM&usqp=CAU)'};
   background-position: center;
       background-repeat: no-repeat;
       background-size: cover;
       width: 100%;
       height: 100%;
       
`