import { FC, PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    as?: "h1" | "h2" | "h3";
    size?: "sm" | "md" | "lg";
    leftElement?: ReactNode;
}

const Title: FC<PropsWithChildren<Props>> = ({
    children,
    className,
    leftElement,
    size = "md",
    as = "h2",
}) => {
    const TagName = as;

    let baseClassName = "font-semibold tracking-tight";
    let sizeClassName = "text-2xl";

    switch (size) {
        case "lg":
            sizeClassName = "text-3xl";
            break;
        case "sm":
            sizeClassName = "text-xl";
            break;
    }

    let mergedClassName = cn(
        baseClassName,
        sizeClassName,
        leftElement && "flex items-center gap-2",
        className,
    );

    return (
        <TagName className={mergedClassName}>
            {leftElement}
            {children}
        </TagName>
    );
};

export default Title;
