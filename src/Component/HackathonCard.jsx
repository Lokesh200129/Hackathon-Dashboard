import { Button, Card, Alert } from 'react-bootstrap';

import { useEffect, useState } from 'react';
function HackathonCard({ name , startDate, endDate, image }) {
    const hackathonDate = new Date(startDate)
    const currentDate = Date.now()
    const timeLeft = hackathonDate.getTime() - currentDate
    
    const [alertMessage, setAlertMessage] = useState("")
    const [variant, setVariant] = useState('')
    const [clock, setClock] = useState({ hours: 0, minutes: 0, seconds: 0 })

    
    useEffect(() => {
        const counterClock = () => {
            const currentDate = Date.now()
            const timeLeft = hackathonDate.getTime() - currentDate
            if (timeLeft > 0) {
                const hours = Math.floor(timeLeft / (60 * 60 * 1000))
                const minutes = Math.floor((timeLeft / (60 * 1000)) % 60);
                const seconds = Math.floor((timeLeft / 1000) % 60);
                setClock({ hours, minutes, seconds })
            }
            else{
                setClock({ hours: 0, minutes: 0, seconds: 0 })
                clearInterval(interval)
            }
        }

        const interval = setInterval(counterClock, 1000)
        return () => clearInterval(interval);
    }, [startDate])
    
    
    useEffect(() => {
        if (timeLeft > 0 && timeLeft < 86400000) {
            setAlertMessage("Start in");
            setVariant("success");

        } else if (timeLeft > 86400000) {
            setAlertMessage("Upcoming");
            setVariant("warning");

        } else {
            setAlertMessage("Ended");
            setVariant("danger");

        }
    }, [])
    return (
        <Card className="text-center text-dark mb-sm-4  shadow-sm h-30 w-70 border border-1 rounded-top">
            <Card.Img variant='top' src={image} alt="Image" className='bg-transparent h-100' />
            <Card.Body className='bg-white rounded-bottom text-center '>
                <Alert variant={variant} className="mb-3 p-1 w-75 m-auto">{alertMessage}</Alert>
                <Card.Text className='ml-5' >
                    <p className="mb-1"><b> {name}</b></p>
                    {timeLeft > 0 && timeLeft < 86400000 ?
                        <p>{clock.hours > 9 ? clock.hours : `0${clock.hours}` } : {clock.minutes} : {clock.seconds}</p>
                        : timeLeft > 86400000 ?
                            <p className="mb-1"><b>{startDate}</b></p>
                            : <p>Ended</p>
                    }
                </Card.Text>
                <Button variant="success">
                    
                    Participate Now
                </Button>
            </Card.Body>
        </Card>
    );
}
export default HackathonCard;
