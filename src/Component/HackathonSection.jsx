import { Container, Row, Col } from 'react-bootstrap';
import HackathonCard from './HackathonCard';
import '../CSS/HackathonSection.css'; 
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchAndFiltersection from './SearchAndFiltersection';

function HackathonSection() {
    const challenges = useSelector((state) => state.challenges);
    // console.log(challenges)
    const [search, setSearch] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [levelValue, setLevelValue] = useState("");

    const filteredChallenge = challenges.length > 0 ?  challenges.filter((challenge) => {
        console.log("no data found")
        const matchesSearch = challenge.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filterValue === "All" || (
            filterValue === "active" && Date.now() > new Date(challenge.startDate).getTime() && Date.now() < new Date(challenge.endDate).getTime()
        ) || (
            filterValue === "upcoming" && Date.now() < new Date(challenge.startDate)
        ) || (
            filterValue === "past" && Date.now() > new Date(challenge.endDate)
        );
        const matchesLevel = levelValue === "" || challenge.level === levelValue;
    
        return matchesSearch && matchesFilter && matchesLevel;
    }) :  null
    
    const handleFilterChange=(value)=>{setFilterValue(value)}
    const handleLevelChange =(value)=>{setLevelValue(value)}

    // console.log(filterValue)

    return (
       <>
            <SearchAndFiltersection setSearch={setSearch} handleFilterChange={handleFilterChange} handleLevelChange={handleLevelChange} />
            <Container fluid className="p-5 custom-bg-light ">
                <Row className=" m-auto  col-8">
                    {challenges.length > 0 ?  
                                        filteredChallenge.length > 0 ? 
                                                            filteredChallenge.map((item) => (
                                                                <Col xs={12} sm={6} md={4} mt-5 key={item.id} >
                                                                    <HackathonCard 
                                                                        name ={item.name}
                                                                        description={item.description}
                                                                        startDate={item.startDate}
                                                                        endDate={item.endDate}
                                                                        image={item.image}
                                                                        level={item.level}
                                                                    />
                                                                </Col>
                                                            )) : challenges.map((item) => (
                                                                <Col xs={12} sm={6} md={4} key={item.id} >
                                                                    <HackathonCard 
                                                                        name ={item.name}
                                                                        description={item.description}
                                                                        startDate={item.startDate}
                                                                        endDate={item.endDate}
                                                                        image={item.image}
                                                                        level={item.level}

                                                                    />
                                                                </Col>
                                                            ))
                    :<p>No challenges found</p>
                }
                </Row>
            </Container>
        </>    
    );
}

export default HackathonSection;
