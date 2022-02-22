import {
  Box,
  Flex,
  Heading,
  Img,
  Link,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { BsArrowRight, BsClockFill } from "react-icons/bs";

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
    <Flex bg="#fff" flexDirection="column" p={10} px={20} w="100%">
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
            Articles
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
        <Flex>
          <Heading
            color="brand.200"
            fontFamily="Matter"
            lineHeight="90px"
            maxWidth="1500px"
            fontStyle="normal"
            fontWeight="400"
            fontSize="80px"
          >
            &#10077;
            <br />
            All of us do not have equal talent. Yet, all of us have an equal
            opportunity to develop our talents. <br />
            <br />{" "}
            <Text
              fontSize="30px"
              align="justify"
              style={{ textDecoration: "underline" }}
            >
              -Ratan Tata
            </Text>
          </Heading>
        </Flex>
        <Text
          color="brand.200"
          fontFamily="Matter"
          lineHeight="44px"
          maxWidth="820px"
          fontStyle="normal"
          fontWeight="400"
          fontSize="28px"
          mt={20}
        >
          Inspired to break the tradition of going into family business and
          start my own company.
          <br />
          <br />
          Dare to change is the vision I truly believe in and am passionate
          about transforming startups to help them achieve their true potential.
          <br />
          <br />
          With an objective of Simplifying Business Communications, I have built
          and nurtured winning teams with Global approach and defined roadmap
          for the organization while managing Business Development, Finance, HR
          and other key operations. Having bootstrapped Solutions Infini into a
          $40 Million revenue company today, I strongly reckon that effective
          teams help in delivering organizational goals.
          <br />
          <br />
          As CEO of Solutions Infini, I constantly focus on creating an
          easy-to-use, multi-channel Cloud communication platform for clients to
          bridge the gap in communications to help them reach larger target
          audience and add value. Our products ensure that customers have
          complete control of user accounts giving them detailed analytics to
          comprehend the success rate of their campaigns. My strengths as a
          leader are Business Process Automation, Product management, and Sound
          strategy with execution.
          <br />
          <br />
          I am an ardent runner and participate in Marathons actively all over
          India. I love networking, cooking, travelling, and playing cricket in
          my free time. Numismatics has been a favorite interest since
          childhood.
          <br />
          <br />
          Giving back to the society is equally important and one that I wish to
          follow quite religiously. I want to implement Cloud communications
          platform to help impoverished children in rural section to have a
          wider access to education system.
          <br />
          <br />
          I am an active speaker at international forums and many colleges
          across the country motivating millennials to be entrepreneurs. I hope
          to inspire a few millennials to think creatively and be a part of the
          growing entrepreneurial ecosystem and contribute to it meaningfully.
          <br />
          <br />{" "}
        </Text>
      </Flex>
      {/** 
      <Box
        as="section"
        bg="Background.200"
        py={{
          base: "10",
          sm: "24",
        }}
      >
        <Box
          maxW={{
            base: "xl",
            md: "7xl",
          }}
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
        >
          <Heading size="xl" mb="8" fontWeight="extrabold">
            Featured Articles
          </Heading>
          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing="12"
            mb="10"
          >
            <Blog
              category="Fashion"
              media="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjaWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="7 Steps to Get Professional Facial Results At Home"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              href="#"
              author={{
                name: "Segun Adebayo",
                href: "#",
              }}
            />
            <Blog
              category="Valentine"
              media="https://images.unsplash.com/photo-1516401266446-6432a8a07d41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHZhbGVudGluZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="The Best Excuses To Spend A Cozy Valentine’s Day In"
              description="As much as I love an over-the-top, romantic Valentine’s date, part of me is looking"
              href="#"
              author={{
                name: "Segun Adebayo",
                href: "#",
              }}
            />
            <Blog
              category="My Style"
              media="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="Top 5 Best-Sellers, Most-Loved & Favorite Buys of 2020"
              description="HAAAAPPY 2021! It’s the first Monday of the year and I have never been so ready for"
              href="#"
              author={{
                name: "Segun Adebayo",
                href: "#",
              }}
            />
          </SimpleGrid>
          <Link fontSize="xl" fontWeight="bold" color="blue.600">
            <span>View all articles</span>
            <Box as={BsArrowRight} display="inline-block" ms="2" />
          </Link>
        </Box>
            </Box> **/}
    </Flex>
  );
}
