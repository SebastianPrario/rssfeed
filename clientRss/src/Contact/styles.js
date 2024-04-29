import styled from 'styled-components'

export const Container = styled.div`
    align-self: center;
    width: 100% !important;
    height: 100vh !important ;
    background-color:rgb(234, 230, 230);
    display: flex;
    flex-direction: row;
    justify-content: center;
  
`
export const Card = styled.div`
  position: relative;
  height: 15%;
  width: 80%;
  margin-top: 15%;
  border: 4px solid blue;
  border-radius: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  align-content: center;
`
export const Text = styled.p`
font-size: 24px;
  text-align: center;
  color: blue;
  margin-bottom: 10px;
  margin-left: 10px;
  text-shadow:
    1px 0px 0px black,
    0px 1px 0px black,
    -1px 0px 0px black,
    0px -1px 0px black;
     @media screen and (max-width: 900px) {
    font-size: 18px;
  }
    @media screen and (max-width: 670px) {
    font-size: 8px;
  }
   
`

export const Image = styled.img`
width: 30px;
margin-right: 10px;
`
