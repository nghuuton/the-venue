import React from "react";

const Location = (props) => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d534.2767505212729!2d106.64533615185563!3d10.775158462222027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ebc6da6a6ef%3A0xd0f16bc06594a658!2sStore%20279%2F15!5e0!3m2!1sen!2s!4v1594377870566!5m2!1sen!2s"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title="Googlemap"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
