import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
    <Layout title="Home | Next.js + TypeScript Example">
        <p className="text-3xl flex flex-col justify-center h-full p-5">
            <Link href="/about">
                <a>My Next JS Stater</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;