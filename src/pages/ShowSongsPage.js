import {Title} from '../components/global';
import { Tile } from '../components/showSongs';

const ShowSongsPage = () => {
  return(
    <div>
      <Title>Comparify</Title>
      <Tile pos="1." title="Easy Love" artist="Nick Kingswell" link="./floyd.jpg"/>
      <Tile pos="2." title="Easy Love" artist="Nick Kingswell" link="./floyd.jpg"/>
      <Tile pos="3." title="Easy Love" artist="Nick Kingswell" link="./floyd.jpg"/>
      <Tile pos="4." title="Easy Love" artist="Nick Kingswell" link="./floyd.jpg"/>
    </div>
  );
}

export default ShowSongsPage