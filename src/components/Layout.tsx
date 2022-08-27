import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
    children?: ReactNode
    title?: string
};
//"container mx-auto flex flex-wrap items-center justify-center flex-col md:flex-row max-w-200 p-5 text-gray-600 body-font bg-gray-300"
const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="h-screen flex items-center justify-center">
            <div className ="container max-w-xl h-96 bg-gray-300">
                <div className=" bg-green-300 flex justify-start p-3 ">
                    <Link href="/">
                        <a className="text-gray-800 hover:text-purple-300 py-3 px-6">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-800 hover:text-purple-300 py-3 px-6">About</a>
                    </Link>
                </div>
                {children}
            </div>
        </div>
    </div>
    
    
);

export default Layout;
