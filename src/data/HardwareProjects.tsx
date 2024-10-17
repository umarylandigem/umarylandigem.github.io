interface ProjectArgs {
    year: number;
    award: string;
    backText: string;
    link: string;
}

const HardwareProjects: ProjectArgs[] = [
    {
        year: 2017,
        award: "Bronze",
        backText: "A compact, affordable, and multifunctional lab-in-a-box composed of a microcentrifuge, culture shaker, incubator and vortex machines.",
        link: "https://2017.igem.org/Team:UMaryland?target=hardware",
    },
    {
        year: 2016,
        award: "Bronze",
        backText: "A DIY ultra-low freezer made of a series of Peltier plates that reaches -80 C for storing sensitive biological materials.",
        link: "https://2016.igem.org/Team:UMaryland/Hardware",
    },
    {
        year: 2015,
        award: "Bronze",
        backText: "An inexpensive thermocycler made from a hairdryer and a soda can for polymerase chain reactions.",
        link: "https://2015.igem.org/Team:UMaryland/Design",
    }
]

export default HardwareProjects
