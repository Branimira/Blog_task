import Blog from '../components/Blog'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
    <div>
      
<Carousel>
<Carousel.Item>
   <img
      className="d-block w-100 h-70"
      src="https://furaj.ba/wp-content/uploads/2018/09/achievement-art-camera-970203.jpg"
      alt="First slide"
   />
</Carousel.Item>
<Carousel.Item>
   <img
      className="d-block w-100 h-70"
      src="https://www.poslovni.hr/wp-content/uploads/2020/02/d935f437dbd397a93a1db3ed2b2009e7.jpg"
      alt="Second slide"
   />
</Carousel.Item>
<Carousel.Item>
   <img
      className="d-block w-100"
      src="https://lidertravel.rs/wp-content/uploads/2017/12/Citati-o-putovanjima-4.jpg"
      alt="Third slide"
   />
</Carousel.Item>
</Carousel>
      <Blog />
   </div>
   )
}

export default Home