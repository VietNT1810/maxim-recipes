import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form } from 'react-bootstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
    errors: PropTypes.string,
    isInvalid: PropTypes.string,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
    errors: '',
    isInvalid: '',
}

function SelectField(props) {
    const { field, form, label, placeholder, options, errors, isInvalid } = props;
    const { name, value } = field;

    const selectedOption = options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent);
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label htmlFor={name}>{label}</Form.Label>
            <Select
                className={isInvalid}
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                options={options}
            />
            <Form.Text className="text-danger">
                {errors}
            </Form.Text>
        </Form.Group>
    );
}

export default SelectField;