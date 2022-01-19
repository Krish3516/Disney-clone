import React from 'react';
import styled from 'styled-components';

function Detail() {
  return <Container>
      <Background>
        <img src="https://4.bp.blogspot.com/-KuWXfA_2zEw/WsPYrBXXXOI/AAAAAAAAVyw/1cMGP21yZcU5Y9uEKNGHuu5LabzGdKGfwCLcBGAs/s1600/Bao-Lead-Image.jpg" />
      </Background>
      <ImgTitile>
      <img src="https://prod-ripcut-delevery.disney-plus" />
      </ImgTitile>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
         
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>

      </Controls>
      <SubTitile>

        hi my name is bao and i eaa momo
        

      </SubTitile>
      <Description>
        ds;lfjka;sdfja;lsdfja;sdfjas;dfjsa;fja;sdfja;sdfj;asdfjas;dfj

      </Description>
  </Container>;
}

export default Detail;

const Container = styled.div`
 min-height: calc(100vh - 70px);
 padding: 0 calc(3.5vw + 5px);
 position: relative;

`
const Background = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8;

 img {
   width: 100%;
   height: 100%;
   
   object-fix: cover;
 }
`
const ImgTitile = styled.div`
height: 30vh;
min-height: 170px;
min-width: 200px;
width: 35vw;
margin-top: 60px;

img {
  width: 100%;
  height: 100%;
  object-fix: contain;
}
`
const Controls = styled.div`
display: flex;
align-items: center;





`

const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
padding: 0 24px;
margin-right: 22px;
display: flex;
align-items: center;
height: 56px;
background: rgb (249, 249, 249);
border: none;
latter-spacing: 1.8px;
cursor: pointer;

&:hover {
  background: rgb(198, 198, 198);
}


`
const TrailerButton = styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
text-transform: uppercase;


`
const AddButton = styled.button`
margin-right: 16px;
width: 44px;
height: 44px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
border: 2px solid white;
background-color: rgba(0, 0, 0, 0.6);
cursor: pointer;
span {
  font-size: 30px;
  color: white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0, 0, 0);

`
const SubTitile = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;

`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249, 249, 249);
max-width: 760px;
`