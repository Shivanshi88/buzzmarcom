import React from 'react';

export const NavigationMenu = ({ children, className = "" }) => (
    <nav className={`relative z-10 flex max-w-max flex-1 items-center justify-center ${className}`}>
        {children}
    </nav>
);

export const NavigationMenuList = ({ children, className = "" }) => (
    <ul className={`group flex flex-1 list-none items-center justify-center space-x-1 ${className}`}>
        {children}
    </ul>
);

export const NavigationMenuItem = ({ children, className = "" }) => (
    <li className={`group/item relative ${className}`}>
        {children}
    </li>
);

export const NavigationMenuTrigger = ({ children, className = "" }) => (
    <button className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ${className}`}>
        {children}
    </button>
);

export const NavigationMenuContent = ({ children, className = "" }) => (
    <div className={`absolute left-0 top-full hidden group-hover/item:block w-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}>
        {children}
    </div>
);

export const NavigationMenuLink = ({ children, asChild, className = "" }) => {
    if (asChild && React.isValidElement(children)) {
        return React.cloneElement(children, {
            className: `${children.props.className || ""} ${className}`.trim(),
        });
    }
    return <a className={className}>{children}</a>;
};
