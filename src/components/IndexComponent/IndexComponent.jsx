import React from 'react'
import "./Index.css"
const IndexComponent = () => {
  return (
    <div>
         <div className="Img_Bg1">
            
        <div className="container">
        <div className='banner_content'>
            <div >
                <h2 style={{fontSize : "22px" , marginLeft:"75px"}}>CHÀO MỪNG ĐẾN</h2>
                <h1 style={{fontSize : "60px"}}>PIZZA & BIA</h1>
            </div>
            <div>
                <button  className='btn_order' style={{padding: "19px 40px"}}>Gọi đặt bàn</button>
                <button className='btn_oderlast' >Đặt món online</button>
            </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default IndexComponent