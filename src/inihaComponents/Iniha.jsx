import React, { Component } from "react";
import "./Iniha.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import iniha2 from '../inihaComponents/iniha2.jpg';
import emailjs from 'emailjs-com';
import floor1 from '../inihaComponents/floor1.jpeg';
import floor2 from '../inihaComponents/floor2.jpg';
import floor3 from '../inihaComponents/floor3.jpg';
import floor4 from '../inihaComponents/floor4.jpeg';

class Iniha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentAmount: 5000000,
      activeIndex: null,
      showPopup: false,
      showAll: false,
      isFormSubmitted: false,
      showModal: false,
      name: '',
      email: '',
      contact: '',
      isBlurred: true,
      downloadBrochure: false
    };
  }

  componentDidMount() {
    this.popupTimer = setTimeout(() => {
      this.setState({ showPopup: true });
    }, 30000);
  }
  
  componentWillUnmount() {
    clearTimeout(this.popupTimer);
  }  

  handleScroll = (event) => {
    this.setState({ investmentAmount: parseInt(event.target.value) });
  };

  calculateMonthlyReturn = (amount) => {
    return ((amount / 16500) * 95).toFixed(2);
  };

  toggleAnswer = (index) => {
    this.setState({
      activeIndex: this.state.activeIndex === index ? null : index,
    });
  };

  togglePopup = (downloadBrochure = false) => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
      downloadBrochure
    }));
  };

  toggleViewMore() {
    this.setState((prevState) => ({ showAll: !prevState.showAll }));
  }

  handleEnquireClick = () => {
    this.setState({ showModal: true });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_thnjlix',
        'template_1no6s7w',
        event.target,
        'nGnPLpooQeFE6IcsU'
      )
      .then(
        (result) => {
          alert('Form submitted and email sent successfully!');
          this.setState({ isFormSubmitted: true, showPopup: false });
          if(this.state.downloadBrochure){
            this.handleDownloadBrochure();
            this.setState({ downloadBrochure: false });
          }
        },
        (error) => {
          alert('Error sending email. Please try again.');
          console.error(error.text);
        }
      );

    this.setState({ isBlurred: false });
  };

  handleDownloadBrochure() {
    const link = document.createElement('a');
    link.href = '/INIHA_Brochure.pdf';
    link.download = 'InihaBrochure.pdf'; 
    link.click();
  }

  render() {
    const { investmentAmount } = this.state;

    const percentage = ((investmentAmount - 5000000) / (33600000 - 5000000)) * 100;

    const questions = [
      {
        question: 'What is the expected return on investment (ROI) for this project?',
        answer:
          'Iniha Business Centre offers an impressive ROI with minimum assured rental yields of 6.5% and a conservative capital appreciation of 8%, totaling a 14.5% annual return. This robust combination ensures both steady income and substantial growth potential, making Iniha a highly rewarding investment opportunity.'
      },
      {
        question: 'Can I finance my investment through loans or other financial instruments? ',
        answer:
          'Yes, of-course ! Iniha Business Centre offers a variety of financing options, including bank loans and other financial instruments, to support your investment. We can assist you in finding the best financing solutions tailored to your needs, ensuring a smooth and seamless investment experience. '
      },
      {
        question: 'Is ample parking available for tenants and visitors? ',
        answer:
          'Absolutely! Iniha Business Centre offers spacious and secure parking facilities designed to accommodate both tenants and their guests. With plenty of parking spaces and organized layouts, you and your visitors will always find convenient and hassle-free parking.'
      },
      {
        question: 'How can I schedule a site visit or tour of the project? ',
        answer:
          'Simply contact us at +91 91084 77240 or hello@bhandaryiniha.com, and our team will arrange a convenient time for your visit.'
      },
      {
        question: 'Is there a lock-in period? ',
        answer:
          'No, Iniha Business Centre does not impose a lock-in period on property owners. We believe in providing our investors with the flexibility and freedom to manage, lease, or sell their properties as they see fit, without any restrictive time frames.'
      },
      {
        question: 'Are loans available for the property?',
        answer:
          'Yes, we have established partnerships with several reputed banks to facilitate home loans, ensuring a smooth and convenient financing process for our customers.'
      }
    ];

    return (
      <div className="app">
        <header className="header">
          <div className="logo"></div>
          <nav className="nav">
            <div>RERA REG. NO.: PRM/KA/RERA/1257/334/PR/191022/005345 </div>
          </nav>
        </header>

        <section className="investment-section">
          <div className="investment-container">
            <div className="investment-info">
              <div className="text-header">
                Transforming Investments into Milestones
              </div>
              <div className="investment-stats">
                <div className="stat-item">
                  <h3>14.9%</h3>
                  <p>Target IRR</p>
                </div>
                <div className="stat-item">
                  <h3>7%</h3>
                  <p>Minimum Rental Yield</p>
                </div>
                <div className="stat-item">
                  <h3>₹50 Lacs</h3>
                  <p>Minimum Investment</p>
                </div>
                <div className="stat-item">
                  <h3>October 2025</h3>
                  <p>Handover</p>
                </div>
              </div>
            </div>

            <div className="investment-form">
              <div style={{ textAlign: "left" }} onClick={this.togglePopup}>
                <h2>Learn More</h2>
              </div>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email ID *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact No *</label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="investment-summary">
          <div className="summary-text">
            <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }}>Summary</div>
            <p>
              Explore smart investment opportunities with Iniha Business Center,
              offering a range of residential and commercial properties
              for growth.
              <br /> <br />
              With assured rental yields and modern designs, Iniha is your trusted partner for smart investments and a prosperous future.
            </p>
            <button className="download-brochure" onClick={() => this.togglePopup(true)}>Download Brochure</button>
          </div>

          <div className="investment-details">
            <div style={{ fontSize: "30px", fontWeight: "500", fontFamily: "'Coco Gothic', sans-serif" }}>Monthly Return Calculator</div>

            <div className="monthly-heading">
              Your Returns:
            </div>
            <div className="monthly-return-box">
              <p>₹{this.calculateMonthlyReturn(investmentAmount)}</p>
            </div>

            <div className="investment-range">
              <label htmlFor="investment-range">Select Investment Amount:</label>
              <input
                id="investment-range"
                type="range"
                min="5000000"
                max="33600000"
                step="1"
                value={investmentAmount}
                onChange={this.handleScroll}
                style={{
                  background: `linear-gradient(to right, #3CA2C8 ${percentage}%,rgb(255, 255, 255) ${percentage}%)`,
                }}
              />
              <p>₹{investmentAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="why-iniha-section">
          <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }}>Why Iniha Business Center?</div>
          <div className="benefits-container">
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #3CA2C8 60%, #6d86ae)" }} className="icon-container">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>High ROI</h3>
              <p>
                Experience exceptional returns with assured rental yields of 7% and a conservative capital appreciation of 7.9% Amounting to a total of 14.5% annually.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #6d86ae 60%, #92729d)" }} className="icon-container">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Assured Rentals</h3>
              <p>
                Assured rentals at ₹95 per square foot, significantly higher than the market average of ₹55 per square foot in Mangalore. Our commitment ensures steady and above-market income for property owners.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #92729d 60%, #b2628c)" }} className="icon-container">
                <i className="fas fa-building"></i>
              </div>
              <h3>Prime location</h3>
              <p>
                Located in Kudroli, Mangalore, our property offers unmatched connectivity and access to the city’s key landmarks. A prime location that guarantees consistent demand and premium rental value.
              </p>
            </div>
            <div className="benefit-item">
              <div style={{ background: "linear-gradient(90deg, #b2628c 60%, #df4977)" }} className="icon-container">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Possession in 5 Months</h3>
              <p>
                With the project reaching its final stages of completion, possession is assured within 5 months. A perfectly timed opportunity to own a ready-to-occupy property in record time.
              </p>
            </div>
          </div>
        </div>

        <div className="about-builder-section">
          <div className="about-builder-container">
            <div className="builder-info">
              <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }}>About Bhandary Builders</div>
              <p>
                With a proud legacy of over 20 years in the real estate industry, Bhandary Builders have been pivotal in shaping Mangalore’s dynamic skyline. Successfully completing 14+ projects and currently advancing 4 exciting ventures, we blend decades of expertise with a relentless passion for excellence and innovation. Our hallmark lies in delivering high-quality developments that harmoniously integrate modern architectural designs.
              </p>
              <p>
                At Bhandary Builders, transparency and trust are more than just values—they are the foundation of every project we undertake. Whether you’re looking to invest or find your perfect home, Bhandary Builders stand ready to turn your vision into reality, contributing to the vibrant growth and enduring legacy of our beloved city.
              </p>
              <button className="builder-btn" onClick={this.togglePopup}>Learn More</button>
            </div>

            <div className="builder-image">
              <img style={{ width: "600px", height: "400px" }} src={iniha2} alt="About the Builder" />
            </div>
          </div>
        </div>

        <div className="floor-plan-section">
          <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }}>Floor Plans</div>
          <div
            className={`floor-plan-images ${this.state.isBlurred ? 'blurred' : 'unblurred'
              }`}
          >
            <img src={floor1} alt="Floor Plan 1" />
            <img src={floor2} alt="Floor Plan 1" />
            <img src={floor3} alt="Floor Plan 1" />
            <img src={floor4} alt="Floor Plan 1" />
            {this.state.isBlurred && (
              <button className="explore-button" onClick={this.togglePopup}>
                Explore Now
              </button>
            )}
          </div>
        </div>

        <section class="neighborhood-section">
          <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }} class="section-title">About The Neighborhood</div>
          <p class="section-description">
            Located in the thriving heart of Mangalore, this project offers unparalleled access to a vibrant ecosystem of malls, hospitals, tech parks, and more.
          </p>

          <div class="neighborhood-grid">
            <div class="category">
              <h3 class="category-title">Transportation</h3>
              <ul class="category-list">
                <li><strong>Mangalore International Airport:</strong> Approx. 12 km</li>
                <li><strong>Mangalore Central Railway Station:</strong> Approx. 2.5 km</li>
                <li><strong>Mangalore KSRTC Bus Stand:</strong> Approx. 1.6 km</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Landmarks</h3>
              <ul class="category-list">
                <li><strong>Kudroli Temple:</strong> Approx. 500 meters</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Shopping</h3>
              <ul class="category-list">
                <li><strong>City Centre Mall:</strong> Approx. 2 km</li>
                <li><strong>Forum Fiza Mall:</strong> Approx. 2.8 km</li>
                <li><strong>Bharat Mall:</strong> Approx. 1.6 km</li>
              </ul>
            </div>

            <div class="category">
              <h3 class="category-title">Healthcare</h3>
              <ul class="category-list">
                <li><strong>KMC Hospital:</strong> Approx. 1.8 km</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="faq-section">
          <div style={{ fontSize: "50px", fontWeight: "500", fontFamily: "'Playfair Display', serif" }} className="faq-heading">Frequently Asked Questions</div>
          <div className="faq-container">
            {questions.map((item, index) => (
              <div
                key={index}
                className="faq-item"
                onClick={() => this.toggleAnswer(index)}
              >
                <div className="faq-question">
                  <i
                    className={`fas ${this.state.activeIndex === index ? 'fa-minus' : 'fa-plus'
                      }`}
                  />
                  <span>{item.question}</span>
                </div>
                {this.state.activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-option" onClick={this.togglePopup}>
            <i className="fas fa-envelope"></i>
            <span>Enquire</span>
          </div>
          <div className="contact-option" onClick={() => window.open("https://wa.me/+917204226555", "_blank")}>
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </div>
          <div className="contact-option" onClick={() => window.location.href = "tel:7204226555"}>
            <i className="fas fa-phone-alt"></i>
            <span>Call</span>
          </div>
        </div>

        {this.state.showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <span className="close-btn" onClick={this.togglePopup}>
                &times;
              </span>
              <div className="enquire-header">
                Enquire Now
              </div>
              <form className="enquiry-form" onSubmit={this.handleFormSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" placeholder="Enter your name" required
                    onChange={(e) => this.setState({ name: e.target.value })} />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" placeholder="Enter your email" required
                    onChange={(e) => this.setState({ email: e.target.value })} />
                </label>
                <label>
                  Contact:
                  <input
                    type="tel" name="contact"
                    placeholder="Enter your contact number"
                    required onChange={(e) => this.setState({ contact: e.target.value })}
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}

        <footer className="footer">
          <p>© 2024 Bhandary Iniha Business Centre. All Rights Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Iniha;