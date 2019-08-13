import React from 'react';
import './category-buttons.css';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from "react-redux";
import { category } from "../../actions";

const Category = (props) => {

    const dispatch = useDispatch();

  return(
      <div style={{ margin:"2vw"}}>
          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Category filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <LinkContainer to={'/all'}>
                  <Dropdown.Item onClick={()=>{
                      //props.filter('/all');
                      dispatch(category('/all'));
                      props.discharge();
                  }}>All</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/home'>
                  <Dropdown.Item onClick={()=>{
                      //props.filter('/home');
                      dispatch(category('/home'));
                      props.discharge();
                  }}>Home</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/health'>
                  <Dropdown.Item onClick={()=>{
                      //props.filter('/health');
                      dispatch(category('/health'));
                      props.discharge();
                  }}>Health</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/baby'>
                  <Dropdown.Item onClick={()=>{
                     // props.filter('/baby');
                      dispatch(category('/baby'));
                      props.discharge();
                  }}>Baby</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/sport'>
                  <Dropdown.Item onClick={()=>{
                     // props.filter('/sport');
                      dispatch(category('/sport'));
                      props.discharge();
                  }}>Sport</Dropdown.Item>
                  </LinkContainer>
              </Dropdown.Menu>
          </Dropdown>
      </div>

  )
};

export default Category;
