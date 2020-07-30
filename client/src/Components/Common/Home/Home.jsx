import React, { Component } from "react";
import { Nav, Card, CardDeck, Image } from "react-bootstrap";
import styles from "./Home.module.css";
import img1 from "../../../assets/images/1.webp";
import img2 from "../../../assets/images/2.webp";
import img3 from "../../../assets/images/3.webp";
import heroImage from "../../../assets/images/hero-image.webp";
import sm1 from "../../../assets/images/sm1.webp"
import sm2 from "../../../assets/images/sm2.jpg"
import sm3 from "../../../assets/images/sm3.webp"
import sm4 from "../../../assets/images/sm4.webp"
import SearchBar from "../Search/SearchBar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { tokenValidateUser } from "../../../Redux/authentication/actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { tokenValidateUser } = this.props
    let token = localStorage.getItem("token");
    tokenValidateUser(token)
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.heroContainer}>
          <Nav variant="tabs" className=" mb-5" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Places to stay</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Experiences</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Online Experiences</Nav.Link>
            </Nav.Item>
          </Nav>
          <SearchBar />
          <Image className={styles.heroImage} src={heroImage} />
          <div className={styles.heroContent} sm={12} md={6} lg={6}>
            <h4 className={styles.title}>Near is the New Far</h4>
            <h6 className={styles.mainPara}>
              There’s a lot to discover.
            </h6>
            <h6 className={styles.desc}>
              From home. Or a short drive away.
            </h6>
          </div>
        </div>

        <div className="mt-5 mb-5">
          <CardDeck className={styles.cardContainer}>
            <Card className={styles.card}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Online Experiences
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Unique activities to do from home, including Olympian &
                  Paralympian experiences around the world.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={`${styles.card} overlay-auto`} >
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Your Next Gateway
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Switch off or reconnect on a trip thats's just a short drive
                  away.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={styles.card}>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Entire homes
                </Card.Title>
                <Card.Text className={styles.cardText}>
                  Comfortable private places,with room for friends or family.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>

        <div className={styles.destinationList}>
          <h4 className="font-weight-bold my-5">
            Your next escape
          </h4>
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
              <span> <Image src={sm1} alt="" className={styles.placeImage} /></span>
              <span> <a className={styles.aTag} href="#">Bengaluru</a></span>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
              <span><Image src={sm2} alt="" className={styles.placeImage} /></span>
              <span> <a className={styles.aTag} href="#">Mumbai</a></span>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
              <span><Image src={sm3} alt="" className={styles.placeImage} /></span>
              <span>  <a className={styles.aTag} href="#">Pune</a></span>
            </div>
            <div className="col-12 col-lg-3 col-md-6 col-sm-12">
              <span> <Image src={sm4} alt="" className={styles.placeImage} /></span>
              <span> <a className={styles.aTag} href="#">Panaji</a></span>
            </div>
          </div>


        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  tokenValidateUser: payload => dispatch(tokenValidateUser(payload))
})

export default connect(null, mapDispatchToProps)(Home)

// export default Home;
