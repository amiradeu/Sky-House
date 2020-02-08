import React from "react";
import { Card, Button } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { FaUserAlt, FaCalendarDay, FaRegEdit } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import plus from "../../assets/images/plus.png";
import house from "../../assets/images/house.png";

const NewHouse = () => {
  return (
    <Card>
      <Card.Header as="h5">Add House</Card.Header>
      <Card.Img
        variant="top"
        src={plus}
        alt="house"
        className="rounded-circle m-2 mx-auto d-block"
      />

      <Card.Body className="rounded-0">
        <Card.Img
          variant="top"
          src={house}
          alt="house"
          className="m-2 mx-auto d-block"
        />
      </Card.Body>
    </Card>
  );
};

export default NewHouse;
