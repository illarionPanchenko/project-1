import React from 'react';
import './category-buttons.css';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const Category = (props) => {
  return(
      <div className="flex-box">
          <ButtonToolbar className="btn-toolbar toolbar" style={{marginBottom: '20px'}}>
              <ButtonGroup className="mr-2" aria-label="First group">
      <Button variant="outline-primary" onClick={()=>{props.filter('all')}}>all</Button>
      <Button variant="outline-primary" onClick={()=>{props.filter('home')}}>home</Button>
    <Button variant="outline-primary" onClick={()=>{props.filter('health')}}>health</Button>
    <Button variant="outline-primary" onClick={()=>{props.filter('baby')}}>baby</Button>
    <Button variant="outline-primary" onClick={()=>{props.filter('sport')}}>sport</Button>
              </ButtonGroup>
          </ButtonToolbar>
      </div>

  )
};

export default Category;