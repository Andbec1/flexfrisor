import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  PlusCircleIcon,
  ViewGridIcon,
  XIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { UserContext } from "../../lib/context";

const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: BookOpenIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Tilmeldelse",
    description: "Tilmeld dig hvad end du er frisør eller mester.",
    href: "#",
    icon: PlusCircleIcon,
  },
  {
    name: "Nyheder",
    description: "Læs mere om nye tiltag hos Flexfrisør.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "Se hvilke møder og andre begivenheder vi planlægger i nærheden af dig.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Blog",
    description: "Lær om nye spændende tiltag og underholdende historier.",
    href: "#",
    icon: BookOpenIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Sådan bliver du en bedre frisør", href: "#" },
  {
    id: 2,
    name: "Har du også styr på dine timer?",
    href: "#",
  },
  { id: 3, name: "Den rigtige saks", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, username } = useContext(UserContext);

  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <a>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/images/logos/logo.png"
                        alt=""
                      />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <a
                    href="/hairstylist"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Frisør
                  </a>
                  <a
                    href="/saloon"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Mester
                  </a>
                  <a
                    href="/about"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Om os
                  </a>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                          )}
                        >
                          <span>Mere</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-yellow-600"
                                      aria-hidden="true"
                                    />
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                              <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                <div>
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                    Nyeste Blogindlæg
                                  </h3>
                                  <ul className="mt-4 space-y-4">
                                    {recentPosts.map((item) => (
                                      <li
                                        key={item.id}
                                        className="text-base truncate"
                                      >
                                        <a
                                          href={item.href}
                                          className="font-medium text-gray-900 hover:text-gray-700"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <a
                                    href="#"
                                    className="font-medium text-yellow-600 hover:text-yellow-500"
                                  >
                                    {" "}
                                    Vis alle blogindlæg{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                {/* user is not signed OR has not created username */}
                {!username && (
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a
                      href="/enter"
                      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      Log ind
                    </a>
                    <a
                      href="/enter"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                    >
                      Opret
                    </a>
                  </div>
                )}
                {/* user is signed-in and has username */}
                {username && (
                  <>
                    <li>
                      <Link href={`/${username}`}>
                        <img
                          src={user?.photoURL}
                          className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white w-10"
                        />
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </div>

            <Transition
              show={open}
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
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <Link href="/">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/images/logos/logo.png"
                            alt="Workflow"
                          />
                        </div>
                      </Link>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-yellow-600"
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
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      <a
                        href="/hairstylist"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Frisør
                      </a>
                      <a
                        href="/saloon"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Mester
                      </a>
                      <a
                        href="/about"
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        Om os
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                      >
                        Opret
                      </a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Allerede bruger? {""}
                        <a
                          href="/login"
                          className="text-yellow-600 hover:text-yellow-500"
                        >
                          Log ind
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
