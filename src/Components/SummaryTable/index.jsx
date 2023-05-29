import {
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import "./summary.css";
import { useGlobalContext } from "../../Contexts";

const SummaryTable = ({ title, hint, data }) => {
  const { form } = useGlobalContext();
  return (
    <>
        <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflowY: 'hidden'
                  }}
                  color={"#FFFFFF"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  {title}
                </Box>
            <AccordionPanel
              style={{
                display: "flex",
                width: "100%",
                overflowY: 'hidden',
                maxHeight: "380px",
                minHeight: "400px",
              }}
              pb={1}
            >
                  <Box padding={"2"} flex={"1.5"}>
                    <div className="summary-top-box">
                      <h2 className="summary-header">Categoria:</h2>
                      <h3>Período: </h3>
                      {form.startDate} {form.EndDate}
                    </div>
                    <div className="summary-innex-box">
                      Lojas
                      <div className="stores-summary">
                      {data?.map(s => {
                        <>
                            <span>{s.codigo}</span>
                            <span>{s.nomeFilial}</span>
                            <span>{s.uf}</span>
                        </>
                      })}
                      </div>
                    </div>
                  </Box>
                  <Box flex={"1"}>Produtos</Box>
            </AccordionPanel>
    </>
  );
};

export default SummaryTable;

/**
 *                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  color={"#FFFFFF"}
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  {title}
                </Box>
            <AccordionPanel
              style={{
                display: "flex",
                width: "100%",
                maxHeight: "380px",
                minHeight: "400px",
              }}
              pb={1}
            >
                  <Box padding={"2"} flex={"1.5"}>
                    <div className="summary-top-box">
                      <h2 className="summary-header">Categoria:</h2>
                      <h3>Período: </h3>
                    </div>
                    <div className="summary-innex-box">
                      Lojas
                      <div className="stores-summary">
                       <Selected type={"lojas"}/>
                      </div>
                    </div>
                  </Box>
                  <Box flex={"1"}>Produtos</Box>
            </AccordionPanel>
 */