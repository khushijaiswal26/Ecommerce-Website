import React from 'react';
import './NewArrivals.css';
import image1 from '../assets/portrait-young-woman-wearing-sunglasses.jpg';
import image2 from '../assets/shirt-mockup-concept-with-plain-clothing.jpg';
import image3 from '../assets/beautiful-woman-jeans.jpg';

const NewArrivals = () => {
  const arrivals = [
    {
      id: 1,
      image: image1 ,
      title: "Trendy Hoodie",
      price: "Rs 1100"
    },
    {
      id: 2,
      image: image2,
      title: "Basic Tees",
      price: "Rs 399"
    },
    {
      id: 3,
      image: image3,
      title: "Stylish Jeans",
      price: "Rs 1399"
    }
  ];

  return (
    <section className="new-arrivals">
      <h2>NEW ARRIVALS</h2>
      <div className="arrivals-grid">
        {arrivals.map(item => (
          <div key={item.id} className="arrival-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;