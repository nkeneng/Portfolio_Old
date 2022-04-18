import * as React from 'react';
import {FetchPortfolio} from "./Api/Api";
import {Navigation} from "./Components_Parts/Portfolio_Components/Navigation";
import {PortfolioItem} from "./Components_Parts/Portfolio_Components/Portfolio_Item";

export default class Portfolio extends React.Component {

    state = {
        currentCategory: 0,
        categories: [],
        portfolios: [],
        elements: [],
        loading: true
    };

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const portfolios = await FetchPortfolio('portfolios');
        this.setState({portfolios});

        const categories = await FetchPortfolio('categories');
        this.setState({categories}, () => this.setCategoryPortfolio());
    }

    setCategoryPortfolio() {
        const {portfolios, categories, loading} = this.state;
        const elements = portfolios.filter(
            item => item.category.title === categories[this.state.currentCategory].title)
        this.setState({elements, loading: !loading})
    };

    changeCurrentCategory = (currentCategory) => {
        // I attach a callback function on this setstate because the setState is asynchronous
        // and i need to update other things once the state changed
        this.setState({
            currentCategory: currentCategory, loading: !this.state.loading
        }, () => this.setCategoryPortfolio());
    };

    render() {
        const {categories, currentCategory, elements, loading} = this.state;
        const categoryElements = categories.map((item, key) => (
            <Navigation onCatChange={this.changeCurrentCategory} key={key}
                        isActive={key === currentCategory} id={key}
                        category={item.title}/>
        ));

        const portfolioElements = elements.map((item, key) => (
            <PortfolioItem key={key} portfolio={item}/>
        ));
        return (
            <div className="page is-12-touch is-12 column portfolio">
                <div className={"columns is- is-hidden-desktop  my-4"}></div>
                <div id="1" className="content">
                    <div className="tabs is-center is-medium is-boxed is-bordered is-toggle is-toggle-rounded">
                        <ul>
                            {categoryElements}
                        </ul>
                    </div>
                    <h2 className="title has-text-centered">{loading ? 'Loading ...' : 'Portfolio'}</h2>
                    <div className={"spin-load " + (loading ? '' : 'is-hidden')}>
                        <span className={"loader "}>
                            <span className={"loader-inner "}></span>
                        </span>
                    </div>
                    <div className="columns is-active  is-multiline">
                        {portfolioElements}
                    </div>
                </div>
            </div>
        );
    };
}
