import React, { Component } from "react";
import { Form, Button, Modal, ButtonGroup } from "react-bootstrap";
import { DateRangePicker } from "react-dates";
import search from "../../../assets/images/search.png"
import ListingSearchBar from "../ListingNavBar/ListingSearchBar"
import styles from "./ListingNavBar.module.css"

class ListingNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { showSearchModal: false }
    }

    componentDidMount() {
        let searchParams = localStorage.getItem('searchParams');
        if (searchParams) {
            searchParams = JSON.parse(searchParams);
            this.setState({ ...searchParams })
        }
    }

    handleSearchModalClose = () => {
        this.setState({ showSearchModal: false })
    }
    render() {
        const { } = this.props
        return (
            <div>

                <div className="d-flex justify-content-center">
                    <ButtonGroup className={styles.buttonGroup} size="lg" className="mb-2" onClick={() => this.setState({ showSearchModal: true })}>
                        <Button variant='outline-secondary' >{this.state.location}</Button>
                        <Button variant='outline-secondary'>{this.state.startDate}</Button>
                        <Button variant='outline-secondary'>Add guests</Button>
                    </ButtonGroup>
                    <ListingSearchBar show={this.state.showSearchModal} handleSearchModalClose={this.handleSearchModalClose} />
                </div>


            </div>
        );
    }
}

export default ListingNavBar;




