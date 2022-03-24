import React, {useContext} from 'react'
import BasicTable from '../components/TableMugShot';
import {useGetMug2} from '../hooks/useGetMug';

export default function BrowseJail() {
  const mug = useGetMug2()
  
  // console.log(mug)
  
  return (
      <>    
      <BasicTable rows={mug}/>
      </>
      )
}
