// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import listReducer from '../reducers/listReducer';
// import {useGetMug2} from '../hooks/useGetMug';

// export default function MugCard2() {
//   const mug = useGetMug2()
//   return (
//     <>
//         <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>Mug   
//         <CardMedia>
//             {{height:'100%'}}
//             <img src= {mug.img} sx={{height:'100%', width:"100%"}} variant="rounded"/>
//         </CardMedia>     
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {mug.title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
              
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
    
//     </>
//   );
// }