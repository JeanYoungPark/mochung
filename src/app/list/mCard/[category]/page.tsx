import React from "react";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    return <div>{category} Page</div>;
}
