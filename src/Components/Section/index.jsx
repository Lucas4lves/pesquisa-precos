import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Table from "../Table";

const Section = ({ title, disabled = false, data }) => {

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
            <Table data={data} type={title.toLowerCase()} />
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
