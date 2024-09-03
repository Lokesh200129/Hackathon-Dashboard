import { Button } from 'react-bootstrap'
import mainIcon from '../assets/icons/PicsArt_04-14-04.42 1.svg'
function WelcomeSection() {
    return (
        <>
            <div>
                <h1>Accelerate Innovation <span>With Global AI Challenge</span></h1>
                <p>AI Challenge at DPHI simulate real world problem. It is a great place to put your AI/Data science skills to test on diverse datasets allowing you to faster learning through competitions.</p>
                <Button variant='light'>Create Challenge</Button>
            </div>

            <figure>
                <img src={mainIcon} alt="Icon" />
            </figure>

        </>
    )
}
export default WelcomeSection;