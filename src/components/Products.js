import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({

    root: {
        width: 500,
        //margin: 30,
        padding: 20,


        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: 10,
        //width: 'fit-content'

    },

    media: {
        height: 100,
        maxWidth: 200,
        justify: "right",
        backgroundSize: 'auto'
    },
    paginacion: {
        '& > *': {
            marginTop: theme.spacing(2),

        },
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: 10,
        width: 'fit-content'
    },
}));

export default function MediaCard(props) {

    var cualquiera = ""

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    const vendedor = async producto => {
        var vendedor = await fetch('https://api.mercadolibre.com/users/' + producto.seller.id);
        var json = await vendedor.json();
        cualquiera = json
        return cualquiera
    }

    const classes = useStyles();
    const [lista, setLista] = useState("")
    useEffect(() => {
        async function fetchData() {

            var response = await fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + props.termino + '&offset=' + (page - 1) * 50);
            var json = await response.json();
            setLista(json)
        }
        fetchData();
    }, [props, page]);

    if (lista === "") {
        return (
            <div></div>
        )

    }

    return (
        <div style={{ flexGrow: 1 }}>
            {lista.results.map((producto) => {
                var seller = vendedor(producto)
                return (

                    <Card key={producto.id} className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={producto.thumbnail}
                            //title="No sé que estoy haciendo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h1">
                                    {producto.title}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="p">
                                    {producto.price}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="p">
                                    {seller.nickname}
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                )

            })}
            <Pagination page={page} onChange={handleChange} className={classes.paginacion} count={20} variant="outlined" color="primary" />

        </div>

    );
}