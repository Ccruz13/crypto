import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CryptoState } from '../../CryptoContext';
import { TrendingCoins } from '../../Config/api';

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
      },
}));

const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const classes = useStyles()

    const { currency } = CryptoState();

    const fetchTendingCoins = async () => {
       const { data } = await axios.get(TrendingCoins(currency));

       setTrending(data);
    };
    console.log(trending)

    useEffect(() => {
        fetchTendingCoins();
    }, [currency])

    return(
        <div className={classes.carousel}>
            hello
        </div>
    )
}

export default Carousel;