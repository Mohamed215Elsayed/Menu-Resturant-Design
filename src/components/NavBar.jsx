import React, { useState } from 'react';
import {Container, Form, Nav, Navbar} from 'react-bootstrap';

function NavBar({filterbySearch}) {

  const [searchValue, setSearchValue] = useState('');
  const onSearch = (e) => {
    e.preventDefault();
      filterbySearch(searchValue);
      // setSearchValue('');
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">
      <div className="brand-color">مطعم جديد</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="ابحث..."
            className="mx-2"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button onClick={onSearch}  className="btn-search">بحث</button>
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;