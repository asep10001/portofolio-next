import React, {useEffect} from 'react'

import {
    Box, createStyles, makeStyles,
    Zoom
} from "@material-ui/core";
import {Heading, LightedButton, Text} from "../../components";

const useStyles = makeStyles((theme) => (
    createStyles({
        textLighted: {
            color: theme.palette.text.light,
            fontFamily: 'Silkscreen',
            fontSize: '1.25vh'
        },
        textSecondary: {
            color: theme.palette.text.headingSecondary,
            fontSize: '1.25vh',
            fontFamily: 'Silkscreen',
            marginTop: '3vh',
        }
    })
))

function Component(props) {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(true);
    };

    useEffect(() => {
        handleChange()
    }, [])
    return (
        <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}} mountOnEnter unmountOnExit>
            <div>
                <Box>
                    <Text types="lighted" text='Hello, my name is'/>
                    <Heading types="primary" text="Asep Agus Heri H."/>
                    <Heading types="secondary" text="I build things for the web."/>
                    <p>
                        <Text types="secondary" text="I’m a software engineer specializing in building (and occasionally designing) exceptional
                        digital experiences.
                        Currently, I’m focused on building accessible, human-centered products at"/>
                        <Text types="lighted" text=" AstraPay" />
                    </p>
                    <LightedButton style={{
                        marginTop: '5vh'
                    }} {...props} title="Click to View My Detail"/>
                </Box>
            </div>
        </Zoom>

    )
}

export default Component
