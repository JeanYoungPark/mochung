import React from "react";

export default function CategoryPage({ params }: { params: { category: string } }) {
    return <div>{params.category} Page</div>;
}
