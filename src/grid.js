import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function Grid({card,handleChoice,flipped,disabled}){
    function handleClick(){
        if(!disabled){
            handleChoice(card);
        }    
    }
    return(
        <>
            <Col className="col pb-2" lg={3} md={3} sm={3} xs={3} >
              <Card className={flipped?"flipped":""}>
                <img 
                    className='front' 
                    src={card.src} 
                    alt="card-front" 
                ></img>
                <img 
                    className='back'
                    src='images/cover.jpg' 
                    alt='card-back' 
                    onClick={handleClick}
                ></img>
              </Card>
            </Col>
        </>
    )

}