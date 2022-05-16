import Tarjeta from '../Card/Card'
import { Grid } from '@mui/material';

const CardList = ({titu}) => {
    return (
        <>
        <h1> {titu} </h1>
            <Grid container >
             <Grid item md={3}>
                <Tarjeta imagen={"img2902.jpg"} titulo={"BOX MOMENTOS"} precio={3900} />
             </Grid>  
    
             <Grid item md={3}>
                 <Tarjeta imagen={"img8741.jpg"} titulo={"BOX INCONDICIONAL"} precio={3700} />
             </Grid>  
  
                <Grid item md={3}>
                  <Tarjeta imagen={"img8747.jpg"} titulo={"BOX COMPARTIR"} precio={3400}  />
              </Grid>  

              <Grid item md={3}>
                  <Tarjeta imagen={"img8498.jpg"} titulo={"TORTAS INTEGRALES"} precio={950}  />
              </Grid>  
           
            </Grid>   
        </>
 
    )
}

export default CardList