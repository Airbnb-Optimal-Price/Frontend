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
                       
                        name='room_type'
                        id='roomType'
                        placeholder='Condo'
                    />
                        {touched.room_type && errors.room_type && (
                            <h5>{errors.room_type}</h5>
                        )}
                </label>
                <label className='nights'>
                        {" "}    Nights Available {" "}
                    <Field
                        type='number'
                        name='number_nights'
                        id='nights'
                        min='0'
                        placeholder='3'
                    />
                        {touched.number_nights && errors.number_nights && (
                            <h5>{errors.number_nights}</h5>
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
        mapPropsToValues({ name, room_type, number_nights }) {
            return {
                name: name || '',
                room_type: room_type || '',
                number_nights: number_nights || ''
                
            }
        }, 
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Enter the name for Your Airbnb'),
            room_type: Yup.string().required('What type of Airbnb is this?'),
            number_nights: Yup.string().required('How many nights are available')
            
        }),
        handleSubmit(values, {setStatus}){
            const cred = localStorage.getItem('token');
            const listing = {...values, users_id: Date.now()}
            console.log(cred)

            axiosWithAuth()
                .post(`/api/listings/${listing.users_id}`, cred,  listing, )
                .then(res => {
                    setStatus(res.data);
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })(DashBoard)




    export default FormikDashBoard;