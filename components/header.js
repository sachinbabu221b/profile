/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import { isActiveLink } from "../lib/utils";

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import logo from "../public/assets/logo.png";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { AiFillHome } from "react-icons/ai";

const solutions = [
  {
    name: "Works",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/works",
    icon: ChartBarIcon,
  },
  {
    name: "Tech Stack",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/tech",
    icon: ChartBarIcon,
  },
  {
    name: "Blogs",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/blogs",
    icon: CursorClickIcon,
  },
  {
    name: "Design",
    description: "Your customers' data will be safe and secure.",
    href: "/designs",
    icon: ShieldCheckIcon,
  },
  {
    name: "Contact",
    description: "Your customers' data will be safe and secure.",
    href: "/contact",
    icon: ShieldCheckIcon,
  },
];

export default function Header() {
  const router = useRouter();
  return (
    <Popover className="sticky top-0 z-50 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <AnimateSharedLayout>
          <div className="flex justify-between items-center  py-4 md:justify-start md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a onClick={() => router.push("/")}>
                <Image src={logo} width="48px" height="48px" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-8">
              <span>
                <a
                  onClick={() => {
                    router.push("/");
                  }}
                  data-controller="tabs"
                  data-tabs-index="1"
                >
                  <AiFillHome className=" text-base font-medium text-gray-500 hover:text-gray-900 text-2xl cursor-pointer" />
                </a>

                {isActiveLink("/", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>
              <span>
                <a
                  onClick={() => router.push("/works")}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Works
                </a>
                {isActiveLink("/works", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>
              <span>
                <a
                  onClick={() => router.push("/tech")}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Tech stack
                </a>
                {isActiveLink("/tech", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>
              <span>
                <a
                  onClick={() => router.push("/blogs")}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Blogs
                </a>
                {isActiveLink("/blogs", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>
              <span>
                <a
                  onClick={() => router.push("/designs")}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Design
                </a>
                {isActiveLink("/designs", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>

              <span>
                <a
                  onClick={() => router.push("/contact")}
                  className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                >
                  Contact
                </a>
                {isActiveLink("/contact", router.pathname) && (
                  <motion.div
                    layoutId="navigation-underline"
                    className="navigation-underline"
                    animate
                  />
                )}
              </span>
            </Popover.Group>
          </div>
        </AnimateSharedLayout>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image src={logo} width="48px" height="48px" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
