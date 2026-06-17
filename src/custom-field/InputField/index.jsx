import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    errors: PropTypes.string,
    isInvalid: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
    errors: '',
    isInvalid: '',
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled, errors, isInvalid,
    } = props;

    const { name, value } = field;

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
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

export default InputField;