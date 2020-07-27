import React, { Component } from "react";
import {
  Button,
  Pagination,
  Dropdown,
  ButtonGroup,
  Modal,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import CancellationFlexibility from "../../Common/Filters/CancellationFlexibility";
import TypeOfPlace from "../../Common/Filters/TypeOfPlace";
import PriceFilter from "../../Common/Filters/PriceFilter";
import InstantBook from "../../Common/Filters/InstantBook";
import MoreFilter from "../../Common/Filters/MoreFilter";
import styles from "./Listing.module.css";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import {
  getData,
  closeCancellationFlexibility,
  getTypeOfPlace,
  getAmenities,
  getFacilities,
  getPropertyType,
} from "../../../Redux/user/actions";

class Lisiting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreFilters: false,
      obj: {},
      data: [],
    };
  }

  componentDidMount() {
    console.log("COMPONENT MOUNTED");
    const {
      getData,
      data,
      getTypeOfPlace,
      getAmenities,
      getFacilities,
      getPropertyType,
    } = this.props;
    var query = new URLSearchParams(window.location.href);
    let param = decodeURIComponent(query)
      .split("&")
      .filter((item, index) => index > 0);
    var obj = {};
    param.forEach((item) => {
      let parameter = item.split("=");
      if (!obj[parameter[0]]) {
        obj[parameter[0]] = parameter[1];
      }
    });
    getData(obj);
    getTypeOfPlace();
    getAmenities();
    getFacilities();
    getPropertyType();
    this.setState({ data: data });
  }

  componentWillReceiveProps() {
    console.log("COMPONENT RECEIVED PROPS");
    console.log(" data coming from receive ", this.props.data);
    console.log(" state data ", this.state.data);
    if (this.state.data.length === 0) {
      this.setState({ data: this.props.data }, () => {});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT DID UPDATE");
    console.log(" data coming from receive ", this.props.data);
    console.log(" state data ", this.state.data);

    if (this.state.data.length === 0 && this.props.data.length !== 0) {
      this.setState({ data: this.props.data });
    }

    if (this.state.data !== this.props.data && this.props.data.length !== 0) {
      var query = new URLSearchParams(window.location.href);
      let param = decodeURIComponent(query)
        .split("&")
        .filter((item, index) => index > 0);
      var obj = {};
      param.forEach((item) => {
        let parameter = item.split("=");
        if (!obj[parameter[0]]) {
          obj[parameter[0]] = parameter[1];
        }
      });
    }
    getData(obj);
  }
  //   handleClick =()=>{
  //       window.open(window.location.href)
  //   }

  handleMoreFiltersClose = () => {
    this.setState({ showMoreFilters: false });
  };

  render() {
    const { isLoading, showCancellationFlexibility, data } = this.props;
    const { showCancellation } = this.props;
    return (
      <div>
        {isLoading ? (
          <>
            <div className="d-flex flex-row mx-2">
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Cancellation flexibility
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <CancellationFlexibility />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Type of Place
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <TypeOfPlace />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Price
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <PriceFilter />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} className="m-2">
                <Dropdown.Toggle
                  className={styles.filterButton}
                  variant="outline-secondary"
                >
                  {" "}
                  Instant Book
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <InstantBook />
                </Dropdown.Menu>
              </Dropdown>
              <div className="  m-2">
                <Button
                  className={styles.filterButton}
                  variant="outline-secondary"
                  onClick={() => this.setState({ showMoreFilters: true })}
                >
                  More Filters
                </Button>
              </div>
              <MoreFilter
                show={this.state.showMoreFilters}
                handleMoreFiltersClose={this.handleMoreFiltersClose}
              />
            </div>

            <div className="d-flex flex-row   pl-5 align-items-center">
              <h6 className={styles.alertHeading}>
                Check travel restrictions before booking.
              </h6>
              <h6 className={`${styles.alertDesc} mx-2`}>
                Please review and follow government travel guidelines.
              </h6>
              <h6 className="mx-2">
                <a className={styles.alertLink}>Learn more</a>
              </h6>
            </div>

            <div className="mx-5 d-flex justify-content-around">
              {data &&
                data.map((item) => (
                  <Col key={uuidv4()} className="m-1">
                    <ListItem item={item} />
                  </Col>
                ))}
            </div>

            <div className="mt-3 d-flex justify-content-center">
              {/* <Pagination>
                <Pagination.Prev className="prevPage" />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next className="nextPage" />
              </Pagination> */}
            </div>
          </>
        ) : (
          <>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered={true}
              show={true}
            >
              <Modal.Body>
                <Row className="text-center">
                  <Col>
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.userReducer.data,
  isLoading: state.userReducer.isLodaing,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
  closeCancellationFlexibility: () => dispatch(closeCancellationFlexibility()),
  getTypeOfPlace: () => dispatch(getTypeOfPlace()),
  getAmenities: () => dispatch(getAmenities()),
  getFacilities: () => dispatch(getFacilities()),
  getPropertyType: () => dispatch(getPropertyType()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Lisiting);
