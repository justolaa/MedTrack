import React from 'react'
import styled from 'styled-components';


const Home = () => {
  return (
    <Wrapper>
        <div className="container">
        <div className="text">
            <h1>MedTrack's Personalized Medication Reminders</h1>
                <h2>Timing Is Everything, Even When It Comes To Your Medicine</h2>

            <div className='btn'>Sign-up</div>
        </div>

      <div className='image'>
          <img src={require('../Assets/Rectangle.png')} alt="" />
      </div>
</div>
    </Wrapper>
  )
}
 const Wrapper = styled('Home')`

 .container{
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #0F0F0F;
    overflow: hidden;
 }
 h1{
    width: 605px;
    color: #FFF;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 15px;
 }

 h2{
    color: #FFF;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-transform: capitalize;
    margin-top: 25px;
 }

 .image{
    width: 750px;
height: 425px;
flex-shrink: 0;
border-radius: 10px;
background: lightgray 50% / cover no-repeat;
 }

 .text{
    text-align: center;
    margin-top: 15px;
    padding: 10px;
 }

 .btn{
    display: inline-flex;
    height: 70px;
    padding: 24px 83px 22px 59px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 40px;
    background: #0531D0;
    box-shadow: 0px 0px 25px 0px rgba(168, 255, 53, 0.25);
    margin-top: 15px;
    color: #FDF8F8;
 }
 `
export default Home
