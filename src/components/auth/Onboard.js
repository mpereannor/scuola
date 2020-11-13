import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { updatePosition } from '../../state/actions/actionCreators';
import { Link } from 'react-router-dom';



const Onboard = (props) => { 
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => props.updatePosition(data);
    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputLabel>What's your current position in School?</InputLabel>
                <Controller 
                name="position"
                as={Select}
                options={[
                    { value: "admin", label: "Admin" },
                    { value: "tutor", label: "Tutor" },
                    { value: "student", label: "Student" },
                    { value: "guest", label: "Guest" },
                ]}
                control={control}
                defaultValue=""
                />
                <input type="submit" />
            </form>
    )
}



const ReactHookFormSelect = ({
    name,
    label,
    control,
    defaultValue,
    children,
    ...props
  }) => {
    const labelId = `${name}-label`;
    return (
      <FormControl {...props}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Controller
          as={
            <Select labelId={labelId} label={label}>
              {children}
            </Select>
          }
          name={name}
          control={control}
          defaultValue={defaultValue}
        />
      </FormControl>
    );
  };

export default connect((state) => state.onboard, { updatePosition})(Onboard);