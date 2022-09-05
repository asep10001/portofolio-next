import React, {useState} from 'react'
import {Box, Tab, Tabs} from "@material-ui/core";
import {Heading, TabPanel, Text} from "../../components";
import theme from "../../_lib/theme";

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`
    };
}

function Component(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Heading types="numbered" number="02 " text="Where I've Worked"/>
            <Box
                sx={{
                    display: "flex",
                    height: '18vh'
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    style={{
                        color: theme.palette.text.headingSecondary,
                        borderRight: '3px solid #8892b0',
                    }}
                >
                    <Tab label="Astrapay" style={{fontFamily: 'Silkscreen'}} {...a11yProps(0)} />
                    <Tab label="Gotoko" style={{fontFamily: 'Silkscreen'}} {...a11yProps(1)} />
                    <Tab label="Jakarta Church" style={{fontFamily: 'Silkscreen'}} {...a11yProps(2)} />
                    <Tab label="G2 Academy" style={{fontFamily: 'Silkscreen'}} {...a11yProps(3)} />
                    <Tab label="Nurul Fikri" style={{fontFamily: 'Silkscreen'}} {...a11yProps(4)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Box>
                        <Text types="primary" text="Junior Full Stack Engineer"/> <Text types="lighted"
                                                                                          text=" @Astrapay"/>
                        <div style={{
                            marginTop: '0.25vh',
                            marginBottom: '1vw'
                        }}>
                            <Text types="label-secondary">
                                August 2021 - Present
                            </Text>
                        </div>
                        <div>
                            <Text types="list-item">
                                Work with Spring boot to make API mostly involved in simple task such as making CRUD functionality
                            </Text>
                            <Text types="list-item">
                                Test with Mockito for the functionality and methods
                            </Text>
                            <Text types="list-item">
                                Test with Spring Cloud Contract for the integration testing
                            </Text>
                            <Text types="list-item">
                                Use Angular to develop web admin for the internal operations and finance teams to operate and maintain QRIS transactions from day to day
                            </Text>
                            <Text types="list-item">
                                Use Angular to develop external dashboard for partner merchants so they can manage and see their benefits, how many transactions and the status of the transaction
                            </Text>
                            <Text types="list-item">
                                Test the code using Karma to make sure the logic and functionality of the code meet the expectation
                            </Text>
                            <Text types="list-item">
                                Learn and currently involved in small task for iOS and Android development for the mobile apps of Astrapay
                            </Text>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box>
                        <Text types="primary" text="Junior FrontEnd Web Developer"/>
                        <Text types="lighted" text=" @Gotoko"/>
                        <div style={{
                            marginTop: '0.25vh',
                            marginBottom: '1vw'
                        }}>
                            <Text types="label-secondary">
                                February 2021 - August 2022
                            </Text>
                        </div>
                        <div>
                            <Text types="list-item">
                                Make Company list web application using react framework
                            </Text>
                            <Text types="list-item">
                                Make Voucher creation page and editing page for the company product and operation teams so that they can manage their voucher from the page
                                using Next JS framework
                            </Text>
                            <Text types="list-item">
                                fixing bugs as the development continues
                            </Text>
                            <Text types="list-item">
                                Test the code using cypress
                            </Text>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box>
                        <Text types="primary" text="Junior Mobile Developer"/>
                        <Text types="lighted" text=" @JCChurch"/>
                        <div style={{
                            marginTop: '0.25vh',
                            marginBottom: '1vw'
                        }}>
                            <Text types="label-secondary">
                                April 2021 - September 2021
                            </Text>
                        </div>
                        <div>
                            <Text types="list-item">
                                Work as a volunteer to make mobile application for church members so that they can schedule their visit to JC church
                            </Text>
                            <Text types="list-item">
                                Help in maintain and develop mobile application using react native
                            </Text>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Box>
                        <Text types="primary" text="Junior Developer"/> <Text types="lighted"
                                                                                text=" @G2Academy"/>
                        <div style={{
                            marginTop: '0.25vh',
                            marginBottom: '1vw'
                        }}>
                            <Text types="label-secondary">
                                February 2021 - Present
                            </Text>
                        </div>
                        <div>
                            <Text types="list-item">
                                Work for the client to meet their needs of the current companies
                            </Text>
                            <Text types="list-item">
                                Learn Java basic and Javascript Basic as well as some of the well known frameworks for them such as spring boot, react js and react native
                            </Text>
                            <Text types="list-item">
                                Make final project presentations using react native and react js as well as firebase for the back end
                            </Text>
                            <Text types="list-item">
                                Make simple CRUD RESTful API service as a final project for the back end
                            </Text>
                        </div>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box>
                        <Text types="primary"
                              text="English Teacher"/>
                        <Text types="lighted"
                              text=" @NF"/>
                        <div style={{
                            marginTop: '0.25vh',
                            marginBottom: '1vw'
                        }}>
                            <Text types="label-secondary">
                                July 2015 - July 2021
                            </Text>
                        </div>
                        <div>
                            <Text types="list-item">
                                Teach Students of different levels, ranging from 4th grade to 12th grade even the alumni
                            </Text>
                            <Text types="list-item">
                                Make sure that the materials are presentable
                            </Text>
                            <Text types="list-item">
                                Teach grammar and strategic answering techniques for SBMPTN test, TOEFl and any other language proficiencies exams
                            </Text>
                            <Text types="list-item">
                                Attend and accompany students consultation sections to help them with their english homeworks or even explore
                                new knowledge in english conversations, questions etc.
                            </Text>
                        </div>
                    </Box>
                </TabPanel>
            </Box>
        </Box>
    )
}

export const Experience = Component
export default Component
