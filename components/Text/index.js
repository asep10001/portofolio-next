import React from 'react'
import {createStyles, makeStyles} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";


const useStyles = makeStyles((theme) => (
    createStyles({
        textPrimary: {
            color: theme.palette.default.light,
            fontSize: '1.25vh',
            fontFamily: 'Silkscreen',
        },
        textLighted: {
            color: theme.palette.text.light,
            fontFamily: 'Silkscreen',
            fontSize: '1.25vh'
        },
        textSecondary: {
            color: theme.palette.text.headingSecondary,
            fontSize: '1.25vh',
            fontFamily: 'Nunito Sans' || 'sans-serif',
        },
        labelLighted: {
            color: theme.palette.text.light,
            fontSize: '1.25vh',
            fontFamily: 'Nunito Sans' || 'sans-serif',
        },
        labelSecondary: {
            color: theme.palette.text.headingSecondary,
            fontSize: '1.25vh',
            fontFamily: 'sans-serif',
        },
        container: {
            display: 'flex',
            flexDirection: 'horizontal',
        }
    })
))

function Component(props) {
    const classes = useStyles()
    const {types, text, children} = props
    switch (types) {
        case "primary" :
            return <span className={classes.textPrimary}>
                {text}
            </span>
        case "secondary" :
            return <span className={classes.textSecondary}>
                {text || children}
            </span>
        case "lighted" :
            return <span className={classes.textLighted}>
                {text}
            </span>
        case "label-secondary" :
            return <span className={classes.labelSecondary}>
                {children}
            </span>
        case "label-lighted" :
            return <span className={classes.labelLighted}>
                {children}
            </span>
        case "list-item" :
            return <span className={classes.container}>
                <span className={classes.labelLighted}>
                    <ChevronRight/>
                </span>
                <span className={classes.labelSecondary}>
                {children}
                </span>
            </span>

        default:
            break
    }

}

export const Text = Component

export default Component
