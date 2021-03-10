import React, { Component } from "react";
import {
  Modal,
  Form,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    subtitle: "",
    body: "",
    imageURL: "",
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeSubtitle = (e) => {
    this.setState({ subtitle: e.target.value });
  };

  onChangeBody = (e) => {
    this.setState({ body: e.target.value });
  };

  onChangeImageURL = (e) => {
    this.setState({ imageURL: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newitem = {
      name: this.state.name,
      subtitle: this.state.subtitle,
      body: this.state.body,
      imageURL: this.state.imageURL,
    };

    this.props.addItem(newitem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          style={{ display: "none" }}
          color="success"
          className="add-btn"
          onClick={this.toggle}
        >
          Add a blog
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a blog</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Blog</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add name.."
                  onChange={this.onChangeName}
                ></Input>
                <Input
                  type="text"
                  name="subtitle"
                  id="item"
                  placeholder="Add subtitle.."
                  onChange={this.onChangeSubtitle}
                ></Input>
                <Input
                  type="text"
                  name="body"
                  id="item"
                  placeholder="Add body.."
                  onChange={this.onChangeBody}
                ></Input>
                <Input
                  type="text"
                  name="imageURL"
                  id="item"
                  placeholder="Add image url.."
                  onChange={this.onChangeImageURL}
                ></Input>
                <Button color="success" style={{ marginTop: "1rem" }} block>
                  Add a blog
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { addItem })(ItemModal);
