import React, { useState } from "react";
import { Title } from '../components/global'
import Button from '../components/button'
import Field from '../components/field'
import PlusButton from '../components/plusButton'
import Footer from '../components/footer'

const SelectPlaylistsPage = () => {
  const [inputList, setInputList] = useState([]);
  const onPlusButtonClick = (e) => {
    setInputList(inputList.concat(<Field/>));
  }

  return (
    <div>
      <Title>Comparify</Title>
      <Field />
      {inputList}
      <PlusButton onClick={onPlusButtonClick} />
      <Button text="FIND SAME SONGS" onClick={() => console.log('hello')} />
      <Footer/>
    </div>
  );
}

export default SelectPlaylistsPage