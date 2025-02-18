import { Metadata } from "next";
import React from "react";

type Props = {
    params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;

    return <div>{category} Page</div>;
}
