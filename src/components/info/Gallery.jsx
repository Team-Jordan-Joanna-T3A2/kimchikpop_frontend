import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Nav from "../Nav";

//images
import Gallery1 from "../../res/Gallery1.jpg"
import Gallery2 from "../../res/Gallery2.jpg"
import Gallery3 from "../../res/Gallery3.jpg"
import Gallery4 from "../../res/Gallery4.jpg"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Nav type="public" />
    <h1>GALLERY</h1>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gallery1}
          title="KBBQ"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            KBBQ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Delicious Korean cuisine method of grilling meat
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gallery2}
          title="Kimbap"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kimbap
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Korean Sushi Roll
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gallery3}
          title="KFC Korean Fried Chicken"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          KFC Korean Fried Chicken
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Crispy and Yummy
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Gallery4}
          title="Bimbimbap with Side Dishes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Bimbimbap with Side Dishes
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Korean mixed rice dish with side dishes
          </Typography>
        </CardContent>
      </CardActionArea>


    </Card>
    </div>
  );
}
