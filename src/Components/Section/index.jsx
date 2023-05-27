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

const Section = ({ title, disabled = false }) => {
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
            maxHeight: "320px",
            minHeight: "80px",
          }}
          pb={1}
        >
          <StoresProvider>
            <ProductsProvider>
              <Box padding={"2"} flex={"1.5"}>
                <Table type={title.toLowerCase()} />
              </Box>
              <Box backgroundColor={"aquamarine"} flex={"1"}>
                2
              </Box>
            </ProductsProvider>
          </StoresProvider>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};

export default Section;
