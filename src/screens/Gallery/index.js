import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Row, Col } from "react-bootstrap";

import ImageModal from "../../components/ImageModal";
import galleryImages from "../../data/galleryImagesData";
import "animate.css/animate.min.css";
import "./index.scss";

function Gallery() {
  const [modalState, setModalState] = useState(false);
  const [initIndex, setInitIndex] = useState("");
  const openModal = (index) => {
    setInitIndex(index);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const imageFocus = (indicator) => {
    let customClass = "";
    switch (indicator) {
      case "one":
        customClass += "cst-gallery-image-crop-right-medium";
        break;
      case "five":
        customClass += "cst-gallery-image-crop-right-large";
        break;
      case "nine":
        customClass += "cst-gallery-image-crop-left-medium";
        break;
      case "ten":
        customClass += "cst-gallery-image-crop-left-large";
        break;
      case "eleven":
        customClass += "cst-gallery-image-crop-right-bottom-small";
        break;
      default:
        break;
    }
    // return (customClass = customClass + " " + "cst-gallery-photo");
    return `${customClass} cst-gallery-photo`;
  };

  return (
    <div>
      <h1 className="my-5 cst-gallery-title">OUR GALLERY</h1>
      <Row className="mb-5 cst-gallery-canvas">
        {galleryImages.map((item, index) => (
          <Col key={item.indicate} md={item.wide}>
            <AnimationOnScroll
              className="cst-gallery-header-frame"
              animateIn="animate__zoomIn"
              animateOnce
            >
              <img
                onClick={() => openModal(index)}
                className={imageFocus(item.indicate)}
                src={item.image}
                alt=""
              />
            </AnimationOnScroll>
          </Col>
        ))}
      </Row>
      <ImageModal
        modalState={modalState}
        closeModal={closeModal}
        initIndex={initIndex}
        setInitIndex={setInitIndex}
      />
    </div>
  );
}

export default Gallery;
