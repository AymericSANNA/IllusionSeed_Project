"use client";
import Link from 'next/link';


function Menu() {

  return (
    <div>
            <ul>
              <li>
                <Link href="/Home">Home</Link>
              </li>
              <li>
                <Link href="/About">About me</Link>
              </li>
              <li>
                <Link href="/Gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
         
        </div>

  );
}

export default Menu;
