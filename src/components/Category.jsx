import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import from 'react-reveal/Roll';
import { JackInTheBox,
  // Roll, Zoom,Slide ,Bounce,Flip,Rotate,,Hinge,Fade
  } from "react-awesome-reveal";

function Category({ allCategory , filterbyCategory }) {
      //to filter by category
      const onFilter = (cat) => {
        filterbyCategory(cat);
    }
  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
      {/* <Roll> */}
        {/* <Zoom> */}
        {/* <Slide> */}
        {/* <Bounce> */}
        {/* <Flip> */}
        {/* <Rotate> */}
        <JackInTheBox>
        {/* <Hinge> */}
        {/* <Fade> */}
        {
          allCategory.length >= 1 ? (allCategory.map((cat,i) => {
            return (
              <div key={i}>
                <button onClick={() => onFilter(cat)}   style={{ border: "1px solid #b45b35" }} className="btn mx-2">{cat}</button>
              </div>
            )
          })) : (<h4>لا يوجد تصنيفات لاان</h4>)
        }
        {/* </Fade> */}
        {/* </Hinge> */}
       </JackInTheBox>
        {/* </Rotate> */}
        {/* </Flip> */}
        {/* </Bounce> */}
        {/* </Slide> */}
        {/* </Zoom> */}
        {/* </Roll> */}
      </Col>
    </Row>
  );
}

export default Category;
