import React from "react";
import { Header } from "@/components/Header";

interface props {
    children?: React.ReactNode;
}

export const Layout: React.FC<props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </ >
    )
}