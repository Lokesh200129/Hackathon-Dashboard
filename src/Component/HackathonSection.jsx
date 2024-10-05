import { Container, Row, Col } from 'react-bootstrap';
import HackathonCard from './HackathonCard';
import '../CSS/HackathonSection.css'; 
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchAndFiltersection from './SearchAndFiltersection';

function HackathonSection() {
    const challenges = useSelector((state) => state.challenges);
    // console.log(myData)
    const [search, setSearch] = useState("");
    console.log(search)
    const filteredChallenge = challenges.filter((challenge) => challenge.name.toLowerCase().includes(search.toLowerCase()))
    return (
       <>
            <SearchAndFiltersection setSearch={setSearch} />
            <Container fluid className="p-5 custom-bg-light ">
                <Row className=" m-auto  col-8">
                    {/* Render 6 or 7 HackathonCard components */}
                    { filteredChallenge.length > 0 ? 
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
                    }
                </Row>
            </Container>
        </>    
    );
}

export default HackathonSection;
