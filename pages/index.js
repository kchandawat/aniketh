import { Flex, Heading, Link } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Flex bg="#fff" flexDirection="column" p={10} w="100%">
      {/* Head */}
      <Flex justifyContent="space-between">
        <Flex>
          <Heading color="brand.200" fontFamily="matter">
            Aniketh
          </Heading>
        </Flex>
        <Flex justify="center">
          <Link>Articles</Link>
          <Link>Mail</Link>
          <Link>Linkedln</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
