import * as React from 'react';

const title = {
    'English': "About me",
    "Deutsch": 'Über mich',
    "Francais": 'A propos'
};

export function AboutMe({lang}) {
    const{language} = lang;
    return (
        <div className="content">
            <h2 className="title">{title[language]}</h2>
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
    );
}