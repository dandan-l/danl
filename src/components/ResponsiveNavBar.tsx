"use client";

import { useState } from "react";
import { Contact, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Link } from "react-router-dom";
import {
  HomeButton,
  ProjectButton,
  AboutButton,
  ResumeButton,
  ContactButton,
} from "./NavBarButtons";
import svgPaths from "../imports/svg-relpazhn2a";
import svgPathsHover from "../imports/svg-0mo2bv48kr";
import svgPathsContact from "../imports/svg-jgjaeoqapy";

export function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to home page first if not already there
    window.location.hash = "#/";
    // Small delay to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById("featured-projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffdf7]/95 backdrop-blur-sm">
      {/* Background with curve */}
      {/* <div className="absolute inset-0 h-[73px] overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full min-w-[1440px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1441 73"
        >
          <path d={svgPaths.p6fc9b80} fill="#FFFDF7" />
        </svg>
      </div> */}

      <div className="container-responsive">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <HomeButton />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* projects nav button */}
            <ProjectButton />

            {/* About nav button */}
            <AboutButton />

            {/* resume nav button */}
            <ResumeButton />

            {/* Contact nav button */}
            <ContactButton />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="size-11">
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 pl-5 mt-8">
                {/* projects nav button */}
                <ProjectButton />

                {/* About nav button */}
                <AboutButton />

                {/* resume nav button */}
                <ResumeButton />

                {/* Contact nav button */}
                <ContactButton />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
