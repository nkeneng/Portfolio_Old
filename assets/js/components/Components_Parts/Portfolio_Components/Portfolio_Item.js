import * as React from 'react';

export const PortfolioItem = ({portfolio}) => {
    return (
        <div
            className="column is-12-mobile is-6-tablet-portrait is-6-mobile-landscape is-4-tablet is-3-desktop is-3-fullhd is-3-widescreen  is-relative">
            <div className="tiles">
                <a className="tile">
                    <img src={'../images/' + portfolio.image} alt=""/>
                    <div className="details">
                        <span className="title">{portfolio.title}</span>
                        <span>Participation</span>
                        <span
                            className="info">{portfolio.involvement ? 'Total' : 'Partial'}</span><br/>
                        <span>
                            {/*<a href={portfolio.url}>*/}
                                <button className="is-primary button send">
                                To the Website
                            </button>
                            {/*</a>*/}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};
