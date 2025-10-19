"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Alert } from "@heroui/alert";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { Badge } from "@heroui/badge";
import { Button, ButtonGroup } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Code } from "@heroui/code";
import { Divider } from "@heroui/divider";
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader } from "@heroui/drawer";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown";
import { Image } from "@heroui/image";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { Pagination } from "@heroui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Progress } from "@heroui/progress";
import { Radio, RadioGroup } from "@heroui/radio";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Select, SelectItem } from "@heroui/select";
import { Skeleton } from "@heroui/skeleton";
import { Snippet } from "@heroui/snippet";
import { Spacer } from "@heroui/spacer";
import { Spinner } from "@heroui/spinner";
import { Switch } from "@heroui/switch";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { Tabs, Tab } from "@heroui/tabs";
import { Tooltip } from "@heroui/tooltip";
import { User } from "@heroui/user";
import { ThemeSwitcher } from "@/src/core/components/theme-switcher";

// Sample data for components
const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
];

export default function HeroUIShowcase() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [toastMessage, setToastMessage] = useState("");
  const [showToastComponent, setShowToastComponent] = useState(false);

  const showToast = () => {
    setToastMessage("This is a toast notification!");
    setShowToastComponent(true);
    setTimeout(() => {
      setShowToastComponent(false);
      setToastMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Theme switcher in top-right corner */}
          <div className="absolute top-4 right-4">
            <ThemeSwitcher />
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hero UI Component Showcase
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive collection of all Hero UI components with examples and documentation
            </p>
            <Button
              size="lg"
              color="secondary"
              variant="solid"
              className="text-lg px-8 py-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar
        onMenuOpenChange={setIsNavbarMenuOpen}
        className="border-b border-divider"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isNavbarMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">Hero UI Showcase</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#buttons">
              Buttons
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#inputs">
              Inputs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#data-display">
              Data Display
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#navigation">
              Navigation
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="primary" variant="flat">
              Documentation
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full" href="#buttons" size="lg">
              Buttons
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="#inputs" size="lg">
              Inputs
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="#data-display" size="lg">
              Data Display
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" href="#navigation" size="lg">
              Navigation
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-2xl font-bold">Table of Contents</h2>
          </CardHeader>
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Interactive Components</h3>
                <ul className="space-y-1">
                  <li><Link href="#buttons">Buttons</Link></li>
                  <li><Link href="#inputs">Inputs & Forms</Link></li>
                  <li><Link href="#modals">Modals & Overlays</Link></li>
                  <li><Link href="#navigation">Navigation</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Display</h3>
                <ul className="space-y-1">
                  <li><Link href="#data-display">Cards & Tables</Link></li>
                  <li><Link href="#avatars">Avatars & Images</Link></li>
                  <li><Link href="#indicators">Progress & Indicators</Link></li>
                  <li><Link href="#text">Text & Typography</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Layout & Feedback</h3>
                <ul className="space-y-1">
                  <li><Link href="#layout">Layout Components</Link></li>
                  <li><Link href="#feedback">Feedback Components</Link></li>
                  <li><Link href="#utilities">Utility Components</Link></li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Buttons Section */}
        <section id="buttons" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Buttons</h2>
              <p className="text-default-500">Interactive button components with various styles and states</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Basic Buttons */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Basic Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <Button color="default">Default</Button>
                  <Button color="primary">Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="danger">Danger</Button>
                </div>
              </div>

              {/* Button Variants */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="solid" color="primary">Solid</Button>
                  <Button variant="bordered" color="primary">Bordered</Button>
                  <Button variant="light" color="primary">Light</Button>
                  <Button variant="flat" color="primary">Flat</Button>
                  <Button variant="faded" color="primary">Faded</Button>
                  <Button variant="shadow" color="primary">Shadow</Button>
                  <Button variant="ghost" color="primary">Ghost</Button>
                </div>
              </div>

              {/* Button Sizes */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" color="primary">Small</Button>
                  <Button size="md" color="primary">Medium</Button>
                  <Button size="lg" color="primary">Large</Button>
                </div>
              </div>

              {/* Button Group */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Button Group</h3>
                <ButtonGroup>
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </div>

              {/* Button States */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button color="primary">Normal</Button>
                  <Button color="primary" isLoading>Loading</Button>
                  <Button color="primary" isDisabled>Disabled</Button>
                  <Button color="primary" isIconOnly>
                    ❤
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Inputs Section */}
        <section id="inputs" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Inputs & Forms</h2>
              <p className="text-default-500">Form controls and input components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Input Variants */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Input Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="Flat Input"
                    placeholder="Enter your text"
                    variant="flat"
                  />
                  <Input
                    type="text"
                    label="Bordered Input"
                    placeholder="Enter your text"
                    variant="bordered"
                  />
                  <Input
                    type="text"
                    label="Flat Input"
                    variant="flat"
                  />
                  <Input
                    type="text"
                    label="Bordered Input"
                    variant="bordered"
                  />
                  <Input
                    type="text"
                    label="Underlined Input"
                    placeholder="Enter your text"
                    variant="underlined"
                  />
                  <Input
                    type="text"
                    label="Faded Input"
                    placeholder="Enter your text"
                    variant="faded"
                  />
                </div>
              </div>

              {/* Input States */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Input States</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    label="Normal Input"
                    placeholder="Enter your text"
                  />
                  <Input
                    type="text"
                    label="Invalid Input"
                    placeholder="Enter your text"
                    isInvalid
                    errorMessage="This field is required"
                  />
                  <Input
                    type="text"
                    label="Disabled Input"
                    placeholder="Enter your text"
                    isDisabled
                  />
                  <Input
                    type="text"
                    label="Required Input"
                    placeholder="Enter your text"
                    isRequired
                  />
                </div>
              </div>

              {/* Select Component */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Select</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Select an animal"
                    placeholder="Choose an animal"
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.key}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Multiple Selection"
                    placeholder="Choose animals"
                    selectionMode="multiple"
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.key}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>

              {/* Autocomplete */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Autocomplete</h3>
                <Autocomplete
                  label="Search animals"
                  placeholder="Type to search..."
                  className="max-w-xs"
                >
                  {animals.map((animal) => (
                    <AutocompleteItem key={animal.key}>
                      {animal.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              </div>

              {/* Radio Group */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Radio Group</h3>
                <RadioGroup
                  label="Select your favorite city"
                  orientation="horizontal"
                  defaultValue="buenos-aires"
                >
                  <Radio value="buenos-aires">Buenos Aires</Radio>
                  <Radio value="sydney">Sydney</Radio>
                  <Radio value="san-francisco">San Francisco</Radio>
                  <Radio value="london">London</Radio>
                  <Radio value="tokyo">Tokyo</Radio>
                </RadioGroup>
              </div>

              {/* Switch */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Switch</h3>
                <div className="flex flex-wrap gap-4">
                  <Switch defaultSelected>Default Switch</Switch>
                  <Switch color="primary">Primary</Switch>
                  <Switch color="secondary">Secondary</Switch>
                  <Switch color="success">Success</Switch>
                  <Switch color="warning">Warning</Switch>
                  <Switch color="danger">Danger</Switch>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Data Display Section */}
        <section id="data-display" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Data Display</h2>
              <p className="text-default-500">Components for displaying data and content</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Cards */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Daily Mix</p>
                      <small className="text-default-500">12 Tracks</small>
                      <h4 className="font-bold text-large">Frontend Radio</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://nextui.org/images/hero-card-complete.jpeg"
                        width={270}
                      />
                    </CardBody>
                  </Card>

                  <Card className="max-w-[400px]">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5">
                        <Avatar
                          isBordered
                          radius="full"
                          size="md"
                          src="https://nextui.org/avatars/avatar-1.png"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                          <h4 className="text-small font-semibold leading-none text-default-600">
                            Zoey Lang
                          </h4>
                          <h5 className="text-small tracking-tight text-default-400">
                            @zoeylang
                          </h5>
                        </div>
                      </div>
                      <Button
                        className="bg-transparent text-foreground border-default-200"
                        color="primary"
                        radius="full"
                        size="sm"
                        variant="bordered"
                      >
                        Follow
                      </Button>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                      <p>
                        Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                      </p>
                    </CardBody>
                    <CardFooter className="gap-3">
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className="text-default-400 text-small">Following</p>
                      </div>
                      <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardBody>
                      <p>Simple card with just a body</p>
                    </CardBody>
                  </Card>
                </div>
              </div>

              {/* Table */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Table</h3>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <User
                            avatarProps={{ radius: "lg", src: user.avatar }}
                            description={user.email}
                            name={user.name}
                          >
                            {user.email}
                          </User>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <p className="text-bold text-sm capitalize">{user.role}</p>
                            <p className="text-bold text-sm capitalize text-default-400">
                              {user.team}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color={user.status === "active" ? "success" : "warning"}
                            size="sm"
                            variant="flat"
                          >
                            {user.status}
                          </Chip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Chips */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Chips</h3>
                <div className="flex flex-wrap gap-4">
                  <Chip>Default</Chip>
                  <Chip color="primary">Primary</Chip>
                  <Chip color="secondary">Secondary</Chip>
                  <Chip color="success">Success</Chip>
                  <Chip color="warning">Warning</Chip>
                  <Chip color="danger">Danger</Chip>
                </div>
              </div>

              {/* Code */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Code</h3>
                <div className="space-y-4">
                  <Code>npm install @heroui/react</Code>
                  <Code color="primary">const heroui = "awesome";</Code>
                  <Code color="secondary" size="lg">
                    {`import { Button } from "@heroui/react";`}
                  </Code>
                </div>
              </div>

              {/* Snippet */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Snippet</h3>
                <div className="space-y-4">
                  <Snippet>npm install @heroui/react</Snippet>
                  <Snippet hideCopyButton hideSymbol>
                    {`import { Button } from "@heroui/react";`}
                  </Snippet>
                  <Snippet variant="bordered" color="primary">
                    yarn add @heroui/react
                  </Snippet>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Avatars & Images Section */}
        <section id="avatars" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Avatars & Images</h2>
              <p className="text-default-500">Profile pictures and image components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Avatars */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Avatars</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    size="sm"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    size="md"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    size="lg"
                  />
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    isBordered
                  />
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    isBordered
                    color="primary"
                  />
                </div>
              </div>

              {/* Avatar Group */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Avatar Group</h3>
                <AvatarGroup isBordered>
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708d" />
                </AvatarGroup>
              </div>

              {/* User Component */}
              <div>
                <h3 className="text-xl font-semibold mb-4">User Component</h3>
                <div className="space-y-4">
                  <User
                    name="Jane Doe"
                    description="Product Designer"
                    avatarProps={{
                      src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    }}
                  />
                  <User
                    name="John Doe"
                    description={(
                      <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                        @jrgarciadev
                      </Link>
                    )}
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                </div>
              </div>

              {/* Images */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Image
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui.org/images/hero-card-complete.jpeg"
                  />
                  <Image
                    width={300}
                    alt="NextUI hero Image with border radius"
                    src="https://nextui.org/images/card-example-6.jpeg"
                    radius="lg"
                  />
                  <Image
                    width={300}
                    alt="NextUI Fruit Image with shadow"
                    src="https://nextui.org/images/fruit-1.jpeg"
                    isBlurred
                  />
                </div>
              </div>

              {/* Badge */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Badge</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Badge content="5" color="danger">
                    <Avatar
                      radius="md"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                  </Badge>
                  <Badge content="99+" color="danger">
                    <Avatar
                      radius="md"
                      src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    />
                  </Badge>
                  <Badge content="" color="danger" shape="circle">
                    <Avatar
                      radius="md"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </Badge>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Progress & Indicators Section */}
        <section id="indicators" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Progress & Indicators</h2>
              <p className="text-default-500">Loading states and progress indicators</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Progress */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Progress</h3>
                <div className="space-y-4">
                  <Progress
                    aria-label="Loading..."
                    value={60}
                    className="max-w-md"
                  />
                  <Progress
                    label="Downloading..."
                    size="sm"
                    value={40}
                    color="warning"
                    showValueLabel={true}
                    className="max-w-md"
                  />
                  <Progress
                    label="Upload in progress..."
                    value={75}
                    color="success"
                    showValueLabel={true}
                    className="max-w-md"
                  />
                  <Progress
                    label="Installing packages..."
                    size="lg"
                    isIndeterminate
                    aria-label="Loading..."
                    className="max-w-md"
                  />
                </div>
              </div>

              {/* Spinner */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Spinner</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Spinner />
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner color="primary" />
                  <Spinner color="secondary" />
                  <Spinner color="success" />
                  <Spinner color="warning" />
                  <Spinner color="danger" />
                </div>
              </div>

              {/* Skeleton */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Skeleton</h3>
                <div className="max-w-[300px] w-full flex items-center gap-3">
                  <div>
                    <Skeleton className="flex rounded-full w-12 h-12" />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Modals & Overlays Section */}
        <section id="modals" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Modals & Overlays</h2>
              <p className="text-default-500">Overlays, tooltips, and modal components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Modal */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Modal</h3>
                <Button onPress={onOpen}>Open Modal</Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose: () => void) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Modal Title
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="light" onPress={onClose}>
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Action
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>

              {/* Drawer */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Drawer</h3>
                <Button onPress={() => setIsDrawerOpen(true)}>
                  Open Drawer
                </Button>
                <Drawer
                  isOpen={isDrawerOpen}
                  onClose={() => setIsDrawerOpen(false)}
                  size="md"
                >
                  <DrawerContent>
                    <DrawerHeader>Drawer Title</DrawerHeader>
                    <DrawerBody>
                      <p>
                        This is the drawer content. You can put any content here.
                      </p>
                    </DrawerBody>
                    <DrawerFooter>
                      <Button
                        color="danger"
                        variant="light"
                        onPress={() => setIsDrawerOpen(false)}
                      >
                        Close
                      </Button>
                      <Button color="primary">Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>

              {/* Tooltip */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tooltip</h3>
                <div className="flex flex-wrap gap-4">
                  <Tooltip content="I am a tooltip">
                    <Button>Hover me</Button>
                  </Tooltip>
                  <Tooltip
                    content="I am a colored tooltip"
                    color="primary"
                    placement="top"
                  >
                    <Button color="primary">Top</Button>
                  </Tooltip>
                  <Tooltip
                    content="I am a warning tooltip"
                    color="warning"
                    placement="right"
                  >
                    <Button color="warning">Right</Button>
                  </Tooltip>
                  <Tooltip
                    content="I am a danger tooltip"
                    color="danger"
                    placement="bottom"
                  >
                    <Button color="danger">Bottom</Button>
                  </Tooltip>
                  <Tooltip
                    content="I am a success tooltip"
                    color="success"
                    placement="left"
                  >
                    <Button color="success">Left</Button>
                  </Tooltip>
                </div>
              </div>

              {/* Popover */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Popover</h3>
                <div className="flex flex-wrap gap-4">
                  <Popover placement="top">
                    <PopoverTrigger>
                      <Button>Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-small font-bold">Popover Content</div>
                        <div className="text-tiny">This is the popover content</div>
                      </div>
                    </PopoverContent>
                  </Popover>

                  <Popover placement="bottom" showArrow={true}>
                    <PopoverTrigger>
                      <Button>With Arrow</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-small font-bold">Arrow Popover</div>
                        <div className="text-tiny">This popover has an arrow</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Dropdown */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Dropdown</h3>
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">
                      Open Menu
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              {/* Alert */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Alert</h3>
                <div className="space-y-4">
                  <Alert
                    color="primary"
                    title="Info Alert"
                    description="This is an informational alert message."
                  />
                  <Alert
                    color="success"
                    title="Success Alert"
                    description="Your operation was completed successfully."
                  />
                  <Alert
                    color="warning"
                    title="Warning Alert"
                    description="Please check your input before proceeding."
                  />
                  <Alert
                    color="danger"
                    title="Error Alert"
                    description="An error occurred while processing your request."
                  />
                </div>
              </div>

              {/* Toast */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Toast</h3>
                <Button onPress={showToast}>Show Toast</Button>
                {showToastComponent && (
                  <div className="fixed top-4 right-4 z-50">
                    <Card className="max-w-sm">
                      <CardBody>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <div>
                            <p className="font-semibold">Toast Notification</p>
                            <p className="text-sm text-default-500">{toastMessage}</p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Navigation Section */}
        <section id="navigation" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Navigation</h2>
              <p className="text-default-500">Navigation and organizational components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Tabs */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Tabs</h3>
                <Tabs
                  selectedKey={selectedKeys.values().next().value}
                  onSelectionChange={(key: React.Key) => setSelectedKeys(new Set([key as string]))}
                >
                  <Tab key="photos" title="Photos">
                    <Card>
                      <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="music" title="Music">
                    <Card>
                      <CardBody>
                        Ut enim ad minim veniam, quis nostrud exercitation.
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab key="videos" title="Videos">
                    <Card>
                      <CardBody>
                        Excepteur sint occaecat cupidatat non proident.
                      </CardBody>
                    </Card>
                  </Tab>
                </Tabs>
              </div>

              {/* Listbox */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Listbox</h3>
                <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                  <Listbox
                    aria-label="Actions"
                    onAction={(key: React.Key) => console.log(key)}
                  >
                    <ListboxItem key="new">New file</ListboxItem>
                    <ListboxItem key="copy">Copy link</ListboxItem>
                    <ListboxItem key="edit">Edit file</ListboxItem>
                    <ListboxItem key="delete" className="text-danger" color="danger">
                      Delete file
                    </ListboxItem>
                  </Listbox>
                </div>
              </div>

              {/* Accordion */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Accordion</h3>
                <Accordion>
                  <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionItem>
                  <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionItem>
                  <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Pagination */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Pagination</h3>
                <div className="space-y-4">
                  <Pagination total={10} initialPage={1} />
                  <Pagination
                    total={10}
                    initialPage={3}
                    color="secondary"
                    showControls
                  />
                  <Pagination
                    total={10}
                    initialPage={5}
                    color="success"
                    variant="light"
                    showControls
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Layout Components Section */}
        <section id="layout" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Layout Components</h2>
              <p className="text-default-500">Structural and layout components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Divider */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Divider</h3>
                <div className="space-y-4">
                  <div>
                    <p>Above divider</p>
                    <Divider className="my-4" />
                    <p>Below divider</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>Left</p>
                    <Divider orientation="vertical" className="h-6" />
                    <p>Right</p>
                  </div>
                </div>
              </div>

              {/* Spacer */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Spacer</h3>
                <div className="flex items-center">
                  <Button>Button 1</Button>
                  <Spacer x={4} />
                  <Button>Button 2</Button>
                </div>
              </div>

              {/* Scroll Shadow */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Scroll Shadow</h3>
                <ScrollShadow className="w-[300px] h-[200px]">
                  <div className="w-[500px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                    <p>Scroll to see shadow effects</p>
                  </div>
                </ScrollShadow>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Text & Typography Section */}
        <section id="text" className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Text & Typography</h2>
              <p className="text-default-500">Text styling and keyboard components</p>
            </CardHeader>
            <CardBody className="space-y-6">
              {/* Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Links</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="#">Default Link</Link>
                  <Link href="#" color="primary">Primary Link</Link>
                  <Link href="#" color="secondary">Secondary Link</Link>
                  <Link href="#" color="success">Success Link</Link>
                  <Link href="#" color="warning">Warning Link</Link>
                  <Link href="#" color="danger">Danger Link</Link>
                  <Link href="#" isExternal showAnchorIcon>
                    External Link
                  </Link>
                </div>
              </div>

              {/* Kbd */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Keyboard (Kbd)</h3>
                <div className="flex flex-wrap gap-4">
                  <p>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open command palette</p>
                  <p>Use <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy</p>
                  <p>Press <Kbd keys={["shift", "command"]}>K</Kbd> for shortcuts</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Documentation Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Component Documentation</h2>
              <p className="text-default-500">Usage examples and implementation guides</p>
            </CardHeader>
            <CardBody className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
                <p className="mb-4">
                  This showcase demonstrates all the components available in Hero UI.
                  Each component is fully customizable and follows modern design principles.
                </p>
                
                <h4 className="text-lg font-semibold mb-2">Installation</h4>
                <Snippet>npm install @heroui/react framer-motion</Snippet>
                
                <h4 className="text-lg font-semibold mb-2 mt-4">Basic Usage</h4>
                <Code className="block whitespace-pre-wrap">
{`import { Button, Card, CardBody } from "@heroui/react";

export default function MyComponent() {
  return (
    <Card>
      <CardBody>
        <Button color="primary">
          Click me!
        </Button>
      </CardBody>
    </Card>
  );
}`}
                </Code>

                <h4 className="text-lg font-semibold mb-2 mt-4">Features</h4>
                <ul className="list-disc list-inside space-y-1 text-default-600">
                  <li>TypeScript support</li>
                  <li>Fully customizable themes</li>
                  <li>Accessibility compliant</li>
                  <li>Server-side rendering support</li>
                  <li>Tree-shaking enabled</li>
                  <li>Dark mode support</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-divider">
          <p className="text-default-500">
            Built with ❤️ using Hero UI - A modern React UI library
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="https://heroui.com" isExternal>
              Documentation
            </Link>
            <Link href="https://github.com/heroui-inc/heroui" isExternal>
              GitHub
            </Link>
            <Link href="https://discord.gg/heroui" isExternal>
              Discord
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}