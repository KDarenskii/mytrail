import Link from "next/link";

import { FC } from "react";

import Container from "../shared/Container";
import { Button } from "../ui/button";

const navLinks: string[] = [
    "Поиск",
    "О проекте",
    "Политика конфиденциальности",
    "Условия и положения",
];

const Footer: FC = () => {
    return (
        <footer className="py-8">
            <Container>
                <nav className="border-y py-4">
                    <ul className="flex gap-4 flex-wrap">
                        {navLinks.map((link) => (
                            <li
                                className="border-r pr-4 last:border-0"
                                key={link}
                            >
                                <Link className="hover:underline" href="#">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-between gap-4 pt-4">
                    <div>
                        <h6 className="text-[1.125rem] font-semibold">
                            MyTrail Beta
                        </h6>
                        <p className="opacity-50">© 2020–2021</p>
                    </div>
                    <Button variant="secondary">Написать нам</Button>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
