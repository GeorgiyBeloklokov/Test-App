import React from 'react';

const QuestionItem = (props) => {
    const { name,  setOrder } = props;

    return (
        <div className='col-12 col-md-6 px-md-2'>
            <div className='card'>
                <img
                    src={ "https://adrive.by/WebFiles/About/AboutImg4.jpg"}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    {/*<h5 className='card-title'>{name}</h5>*/}
                    <h3 className='card-text'>Base question</h3>
                    <p className='card-secondText'> First question</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: props.id,
                                name: props.name,
                                price: props.price,
                            })
                        }
                    >
                        Take test
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionItem;
