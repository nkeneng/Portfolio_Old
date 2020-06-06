import * as React from 'react';

export const switchTheme = (theme) => {
    if (theme) {
        document.getElementsByTagName('body')[0].classList.remove("light-mode");
        document.getElementsByTagName('body')[0].classList.add("dark-mode");
    } else {
        document.getElementsByTagName('body')[0].classList.remove("dark-mode");
        document.getElementsByTagName('body')[0].classList.add("light-mode")
    }
};