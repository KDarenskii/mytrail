import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
    return <div className="max-w-[800px] mx-auto px-6">{children}</div>;
};

export default Container;
