import styled, { keyframes } from 'styled-components'
import { ICheckBox } from '../../@types/gallery'

export const UPLOAD = styled.button`
  
   
&:hover {
      background-color: silver;
    color: #fff;
    transition: .5s all ease-in-out;
    transform: translateY(.2rem)
}
transition: .5s all ease-out;
    color: black;
    font-weight: 400;
    background: white;
     padding: .2rem;
    width: 8rem;
      text-align: center;
     border-radius:.2rem;
    box-shadow: 0rem 0rem 3px .3px #4e4efb78;

`

export const FIGURE= styled.figure`

    @media screen and (min-width: 48rem) {

        width: 13rem;

        & img {
            width: 10rem;
            transition: 1.1s all;

        }
    }

    @media screen and (max-width: 48rem) {
        width: 35rem;
     }

    &:hover input {
        display: inline-block;
        transition: 1.5s ease-in-out;
        z-index: 1400;
    }

    &:hover img {
        transform: scale(1.05);
        z-index: -1400;

    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: 1.1s transform display;
    
}
`
export const CAPTION = styled.figcaption`

`

export const CONTAINER = styled.section`
    background: #e3e0e01a;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    `
    
export const HEADER= styled.header`
    color: silver;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: url("http://unblast.com/wp-content/uploads/2019/10/Dark-Shopping-Bag-Mockup-2.jpg") center;
    background-size: cover;
    justify-content: space-between;
    & h1 {
        font-weight: bold;
    }
    
    & section{
        display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
    padding-top: .5rem;
    }
    
`

export const LOADMORE = styled.p`
    text-align: center;
    margin-top: 5rem;
    margin-top: 1.5rem;
    & span {
        padding: .5rem;
        background: #c0c0c02e;
        border-radius: .3rem;
        color: #000000a3;
        cursor: pointer;
    }
`

export const CHECBOX = styled.input<ICheckBox>`
    position: absolute;
    top: 5%;
    right: 75%;
    display: ${props => props.keepShowing ? 'inline-block' :'none'};
    transition: 1.5s ease-in-out;
    width: 1.22rem;
    height: 1.22rem;
 `
 export const fadeIn = keyframes`
    from {
            opacity: 0;
            width: 5.5rem;

        }
        
        to {
            width: 8rem;

            opacity: 1;
    }
 `

export const DELETE = styled(UPLOAD)`
 animation: 1s ${fadeIn};
 background-color: #fd961a;

  &:hover {
    background-color: red;
   }
`