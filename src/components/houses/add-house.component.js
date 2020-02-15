import React, { Component } from "react";
import { Col, Image, Popover } from "react-bootstrap";
import { getHouseUnsplash } from "../../api/unsplash.api";
import axios from "axios";

import FormHouse from "./form-house.component";
import addOwnerLogo from "../../assets/images/add.png";
import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

class AddHouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      housename: "",
      description: "",
      ownername: "",
      location: "",
      datePurchased: new Date(),
      imgsrc: addOwnerLogo,
      imglist: [],
      owners: [],
      loclist: []
    };

    this.handleChangeHousename = this.handleChangeHousename.bind(this);
    this.handleChangeOwnername = this.handleChangeOwnername.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeDatePurchased = this.handleChangeDatePurchased.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getHouseUnsplash().then(res => this.setState({ imglist: res }));

    axios.get("http://localhost:5000/owners/").then(res => {
      if (res.data.length > 0) {
        this.setState({
          owners: res.data.map(owner => owner.ownername)
        });
      }
    });
  }

  handleChangeHousename(e) {
    this.setState({
      housename: e.target.value
    });
  }

  handleChangeOwnername(e) {
    this.setState({
      ownername: e.target.value
    });
  }

  handleChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeLocation(e) {
    if (e !== null) {
      this.setState({
        location: e.value
      });
    }
  }

  handleChangeDatePurchased(date) {
    this.setState({
      datePurchased: date
    });
  }

  handleChangeImage(e) {
    this.setState({ imgsrc: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const house = {
      housename: this.state.housename,
      description: this.state.description,
      ownername: this.state.ownername,
      location: this.state.location,
      datePurchased: this.state.datePurchased,
      imgsrc: this.state.imgsrc
    };

    axios
      .post("http://localhost:5000/houses/add", house)
      .then(res => console.log(res.data));

    window.location = "/houses/"; //return to home page
  }

  render() {
    const buttonText = "Add House";
    let imagelist = this.state.imglist.map(src => {
      return src;
    });

    const popover = (
      <Popover id="popover-positioned-bottom">
        <Popover.Title as="h3">Choose image</Popover.Title>
        <Popover.Content>
          <Col>
            {imagelist.map(src => (
              <React.Fragment key={src.id}>
                <label>
                  <input
                    type="radio"
                    name="img"
                    value={src.urls.regular}
                    onChange={this.handleChangeImage}
                  />
                  <Image
                    src={src.urls.regular}
                    className="rounded-circle p-2 popoverImg"
                  ></Image>
                </label>
              </React.Fragment>
            ))}
          </Col>
        </Popover.Content>
      </Popover>
    );
    return (
      <React.Fragment>
        <FormHouse
          state={this.state}
          popover={popover}
          handleChangeHousename={this.handleChangeHousename}
          handleChangeDescription={this.handleChangeDescription}
          handleChangeOwnername={this.handleChangeOwnername}
          handleChangeLocation={this.handleChangeLocation}
          handleChangeDatePurchased={this.handleChangeDatePurchased}
          handleChangeImage={this.handleChangeImage}
          handleSubmit={this.handleSubmit}
          buttonText={buttonText}
          handleCountry={this.handleCountry}
        ></FormHouse>
      </React.Fragment>
    );
  }
}

export default AddHouse;
