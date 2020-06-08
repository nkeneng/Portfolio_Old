import * as React from 'react';

export async function FetchPortfolio(dataType) {
    const response = await fetch('/api/' + dataType);
    return await response.json();
}

export async function SendData(name, email, message) {
    return await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
                name: name,
                email: email,
                content: message,
            }
        ),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

}