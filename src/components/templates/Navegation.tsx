import { Navbar, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarBrand } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo";
import MenuPersonal from "./MenuPersonal";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar shouldHideOnScroll>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent>
                <MenuPersonal />
            </NavbarContent>
        </Navbar>
    );
}
