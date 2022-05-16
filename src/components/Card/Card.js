import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


    const Tarjeta = ({imagen, titulo, precio}) => {
            return ( 
            
              <Card sx={{ maxWidth: 345 }}>
                <div className="cardVarias"> 
                <CardMedia
                  component="img"
                  height="300"
                  image={imagen}
                  alt="Imagen Producto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Precio $ {precio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Compartir</Button>
                  <Button size="small">Más Info</Button>
                </CardActions>
                </div>
              </Card>
             
            );
          }

export default Tarjeta          
