import React from 'react';
import './AddMembers.css';
import { BiPlus } from 'react-icons/bi';

const AddMembers = () => {
  return (
    <div>
      <div className="container">
        <div className="add-member">
          <h1>Team Members</h1>
          <button className="add-button">
            Add Member
            <BiPlus />
          </button>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};

export default AddMembers;
