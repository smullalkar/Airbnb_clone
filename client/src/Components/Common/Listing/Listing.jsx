import React, { Component } from "react";

import { Button, Pagination, Dropdown, ButtonGroup } from "react-bootstrap";

import CancellationFlexibility from '../../Common/Filters/CancellationFlexibility';
import TypeOfPlace from '../../Common/Filters/TypeOfPlace';
import PriceFilter from "../../Common/Filters/PriceFilter";
import InstantBook from "../../Common/Filters/InstantBook";

import MoreFilter from "../../Common/Filters/MoreFilter";

import styles from './Listing.module.css';
import ListItem from "./ListItem";


class Lisiting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreFilters: false
        };
    }

    handleMoreFiltersClose = () => {
        this.setState({ showMoreFilters: false })
    }


    render() {


        return (
            <div>
                <div className="d-flex flex-row mx-2">
                    <Dropdown as={ButtonGroup} className="m-2">
                        <Dropdown.Toggle className={styles.filterButton} variant="outline-secondary"> Cancellation flexibility</Dropdown.Toggle>

                        <Dropdown.Menu >
                            <CancellationFlexibility />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} className="m-2">
                        <Dropdown.Toggle className={styles.filterButton} variant="outline-secondary"> Type of Place</Dropdown.Toggle>

                        <Dropdown.Menu >
                            <TypeOfPlace />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} className="m-2">
                        <Dropdown.Toggle className={styles.filterButton} variant="outline-secondary"> Price</Dropdown.Toggle>

                        <Dropdown.Menu >
                            <PriceFilter />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown as={ButtonGroup} className="m-2">
                        <Dropdown.Toggle className={styles.filterButton} variant="outline-secondary"> Instant Book</Dropdown.Toggle>

                        <Dropdown.Menu >
                            <InstantBook />
                        </Dropdown.Menu>
                    </Dropdown>




                    <div className="  m-2"><Button className={styles.filterButton} variant="outline-secondary" onClick={() => this.setState({ showMoreFilters: true })}>More Filters</Button></div>
                    <MoreFilter show={this.state.showMoreFilters} handleMoreFiltersClose={this.handleMoreFiltersClose} />
                </div>

                <div className="d-flex flex-row   pl-5 align-items-center">
                    <h6 className={styles.alertHeading}>Check travel restrictions before booking.</h6>
                    <h6 className={`${styles.alertDesc} mx-2`}>Please review and follow government travel guidelines.</h6>
                    <h6 className="mx-2"><a className={styles.alertLink}>Learn more</a></h6>
                </div>

                <div className="mx-5 d-flex justify-content-around">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>


                <div className="mt-3 d-flex justify-content-center">
                    <Pagination>
                        <Pagination.Prev className="prevPage" />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next className="nextPage" />
                    </Pagination>
                </div>
                {/* <div className="col-12">
                    <h3> Recently browsed</h3>
                    <h6>Dates and prices have been updated to match your current search.</h6>
                </div> */}



            </div>
        );
    }
}

export default Lisiting;
