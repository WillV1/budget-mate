import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'

const AddItem = (props) => {

    return (
        <div>
            <InputGroup className="mb-3">
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                >
                    <Dropdown.Item href="#">Income</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Expense</Dropdown.Item>
                </DropdownButton>
                <FormControl onChange={props.handleInputChange} onSubmit={props.handleSearchSubmit} placeholder="Add item here" aria-describedby="basic-addon1" />
            </InputGroup>

        </div>
    )
}

export default AddItem;