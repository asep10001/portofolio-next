import React from 'react'
import {Box} from "@material-ui/core";
import {Heading, LightedButton, Text} from "../../components";

function Component(props) {

    const onClick = () => {
        window.open("mailto:asep10001@mail.unpad.ac.id")
    }
    return(
        <Box style={{ textAlign: 'center',  padding: '0 10vw 10vw 10vw'}}>
            <Text types="lighted" text="04. What's Next?"/>

            <Heading types="primary" text="Get In Touch" />

            <Text types="secondary" text="
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            "/>

            <Box style={{ marginTop: '2vw' }}>
                <LightedButton title="Say Hello"
                onClick={onClick}
                />
            </Box>
        </Box>
    )
}

export const Contact = Component
export default Component
