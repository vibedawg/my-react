
import './App.css';
// import { useState } from 'react';
// import { sculptureList } from './data.js';
import { productsList } from './data.js';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



function App() {
  return (
    <div className='cards'>
    {productsList.map((product, index) => (
      <div className='product' key={index} >
        <div className='slider-controls'>
          <button className='slider-control'>
            <ChevronLeftIcon />
          </button>
          <img src={product.thumbnail} alt={product.brand} />
          <button className='slider-control'>
            <ChevronRightIcon />
          </button>
        </div>
        <div className='info'>
          <h2>{product.title}</h2>
          <p><strong>${product.price}</strong></p>
          <p>{product.description}</p>
        </div>
      </div>
    ))
      }
    </div>
  )
}




export default App;
