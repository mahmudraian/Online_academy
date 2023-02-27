
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Chechcourse = ({check, hanldeclicked}) => {
   
    const {name,id,fee,thumb,student,short_dis}=check;
    return (
        <div className='mb-5' style={{width:'600px',height:'400px'}}>
            <Card className="bg-dark text-white">
      <Card.Img  style={{width:'600px',height:'400px', opacity: '0.2'}} src={thumb} alt="Card image" />
      <Card.ImgOverlay  className='m-0'>
        <Card.Title>{name}</Card.Title>
        <Card.Text 
        style={{color:"yellowgreen",backgroundColor:"" }}
        >
         {short_dis}
        
        </Card.Text>
        <Card.Text>Last Date 3 mins ago</Card.Text>
        <Link to="/checked"><Button onClick={()=>hanldeclicked(id)} variant="primary">Checkout for this course!</Button></Link>
       
      </Card.ImgOverlay>
    </Card>
        </div>
      
    );
};

export default Chechcourse;