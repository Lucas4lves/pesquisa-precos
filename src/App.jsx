import { Accordion } from '@chakra-ui/react';
import Section from './Components/Section';


import "./app.css";

function App() {
  return (
    <>
      <div className='main-wrapper' >
        <Accordion  allowToggle defaultIndex={[0]} className='accordion-body'>
         <Section title={"Lojas"}/>
         <Section title={"Produtos"}/>
         <Section title={"Resumo"} />
        </Accordion>
      </div>
    </>
  )
}

export default App
