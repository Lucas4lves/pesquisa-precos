import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import SearchInput from "../SearchInput";
import TableHeader from "../TableHeader";
import TableLine from "../TableLine";
import { useGlobalContext } from "../../Context";

const Section = ({ title, disabled = false }) => {
  const { lojas } = useGlobalContext();
  return (
    <>
      <AccordionItem
        isDisabled={disabled}
        style={{
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#F5F5F5",
        }}
      >
        <h2>
          <AccordionButton
            borderRadius={"10px"}
            padding={"1em"}
            backgroundColor={"#0054A6"}
          >
            <Box color={"#FFFFFF"} as="span" flex="1" textAlign="left">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          style={{
            display: "flex",
            width: "100%",
            maxHeight: "350px",
            minHeight: "320px",
          }}
          pb={1}
        >
          <Box padding={"2"} flex={"1.5"}>
            <div className="top-box">
              <SearchInput placeholder={"Pesquisar por Lojas..."} />
            </div>
            <div className="inner-box">
              <TableHeader
                columns={["Código", "Nome", "UF", ""]}
                flexes={[1, 2, 1, 0.1]}
              />
              <div className="table-content">
                {lojas?.map((loja, index) => {
                  return <TableLine key={index} item={loja} index={index} />;
                })}
              </div>
            </div>
          </Box>
          <Box backgroundColor={"aquamarine"} flex={"1"}>
            2
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Section;
