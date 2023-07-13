import React from 'react';
import "./Blogs.css";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
       

      <div className="row">
      <div className="divider"></div>
  <div className="col-6 right">
    <h1>Lo mas leido</h1>
    <div className="underlinetx"></div>
    <div className="aside1">  
   
      <div className="article">
        
        <img className="image" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202307/12-13-1_1-sixteen_nine.jpg?size=948:533" alt="Image 1" />
        <div>
          <h4>Joe Biden admite vender secretos de estado</h4>   
          <p>Does a video show President Joe Biden openly admitting to selling state secrets? Biden was making a joke at the outset of a roundtable with India’s prime minister..</p>
        </div>
      </div>
      
      <div className="article">
        <img className="image" src="https://www.politico.eu/cdn-cgi/image/width=1920,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/01/16/GettyImages-1240852563-scaled.jpg" alt="Image 2" />
        <div>
          <h4>WEF of pets for climate change</h4>
          <p>The video’s narrator said the World Economic Forum launched the euthanization to reduce carbon that pets produce from eating meat.</p>
        </div>
      </div>
      <div className="article">
        <img className="image" src="https://static.politifact.com/CACHE/images/politifact/photos/progresspridemural/3a0eb2f71e05182bc28534f42a43fb14.jpg" alt="Image 3" />
        <div>
          <h4>The blue, pink, and white colors in the progress pride flag represent pedophiles</h4>
          <p>The video, shared on Facebook, shows a man standing in front of a large mural of the progress pride flag. In it..</p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-6 right">
    <h1>Blogs</h1>
    <div className="underlinetx"></div>
    <div className="aside1"> 
    <Link to="/blog1" >   
      <div className="article">
        <img className="image" src="https://helios-i.mashable.com/imagery/articles/07H0JDqdjqv7Q73TwDk3lJK/hero-image.fill.size_1200x675.v1687880371.jpg" alt="Image 1" />
        <div>
          <h4>What are deepfakes? How to spot them?</h4>   
          <p>AI-generated fake videos are becoming more common (and convincing). Here’s why we should be worried, Have you seen Barack Obama call Donald Trump a “complete dipshit”?</p>
        </div>
      </div>
      </Link>
      <Link to="/blog2" > 
      <div className="article">
        <img className="image" src="https://www.ilounge.com/wp-content/uploads/2020/02/Spam-Phishing-and-Clickbait-An-Overview-of-Internet-Scams.jpg" alt="Image 2" />
        <div>
          <h4>How to spot Clickbaits?</h4>
          <p>Anyone who has ever had an email account understands the concept of spam — unwanted mass communiques that clutter up your inbox with their offers for discount Viagra, sexy singles near you?.</p>
        </div>
      </div>
      </Link>
      <Link to="/blog3" > 
      <div className="article">
        <img className="image" src="https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" />
        <div>
          <h4>Most popular HOAX on internet.</h4>
          <p>A Nigerian Prince email typically opens with an incredible investment opportunity or a request for your help so a foreigner can leave his country...</p>
        </div>
      </div>
      </Link>
    </div>
  </div>
</div>
<div className="divider"></div>

    </div>
     
  );
}

export default Blogs;
