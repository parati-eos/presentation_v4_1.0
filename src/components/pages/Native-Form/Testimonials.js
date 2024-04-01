import React, { useState } from "react";
import close from "../../Asset/close.png";

const Testimonials = ({ formData, handleChange }) => {
  const [testimonials, setTestimonials] = useState([
    { name: "", company: "", designation: "", testimonial: "" },
    { name: "", company: "", designation: "", testimonial: "" },
  ]);

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index][field] = value;
    setTestimonials(updatedTestimonials);
    handleChange({
      target: {
        name: "testimonials",
        value: updatedTestimonials,
      },
    });
  };

  const addTestimonialRow = () => {
    if (testimonials.length < 4) {
      setTestimonials([
        ...testimonials,
        { name: "", company: "", designation: "", testimonial: "" },
      ]);
    }
  };

  const removeTestimonialRow = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
    handleChange({
      target: {
        name: "testimonials",
        value: updatedTestimonials,
      },
    });
  };

  return (
    <>
      <label>
        Do you have any testimonials or success stories from these clients? List
        at least 2 of them.{" "}
      </label>
      {testimonials.map((testimonial, index) => (
        <>
          <div key={index} className="testimonial-row">
            <input
              type="text"
              placeholder={`Name ${index + 1}`}
              value={testimonial.name}
              onChange={(e) =>
                handleTestimonialChange(index, "name", e.target.value)
              }
            />
            <input
              type="text"
              placeholder={`Company ${index + 1}`}
              value={testimonial.company}
              onChange={(e) =>
                handleTestimonialChange(index, "company", e.target.value)
              }
            />
            <input
              type="text"
              placeholder={`Designation ${index + 1}`}
              value={testimonial.designation}
              onChange={(e) =>
                handleTestimonialChange(index, "designation", e.target.value)
              }
            />
            {testimonials.length > 2 && (
              <div
                className="close-button"
                type="button"
                onClick={() => removeTestimonialRow(index)}
              >
                <img src={close}></img>
              </div>
            )}
            <textarea
              placeholder={`Testimonial ${index + 1}`}
              value={testimonial.testimonial}
              onChange={(e) =>
                handleTestimonialChange(index, "testimonial", e.target.value)
              }
            ></textarea>
            <br />
          </div>
        </>
      ))}
      {testimonials.length < 4 && (
        <button
          className="add-row-button"
          type="button"
          onClick={addTestimonialRow}
        >
          Add Testimonial
        </button>
      )}
    </>
  );
};

export default Testimonials;
