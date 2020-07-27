import React, { Component } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { DateRangePicker } from "react-dates";
import search from "../../../assets/images/search.png"
import ListingSearchBar from "../ListingNavBar/ListingSearchBar"
import styles from "./ListingNavBar.module.css"

class ListingNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { showSearchModal: false }
    }

    handleSearchModalClose = () => {
        this.setState({ showSearchModal: false })
    }
    render() {
        const { } = this.props
        return (
            <div>

                <div className="d-flex justify-content-center">
                    <div> <Button variant="outline-secondary" size="lg" className="d-flex justify-content-center" onClick={() => this.setState({ showSearchModal: true })}><img className={styles.searchImg} src={search} alt="" />Location</Button> </div>
                    <ListingSearchBar show={this.state.showSearchModal} handleSearchModalClose={this.handleSearchModalClose} />

                    <div>  <Button variant="outline-secondary" size="lg" >Date</Button></div>
                    <div>  <Button variant="outline-secondary" size="lg" >Guest</Button></div>
                </div>


            </div>
        );
    }
}

export default ListingNavBar;




