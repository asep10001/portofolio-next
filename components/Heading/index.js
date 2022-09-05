import React from 'react'
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => (
    createStyles({
        primaryHeading: {
            color: theme.palette.text.bigHeading,
            fontSize: '4vw',
            marginBottom: '4vh',
            marginTop: '1vh',
        },
        secondaryHeading: {
            color: theme.palette.text.headingSecondary,
            fontSize: '4vw',
            marginBottom: '4vh',
            marginTop: '1vh',
        },
        normalHeading: {
            color: theme.palette.text.bigHeading,
            fontSize: '2vw',
            fontFamily: 'Nunito Sans' || 'sans-serif',
            marginBottom: '20px',
            marginTop: 0,
        },
        numbered: {
            color: theme.palette.text.bigHeading,
            fontSize: '2vw',
            marginBottom: 0,
            marginTop: 0,
        },
        textLighted: {
            color: theme.palette.text.light,
            fontFamily: 'Silkscreen',
            fontSize: '1.5vw'
        },
        horizontalLine: {
            border: '1px solid',
            borderColor: theme.palette.text.light,
            width: '35vw',
            height: '0px',
            alignSelf: 'center',
        },
        container: {
            display: 'flex',
            flexDirection: 'horizontal',
            justifyContent: 'space-between',
            marginTop: '2vh',
            marginBottom: '4vh',
        }
    })
))

function Component(props) {
    const {types, text, number} = props
    const classes = useStyles()
    switch (types) {
        case "primary" :
            return <h2 className={classes.primaryHeading}>
                {text}
            </h2>
        case "secondary":
            return <h2 className={classes.secondaryHeading}>
                {text}
            </h2>
        case "tertiary":
            return <div className={classes.normalHeading}>
                {text}
            </div>
        case "numbered" :
            return <div className={classes.container}>
        <
            h2
            className={classes.numbered} >
                < span
            className = {classes.textLighted} > {number}
        </span>
        {
            text
        }
        </h2>
            <div className={classes.horizontalLine}/>
        </div>
        default:
            break
    }
}

export const Heading = Component

export default Component
