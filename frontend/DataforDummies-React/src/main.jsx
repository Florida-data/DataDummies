import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormChanger } from './FormChanger.jsx';





import { Button } from './Button.jsx';






createRoot(document.getElementById('root')).render(
  <>
    <section className='login_section vh-100 w-100 d-flex  align-items-center align-content-center justify-content-center flex-column'>
    
    
    

    <FormChanger />

      
      
    </section>
    
  </>
);
