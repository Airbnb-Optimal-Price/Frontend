import React, {useState, useEffect} from 'react';
import {withFormik, Field, Form} from 'formik'
import * as Yup from 'yup';
import styled from 'styled-components';
import {axiosWithAuth} from '../utils';

    const Div = styled.div`
    
    height: 500px;
   
    #one{

         display: flex;
        flex-direction: column;
    }
    
    
    `;


    function DashBoard ({touched, errors, status, values}) {

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
                <label className='accommodates'>
                        Accommodates {" "}
                        <Field
                            component='select'
                            name='accommodates'
                            id='accommodates'
                        >
                        <option>Select</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        
                        </Field>
                        {touched.accommodates && errors.accommodates && (
                            <h5>{errors.accommodates}</h5>
                        )}
                </label>
                
                <label className='bathrooms'>
                        {" "}  Bathrooms {" "}
                        <Field
                            component='select'
                            name='bathroom'
                            id='bathroom'
                        >
                        <option>Select</option>
                        <option value='1.0'>1</option>
                        <option value='1.5'>1.5</option>
                        <option value='2.0'>2</option>
                       
                        </Field>
                </label>
                    <label className='bathrooms'>
                        {" "}  Bedrooms {" "}
                        <Field
                            component='select'
                            name='bedrooms'
                            id='bedrooms'
                        >
                            <option>Select</option>
                            <option value='0.0'>0</option>
                            <option value='1.0'>1</option>
                            <option value='2.0'>2</option>
                            <option value='3.0'>3</option>

                        </Field>
                    </label>
                <label className='bathrooms'>
                        {" "}  Beds {" "}
                        <Field
                            component='select'
                            name='beds'
                            id='beds'
                        >
                        <option>Select</option>
                        
                        <option value='1.0'>1</option>
                        <option value='2.0'>2</option>
                        <option value='3.0'>3</option>
                        <option value='4.0'>4</option>
                       
                        </Field>
                </label>
                <label className='bathrooms'>
                        {" "}  Bed Types {" "}
                        <Field
                            component='select'
                            name='bed_type'
                            id='bed_type'
                        >
                        <option>Select</option>
                        
                        <option value='real bed'>Real Bed</option>
                        <option value='pull-out sofa'>Pull-Out Sofa</option>
                        <option value='futon'>Futon</option>
                        <option value='Couch'>Couch</option>
                        <option value='airbed'>Airbed</option>
                       
                        </Field>
                </label>
                <label className='instant'>
                    Instant Bookable

                    <Field
                    type='checkbox'
                    name='instant_bookable'
                    id='instant_bookable'
                    checked={values.instant_bookable}
                    />

                </label>
                    <label className='minimum_nights '>
                        {" "}   Minimum Nights {" "}
                        <Field
                            component='select'
                            name='minimum_nights '
                            id='minimum_nights '
                        >
                        <option>Select</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        
                        </Field>
                        {touched.minimum_nights && errors.minimum_nights  && (
                            <h5>{errors.minimum_nights }</h5>
                        )}
                    </label>
                    <label className='neighborhood'>
                        {" "}   Neighborhood {" "}
                        <Field
                            component='select'
                            name='neighborhood'
                            id='neighborhood'
                        >
                        <option>Select</option>
                        <option value='friedrichshain-kreuzberg'>
                        Friedrichshain-Kreuzberg
                        </option>
                        <option value='mitte'>
                        Mitte
                        </option>
                        <option value='Pankow'>
                        Pankow
                        </option>
                        <option value='Neukolln'>
                        Neukolln
                        </option> 
                        </Field>
                        {touched.neighborhood && errors.neighborhood  && (
                            <h5>{errors.neighborhood }</h5>
                        )}
                    </label>
                
                <label className='roomType'>
                        {" "}   Room Type {" "}
                    <Field
                        component='select'
                       
                        name='room_type'
                        id='room_type'
                        placeholder='Condo'
                    >
                    <option>Select</option>
                    <option value='private room'>
                    Private room
                    </option>
                    <option value='entire home/apt'>
                    Entire Home/apt
                    </option>
                    <option value='shared room'>
                    Shared room
                    </option>
                    
                    </Field>
                        {touched.room_type && errors.room_type && (
                            <h5>{errors.room_type}</h5>
                        )}
                </label>
                    <label className='wifi'>
                        WiFi
                    <Field
                            type='checkbox'
                            name='wifi'
                            checked={values.wifi}
                           
                        />
                    </label>
                
                <button type='submit'>Submit</button>
            </Form>

            {air.map(airbnb => (
                    <ul key={airbnb.id}>
                        <li>Name: {airbnb.name}</li>
                        <li>Room Type: {airbnb.room_type}</li>
                        <li>Nights available: {airbnb.minimum_nights}</li>
                    </ul>
                ))}
          
        </Div>
        )
    }
    const FormikDashBoard = withFormik({
        mapPropsToValues({ name, accommodates, bathroom, bedroom, beds, bed_types, instant_bookable, minimum_nights, neighborhood, room_type  }) {
            return {
                name: name || '',
                accommodates: accommodates || '',
                bathroom: bathroom || '',
                bedroom: bedroom || '',
                beds: beds || '',
                bed_types: bed_types || '',
                instant_bookable: instant_bookable || false,
                room_type: room_type || '',
                neighborhood: neighborhood || '',
                minimum_nights: minimum_nights || false
                
            }
        }, 
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Enter the name for Your Airbnb'),
            accommodates: Yup.string()
                .oneOf(['1', '2', '3', '4', '5', '6', '7', '8'])
                .required('How many can it accommodate?'),
                bathroom: Yup.string()
                    .oneOf(['1.0', '1.5','2.0'])
                    .required(),
                    
            
            
        }),
        handleSubmit(values, {setStatus}){
           const listings = {...values, users_id: localStorage.getItem('id')}
          console.log(values)

            axiosWithAuth()
                .post(`/api/listings/`,  listings )
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