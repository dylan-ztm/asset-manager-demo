import React, { Component } from 'react';

// Form Component
class Form extends Component {
    initialState = {
        tagNumber:      '',
        itemType:       'Laptop',
        status:         'In Stock',
        location:       '',
        serialNumber:   '',
    }

    state = this.initialState;

    // handleChange
    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        });
    } //end handleChange

    //submitForm
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    } //end SubmitForm

    render() {
        const { tagNumber, itemType, status, location, serialNumber } = this.state;

        return (
            <form>
                <label htmlFor="tagNumber">Tag Number</label>
                <input
                    type="text"
                    name="tagNumber"
                    id="tagNumber"
                    value={tagNumber}
                    onChange={this.handleChange}
                />

                <label htmlFor="serialNumber">Serial Number</label>
                <input
                    type="text"
                    name="serialNumber"
                    id="serialNumber"
                    value={serialNumber}
                    onChange={this.handleChange}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    value={location}
                    onChange={this.handleChange}
                />

                <label htmlFor="itemType">Select Item Type:</label>
                <select id="itemType" name="itemType" value={itemType} onChange={this.handleChange}>
                    <option value="Computer">Computer</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Network Device">Network Device</option>
                    <option value="Server">Server</option>
                </select>

                <label htmlFor="status">Select Inventory Status:</label>
                <select id="status" name="status" value={status} onChange={this.handleChange}>
                    <option value="Active">Active</option>
                    <option value="In Stock">In Stock</option>
                    <option value="Pending Surplus">Pending Surplus</option>
                </select>

                <input type="button" value="Save Asset" onClick={this.submitForm} />
            </form>
        );
    } //end render
} //end Form Component

export default Form;
