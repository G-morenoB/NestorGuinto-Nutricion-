function TestimonialCard({ stars, description, name, img, service }) {
  return (
    <div className="testimonial-card">
      
      <div className="stars">{stars}</div>

      <p className="testimonial-text">"{description}"</p>

      <div className="user-info">
         <div className="user-top">
            <div className="avatar">  
              {name?.charAt(0)}    
            </div>
          
          <div>
            <h4 className="user-name">{name}</h4>
            <span className="user-service">{service}</span>
          </div>
        </div>
{/*     <div className="results-img">
          <img src={img} alt={`Resultado de ${name}`}  />
        </div>*/ } 
      </div>

    </div>
  );
}

export default TestimonialCard;