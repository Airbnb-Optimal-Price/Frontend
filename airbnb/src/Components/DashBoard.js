import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup';
import styled from 'styled-components';
import {axiosWithAuth} from '../utils';

    const Div = styled.div`
    
    height: 500px;
    
    
    
    `;


    function DashBoard ({touched, errors, status}) {

        const [air, setAir] = useState([]);
        useEffect(()=>{
            status && setAir(air => [...air, status]);
        },[status]);

        return (
        <Div>
            <Form id='one'>
                <label className='name'>
                    Airbnb Name {" "}
                    <Field
                        type='text'
                        name='name'
                        id='name'
                        placeholder='New York Apartment'
                    />
                    {touched.name && errors.name && (
                        <h5>{errors.name}</h5>
                    )}
                </label>
                <label className='roomType'>
                        {" "}   Room Type {" "}
                    <Field
                        type='text'
                       
                        name='roomType'
                        id='roomType'
                        placeholder='Condo'
                    />
                        {touched.roomType && errors.roomType && (
                            <h5>{errors.roomType}</h5>
                        )}
                </label>
                <label className='nights'>
                        {" "}    Nights Available {" "}
                    <Field
                        type='number'
                        name='nights'
                        id='nights'
                        min='0'
                        placeholder='3'
                    />
                        {touched.nights && errors.nights && (
                            <h5>{errors.nights}</h5>
                        )}
                </label>
                <button type='submit'>Submit</button>
            </Form>

            {air.map(airbnb => (
                    <ul key={airbnb.id}>
                        <li>Name: {airbnb.name}</li>
                        <li>Room Type: {airbnb.roomType}</li>
                        <li>Nights available: {airbnb.nights}</li>
                    </ul>
                ))}
          
        </Div>
        )
    }
    const FormikDashBoard = withFormik({
        mapPropsToValues({ name, roomType, nights }) {
            return {
                name: name || '',
                roomType: roomType || '',
                nights: nights || ''
                
            }
        }, 
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Enter the name for Your Airbnb'),
            roomType: Yup.string().required('What type of Airbnb is this?'),
            nights: Yup.string().required('How many nights are available')
            
        }),
        handleSubmit(values, {setStatus}){
          
            const listing = {...values, id: Date.now()}
            console.log(listing)
            axiosWithAuth()
                .post(`/api/listings/${listing.id}/`, values)
                .then(res => {
                    setStatus(res.data);
                    
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })(DashBoard)




    export default FormikDashBoard;