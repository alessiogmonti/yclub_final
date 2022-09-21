import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./Placeholder";
import { Box, IconButton, Heading, Text, HStack, Spacer } from "@chakra-ui/react";
import { AiFillCloseCircle, AiFillDownCircle } from 'react-icons/ai'

export const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <Box layerStyle={'button'} borderRadius={2} height={'100%'} overflow={'visible'} display={'block'} position={'relative'} width={'100%'}>
      <HStack px={5} py={2}>
        <Heading variant={'SubMenu'} fontSize={'25px'} > Carrack </Heading>
        <Spacer />
        <Text variant={'main-link'} fontSize={'15px'}> Q4 2022 </Text>
        <Spacer />
        <IconButton
          position={'relative'}
          float={'right'}
          p={2}
          variant="outline"
          rounded="full"
          bg={'whiteAlpha.800'}
          color={'dark'}
          _dark = {{
              color:'accent',
              bg:'blackAlpha.800'
          }}
          fontSize={'35'}
          icon={isOpen ? <AiFillCloseCircle /> : <AiFillDownCircle />}
          onClick={() => setExpanded(isOpen ? false : i)}
          aria-label="Toggle Theme"
          colorScheme="blue"
        />
      </HStack>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </motion.section>
        )}
      </AnimatePresence>
    </Box>
  );
};

export const Accordions = (props) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(1);

  return props.data.map((i, index) => (
    <Accordion i={index} expanded={expanded} setExpanded={setExpanded} />
  ));
};

// const accordionIds = [0, 1, 2, 3];