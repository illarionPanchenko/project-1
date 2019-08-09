import React from 'react';
import './category-buttons.css';
import { Dropdown } from 'react-bootstrap';

const Category = (props) => {
  return(
      <div style={{ margin:"20px"}}>
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>{props.filter('all')}}>All</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{props.filter('home')}}>Home</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{props.filter('health')}}>Health</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{props.filter('baby')}}>Baby</Dropdown.Item>
                  <Dropdown.Item onClick={()=>{props.filter('sport')}}>Sport</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
      </div>

  )
};

export default Category;