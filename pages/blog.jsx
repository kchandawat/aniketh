import { Avatar, Box, CloseButton, Divider, Flex, Heading, Icon, IconButton, Img, Text } from "@chakra-ui/react";
import { BsHeart } from "react-icons/bs";
import { HiHeart, HiShare } from "react-icons/hi";
 
export default function blog()
{
    return(
        <Flex w="100%" h="100vh" overflow="hidden">
            <Flex w="100%" bg="#484855" h="100vh" flexDir="column">
                <Flex justify="center" py={20} h="100%">
                    <Flex flexDir="column" justifyContent="space-between">
                <Flex flexDir="column"   mt={10} maxW="3xl">
                    <Heading 
                    color="#fff"
            fontFamily="Matter"
            
            textTransform="uppercase"
            fontWeight="500"
            fontSize="54px">How this CPaaS provider makes Rs 693 Cr:</Heading>
                    <Heading color="#fff"
            fontFamily="Matter"
            fontStyle="normal"
             
            fontWeight="300"
            fontSize="42px">Revenue from Amazon, Ola, Flipkart, AirAsia and Zomato</Heading>
            <Divider w="20%" border={4} my={5} borderColor="#e57b69"/></Flex>
            <Flex    >
            <Flex   >
                <Img h="80px"   src="./aniketh-jain-author.png"/>
                <Flex align="center" ml={5}>
                <Text  fontFamily="Matter" color="#fff"
            fontStyle="normal"
            
            fontWeight="300"
            fontSize="24px">Aniketh <b>Jain</b></Text></Flex>
                </Flex></Flex>
                </Flex></Flex>
                
            </Flex>
            <Flex w="100%" flexDir="column">
                <Flex  justify="flex-end" p={5} display="flex"  >  <CloseButton bgColor="transparent" size="lg"  /></Flex>
                <Flex overflow="auto" p={5} css={{
    '&::-webkit-scrollbar': {
      width: '4px',
    },
    '&::-webkit-scrollbar-track': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'scrollbarColor',
      borderRadius: '24px',
    },
  }}>
                    <Text color="brand.200" 
            fontFamily="Matter"
            fontStyle="normal"
             
            fontWeight="300"
            fontSize="22px">
                    <em style={{fontSize:"44px"}}>W</em>hen customers order food on the Zomato or Swiggy app, they expect to receive message updates on the status of the delivery. The mobile notifications and messages after shopping from Flipkart or Amazon, also helps the customers in keeping a track of their parcel. Various notifications also inform customers about the deals and offers.
<br/><br/>
But, to make this communication possible, the enterprise needs to set up its own backend infrastructure and interfaces. And, this costs a lot of money.
<br/><br/>
This is where CPaaS, or Communications Platform as a Service, has emerged as a cost-efficient solution for enterprises. It is often a cloud-based platform which empowers enterprises to add real-time communications features to their applications. If managed well, these features would allow enterprises to seamlessly communicate with customers.
<br/><br/>
 

With a wide range of high profile clients, global integrated multi-channel communication services provider Kaleyra is aiming to revolutionise the CPaaS space. The new and improved avatar of Italian IT and telecom services provider Ubiquity, Kaleyra was christened in 2016.
<br/><br/>
This came two years after it acquired a majority stake in Indian enterprise communication and cloud telephony services startup Solutions Infini.
<br/><br/>
Through a closed-source platform, it manages communication services on a global scale, using messages, push notifications, email, instant messaging, voice and chatbot services. The company claims it now has over 3,000 enterprise customers and handles close to 3 billion messaging notifications per month.
<br/><br/>
 
Kaleyra’s India story began when Aniketh Jain and Ashish Agarwal finished a computer applications course in Bengaluru in 2009. Recalling their college project for sending messages to parents about the academic results of their children, they were inspired to start their own business.
<br/><br/>
In the same year, they set up Solutions Infini in Bengaluru with a bootstrapped amount of Rs 4 lakh. Solutions Infini quickly grew big and started managing cloud communication on multi-channel platforms including messaging, voice, email, and APIs. It also started providing services such as long and short codes, IVR, click-to-call, call conferencing, call masking, and toll-free solutions.
<br/><br/>

 

After landing Practo, Ola, Flipkart, Aditya Birla, and other huge clients, Solutions Infini posted a revenue of Rs 160 crore in less than seven years after commencing operations.
<br/><br/>
“For large companies, setting up the telecom premises in the office is a huge cost. This is where we came in, starting from messaging service and evolving into cloud telephonic,” Aniketh told YourStory in an earlier interview.
<br/><br/>
 
 

He added, “Starting with the missed call concept, we pivoted to cloud telephonic and became more modern. We had an advantage because we had access to customers and could offer all our solutions on one platform.”
<br/><br/>
And when Ubiquity acquired a major stake in Aniketh’s Solutions Infini, the operations became even bigger under the name ‘Kaleyra’.
<br/><br/>
Today, Kalyera’s revenue stands at around Rs 693.6 crore. Its impressive clientele comprises Amazon, Ola, Flipkart, AirAsia, Zomato, Cure.fit, Practo, and more.

<br/><br/>
 

Kaleyra now has offices in the USA, Europe, Middle East. Its technology headquarters is in India, besides seven active offices in the country.
<br/><br/>
Recently, GigCapital, a technology, media and telecom (TMT) corporation, announced a merger with Kaleyra. It would then get listed on the New York Stock Exchange under the ticker symbol ‘KLR’. Post the merger, Kaleyra will be valued at approximately $192 million, a company press release said.
<br/><br/>
The release added, ‘With this development, Kaleyra is eyeing to expand their business in India and also looking forward to hire 200 people across levels.’
With a merger, public listing, and expansion on the horizon, Kaleyra certainly has a lot on its plate.
<br/><br/>
In an exclusive interaction with SMBStory, Aniketh Jain, Managing Director, Cloud, Kaleyra, reveals how the organisation reached the status as a large, digital-first brand and how it is creating high value for its clients.
<br/><br/>
 

 

Aniketh Jain: Ashish and I were just college students when we had an idea of starting a business. We had a project in hand that created wonders for large scale enterprises and small businesses by sending SMSs to customers. In 2009, when we finished college, we decided to start the company using this technology and name it ‘Solutions Infini’. It is a classic example of a bootstrapped startup.

We gathered a few resources from family, and dipped into some savings from the college project. We had just Rs 4 lakh, and had to borrow office space from one of Ashish’s family members. I wanted to make things work and keep them running, so I handled the business process, operators and regulations. Ashish, being a contemporary techie, coded and created applications.

Later, we onboarded three youngsters from our college. As Shivam, Faraz and Vinay joined Solutions Infini, we reached out to customers through various offline and online channels and then pitched our solutions. Once we onboard the clients, we provided a dashboard with a user id and password to enable monitoring inbound and outbound calls and messages.

SMBS: How did Ubiquity and Solutions Infini come together? What was the thinking behind the acquisition?

Aniketh Jain: Solutions Infini successfully delivered messages in more than 190 countries and acquired strong operator connections in more than 20 countries, including Bangladesh, Sri Lanka, Nepal, and other South Asian countries.

Considering ubiquity is a strong player with respect to fintech services in Europe, they understood the scale at which India was growing in terms of technology and functional growth. They found us when they decided to look out for collaborating with Indian companies.

They pitched their idea of an IPO to us. With the strong presence of Solutions Infini in the industry and customer friendly applications, we decided to take the company ahead to the next level by entering the European markets. That is how the journey with Ubiquity began. With this Ubiquity collaboration, we decided to become a bigger brand and become rebranded as Kalyera.

SMBS: Who is the target audience for Kaleyra’s CPaaS model?

AJ: The business model, now as Kaleyra, is to provide seamless communication to businesses across the globe. Bagging more than 3,000 enterprise clients and interacting with them, we realised that there are very few providers in the market who can cater to quality communication for businesses.

Businesses, irrespective of having a million players in the market, feel that their offerings are not meeting their business needs. That’s the gap we want to bridge. We want to pitch in high quality, fast and seamless communication services to businesses so that they can fearlessly communicate to their customers, knowing that they are in safe hands.

We are planning to launch our flagship product through which businesses can send SMS, voice, and instant messaging communication to their customers through a single platform. This is a unique strategy because we are not only aiming at large scale enterprises but also building communication platforms for SMEs, lean scale startups, and developers.

SMBS: How did the company diversify into different messaging services?

AJ: As a messaging service pioneer, we knew we had to set a benchmark for others to follow. We did everything possible to diversify messaging into marketing, transactional, and global messaging. Being 100 percent compliant with regulatory bodies across the world, we even went a step ahead, building rich communication services (RCS) into our technology. This gave us more than just the text in a message.

Thus, the only ‘tech’ we represent is to be available to businesses in their own preferred platform of communication. Today, our developers code is in more than 10 languages, giving users a choice to use their most comfortable language.

Further, our ability to deliver multiple services remains our USP. There are not many players who provide both SMS and voice at an equal level. But we do, and this businesses need not have two providers. All they need is Kaleyra at the fair price point.

SMBS: How have you impacted large Indian businesses as well as startups and SMEs?

AJ: Throughout our journey, we have seen pain points of startups, medium and large scale enterprises, and most importantly, developers. Our roots remain in India, as we were an Indian enterprise when we began. Our solutions primarily started with Indian customers and we still have more than 2500 Indian businesses and conglomerates that use our services.

We onboarded more than 500 customers last year and continue working with them closely. We have customers who used our services for more than five years with zero interruptions. This Indian market is growing rapidly and we see a tremendous demand for communication services, especially with growing small businesses and digitally-aware customers.

SMBS: What were some milestones and key challenges you faced in your business journey?

AJ: Expanding our services to voice, and setting up voice to be as strong as messaging is one of our major milestones. While messaging is constantly growing, we see there’s rapid exponential growth in our voice business. Expanding our horizons to RCS and WhatsApp for Business is another milestone.

We also set up offices all over the world, acquired the world’s best e-commerce giant as our client, as well as the strongest banks.  But we certainly faced challenges along the way. Changes in the regulatory bodies’ policies affected our business during peak times. Coping with that and retaining customers has been undeniably the toughest moment. It was also challenging to match the standards of global customers.

There are also aspiring companies, including Twilio, Vonage, and Bandwidth, who are doing amazing work in the global front, when it comes to communication services. They have stood the test of time to be where they are today.

SMBS: What is the way forward for Kaleyra?

AJ: Right now, we do more than 24 billion messages per year, two billion voice calls, have over 190 country connections, and 12 offices all over the globe. But we are looking at growing even further. The plan is to provide a full-stack business communication service which comprises messaging, voice, instant messaging, and RCS to small, medium, and large enterprises.

We have also filed an application for going public in the New York Stock Exchange. We will continue to invest time and money in R&D, and look forward to a few acquisitions in our market.


                    </Text>
                </Flex>
                <Flex  ><Box h={20} w="100%"   boxShadow="dark-lg"   justifyContent="center"  >
                     
                    <Flex justifyContent="space-between"   px="100px" h="100%" align="center">
                    <Heading
                     color="brand.200"
                     fontFamily="Matter"
                     
                     textTransform="uppercase"
                     fontWeight="400"
                     fontSize="20px"
                    >Friday 24 Feb 2022 - <b>23:47</b></Heading>
                    <Flex>
                    <IconButton icon={<HiShare/>} bgColor="transparent" />
                    <IconButton icon={<BsHeart color="red"/>} bgColor="transparent" /></Flex>
                    </Flex> 
                    </Box></Flex>
            </Flex>
        </Flex>
    )
}