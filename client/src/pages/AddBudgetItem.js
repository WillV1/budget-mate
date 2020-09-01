import React from 'react';
import NavBar from '../components/NavBar';
import AddItem from '../components/AddItem';


class AddBudgetItem extends React.Component {
    state = {
        item: ''
    };
   
    handleInputChange = (event) => {
        this.setState(event.target.value)
    }

    handleSearchSubmit = (event) => {
        this.setState({item:event.target.value})
    }
    render() {
        return (
            <div>
                <NavBar />
                    <h3>Enter Income or Expense Items Below:</h3>
                <AddItem handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit}/>
            </div> 
        )
    }
}

export default AddBudgetItem;