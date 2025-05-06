
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Analytics",
    href: "#features",
    description: "Data-driven insights for your business performance.",
  },
  {
    title: "Automation",
    href: "#features",
    description: "Streamline workflows with intelligent automation.",
  },
  {
    title: "Security",
    href: "#features",
    description: "Enterprise-grade protection for your data.",
  },
  {
    title: "Integration",
    href: "#features",
    description: "Connect with your existing tools seamlessly.",
  },
];

const resources = [
  {
    title: "Documentation",
    href: "#",
    description: "Comprehensive guides and API references.",
  },
  {
    title: "Case Studies",
    href: "#",
    description: "Success stories from our enterprise clients.",
  },
  {
    title: "Webinars",
    href: "#",
    description: "Learn from industry experts and our team.",
  },
  {
    title: "Blog",
    href: "#",
    description: "Latest insights and industry trends.",
  },
];

export function MainNavigationMenu() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  onClick={(e) => handleClick(e, component.href)}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  href={resource.href}
                  onClick={(e) => handleClick(e, resource.href)}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-brand-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 hover:text-white focus:bg-brand-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
