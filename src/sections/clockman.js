import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import clockman from "../assets/clockman.jpg";
import KAM27146 from "../assets/categories/KAM27146.webp"
import RAAK0403N10B from "../assets/categories/RA-AK0403N10B.webp"
import AN360059L from "../assets/categories/AN3600-59L.webp"

const ClockMan = () => {
    return (
        <Container className='mt-4'>
            <Card>
                <Row>
                    <Col md={6}>
                        <div>
                            <a href='/shop/?gender=3'><img src={ clockman } alt="Купить мужские часы в Алматы" width='100%' /></a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <p style={{paddingBottom: 10, paddingTop: 10, textAlign: 'center', fontSize: 17}}>Большой выбор ассортимент моделей мужских часов от традиционных классических до инновационных спортивных.</p>
                            <img src={ AN360059L} alt="Купить Citizen FET0P004W0 в Алматы" width='34%' style={{marginRight: '3%'}}/>
                            <img src={ KAM27146 } alt="Купить Calvin Klein KAM27146 в Алматы" width='27%' style={{marginRight: '3%'}}/>
                            <img src={ RAAK0403N10B } alt="Купить Orient FET0P004W0 в Алматы" width='30%'/>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ClockMan