import React, {useContext} from 'react'
import {useGetMug2} from '../hooks/useGetMug';

export default function MugCard2() {
    const mug = useGetMug2()
    // console.log(book)
        return (
        <>
        <MugCard2 rows={mug}/>
        </>
        )
}