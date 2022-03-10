import {
  Badge,
  Box,
  Flex,
  Heading,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";

import { QuoteIcon } from "../QuoteIcon.tsx";

export default function Home() {
  return (
    <Flex
      bg={useColorModeValue("#fff", "#222225")}
      flexDirection="column"
      p={10}
      px={{ base: 5, md: 20 }}
      w="100%"
    >
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Aniketh Jain | Co-founder | Kaleyra | Personal Page</title>
        <meta
          name="keywords"
          content="Aniketh Jain | Co-founder | Kaleyra | Personal Page"
        />
        <meta
          name="description"
          content="Hi, I'm Aniketh Jain, the former Co-founder of Solutions Infini
              which is now Kaleyra. And this is my personal page."
        />
        <meta name="author" content="Aniketh Jain" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* Head */}
      <Flex as="nav" justifyContent="space-between">
        <Flex>
          <Heading
            color={useColorModeValue("brand.200", "brand.300")}
            fontFamily="Matter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="22px"
          >
            Aniketh
          </Heading>
        </Flex>
        <Flex>
          <Link
            color={useColorModeValue("brand.200", "brand.400")}
            fontFamily="Matter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="22px"
            style={{ textDecoration: "underline" }}
            px={3}
          >
            Mail
          </Link>
          <Link
            href="https://www.linkedin.com/in/anikethjain/"
            color={useColorModeValue("brand.200", "brand.400")}
            fontFamily="Matter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="22px"
            style={{ textDecoration: "underline" }}
            px={3}
          >
            Linkedln
          </Link>
        </Flex>
      </Flex>
      <Flex flexDirection="column" mt="280px">
        <Flex
          as="section"
          maxWidth="1600px"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Flex
            align="center"
            justify="center"
            mb={3}
            display={{ base: "flex", lg: "none" }}
          >
            <Image
              width="180px"
              height="180px"
              src="/aniketh-jain.png"
              loading="eager"
            />
          </Flex>
          <Flex flexDirection="column">
            <QuoteIcon
              color={useColorModeValue("brand.200", "gray.600")}
              fontSize={{ base: "3xl", md: "6xl" }}
            />
            <Text
              color={useColorModeValue("brand.200", "brand.100")}
              fontFamily="Matter"
              lineHeight={{ base: "44px", md: "66px", lg: "90px" }}
              fontStyle="normal"
              maxW="1200px"
              fontWeight="400"
              fontSize={{ base: "40px", md: "60px", lg: "80px" }}
              textAlign={{ base: "left", xl: "justify" }}
            >
              Hi, I&apos;m Aniketh Jain, the former Co-founder of Solutions
              Infini which is now Kaleyra. And this is my personal page.
            </Text>
          </Flex>{" "}
          <Flex
            align="center"
            ml="100px"
            display={{ base: "none", lg: "flex" }}
          >
            <Image
              width="300px"
              height="300px"
              src="/aniketh-jain.png"
              loading="eager"
            />
          </Flex>
        </Flex>

        <Flex flexDirection="row" mt={20}>
          <Text
            display="block"
            color={useColorModeValue("brand.200", "brand.100")}
            fontFamily="Matter"
            lineHeight={{ base: "28px", lg: "44px" }}
            maxWidth="900px"
            fontStyle="normal"
            fontWeight="400"
            style={{ wordSpacing: "-2px" }}
            textAlign="justify"
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          >
            I enjoy Cricket (both playing & watching) & a good South Indian
            Breakfast. Indian masala Chai is my go-to drink & I jokingly tell my
            wife that I can live on it (although my fitness freak wife will not
            permit it).
            <br />
            <br />
            My wife introduced me to running 5 years ago & together we have run
            a couple of races. I have personally completed two full marathons.
            We run with a running club & being fit & enjoying a classic
            Bangalore breakfast with filter coffee is the favourite part of my
            run days. In fact, I recently compiled a list of 50+ breakfast
            joints in and around Bangalore & hope to visit all of them at the
            earliest.
            <br />
            <br />
            I hope to complete Half Iron man one day. I&apos;m also an avid
            listener of Mohamed Rafi and Kishore Kumar songs & wish to attend a
            Coldplay concert at the earliest. I also like to collect coins and
            currencies from various countries & have a small collection of my
            own.
            <br />
            <br />
            My Co-founder Ashish, a college friend started a company called
            Solutions Infini as a proprietor in 2007(while we were still in
            college pursuing our Degree in Computer Application). We passed out
            in mid-July 2008. I joined Ashish to help him with sales and
            customer relationships. Ashish knew early on that he wanted to focus
            on technology and that was his calling. Coming from a business
            family, business came to me naturally so I took over the business
            responsibility of Solutions Infini.
            <br />
            <br />
            In December 2008 we decided to formalise our partnership and
            converted solutions Infini from a proprietor to a privately held
            company with equal ownership. On April 30th 2009 the company was
            officially formulated. I brought in a small capital of 4 lakh rs ($)
            while Ashish had already invested in a small office space. In the
            early years at Solutions Infini, we had a service-based model &
            mostly built e-commerce websites for our customers. Soon we realised
            that this model was not working for us & wasn’t our calling. We then
            ventured into mobile…..
            <br />
            <br />
            Once we sold Solutions Infini, I have started investing in various
            startups primarily to learn how the new-age startups hustle in
            today&apos;s world and also wherever possible help them. I have
            mostly been having discussions with the founders & sharing my
            learnings from my journey. In my journey thus far I have made a
            strong network & help by connecting people in the community if
            required. My investment philosophy is simple, I invest in people. Of
            Course, a good business idea is important but the founders are the
            deciding factor for me, who has been connected with me over the
            years or a fellow entrepreneur&apos;s connection. My Investments are{" "}
            <Link
              href="https://www.ripplr.in/"
              style={{ textDecoration: "underline" }}
              textColor={useColorModeValue("brand.200", "brand.300")}
            >
              {" "}
              Ripplr
            </Link>
            ,{" "}
            <Link
              href="https://glamyohealth.in/"
              style={{ textDecoration: "underline" }}
              textColor={useColorModeValue("brand.200", "brand.300")}
            >
              Glamyo
            </Link>
            ,{" "}
            <Link
              href="https://www.gorattle.com/"
              style={{ textDecoration: "underline" }}
              textColor={useColorModeValue("brand.200", "brand.300")}
            >
              Gorattle
            </Link>
            ,{" "}
            <Link
              href="https://emitrr.com/"
              style={{ textDecoration: "underline" }}
              textColor={useColorModeValue("brand.200", "brand.300")}
            >
              Emittr
            </Link>
            ,{" "}
            <Link
              href="https://www.amby.co/"
              style={{ textDecoration: "underline" }}
              textColor={useColorModeValue("brand.200", "brand.300")}
            >
              Amby
            </Link>{" "}
            and a few more.
            <br />
            <br />
            I have recently taken interest in learning to play the guitar,
            reading & listening to podcasts. Ashish and I have known each other
            for 17 years. My Wife Shruti has been backing me into running and
            fitness journey since the time I met her in 2015.
            <br />
            <br />
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" maxWidth="700px">
        <Badge
          alignSelf="flex-start"
          colorScheme={useColorModeValue("orange", "teal")}
          variant="solid"
        >
          Article
        </Badge>
        <Link
          href="/how-this-cpaas-provider-makes-rs-693-cr-revenue-from-amazon-ola-flipkart-airasia-and-zomato"
          color={useColorModeValue("brand.200", "brand.300")}
          borderBottom="2px solid  white"
          fontFamily="Matter"
          lineHeight={{ base: "28px", lg: "44px" }}
          fontStyle="italic"
          fontWeight="400"
          textAlign="justify"
          fontSize={{ base: "18px", lg: "24px" }}
          _hover={{
            backgroundImage: useColorModeValue(
              "-webkit-gradient(linear, left top, left bottom, from(#FEF5DF), to(#FEF5DF))",
              "-webkit-gradient(linear, left top, left bottom, from(#2a2a2a), to(#2a2a2a))"
            ),
            borderBottom: useColorModeValue(
              "2px solid #f8cd5f",
              "2px solid #2a2a2a"
            ),
          }}
        >
          How this CPaaS provider makes Rs 693 Cr revenue from Amazon, Ola,
          Flipkart, AirAsia, and Zomato
        </Link>
      </Flex>
    </Flex>
  );
}
