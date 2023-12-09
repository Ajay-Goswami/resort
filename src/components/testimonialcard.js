import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import "../css/testimonialCards.css"
import { styled } from '@mui/system';
import result from "../Jsons/descriptions.json"

export default function TestimonialCard(props) {
    console.log(props)
    const CustomChip = styled(Chip)(({ theme }) => ({
        backgroundColor: 'black',
        height: '1.5vw',
        '@media (max-width: 600px)': {
          height: '3vw', 
        }
        // Add more styles as needed
      }));

    return (
        <Card className="testimonial-card" style={{boxShadow:" 0 0 2vw rgba(0, 0, 0, 0.3 )", backgroundColor:"lightyellow"}} data-aos='zoom-in-up' data-aos-easing="ease-out-cubic"
        data-aos-duration="700" data-aos-anchor-placement="center-bottom">
            <CardActionArea className="testimonial-card-container">

                <CardContent >
                    <div className="custom-title">
                        <NetworkWifiIcon />{result[props.number].title}
                    </div>
                    <div className="custom-text">
                    {result[props.number].description}
                    </div>
                    <div className='testimonial-card-chip'>
                    <CustomChip label={<a className="custom-star" href=""> ★★★★  </a>} />
                    </div>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}