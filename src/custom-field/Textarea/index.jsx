import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

Textarea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

Textarea.defaultProps = {
    name: '',
    label: '',
    onChange: null
}

function Textarea(props) {
    const { name, label, onChange } = props;

    const handleChange = (e) => {
        if (!onChange) return;
        onChange(e)
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                id={name}
                as="textarea"
                onChange={(e) => handleChange(e)}
            />
        </Form.Group>
    );
}

export default Textarea;