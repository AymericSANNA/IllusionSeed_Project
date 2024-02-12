"use client";
import Link from 'next/link';
import React from 'react'
import "./footer.css"
import SocialButton from "../Buttons/SocialButton";
import TikTok from "../../src/app/Images/logo_tiktok.png";
import Instagram from "../../src/app/Images/logo_instagram.png";
import Threads from "../../src/app/Images/logo_threads.png";


function Footer() {
    return (
        <div>
            <footer className="footer-container">
            <p className="footer-IllusionSeed-title">
                <Link href="/">HappySoul Illustrate</Link>
            </p>
            <ul className="footer-social-button-list">
                {SocialButton(
                    TikTok,
                    "https://www.tiktok.com/@illusionseed",
                    "Tiktok logo"
                )}
                {SocialButton(
                    Instagram,
                    "https://www.instagram.com/illusion__seed/?hl=fr", 
                    "Instagram logo"
                )}
                {SocialButton(
                    Threads, 
                    "https://www.threads.net/@illusion__seed", 
                    "Threads logo")}
            </ul>
            <nav className="footer-nav">
                <ul className="footer-nav-sitemap">
                    <li>
                        <Link href="/Home">Home</Link>
                    </li>
                    <li>
                        <Link href="/About">About</Link>
                    </li>
                    <li>
                        <Link href="/Gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link href="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="/Sitemap">Sitemap</Link>
                    </li>
                </ul>
            </nav>
            </footer>
        </div>
    )
}

export default Footer