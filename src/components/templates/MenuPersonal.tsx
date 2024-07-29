import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { User } from "@nextui-org/user";

export default function MenuPersonal() {
    return (
        <div className={`
            flex flex-row items-center
            mx-8
        `}>
            <Dropdown>
                <DropdownTrigger>
                    <User
                        name="Jane Doe"
                        description="Product Designer"
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Meus dados</DropdownItem>
                    <DropdownItem key="copy">Sobre</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                        Sair
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}