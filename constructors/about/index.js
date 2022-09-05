import React, {useEffect, useState} from 'react'
import {Box, createStyles, makeStyles, Fade} from "@material-ui/core";
import {Heading, Text} from "../../components";
import {DoubleArrow} from "@material-ui/icons";
import Image from 'next/image'
import author from '../../public/author.jpg'

const useStyles = makeStyles((theme => (
    createStyles({
            textLighted: {
                color: theme.palette.text.light,
                fontFamily: 'Silkscreen',
                fontSize: '1.25vh'
            },
            heading: {
                color: theme.palette.text.bigHeading,
                fontSize: '2vw',
                marginBottom: 0,
                marginTop: '1vh',
            },
            headingBigSecondary: {
                color: theme.palette.text.headingSecondary,
                fontSize: '4vw',
                marginBottom: 0,
                marginTop: '1vh',

            },
            textSecondary: {
                color: theme.palette.text.headingSecondary,
                fontSize: '1.25vh',
                fontFamily: 'Silkscreen',
                marginTop: '3vh',
            },
            skillContainer: {
                display: 'flex',
                flexDirection: 'horizontal',
                margin: '1vh 1vh 0 0'
            }
        }
    )
)))

const getSkills = (classes) => {
    const skills = [
        {
            id: 'sk1',
            name: 'Javascript',
        },
        {
            id: 'sk2',
            name: 'Angular',
        },
        {
            id: 'sk3',
            name: 'React Native',
        },
        {
            id: 'sk4',
            name: 'React JS',
        },
        {
            id: 'sk5',
            name: 'Next JS',
        },
    ]
    const index = skills.length - Math.floor(skills.length / 2)

    const firstBox = skills.slice(0, index)
    const secondBox = skills.slice(index, skills.length)

    return (
        <div style={{display: 'flex', flexDirection: 'horizontal'}}>
            <div>
                {firstBox.map(
                    skill => {
                        const {id, name} = skill
                        return <div className={classes.skillContainer} key={id}>
                            <span className={classes.textLighted}>
                                <DoubleArrow/>
                            </span>
                            <Text types="primary" text={name} style={{marginTop: 0}}/>
                        </div>
                    }
                )}
            </div>
            <div>
                {secondBox.map(
                    item => {
                        const {id, name} = item
                        return <div className={classes.skillContainer} key={id}>
                            <span className={classes.textLighted}>
                                <DoubleArrow/>
                            </span>
                            <Text types="primary" text={name} style={{marginTop: 0}}/>
                        </div>
                    }
                )}
            </div>
        </div>
    )
}

function Component(props) {
    const classes = useStyles()
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(true);
    };

    useEffect(() => {
        handleChange()
    }, [])
    return (
        <Fade in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
        <Box>
            <Heading types="numbered" text="About Me" number="01. "/>
            <div style={{display: 'flex', flexDirection: 'horizontal'}}>
                <div>
                    <p>
                        <Text types="secondary" text="
                Hello! My name is Brittany and I enjoy creating things that live on the internet.
                My interest in web development started back in 2012 when
                I decided to try editing custom Tumblr themes — turns out hacking together
                a custom reblog button taught me a lot about HTML & CSS!
                "/>
                    </p>
                    <p>
                        <Text types="secondary" text="
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                a start-up, a huge corporation, and a student-led design studio.
                My main focus these days is building accessible,
                inclusive products and digital experiences at Upstatement for a variety of clients.
                "/>
                    </p>
                    <p>
                        <Text types="secondary" text="
                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                "/>
                    </p>
                    <p>
                        <Text types="secondary" text="
                Here are a few technologies I’ve been working with recently:
                "/>
                    </p>
                    {getSkills(classes)}
                </div>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                        {!isHovering
                            ?
                            <div style={{width: '25vw', height: '50vh', display: 'grid', margin: '1vw 1vw 1vw 3vw'}}>
                                <div style={{
                                    border: '1px solid',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    width: '15vw',
                                    height: '15vw',
                                    gridArea: '1/1',
                                }}>
                                    <Image
                                        src={author}
                                        alt="Picture of the author"
                                        objectFit="cover"
                                        color="#64ffda"
                                    />
                                </div>
                                <div style={{
                                    border: '1px solid',
                                    borderColor: "#64ffda",
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    width: '15vw',
                                    height: '15vw',
                                    gridArea: '1/1',
                                    margin: '2vh'
                                }}>
                                </div>
                            </div>
                            :
                            <div style={{width: '25vw', height: '50vh', display: 'grid', margin: '1vw 1vw 1vw 3vw'}}>
                                <div style={{
                                    border: '1px solid',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    width: '15vw',
                                    height: '15vw',
                                    gridArea: '1/1'
                                }}>
                                    <Image
                                        src={author}
                                        alt="Picture of the author"
                                        objectFit="cover"
                                    />
                                </div>
                                <div style={{
                                    border: '2px solid #64ffda',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    width: '15vw',
                                    height: '15vw',
                                    gridArea: '1/1',
                                    margin: '1vh'
                                }}>
                                </div>
                            </div>
                        }
                </div>
            </div>
        </Box>
        </Fade>
    )
}

export const About = Component
export default Component
