import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingCard from '../components/bookingCard';
import FacilityCard from '../components/facilityCard';
import TestimonialCard from '../components/testimonialcard';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import MapCard from '../components/mapCard';
import facilityimage1 from "../images/facilities/1.jpg";
import facilityimage2 from "../images/facilities/2.jpg";
import facilityimage3 from "../images/facilities/3.jpg";
import facilityimage4 from "../images/facilities/4.jpg";
import facilityimage5 from "../images/facilities/5.jpg";
import titleimage1 from "../images/title/1.jpg";
import titleimage2 from "../images/title/2.jpg";
import titleimage5 from "../images/title/5.jpg";
import logo from "../images/title/newLogo.jpg";
import RoomImages from '../components/roomImages';
import RoomCard from '../components/roomCards';
import { BsFillCupHotFill } from "react-icons/bs";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import "../css/homepage.css"; // Import your CSS file
import 'react-social-icons/whatsapp'
import { styled } from '@mui/system';
import { SocialIcon } from 'react-social-icons/component'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeTop from '../images/rooms/homeTop.svg'
import OurRoomsCarousal from '../components/OurRoomsCarousal';

const CustomChip = styled(Chip)(({ theme }) => ({
    backgroundColor: 'black',
    height: '2vw',
    '@media (max-width: 600px)': {
        height: '5vw',
    }
    // Add more styles as needed
}));

const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(1);
    const navigate = useNavigate();

    // Define your image sources
    const images = [titleimage1, titleimage2, titleimage5];
    useEffect(() => {
        const interval = setInterval(() => {
            // Change to the next image (0 to 4, then wrap around)
            setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        }, 5000); // Change image every 5 seconds (adjust as needed)

        // Clear the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);

    let p1 = "Experience the joy of swimming in our infinity-edge pool that gives you a nice picturesque view.";
    let p2 = "We have four in-house different size lawn area offering different lawn that you can choose from.";
    let p3 = "We have big and safe children play area for their happiness. People are free to enjoy their events.";
    let p4 = "We have three in-house Ac banquet hall offering different hall that you can choose from.";
    let p5 = "We have in-house restaurants offering different Indian, South, cuisines taste that you can choose.";

    const handleWhatsAppClick = (phoneNumber) => {
        // Format the phone number to remove any non-numeric characters
        const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');

        // Construct the WhatsApp URL
        const whatsappURL = `whatsapp://send?phone=${formattedPhoneNumber}`;

        // Attempt to open the WhatsApp app
        window.location.href = whatsappURL;
    };

    AOS.init();

    return (
        <div className="home-page-container">
            <div className="image-container">
                {window.innerWidth<768 ?
<img src={images[currentImage]} alt="My" className="main-image" /> :

                <img src={HomeTop} data-aos='zoom-in-up' data-aos-easing="ease-out-cubic"
                data-aos-duration="600" className="main-image" alt="not-available.."/>
                }

                <div className="booking-card">
                    <BookingCard />
                </div>
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>

                <div className='homeTopText'>
                    Discover a place you will love to live
                    </div>  

                <div className="buttons-container">
                    <button className="more-rooms-button" onClick={() => navigate('/')}>
                        Check Availability
                    </button>
                    <button className="booking-buttons" onClick={() => navigate('/rooms')}>
                        Book Now
                    </button>
                    <a href="https://www.google.com/search?q=the+haweli+resorts+bihar&rlz=1C1RXQR_enIN1065IN1065&oq=the+haweli+resorts+bihar&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB7SAQg4MTgyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x398cffda9ed112b7:0xfbd08bbf8248e7d8,3,,,,&rlimm=18145156553316558808">

                        <button className="booking-buttons">
                            Add Reviews
                        </button>
                    </a>
                </div>
            </div>
            <div className="our-rooms-title">
                <span>OUR ROOMS</span>
            </div>
             {/* <div className="rooms-section">
                <div className="room-card">
                    <RoomCard />
                </div>
                <div className="image-card">
                    <RoomImages />
                </div>
            </div>  */}
            <OurRoomsCarousal/>
            <div className="more-facilities-button">
                <button onClick={() => navigate('/rooms')}>More Rooms</button>
            </div>


<section className='facilityBox'>

            <div className="titlePage2">
                <span>Our Facilities</span>
            </div>
            <div className="facilities-section">
                <div className="facility-card"><FacilityCard header={'Swimming Pool (upcoming)'} content={p1} image={facilityimage1} /></div>
                <div className="facility-card">
                    <FacilityCard header={'Lawn Area'} content={p2} image={facilityimage2} />
                </div>
                <div className="facility-card">
                    <FacilityCard header={'Children Play Area'} content={p3} image={facilityimage3} />
                </div>
                <div className="facility-card">
                    <FacilityCard header={'Big Banquet Hall'} content={p4} image={facilityimage4} />
                </div>
            </div>
            <div className="moreFacilitiesButton">
                <button onClick={() => navigate('/facilities')}>See More <ArrowRightAltIcon/></button>
            </div>
</section>

<section className='ServiceBox'>

            <div className="titlePage3">
                <span>Hotel Services</span>
            </div>
            <div className="services-container" >
                <div className="service" data-aos='fade-in-up' data-aos-easing="ease-out-cubic"
        data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
                    <div className="service-icon"><FaCarSide /></div>
                    <div className="service-title">Travel Plan</div>
                    <div className="service-description">We at the hotel help you plan your travel to visit nearby places.</div>
                </div>

                <div className="service" data-aos='fade-in-up' data-aos-easing="ease-out-cubic"
        data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
                    <div className="service-icon"><MdOutlineFoodBank /></div>
                    <div className="service-title">Catering Service</div>
                    <div className="service-description">We at the hotel help you plan your travel to visit nearby places.</div>
                </div>

                <div className="service" data-aos='fade-in-up' data-aos-easing="ease-out-cubic"
        data-aos-duration="500" data-aos-anchor-placement="bottom-bottom">
                    <div className="service-icon"><BsFillCupHotFill /></div>
                    <div className="service-title">Multi-Cuisine Restaurant</div>
                    <div className="service-description">We at the hotel help you plan your travel to visit nearby places.</div>
                </div>
            </div>
</section>

<section className='testimonialBox'>

            <div className="titlePage3">
                <span>Testimonials</span>
            </div>
            <div className="testimonials-section">
                <div >

                <TestimonialCard number='0' />
                </div>
                <div >
                    <TestimonialCard number='1' />
                </div>
                <div >
                    <TestimonialCard number='2' />
                </div>
                <div>
                    <TestimonialCard number='3' />
                </div>
            </div>
</section>





            <div className="title-page">
                <span>Reach Us</span>
            </div>
            <div className='homepage-whatsapp-icon'>
                <SocialIcon url="www.whatsapp.com" href="https://api.whatsapp.com/send?text=Welcome+to+The+Haweli+Resort!+Thank+you%20for%20connecting%20with%20us&phone=971890521" /></div>
            <div className="reach-us-section">
                <MapCard />
                <div className="contact-details">
                    <div className="contact-title">Call Us</div>
                    <div className="phone-numbers">
                        <PhoneIcon className="phone-icon" />+91971890521
                        <div className="space">
                            <PhoneIcon className="phone-icon" />+918789618100
                        </div>
                    </div>
                    <div className="phone-number">
                        <PhoneIcon className="phone-icon" />
                        +91971890521
                    </div>
                    <div className="social-title">FOLLOW US</div>
                    <div className="social-media-links">
                        <a href="https://www.facebook.com/Thehaweliresort" target="_blank" rel="noopener noreferrer" className="social-media-link">
                            <CustomChip label={<a className="social-media-link-text"> <FaFacebook /> Facebook  </a>} />

                        </a>
                        <a href="https://www.instagram.com/thehaweliresorts/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                            <CustomChip label={<a className="social-media-link-text"> <FaInstagram /> Instagram </a>} />
                        </a>
                        <a href="https://twitter.com/thehaweliresort" target="_blank" rel="noopener noreferrer" className="social-media-link">
                            <CustomChip label={<a className="social-media-link-text"> <FaTwitter /> Twitter </a>} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
