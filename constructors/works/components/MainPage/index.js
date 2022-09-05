import React from 'react';
import {Heading, Text} from "../../../../components";
import {Box} from "@material-ui/core";
import theme from "../../../../_lib/theme";
import {GitHub, LinkedIn} from "@material-ui/icons";
import Image from "next/image";

function Component(props) {
    const { type, headingTitle, description, listOfTechs, image } = props

    const getTechs = () =>{
        const lists = []
        listOfTechs.forEach(item => {
            lists.push(<Box style={{marginRight: '1vw'}}>

                <Text types="secondary">
                    {item}
                </Text>
            </Box>
            )
        })
        return lists
    }
    return type === "right"
        ?
        <Box>
            <Heading types="tertiary" text={headingTitle}/>
            <Box style={{
                display: "flex",
                flexDirection: 'horizontal'
            }}>
                <Box style={{ borderRadius: '10px', width: '50%'}}>
                    <Image
                        src={image}
                        alt="Picture of the admin web page"
                        objectFit="fill"
                        color="#64ffda"
                    />
                </Box>

                <Box style={{width: '50%',}}>
                    <Box style={{padding: '25px', backgroundColor: theme.palette.background.semiDark}}>
                        <Text types="secondary">
                            {description}
                        </Text>
                    </Box>

                    <Box
                        style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'start', marginTop: '2vw'}}>
                        {getTechs()}
                    </Box>

                    <Box
                        style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'start', marginTop: '2vw'}}>
                        <Box style={{marginRight: '1vw'}}>
                            <GitHub/>
                        </Box>
                        <Box style={{marginRight: '1vw'}}>
                            <LinkedIn/>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
        :
        <Box>
                <Heading types="tertiary" text={headingTitle}/>
                <Box style={{display: "flex", flexDirection: 'horizontal'}}>
                    <Box style={{width: '50%'}}>
                        <Box style={{padding: '25px', backgroundColor: theme.palette.background.semiDark}}>
                            <Text types="secondary">
                                {description}
                            </Text>
                        </Box>

                        <Box style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'start', marginTop: '2vw'}}>
                            {getTechs()}
                        </Box>

                        <Box
                            style={{display: 'flex', flexDirection: 'horizontal', justifyContent: 'start', marginTop: '2vw'}}>
                            <Box style={{marginRight: '1vw'}}>
                                <GitHub/>
                            </Box>
                            <Box style={{marginRight: '1vw'}}>
                                <LinkedIn/>
                            </Box>
                        </Box>

                    </Box>


                    <Box style={{ borderRadius: '10px', width: '50%'}}>
                        <Image
                            src={image}
                            alt="Picture of the admin web page"
                            objectFit="fill"
                            color="#64ffda"
                        />
                    </Box>

                </Box>
            </Box>

}

export const MainPage = Component
export default Component
