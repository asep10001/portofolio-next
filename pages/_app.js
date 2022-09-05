import '../styles/globals.css'
import theme from "../_lib/theme";
import {ThemeProvider} from '@material-ui/core/styles'
import NavBar from "../components/NavBar";
import React from "react";
import {SideComponent} from "../components";
import {GitHub, LinkedIn, Instagram, Twitter} from "@material-ui/icons";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <NavBar {...pageProps} />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <SideComponent type="left">
                    <div style={{
                        display: 'flex'
                    }}>
                        <div style={{
                            marginTop: '2vw'
                        }}
                             onClick={() => window.open("https://gitlab.com/asep.agus")}
                        >
                            <GitHub />
                        </div>
                        <div style={{
                            marginTop: '2vw'
                        }}>
                            <LinkedIn />
                        </div>
                        <div style={{
                            marginTop: '2vw'
                        }}>
                            <Instagram />
                        </div>
                        <div style={{
                            marginTop: '2vw'
                        }}>
                            <Twitter />
                        </div>
                    </div>

                </SideComponent>
                <div style={{
                    paddingRight: '25vw',
                    paddingLeft: '25vw',
                    height: '95vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Component  {...pageProps} />
                </div>
                <SideComponent type="right">
                    <div style={{
                        marginTop: '2vw'
                    }}>
                        asep10001@mail.unpad.ac.id
                    </div>
                </SideComponent>
            </div>

        </ThemeProvider>)
}

export default MyApp
