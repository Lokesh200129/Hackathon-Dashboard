import { Button } from 'react-bootstrap';
import {Alert} from 'react-bootstrap';
import CorrectIcon from '../assets/icons/Correct_icon.png'
import ing from '../assets/cardimage/Group 1000002767.png'
function HackathonCard (){
    return(
        <div >
            <figure>
                <img  src={ing} alt="Image" />
            </figure>

            <figcaption>
                <Alert variant='success'>Success</Alert>
                <p><b>Ends In</b></p>
                <p>Time</p>
            </figcaption>
            <Button variant='success'> <img src={CorrectIcon} alt="Icon" /> Participate Now</Button>
        </div>
    )

}
export default HackathonCard;