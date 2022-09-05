import React from 'react'
import {Box} from "@material-ui/core";
import {Heading, Text} from "../../components";
import admin from "../../public/admin.png"
import dashboard from "../../public/dashboard.png"
import gotoko from "../../public/gotoko.png"
import {MainPage} from "./components";

function Component(props) {
    return (
        <Box>
            <Heading types="numbered" number="02 " text="I've worked on"/>
            <Text types="label-lighted">Projects</Text>
            <MainPage
                type="right"
                headingTitle="Admin QRIS Astrapay"
                description="An admin web portal for finance and operation team of Astrapay to conduct and execute many of their tasks and assignments easily.
                It includes monitoring and managing merchants and its terminals, transactions, processing reconciliations and settlements.
                "
                listOfTechs={["Angular", "Astrapay API", "Astrapay Starter", "Karma"]}
                image={admin} />

            <MainPage
                type="left"
                headingTitle="Merchant Dashboard QRIS Astrapay"
                description="A dashboard portal for partner merchant so that they can monitor their status of
                transactions and status of their digital money whether it has been transferred to them or not
                 for each merchant."
                listOfTechs={["Angular", "Astrapay API", "Astrapay Starter", "Karma"]}
                image={dashboard} />

            <MainPage
                type="right"
                headingTitle="Gotoko Order and Marketing Portal"
                description="A Portal for Gotoko operation and admin teams to conduct their marketing operations.
                I was mainly responsible in creating the voucher creation, editing and listing.
                It is used for promotion campaign of gotoko."
                listOfTechs={["NextJs", "Material UI", "Redux", "RxJS"]}
                image={gotoko} />


        </Box>
    )
}

export const Works = Component
export default Component
