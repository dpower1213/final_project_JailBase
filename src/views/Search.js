import React, {useState} from 'react'
import MySearchForm from '../forms/MySearchForm'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import BasicTable from '../components/TableMugShot'
import {useGetMugSearch} from '../hooks/useGetMug';

export default function Search() {
  const theme=useTheme()
  const [searchParam, setSearchParam]=useState({})
  const mugSearch = useGetMugSearch(searchParam?.county, searchParam?.full_name)
//   console.log(mug)
  
  return (
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Search!!</Typography>
        <MySearchForm setSearchParam = {setSearchParam}/>;
        <BasicTable rows={mugSearch}/>
    </Paper>
 );
}