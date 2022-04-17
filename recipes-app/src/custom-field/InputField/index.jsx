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
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled
    } = props;

    const { name } = field;
    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                id={name}

                // value={value}
                // onChange={onChange}  == {...field}
                // onBlur={onBlur}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </Form.Group>
    );
}

export default InputField;