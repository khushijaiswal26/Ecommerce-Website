import React from 'react';
import './YoungsFavorite.css';
import image1 from "../assets/laughing-optimistic-girl-with-long-hairstyle-standing-orange-jocund-lady-with-wavy-hair-enjoying-life.jpg";
import image2 from "../assets/stunning-girl-with-wavy-hair-posing-purple-wall-with-surprised-face-expression-indoor-portrait-good-humoured-lady-red-dress-straw-hat.jpg";

const YoungsFavorite = () => {
  const favorites = [
    {
      id: 1,
      image: image1,
      title: "Trending on instagram",
      description: "Explore Now!"
    },
    {
      id: 2,
      image: image2,
      title: "All Under $40",
      description: "Shop Now!"
    }
  ];

  return (
    <section className="youngs-favorite">
      <h2>Young's Favourite</h2>
      <div className="favorites-grid">
        {favorites.map(item => (
          <div key={item.id} className="favorite-card">
            <img src={item.image} alt={item.title} />
            <div className="favorite-content">
              <h3>{item.title}</h3>
              <a href="#" className="explore-link">{item.description}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoungsFavorite;