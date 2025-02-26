import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// 모든 mock을 Header 임포트 전에 설정합니다
// Lucide React 아이콘 mock
jest.mock("lucide-react", () => ({
    AlignJustify: () => <div data-testid='align-justify-icon' />,
    CircleUserRound: () => <div data-testid='circle-user-icon' />,
    ShoppingBasket: () => <div data-testid='shopping-basket-icon' />,
}));

// Keen Slider mock
jest.mock("keen-slider/react", () => ({
    useKeenSlider: jest.fn(() => {
        // RefObject 타입을 더 명확하게 지정
        const ref = (element: HTMLElement | null) => element;
        const instance = { current: null };
        return [ref, instance];
    }),
}));

// Next.js Link 컴포넌트 mock
jest.mock("next/link", () => {
    const MockLink = ({ href, children, ...props }: { href: string; children: React.ReactNode }) => {
        return (
            <a href={href} {...props}>
                {children}
            </a>
        );
    };

    MockLink.displayName = "Link";
    return MockLink;
});

// 이제 모든 mock 설정 후 Header를 임포트합니다
import Header from "@/components/layout/Header";

describe("Header Component", () => {
    it("renders the header component correctly", () => {
        render(<Header />);

        // 로고 테스트
        expect(screen.getByText("logo")).toBeInTheDocument();
    });

    it("contains the correct links in the menu", () => {
        render(<Header />);

        // 청첩장 링크 확인
        const weddingLink = screen.getByText("청첩장").closest("a");
        expect(weddingLink).toHaveAttribute("href", "/list/mCard/wedding");

        // 감사장 링크 확인
        const thanksLinks = screen.getAllByText("감사장");
        thanksLinks.forEach((link) => {
            const anchor = link.closest("a");
            expect(anchor).toHaveAttribute("href", "/list/mCard/thanks");
        });
    });

    it("renders the expected icons", () => {
        render(<Header />);

        // 아이콘 확인
        expect(screen.getByTestId("align-justify-icon")).toBeInTheDocument();
        expect(screen.getByTestId("shopping-basket-icon")).toBeInTheDocument();
        expect(screen.getByTestId("circle-user-icon")).toBeInTheDocument();
    });
});
