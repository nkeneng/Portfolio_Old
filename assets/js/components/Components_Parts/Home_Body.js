import * as React from 'react';
import MobileNav from './Mobile_Nav'

export default function HomeBody() {
    return (
        <div className=" page is-12 column mt-4">
            <div id="1" className="content">
                <h2 className="title">About me</h2>
                <h4 className="has-text-black">Lorem ipsum dolor sit amet.</h4>
                <div className="mt-2">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur
                        consequuntur corporis deserunt dolor eaque earum fugit maxime,
                        molestias
                        nesciunt omnis reprehenderit sint tempore. Animi corporis omnis
                        repellat
                        similique tempora tempore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        alias,
                        autem debitis eaque enim error facilis in, iste laboriosam
                        magnam non
                        obcaecati perspiciatis praesentium quidem recusandae repudiandae
                        sequi
                        tempora? Quasi!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        alias,
                        autem debitis eaque enim error facilis in, iste laboriosam
                        magnam non
                        obcaecati perspiciatis praesentium quidem recusandae repudiandae
                        sequi
                        tempora? Quasi!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        alias,
                        autem debitis eaque enim error facilis in, iste laboriosam
                        magnam non
                        obcaecati perspiciatis praesentium quidem recusandae repudiandae
                        sequi
                        tempora? Quasi!
                    </p>
                </div>
            </div>
            <div id="3" className="content">
                <h2 className="title">Feedback</h2>
                <div id="slide1" className="m-auto feedback ">
                    <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Autem
                        eveniet possimus quod reprehenderit sequi? Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate reprehenderit sequi?
                        Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate.</p>
                    <img className="is-block m-auto" src="../Images/logo.jpg.png" alt=""/>
                </div>
                <div id="slide2" className="m-auto feedback ">
                    <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Autem
                        eveniet possimus quod reprehenderit sequi? Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate reprehenderit sequi?
                        Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate.</p>
                    <img className="is-block m-auto" src="../Images/logo.jpg.png" alt=""/>
                </div>
                <div id="slide3" className="m-auto feedback ">
                    <p className="has-text-centered">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Autem
                        eveniet possimus quod reprehenderit sequi? Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate reprehenderit sequi?
                        Blanditiis earum
                        eligendi facere hic molestiae quidem repellendus rerum! Ducimus
                        ex fugit quam quibusdam vel voluptate.</p>
                    <img className="is-block m-auto" src="../Images/logo.jpg.png" alt=""/>
                </div>
            </div>
            <div id="3" className="content">
                <h2 className="title">My Services</h2>
                <div className="columns services">
                    <div className="column has-text-centered">
                        <h3 className="title">Plugin Developement</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                A ab consectetur cupiditate earum eligendi error fugit
                                labore laborum maiores, minus modi omnis placeat quam,
                                quod, repellat sequi veritatis vitae voluptas!</p>
                        </div>
                    </div>
                    <div className="column has-text-centered">
                        <h3 className="title">Web Developement</h3>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                A ab consectetur cupiditate earum eligendi error fugit
                                labore laborum maiores, minus modi omnis placeat quam,
                                quod, repellat sequi veritatis vitae voluptas!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="2" className="content">
                <h2 className="title"> Hobbys </h2>
                <div className="columns is-mobile hobby is-multiline">
                    <div className="column is-6-mobile ">
                        <p className="has-text-centered">Gaming</p>
                        <img id="hobby-1" className="is-block m-auto"
                             alt=""/>
                    </div>
                    <div className="column is-6-mobile ">
                        <p className="has-text-centered">Movies</p>
                        <img id="hobby-2" className="is-block m-auto"
                             alt=""/>
                    </div>
                    <div className="column is-6-mobile ">
                        <p className="has-text-centered">Music</p>
                        <img id="hobby-3" className="is-block m-auto"
                             alt=""/>
                    </div>
                    <div className="column is-6-mobile ">
                        <p className="has-text-centered">Coding</p>
                        <img id="hobby-4" className="is-block m-auto"
                             alt=""/>
                    </div>
                    <div className="column is-6-mobile ">
                        <p className="has-text-centered">Sport</p>
                        <img id="hobby-5" className="is-block m-auto"
                             alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};