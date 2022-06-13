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

function TextareaField(props) {
    const {
        field,
        type, label, placeholder, disabled, errors, isInvalid,
    } = props;

    const { name } = field;
    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                as="textarea"
                id={name}
                className={isInvalid}
                // value={value}
                // onChange={onChange}  == {...field}
                // onBlur={onBlur}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
            <Form.Text className="text-danger">
                {errors}
            </Form.Text>
        </Form.Group>
    );
}

export default TextareaField;