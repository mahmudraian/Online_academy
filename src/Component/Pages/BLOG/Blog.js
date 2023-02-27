import React from 'react';
import Cors from './Cors';
import Firebase_pros from './Firebase_pros';
import Nodepros from './Nodepros';
import Pros_private from './Pros_private';

const Blog = () => {
    return (
        <div className='d-sm-grid d-lg-flex ' style={{color:'whitesmoke'}}>
           <div className='col-6'> <Cors></Cors>
           <Firebase_pros></Firebase_pros>
           </div> 
          <div className='col-6' > 
           <Nodepros></Nodepros> 
           <Pros_private></Pros_private>
</div> 
        </div>
    );
};

export default Blog;