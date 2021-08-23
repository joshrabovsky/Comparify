import { Title } from '../components/global'
import Button from '../components/button'
import Field from '../components/field'
import PlusButton from '../components/plusButton'


const SelectPlaylistsPage = () => {
  return (
    <div>
      <Title>Comparify</Title>
      <Field/>
      <Field/>
      <PlusButton/>
      <Button text="FIND SAME SONGS"/>
    </div>
  );
}

export default SelectPlaylistsPage