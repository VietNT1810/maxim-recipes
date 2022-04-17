import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

TextareaField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

TextareaField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false
}

const handleValue = (value) => {
    return value.replace(/--/g, '').split('\n');
}

function TextareaField(props) {
    const {
        field, form,
        type, label, placeholder, disabled
    } = props;
    const { name } = field;

    const handleChange = (e) => {
        field.onChange(e)
    }


    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                id={name}
                as="textarea"

                // value={value}
                // onChange={onChange}  == {...field}
                // onBlur={onBlur}
                {...field}

                onChange={(e) => handleChange(e)}

                placeholder={placeholder}
                disabled={disabled}
            />
        </Form.Group>
    );
}

export default TextareaField;