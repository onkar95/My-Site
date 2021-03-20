import { Button, List, ListItem,SwipeableDrawer} from '@material-ui/core'
import React, { useState } from 'react'
import Footer from '../contact-footer/Footer'
import Navbar from '../navbar/Navbar'

const About = () => {

    const [state, setState] = useState(false)

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }

    const list = () => (
        <div onClick={toggleDrawer(false)}>
        <List>
            <ListItem ><h1>Lorem ipsum dolor </h1></ListItem>
        </List>
        </div>
    )

    return (
        <div>
                        <Navbar />

            <Button onClick={toggleDrawer(true)}>left</Button>
            <SwipeableDrawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
                // onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
            <Footer />

        </div>
    )
}

export default About
