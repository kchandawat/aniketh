import {
  Badge,
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BlogCard } from "../BlogCard";
import { mode } from "@chakra-ui/theme-tools";
import { data } from "../_data";
import Head from "next/head";
import Image from "next/image";
import { BsArrowRight, BsClockFill } from "react-icons/bs";
import { HiCurrencyDollar, HiClock, HiChartBar } from "react-icons/hi";
import { Logo } from "../Logo.jsx";
import { Quotee } from "../Quotee.tsx";
import { QuoteIcon } from "../QuoteIcon.tsx";
import { Stat } from "../Stat.jsx";

const Blog = (props) => {
  const { title, href, description, media, author, category } = props;
  return (
    <LinkBox
      as="article"
      bg={{
        sm: "white",
      }}
      shadow={{
        sm: "base",
      }}
      rounded={{
        sm: "md",
      }}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        shadow: {
          sm: "lg",
        },
      }}
    >
      <Flex direction="column">
        <Img height="60" objectFit="cover" alt={title} src={media} />
        <Flex
          direction="column"
          px={{
            sm: "6",
          }}
          py="5"
        >
          <Text
            casing="uppercase"
            letterSpacing="wider"
            fontSize="xs"
            fontWeight="semibold"
            mb="2"
            color="gray.500"
          >
            {category}
          </Text>
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={href}>{title}</LinkOverlay>
          </Heading>
          <Text noOfLines={2} mb="8" color="gray.600">
            {description}
          </Text>
          <Flex
            align="baseline"
            justify="space-between"
            fontSize="sm"
            color="gray.600"
          >
            <Text>
              By{" "}
              <Box as="a" textDecor="underline" href={author.href}>
                {author.name}
              </Box>
            </Text>
            <Link href="#">
              <Box
                as={BsClockFill}
                display="inline-block"
                me="2"
                opacity={0.4}
              />
              3 min read
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};
export default function Home() {
  return (
    <Flex
      bg="#fff"
      flexDirection="column"
      p={10}
      px={{ base: 5, md: 20 }}
      w="100%"
    >
      {/* Head */}
      <Flex as="nav" justifyContent="space-between">
        <Flex>
          <Heading
            color="brand.200"
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
            color="brand.200"
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
            color="brand.200"
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
              color="brand.200"
              fontFamily="Matter"
              lineHeight={{ base: "44px", md: "66px", lg: "90px" }}
              fontStyle="normal"
              fontWeight="400"
              fontSize={{ base: "40px", md: "60px", lg: "80px" }}
              textAlign={{ base: "left", xl: "justify" }}
            >
              Inspired to break the tradition of going into family business and
              started my own company.
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
            color="brand.200"
            fontFamily="Matter"
            lineHeight={{ base: "28px", lg: "44px" }}
            maxWidth="900px"
            fontStyle="normal"
            fontWeight="400"
            style={{ wordSpacing: "-2px" }}
            textAlign="justify"
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
          >
            Dare to change is the vision I truly believe in and am passionate
            about transforming startups to help them achieve their true
            potential.
            <br />
            <br />
            With an objective of Simplifying Business Communications, I have
            built and nurtured winning teams with Global approach and defined
            roadmap for the organization while managing Business Development,
            Finance, HR and other key operations. Having bootstrapped Solutions
            Infini into a $40 Million revenue company today, I strongly reckon
            that effective teams help in delivering organizational goals.
            <br />
            <br />
            As CEO of Solutions Infini, I constantly focus on creating an
            easy-to-use, multi-channel Cloud communication platform for clients
            to bridge the gap in communications to help them reach larger target
            audience and add value. Our products ensure that customers have
            complete control of user accounts giving them detailed analytics to
            comprehend the success rate of their campaigns. My strengths as a
            leader are Business Process Automation, Product management, and
            Sound strategy with execution.
            <br />
            <br />
            I am an ardent runner and participate in Marathons actively all over
            India. I love networking, cooking, travelling, and playing cricket
            in my free time. Numismatics has been a favorite interest since
            childhood.
            <br />
            <br />
            Giving back to the society is equally important and one that I wish
            to follow quite religiously. I want to implement Cloud
            communications platform to help impoverished children in rural
            section to have a wider access to education system.
            <br />
            <br />
            I am an active speaker at international forums and many colleges
            across the country motivating millennials to be entrepreneurs. I
            hope to inspire a few millennials to think creatively and be a part
            of the growing entrepreneurial ecosystem and contribute to it
            meaningfully.
            <br />
            <br />{" "}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" maxWidth="700px">
        <Badge alignSelf="flex-start" colorScheme="orange" variant="solid">
          Article
        </Badge>
        <Link
          color="brand.200"
          borderBottom="2px solid  white"
          fontFamily="Matter"
          lineHeight={{ base: "28px", lg: "44px" }}
          fontStyle="italic"
          fontWeight="400"
          textAlign="justify"
          fontSize={{ base: "18px", lg: "24px" }}
          _hover={{
            backgroundImage:
              "-webkit-gradient(linear, left top, left bottom, from(#FEF5DF), to(#FEF5DF))",
            borderBottom: "2px solid #f8cd5f",
          }}
        >
          How this CPaaS provider makes Rs 693 Cr revenue from Amazon, Ola,
          Flipkart, AirAsia, and Zomato
        </Link>
      </Flex>
    </Flex>
  );
}
