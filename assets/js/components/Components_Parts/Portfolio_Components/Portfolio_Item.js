import * as React from 'react';

export const PortfolioItem = ({portfolio}) => {
    return (
        <div className="column is-12-mobile is-4-desktop is-4-fullhd is-4-widescreen is-6-tablet">
            <div className=" portfolio-box column is-relative">
                <img className="portfolio-image"
                     src="https://via.placeholder.com/300x350" alt=""/>
                <div className="hover-content  is-overlay has-text-centered">
                    <h3 className="title is-3">{portfolio.title}</h3>
                    <h4 className="title is-5">Participation</h4>
                    <p className="subtitle">{portfolio.involvement ? 'Total':'Partial'}</p>
                </div>
            </div>
        </div>
    );
};