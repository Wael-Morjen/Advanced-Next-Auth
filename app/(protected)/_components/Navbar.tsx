'use client';

import UserButton from "@/components/auth/UserButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
            <div className="flex gap-x-2">
                <Button
                    asChild
                    variant={pathname === "/server" ? 'default' : "outline"}
                >
                    <Link href="/server">
                        Server
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/client" ? 'default' : "outline"}
                >
                    <Link href="/client">
                        Client
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/admin" ? 'default' : "outline"}
                >
                    <Link href="/admin">
                        Admin
                    </Link>
                </Button>
                <Button
                    asChild
                    variant={pathname === "/settings" ? 'default' : "outline"}
                >
                    <Link href="/settings">
                        Settings
                    </Link>
                </Button>
            </div>
            <p>
                <UserButton />
            </p>
        </nav>
    );
}
 
export default Navbar;
