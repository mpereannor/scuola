import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { updatePosition } from '../../state/actions/actionCreators';
import { Link, useParams } from 'react-router-dom';

const Onboard = (props) => { 
    // const { id } =  req.match.params;
    // const { id } =  useParams().id.trim()
    const {register, handleSubmit } = useForm();
    const onSubmit = (data) => props.updatePosition(data);
    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>What's your current position in School?</label>
                <select
                id="position"
                name="position"
                ref={register}
                >
                    <option
                    selected disabled hidden
                     >
                    Choose Here
                    </option>

                    <option
                    value="admin"
                    >
                    Admin
                    </option>  
                    <option
                    value="tutor"
                    >
                    Tutor
                    </option>  
                    <option
                    value="student"
                    >
                    Student
                    </option>  
                    <option
                    value="guest"
                    >
                        Guest
                    </option>  
                </select>
                <input type="submit"/>
            </form>
    )
}

export default connect((state) => state.onboard, { updatePosition})(Onboard);