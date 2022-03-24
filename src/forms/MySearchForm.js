import React, {useContext, useState} from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { AppContext } from '../context/AppContext';
import {useGetMug2} from '../hooks/useGetMug';

let county
let full_name
const FormSchema = Yup.object({
    county:Yup.string().required("Required"),
    full_name:Yup.string(),
});
const initialValues ={
    county: "",
    full_name: ""
}

export default function SearchForm({setSearchParam}) {
    const{setUser} = useContext(AppContext);
    const [error, setError] = useState('')
    
    useGetMug2()
    
    const handleSubmit=async(values)=>{
        setSearchParam(values)
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)},
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="county"
            name="county"
            fullWidth
            sx={{mb:2, mt:2}}
            label="county"
            placeholder="county"
            value={formik.values.county}
            onChange={formik.handleChange}
            error={formik.touched.county && Boolean(formik.errors.county)}
            helperText={formik.touched.county && formik.errors.county}
        />
        <TextField
            id="full_name"
            full_name="full_name"
            type="full_name"
            fullWidth
            sx={{mb:2}}
            label="full_name"
            placeholder="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
            error={formik.touched.full_name && Boolean(formik.errors.full_name)}
            helperText={formik.touched.full_name && formik.errors.full_name}
        />
        <Button type="submit" sx={{width:"100%"}}>Search!!!</Button>
        {error}

    </form>
  )
}
