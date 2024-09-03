import NotebookIcon from '../assets/icons/carbon_notebook-reference.svg';
import PeopleIcon from '../assets/icons/Vector.svg';
import RobotIcon from '../assets/icons/Robot.svg';
import IdentificationIcon from '../assets/icons/IdentificationCard.svg';
function ObjectiveSection(){
    return(
        <>
            <h1>Why Participate in AI Challenges?</h1>
            <div>
                <div>
                    <figure>
                        <img src={NotebookIcon} alt="icon" />
                    </figure>
                    <figcaption>
                        <h3>Prove Your Skills</h3>
                        <p></p>
                    </figcaption>
                </div>
                <div>
                    <figure>
                        <img src={PeopleIcon} alt="icon" />
                    </figure>
                    <figcaption>
                        <h3>Learn From Community</h3>
                        <p></p>
                    </figcaption>
                </div> <div>
                    <figure>
                        <img src={RobotIcon} alt="icon" />
                    </figure>
                    <figcaption>
                        <h3>Challenge Yourself</h3>
                        <p></p>
                    </figcaption>
                </div> <div>
                    <figure>
                        <img src={IdentificationIcon} alt="icon" />
                    </figure>
                    <figcaption>
                        <h3>Earn Recognition</h3>
                        <p></p>
                    </figcaption>
                </div>
            </div>
        </>

    )
}
export default ObjectiveSection;