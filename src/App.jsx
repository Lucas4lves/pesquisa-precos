import { Accordion } from '@chakra-ui/react';
import Section from './Components/Section';
import { useGlobalContext } from './Context/index';

import "./app.css";

function App() {
  const { lojas, produtos} = useGlobalContext();
  return (
    <>
      <div className='main-wrapper' >
        <Accordion  allowToggle defaultIndex={[0]} className='accordion-body'>
         <Section title={"Lojas"} data={lojas}/>
         <Section title={"Produtos"} data={produtos}/>
         <Section title={"Resumo"} />
        </Accordion>
      </div>
    </>
  )
}

export default App;
