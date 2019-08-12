import React from 'react';
import './category-buttons.css';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Category = (props) => {

  return(
      <div style={{ margin:"2vw"}}>
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <LinkContainer to={'/all'}>
                  <Dropdown.Item onClick={()=>{
                      props.filter('/all');
                      props.discharge();
                  }}>All</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/home'>
                  <Dropdown.Item onClick={()=>{
                      props.filter('/home');
                      props.discharge();
                  }}>Home</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/health'>
                  <Dropdown.Item onClick={()=>{
                      props.filter('/health');
                      props.discharge();
                  }}>Health</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/baby'>
                  <Dropdown.Item onClick={()=>{
                      props.filter('/baby');
                      props.discharge();
                  }}>Baby</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/sport'>
                  <Dropdown.Item onClick={()=>{
                      props.filter('/sport');
                      props.discharge();
                  }}>Sport</Dropdown.Item>
                  </LinkContainer>
              </Dropdown.Menu>
          </Dropdown>
      </div>

  )
};

export default Category;
