// import React from "react";
// import Nav from "../Nav";


// //images


// const Gallery = () => {
//     return(
//         <div>
//             <Nav type="public" />

//         </div>


//     );

// };

// export default Gallery;

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
// import Gallery1 from "../../res/Gallery1.jpg"

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
          image="../../res/Gallery1.jpg"
          title="KBBQ"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            KBBQ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Delicious Korean cuisine method of grilling meat.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
