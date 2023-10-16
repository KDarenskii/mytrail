import { FC } from "react";

import Title from "@/components/shared/Title";

import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Security: FC<Props> = ({ className }) => {
    return (
        <section className={cn("py-4", className)}>
            <Title className="mb-6">Безопасность</Title>
            <ul>
                <li className="mb-5">
                    <Title as="h3" size="sm" className="mb-4">
                        Клещи
                    </Title>
                    <p className="">Небольшое описание</p>
                </li>
                <li>
                    <Title as="h3" size="sm">
                        Медведи
                    </Title>
                </li>
            </ul>
        </section>
    );
};

export default Security;
