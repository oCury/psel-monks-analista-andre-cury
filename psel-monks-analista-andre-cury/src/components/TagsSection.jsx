import React from 'react';
import './TagsSection.css';

function TagsSection() {
  return (
    <section className="tags-section">
      <div className="tags-container">
        {["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"].map((tag, index) => (
          <button key={index} className="tag-button">{tag}</button>
        ))}
      </div>
    </section>
  );
}

export default TagsSection;
