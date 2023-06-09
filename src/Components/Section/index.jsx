import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Table from "../Table";
import StoresProvider from "../../Contexts/Stores.jsx";
import ProductsProvider from "../../Contexts/Products";
import Selected from "../Selected";


const Section = ({ title, disabled = false, hint, handleIndex }) => {
  const isPeriod = title === "Período" ? true : false;
  const isSummary = title === "Resumo" ? true : false;

  return (

<>
          <AccordionItem id="" className="accordion-item">
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    className="accordion-button"
                    transition={"none"}
                    borderRadius={"10px"}
                    padding={"1em"}
                    backgroundColor={"#0054A6"}
                  >
                    <Box
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
                      {isExpanded && (
                        <span
                          style={{ fontSize: "14px", paddingRight: "1rem" }}
                        >
                          {hint}
                        </span>
                      )}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={
                    !isPeriod
                      ? {
                          display: "flex",
                          width: "100%",
                          maxHeight: "380px",
                          minHeight: "440px",
                        }
                      : { maxHeight: "200px" }
                  }
                  pb={1}
                >
                  <Box className="accordion-box" padding={"2"} flex={"1.5"}>
                    <Table
                      type={title.toLowerCase()}
                      handleIndex={handleIndex}
                    />
                  </Box>
                  {!isPeriod && !isSummary ? (
                    <Box flex={"1"}>
                      <Selected type={title.toLowerCase()} />
                    </Box>
                  ) : null}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
</>
  );
};

export default Section;
