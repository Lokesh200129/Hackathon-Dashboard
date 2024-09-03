
import Navbar from '../Component/Navbar'
import WelcomeSection from '../Component/WelcomeSection'
import StatsSection from '../Component/StatsSection'
import ObjectiveSection from '../Component/ObjectiveSection'
import SearchAndFiltersection from '../Component/SearchAndFiltersection'
import HackathonSection from '../Component/HackathonSection'
function LandingPage (){
    return(
        <>
            <Navbar/>
            <WelcomeSection/>
            <StatsSection/>
            <ObjectiveSection/>
            <SearchAndFiltersection/>
            <HackathonSection/>
        </>
    )
}
export default LandingPage;