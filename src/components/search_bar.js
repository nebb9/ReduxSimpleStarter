import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props)

        this.state = { term: '' }; 
    }
    
    // this is a controlled component
    render(){
        return(
            <div className="search-bar">
                <input
                    className="col-md-8"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;