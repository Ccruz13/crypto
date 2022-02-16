import React from 'react';
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Exo 2",
        fontWeight: "bold",
        cursor: "pointer",
    },
}))

const Header = () => {

    const classes = useStyles()

    const navigate = useNavigate()

    const { currency, setCurrency } = CryptoState()

    console.log(currency)

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        }
    })

    return(
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate('/')} className={classes.title}>
                            Crypto Watchers
                        </Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginLeft: 15
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;