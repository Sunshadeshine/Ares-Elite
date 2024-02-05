import React from 'react'

const Bottomnav = ({bottomNavItems}) => {
  return (
    <div className='btm-nav'>
      {
        bottomNavItems?.map((items)=>{
          return(
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",height:"100%",width:"40%"}} className="btm-nav-btn">
            <img  src={items.iconPath} style={{height:"24px"}}/>
            <p style={{fontSize:"10px"}}>{items.itemName}</p>
         </div>
          )
        })
      }
      
    </div>
  )
}

export default Bottomnav