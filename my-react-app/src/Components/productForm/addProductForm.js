import React, { useState } from 'react';
import { addItemToList } from '../../http/productAPI';
import './addProductForm.css'
import Button from '../button';

function AddProductForm() {
 const [name, setName] = useState('');
 const [description, setDescription] = useState('');
 const [price, setPrice] = useState('');
 const [quantity, setQuantity] = useState('');
 const [image, setImage] = useState('');

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const product = await addItemToList(name, description, price, quantity, image);
      console.log(product);
    } catch (error) {
      console.error('Error adding product:', error);
    }
   };

 return (
   <form className='admin-form' onSubmit={handleSubmit}>
     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
     <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
     <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
     <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
     <Button type="submit" label='Add Product'/>
   </form>
 );
}

export default AddProductForm;