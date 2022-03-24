// import React, {useContext} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {AppContext} from '../context/AppContext';
// import {useNavigate} from 'react-router-dom';

// export default function BasicTable({rows}) {
//     const {addToList} = useContext(AppContext);
//     const {removeFromList} = useContext(AppContext);
//     const {emptyList} = useContext(AppContext);
    
//     // const {error, onebook} =useGetBooks(categoryID);
//     const navigate = useNavigate()
    
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Mug Shot</TableCell>
//             <TableCell align="left">Booking Date</TableCell>
//             <TableCell align="left">Name</TableCell>
//             <TableCell align="left">Charges</TableCell>
//             <TableCell align="left">More Information</TableCell>
//             <TableCell align="left">Pages</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows?.map((row) => (
//             <TableRow
//               key={row.title}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
//               <TableCell align="left"><img src={row.img} width="50" height="75"/></TableCell>
              
//               <TableCell align="left"><button onClick ={()=> {addToList(row)}}>
//               {row.book_date_formatted}</button></TableCell>
              
//               <TableCell align="left"><button onClick ={()=> {OneBook({row})}}>
//               {row.name}</button></TableCell>
              
//               <TableCell align="left">{row.charges}</TableCell>
//               <TableCell align="left">{row.more_info_url}</TableCell>
            
//             </TableRow>
            
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
