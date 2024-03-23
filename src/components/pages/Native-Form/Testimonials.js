import React, { useState } from 'react';

const Testimonials = ({ formData, handleChange }) => {
  const [testimonials, setTestimonials] = useState([
    { name: '', company: '', designation: '', testimonial: '' },
    { name: '', company: '', designation: '', testimonial: '' }
  ]);

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index][field] = value;
    setTestimonials(updatedTestimonials);
    handleChange({
      target: {
        name: 'testimonials',
        value: updatedTestimonials
      }
    });
  };

  const addTestimonialRow = () => {
    if (testimonials.length < 4) {
      setTestimonials([...testimonials, { name: '', company: '', designation: '', testimonial: '' }]);
    }
  };

  const removeTestimonialRow = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
    handleChange({
      target: {
        name: 'testimonials',
        value: updatedTestimonials
      }
    });
  };

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-row">
          <input
            type="text"
            placeholder="Name"
            value={testimonial.name}
            onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            value={testimonial.company}
            onChange={(e) => handleTestimonialChange(index, 'company', e.target.value)}
          />
          <input
            type="text"
            placeholder="Designation"
            value={testimonial.designation}
            onChange={(e) => handleTestimonialChange(index, 'designation', e.target.value)}
          />
          <textarea
            placeholder="Testimonial"
            value={testimonial.testimonial}
            onChange={(e) => handleTestimonialChange(index, 'testimonial', e.target.value)}
          ></textarea>
          {testimonials.length > 2 && (
            <button type="button" onClick={() => removeTestimonialRow(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      {testimonials.length < 4 && (
        <button type="button" onClick={addTestimonialRow}>
          Add Testimonial
        </button>
      )}
    </div>
  );
};

export default Testimonials;
