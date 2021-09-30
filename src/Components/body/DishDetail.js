import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = props => {
    return(
        <div>
            <Card style={{margin: "20px"}}>
                <CardImg top src ={props.dish.image} alt = {props.dish.name}></CardImg>
                <CardBody style = {{textAlign : 'left'}}>
                    <CardTitle><h5><strong>{props.dish.name}</strong></h5></CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price} Bdt</CardText>
                    <hr />
                    <p style={{fontWeight: "600"}}>Comments:</p>
                    <LoadComments comments = {props.dish.comments}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;