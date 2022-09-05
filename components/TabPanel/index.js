import {Box, Typography} from "@material-ui/core";

function Component(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{padding: '0 0 0 3vh'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const TabPanel = Component
export default Component
