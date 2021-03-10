import React, { Component } from "react";
import {
  Container,
  ListGroup,
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
import "./styles/blogs.css";

class Blogs extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItem: "center",
          }}
        >
          <img
            alt="illustration"
            className="illustration"
            src="https://res.cloudinary.com/andreahabib/image/upload/v1615342310/AndreaBlog/BLOGS_5_wrk1hd.png"
          />
        </div>
        <Container>
          <ListGroup>
            <TransitionGroup className="row blogs">
              {items.map(({ _id, name, subtitle, imageURL, body, date }) => (
                <CSSTransition
                  key={_id}
                  timeout={500}
                  classNames="col-12 col-md-6 fade"
                >
                  <div className="group">
                    <Card className="cardeck">
                      <CardImg
                        top
                        className="imageBlog"
                        src={imageURL}
                        alt="Card image cap"
                      />
                      <CardBody className="body">
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          {subtitle}
                        </CardSubtitle>
                        <CardText className="cardText">{body}</CardText>
                        <Button className="button">Read More</Button>
                      </CardBody>
                    </Card>
                  </div>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}

Blogs.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems, deleteItem })(Blogs);
