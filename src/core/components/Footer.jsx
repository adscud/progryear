import React from 'react'
import './Footer.jsx.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-text">Simple site to know where we are in percentage during the year!</p>
            <p className="footer-text">
                Made by&nbsp;
                <a
                    href="http://github.com/adscud"
                    className="footer-link"
                    target="_blank"
                >
                    adscud 🧑🏻‍💻
                </a>
            </p>
        </footer>
    )
}
