import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

FileInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

FileInput.defaultProps = {
    name: '',
    label: '',
    onChange: null
}

function FileInput(props) {
    const { name, label, onChange } = props;

    const handleChange = (e) => {
        if (!onChange) return;
        onChange(e)
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Form.Control
                type="file"
                id={name}
                onChange={(e) => handleChange(e)}
            />
        </Form.Group>
    );
}

export default FileInput;