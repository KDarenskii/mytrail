"use client";

import Link from "next/link";

import { FC, FormEvent } from "react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "../shared/Container";
import Logo from "../shared/Logo";
import Search from "../shared/Search";

const Header: FC = () => {
    return (
        <header className="pt-4 pb-6">
            <Container>
                <div className="flex items-center justify-between gap-3 mb-4">
                    <Link href="#">
                        <Logo />
                    </Link>
                    <div className="flex items-center justify-center gap-2 w-10 h-10 p-3 border-full border rounded-full cursor-pointer">
                        <Menu strokeWidth={3} />
                    </div>
                </div>
                <SearchForm />
            </Container>
        </header>
    );
};

export default Header;

function SearchForm() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form
            className="flex items-center gap-2"
            onSubmit={(event) => handleSubmit(event)}
        >
            <Search className="w-full" />
            <Button className="h-9" type="submit">
                Найти
            </Button>
        </form>
    );
}
