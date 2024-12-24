import React from "react";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <ul className="navigaton">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Page</Link></li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
        </>
    )
}