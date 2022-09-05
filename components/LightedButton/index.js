import React from 'react';
import {Button, styled} from "@material-ui/core";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.light,
    backgroundColor: theme.palette.background,
    border: '2px solid',
    padding: '20px 28px'
}));
function Component(props) {
    const {title, onClick} = props
    return (
            <ColorButton
                variant="outlined"
                {...props}
                onClick={onClick}
            >
                {title}
            </ColorButton>
    )
}

export const LightedButton = Component
export default Component
