import React from 'react'
import TeamCard from './TeamCard'
import { Box, Center, Container, Flex, Spacer, Text } from '@chakra-ui/react'


export default function AboutUs() {
    return (
        <>


            <Center>
                <Box>                
              
                    <Center mb ={6} fontSize={"6xl"}>
                    <h1>ALL ABOUT YOURNEWJOURNEY</h1>
                    </Center>
                    <p>Our mission is simple: to help you settle and thrive in Canada. We know how overwhelming it can be to move to a new country, and we are committed to making sure that your experience is the best it can be. We offer a wide range of services, including
                        airport pickup, accommodations, and guidance and counseling, to help you feel comfortable and confident from the moment you land. Contact us today to learn more about how we can help with your new journey. Our vision at YourNewJourney is to
                        be the leading provider of transitional services, helping people of all ages and stages of life find their way forward. No matter where you are in your journey, we are here to help you navigate through life’s challenges. We believe that with
                        the right guidance, motivation and support, anyone can create a new path forward. From career coaching to personal development, we are your journey partners.</p>

                </Box>

            </Center>


            <section class="meet-the-team">
                <Center> <Text fontSize={"5xl"}> Meet the Team </Text> </Center>

                <Flex justify="Center" direction="row" gap={20} wrap={true}>
                    <TeamCard img="/Images/team-member-1.jpg" name="Yashraj" exp="Yashraj is our lead counselor with over 10 years of experience " />
                    <TeamCard img="./Images/team-member-2.jpg" name="Roberto" exp="Roberto is an expert in immigration services and client support. " />
                    <TeamCard img="./Images/team-member-3.jpg" name="Aarushi" exp="Aarushi specializes in career coaching and personal development. " />
                    <TeamCard img="./Images/team-member-4.jpg" name="Shagun" exp="Shagun handles accommodation services and client comfort." />
                </Flex>



            </section>

            <div>



                <Center m={10}>

                    <div>
                        <Text fontSize="3xl" >ContactUs </Text>

                        515 Portage Ave, Winnipeg, MB R3B 2E9<br />
                        <a href="mailto:yournewjourneyinfo@gmail.com">yournewjourneyinfo@gmail.com</a><br />
                        123-456-7890

                        <div>

                            <Text mt={10} fontSize="3xl" >Office Hours </Text>
                            <p>
                                Monday - Friday<br /> 9:00am - 8:00pm
                            </p>
                            <p>
                                Saturday and Sunday<br /> 10:00am - 5:00pm
                            </p>

                        </div>
                    </div>



                </Center>

            </div>
            <footer>
                <p>&copy; 2023 Your E-Commerce Service</p>
            </footer>


        </>
    )
}
