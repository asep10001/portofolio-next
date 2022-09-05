import React from 'react'
import theme from "../../_lib/theme";

function Component(props) {
    const {children, type} = props
    return (
        <div style={type === 'left' ? {
            writingMode: 'vertical-rl',
            color: theme.palette.text.bigHeading,
            display: 'flex',
            justifyContent: 'end',
            marginLeft: '3vw'
        } : {
            writingMode: 'vertical-rl',
            color: theme.palette.text.bigHeading,
            display: 'flex',
            justifyContent: 'end',
            marginRight: '3vw'
        }}>
            <div>
                {children}
            </div>
            <div
                style={{
                    marginTop: '1.25vw',
                    height: '4vw',
                    border: '1px solid',
                    alignSelf: 'center',
                    borderColor: theme.palette.text.bigHeading
                }}
            />
        </div>
    )
}

export const SideComponent = Component
export default Component
