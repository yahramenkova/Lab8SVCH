import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import Button from './button';
import "./productPopup.css"

const ProductPopup = ({ product }) => {
 const [open, setOpen] = useState(false);
 
 const handleOpen = () => {
   setOpen(true);
 };
 
 const handleClose = () => {
   setOpen(false);
 };
 
 return (
   <div>
     <Button onClick={handleOpen} label='Подробнее' customClass='button-about'/>
     <div className='modal'>
     <Popup   open={open}  onClose={handleClose}  >
       <div >
         <h2>{product.name}</h2>
         <img src={product.image} alt={product.name} className='image-popup'/>
         <p>{product.description}</p>
         <Button onClick={handleClose} label='Закрыть'/>
       </div>
     </Popup>
     </div>
     </div>
 );
};

export default ProductPopup;
