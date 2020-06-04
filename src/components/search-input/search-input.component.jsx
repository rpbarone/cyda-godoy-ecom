import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectItemsFromAllCollections } from '../../redux/shop/shop.selectors';
import { setCurrentSearch } from '../../redux/search/search.actions';

import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import './search-input.styles.scss';

class SearchInput extends React.Component { 
    constructor(props){
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    handleChange = e => {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { searchValue } = this.state;
        const { itemCollection, setCurrentSearch, history } = this.props;

        const itemName = itemCollection.flatMap(item => 
        Object.values(item)).map(item => item)

        const replaceSpecialChars = str => {
            str = str.replace(/[àáâãäå]/gi,"a");
            str = str.replace(/[èéêë]/gi,"e");
            str = str.replace(/[í,ì,î,ï]/gi, "i");
            str = str.replace(/[ú,ù,û,ü]/gi, "u");
            str = str.replace(/ç/gi, "c");

            return str.toLowerCase();
        }
        
        history.push(`/buscar/${searchValue}`)

        setCurrentSearch(
            itemName.filter(item => 
            replaceSpecialChars(item.name).includes(replaceSpecialChars(searchValue)))
        )

        this.setState({
            searchValue: ''
        })
    }
    
    render(){
        const { searchValue } = this.state;

        return (
            <div className='flex'>
                <form className='search' onSubmit={this.handleSubmit}>
                    <input 
                    className='search-input t' 
                    type='text' 
                    placeholder='Procure por um produto...'
                    onChange={this.handleChange}
                    value={searchValue} />
                    <button
                    className='icon main-color-bg'><SearchIcon /></button>
                </form>
            </div>
        )
    }

};

const mapStateToProps = createStructuredSelector({
    itemCollection: selectItemsFromAllCollections
})

const mapDispatchToProps = dispatch => ({
    setCurrentSearch: search => dispatch(setCurrentSearch(search))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInput));