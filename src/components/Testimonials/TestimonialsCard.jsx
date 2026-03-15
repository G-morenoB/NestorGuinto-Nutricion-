function TestimonialCard({ stars, description, name, img, service }) {
  return (
    <div className="testimonial-card">
      
      <div className="stars">{stars}</div>

      <p className="testimonial-text">
        "{description}"
      </p>

      <div className="user-info">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h4>{name}</h4>
          <span>{service}</span>
        </div>
      </div>

    </div>
  );
}

export default TestimonialCard;