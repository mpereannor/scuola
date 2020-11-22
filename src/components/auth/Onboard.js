import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updatePosition } from '../../state/auth';

const Onboard = (props) => { 
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