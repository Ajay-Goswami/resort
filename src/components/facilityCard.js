import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../css/facilitycard.css"
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip'

export default function FacilityCard(props) {

    return (
        <Card className='facility-card-card' data-aos='zoom-in-up' data-aos-easing="ease-out-cubic"
        data-aos-duration="700" data-aos-anchor-placement="bottom-bottom">
            <CardActionArea className='facility-card-box'>
                <img className='facility-card-image' src={props.image} alt="My Image" />
                <CardContent>
                    <div className='facility-card-header' >
                        {props.header}
                    </div>
                    <div className='facility-card-content' >
                        {props.content}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}