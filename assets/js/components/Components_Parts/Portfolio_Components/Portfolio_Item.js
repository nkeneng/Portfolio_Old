import * as React from 'react';

export const PortfolioItem = ({portfolio}) => {
    return (
        <div
            className="column is-12-mobile is-3-desktop is-3-fullhd is-3-widescreen is-6-tablet is-relative">
            <div className="tiles">
                <a className="tile" href="#">
                    <img src={'../images/' + portfolio.image} alt=""/>
                    <div className="details">
                        <span className="title">{portfolio.title}</span>
                        <span>Participation</span>
                        <span
                            className="info">{portfolio.involvement ? 'Total' : 'Partial'}</span><br/>
                        <span>
                            <a href="#">
                                <button className="is-priimary button send">
                                To the Website
                            </button>
                            </a>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};