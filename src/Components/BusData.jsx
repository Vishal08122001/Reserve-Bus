import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AvailableBus from '../Pages/AvailableBus';

function BusData(props) {
    const { data } = props
    const [isFiltered, setisFiltered] = useState(false)

    useEffect(() => {
        if (data && data.length > 0) {
            setisFiltered(true)
        }
        else {
            setisFiltered(false)
        }
    }, [data])
    return (
        <>
            <Container className='mt-5'>
                {isFiltered ? (<AvailableBus data={data} />) : (
                    null
                )}
            </Container>
        </>
    );
}

export default BusData;
