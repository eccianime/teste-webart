import React, { useState } from 'react';
import { TextAge, InputAge, AgesList, ButtonCalc, ModalAverage } from './app/components';
import { ModalDataProps } from './app/components/types';
import { BaseView } from './app/styles/view';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ agesList, changeAgesList ] = useState<string[]>([]);
  const [ modalData, toggleModal ] = useState<ModalDataProps>({
    visible: false,
    average: '0',
  })

  const handleAddAge = (age: string) => changeAgesList([...agesList, age]);
  const makeAverage = () => {
    const sum = agesList.reduce( (p, c) => (parseInt(p) + parseInt(c)).toString() );
    const average = (parseInt(sum) / agesList.length).toFixed(2);
    toggleModal({visible: true, average})
  }
  const handleCleanAll = () => {
    toggleModal({visible: false, average: '0'})
    changeAgesList([]);
  }
  return (
    <BaseView>
      <StatusBar hidden />
      <ModalAverage data={modalData} toggleModal={toggleModal} handleCleanAll={handleCleanAll} />
      <TextAge />
      <InputAge handleAddAge={handleAddAge} />
      <AgesList list={agesList} />
      <ButtonCalc disabled={agesList.length === 0} makeAverage={makeAverage} />
    </BaseView>
  );
}
