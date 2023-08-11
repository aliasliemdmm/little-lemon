import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "../context/alertContext";
import Alert from "../components/Alert";


const Home = () => {
  return (
    <ChakraProvider>
      <AlertProvider>
      <main>
        <Hero />
        <Main />
        <Alert />
      </main>
      </AlertProvider>
    </ChakraProvider>
  );
};

export default Home;
