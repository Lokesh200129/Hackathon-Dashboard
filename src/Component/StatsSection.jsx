import AiIcon from '../assets/icons/Group 1000002515.svg'
import ScientistsIcon from '../assets/icons/Group 1000002516.svg'
import HostIcon from '../assets/icons/Group 1000002518.svg'

function StatsSection() {
    return (
        <>
            <div>
                <figure>
                    <img src={AiIcon} alt="Icon" />
                </figure>
                <figcaption>
                    <h2>100K+</h2>
                    <p>AI model submissions</p>
                </figcaption>
            </div>
            <div>
                <figure>
                    <img src={ScientistsIcon} alt="Icon" />
                </figure>
                <figcaption>
                    <h2>50K+</h2>
                    <p>Data Scientists</p>
                </figcaption>
            </div>
            <div>
                <figure>
                    <img src={HostIcon} alt="Icon" />
                </figure>
                <figcaption>
                    <h2>100+</h2>
                    <p>AI Challenges hosted</p>
                </figcaption>
            </div>
        </>
    )
}
export default StatsSection;