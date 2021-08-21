import styled from 'styled-components'

const TileBox = styled.div`{
  text-align: start;
  width: 80%;
  max-width: 600px;
  margin: 10px auto;
  display: flex;
  align-items: center;
}`

const TileNumber = styled.div`{
  font-size: 4rem;
  font-wieght: bold;
}`

const TileImage = styled.img`{
  width: 85px;
  height: 85px;
}`

const TileTitle = styled.h3`{
  font-wieght: bold;
  font-size: 2rem;
  margin-bottom: 10px;
}`

const TileSubtitle = styled.p`{
  font-size: 1.5rem;
}`

export const Tile = ({pos, title, artist, link}) => {
  return (
    <TileBox>
      <div style={{flex: 0.15}}>
        <TileNumber>{pos}</TileNumber>
      </div>
      <div style={{flex: 0.7}}>
        <TileTitle>{title}</TileTitle>
        <TileSubtitle>{artist}</TileSubtitle>
      </div>
      <div style={{flex: 0.15}}>
        <TileImage src={link} alt="album-cover"/>
      </div>
    </TileBox>
  );
}