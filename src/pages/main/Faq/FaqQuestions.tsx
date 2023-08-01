import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
  //   useColorModeValue,
} from "@chakra-ui/react";

type accordion = {
  title: string;
  discription?: any;
};

const faqData: accordion[] = [
  {
    title: "Admissions",
    discription: [
      {
        para: "How do I apply for admission?",
      },
      {
        para: "What are the admission requirements?",
      },
      {
        para: "When is the application deadline?",
      },
    ],
  },
  {
    title: "Admissions",
    discription: [
      {
        para: "How do I apply for admission?",
      },
      {
        para: "What are the admission requirements?",
      },
      {
        para: "When is the application deadline?",
      },
    ],
  },
  {
    title: "Admissions",
    discription: [
      {
        para: "How do I apply for admission?",
      },
      {
        para: "What are the admission requirements?",
      },
      {
        para: "When is the application deadline?",
      },
    ],
  },
  {
    title: "Admissions",
    discription: [
      {
        para: "How do I apply for admission?",
      },
      {
        para: "What are the admission requirements?",
      },
      {
        para: "When is the application deadline?",
      },
    ],
  },
  {
    title: "Admissions",
    discription: [
      {
        para: "How do I apply for admission?",
      },
      {
        para: "What are the admission requirements?",
      },
      {
        para: "When is the application deadline?",
      },
    ],
  },
];

const FaqQuestions = () => {
  const colormod = useColorModeValue("blue.500", "blue.600");
  const colormodPanel = useColorModeValue("white", "gray.800");
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      {faqData &&
        faqData.map((item, index) => {
          return (
            <>
              <AccordionItem mb=".7rem" key={index} bg={colormod}>
                <AccordionButton>
                  <Box
                    fontSize={"lg"}
                    fontWeight={500}
                    // color="white"
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={"white"}
                  >
                    {item.title}
                  </Box>
                  <AccordionIcon
                    fontSize="1.6rem"
                    fontWeight={500}
                    color="white"
                  />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  bg={colormodPanel}
                  //   bg={useColorModeValue("white", "gray.800")}
                >
                  {item.discription.map((item: any, index: number) => {
                    return (
                      <UnorderedList ml={8} key={index}>
                        <ListItem>{item.para}</ListItem>
                      </UnorderedList>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            </>
          );
        })}
    </Accordion>
  );
};

export default FaqQuestions;
