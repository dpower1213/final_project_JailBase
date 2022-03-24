import React from 'react'
import {Paper, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import MyRegisterForm from '../forms/MyRegisterForm'

export default function Register() { 
    const theme=useTheme()

  return (
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Register</Typography>
        <MyRegisterForm/>
    </Paper>
  )
}