import { Link } from "react-router-dom";

import {
    faLocationDot,
    faDumbbell,
    faUser,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Dumbbell,
    Target,
    Trophy,
    HeartPulse,
    Users,
    Apple,
    MapPin,
    Phone,
    Mail,
    Globe,
    Send,
} from "lucide-react";

import Image from "./brandassests/Modern Industrial Gym with Orange Accents.png";
import Logo from "./brandassests/Kinesis-Care.png";

function KinesisCare() {

    const stats = [
        { icon: faLocationDot, value: "3", label: "Branches" },
        { icon: faDumbbell, value: "10+", label: "Training Programs" },
        { icon: faUser, value: "5,000+", label: "Members" },
        { icon: faStar, value: "4.9", label: "Member Rating" },
    ];

    const features = [
        {
            icon: Dumbbell,
            title: "Modern Training Facilities",
            desc: "Train with quality equipment in a premium fitness environment.",
        },
        {
            icon: Target,
            title: "Personalised Fitness Goals",
            desc: "Stay focused with training that supports your fitness journey.",
        },
        {
            icon: Trophy,
            title: "Results-Driven Approach",
            desc: "Build strength, confidence and consistency with every workout.",
        },
    ];

    const services = [
        {
            number: "01",
            title: "Personal Training",
            subtitle: "TRAIN WITH PURPOSE",
            description:
                "Get personalised workout plans designed around your fitness goals, fitness level and lifestyle.",
            details:
                "Our training approach helps you build strength, improve performance and stay consistent.",
            image:
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
            icon: Dumbbell,
        },
        {
            number: "02",
            title: "Group Fitness",
            subtitle: "ENERGY. MOTIVATION. RESULTS.",
            description:
                "Experience the power of training together through engaging and energetic group workout sessions.",
            details:
                "Stay motivated, challenge yourself and enjoy every step of your fitness journey.",
            image:
                "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=90",
            icon: Users,
        },
        {
            number: "03",
            title: "Physiotherapy",
            subtitle: "RECOVER STRONGER",
            description:
                "Support your recovery with personalised physiotherapy and movement-focused care.",
            details:
                "Work towards better mobility, improved movement and a confident return to activity.",
            image:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",
            icon: HeartPulse,
        },
        {
            number: "04",
            title: "Nutrition Guidance",
            subtitle: "FUEL YOUR POTENTIAL",
            description:
                "Build healthier eating habits with nutrition guidance that complements your workout routine.",
            details:
                "Make informed food choices and create a balanced approach to your fitness goals.",
            image:
                "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=90",
            icon: Apple,
        },
    ];

    const contactDetails = [
        {
            icon: MapPin,
            title: "Our Location",
            value: "Chennai, Tamil Nadu",
        },
        {
            icon: Globe,
            title: "Address",
            value: "Your Business Address",
        },
        {
            icon: Phone,
            title: "Phone Number",
            value: "+91 XXXXX XXXXX",
        },
        {
            icon: Mail,
            title: "Email Address",
            value: "info@kinesiscare.com",
        },
    ];

    return (
        <main className="w-full max-w-full overflow-x-hidden bg-[#050505]">

            {/* ================= HERO SECTION ================= */}

            <section className="relative isolate mx-auto min-h-[600px] w-full overflow-hidden border border-white/10 bg-[#050505] px-4 py-8 shadow-[0_0_35px_rgba(0,183,197,0.12)] sm:min-h-[650px] sm:px-8 sm:py-10 lg:min-h-[520px] lg:px-16">

                {/* Top Gradient Border */}
                <div className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00B7C5] to-transparent shadow-[0_0_12px_#00B7C5]" />

                {/* Background Image */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        src={Image}
                        alt="Kinesis Care Fitness Interior"
                        className="h-full w-full object-cover object-center opacity-100 transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex min-h-[440px] items-center py-12 sm:min-h-[500px] lg:min-h-[440px]">

                    <div className="ml-0 mt-8 w-full max-w-xl sm:ml-4 sm:mt-12 lg:ml-8 lg:mt-0">

                        <h1 className="font-philosopher text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
                            MOVE BETTER.

                            <span className="mt-2 block font-philosopher text-6xl text-[#00B7C5] sm:text-7xl lg:text-8xl">
                                LIVE
                            </span>

                            <span className="block font-philosopher text-6xl text-white sm:text-7xl lg:text-8xl">
                                STRONGER.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md font-poppins text-sm leading-relaxed text-gray-300 sm:text-base">
                            A premium wellness experience designed for
                            movement, strength and long-term wellbeing.
                        </p>

                        <Link
                            to="/contact"
                            className="
                                group mt-6 inline-flex items-center gap-3
                                rounded-full bg-gradient-to-r from-[#00B7C5] to-[#00D0D8]
                                px-6 py-3 text-sm font-bold text-black
                                shadow-[0_5px_20px_rgba(0,183,197,0.3)]
                                transition-all duration-300
                                hover:-translate-y-1 hover:from-white hover:to-[#00B7C5]
                                hover:shadow-[0_8px_25px_rgba(0,183,197,0.5)]
                            "
                        >
                            Join Us
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>

                    </div>
                </div>


                {/* Kinesis Care Logo - Marked Position */}
                <div className="
    absolute left-[78%] top-[38%] z-30
    -translate-x-1/2 -translate-y-1/2
">
                    <div className="
        group relative flex
        h-[170px] w-[170px]
       
        shrink-0 items-center justify-center
        overflow-visible rounded-full
        border border-[#00C5D4]
        bg-black
        shadow-[0_0_20px_rgba(0,197,212,120)]
        transition-all duration-500
        hover:scale-110
        hover:border-white
        hover:shadow-[0_0_25px_rgba(0,197,212,0.9),0_0_45px_rgba(0,197,212,0.7),0_0_70px_rgba(0,197,212,0.7)]
    ">

                        {/* Stationary Logo */}
                        <img
                            src={Logo}
                            alt="Kinesis Care Logo"
                            className="
                relative z-10
                h-[125px] w-[125px]
                sm:h-[150px] sm:w-[150px]
                lg:h-[175px] lg:w-[175px]
                max-w-none
                object-contain
                transition-transform duration-500
                group-hover:scale-125
                group-hover:drop-shadow-[0_0_12px_rgba(0,197,212,0.8)]
            "
                        />

                        {/* Rotating Turquoise-White Circular Border */}
                        <div className="
            pointer-events-none absolute -inset-[3px]
            rounded-full
            border-[3px] border-transparent
            border-t-[#00C5D4]
            border-r-white
            animate-[spin_3s_linear_infinite]
            group-hover:animate-[spin_1s_linear_infinite]
        " />

                    </div>
                </div>

                {/* Statistics Bar */}
                <div className="relative z-10 mt-8">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101110]/80 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl">

                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B7C5]/70 to-transparent" />

                        <div className="grid grid-cols-2 sm:grid-cols-4">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className={`
                                        group relative flex items-center justify-center gap-3
                                        px-3 py-5 sm:gap-4 sm:px-5 sm:py-6
                                        transition-all duration-300 hover:bg-white/[0.025]
                                        ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""}
                                        ${index < 2 ? "border-b border-white/[0.08] sm:border-b-0" : ""}
                                        ${index === 1 ? "sm:border-r" : ""}
                                        ${index === 3 ? "sm:border-r-0" : ""}
                                    `}
                                >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[#00B7C5] transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                                        <FontAwesomeIcon icon={item.icon} className="text-xl" />
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="font-poppins text-xl font-bold leading-tight tracking-wide text-white transition-colors duration-300 group-hover:text-[#00B7C5] sm:text-2xl">
                                            {item.value}
                                        </h2>

                                        <p className="mt-1 font-poppins text-[8px] uppercase tracking-[1.4px] text-white/45 transition-colors duration-300 group-hover:text-white/80 sm:text-[9px] sm:tracking-[1.7px]">
                                            {item.label}
                                        </p>
                                    </div>

                                    <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#00B7C5] shadow-[0_0_8px_#00B7C5] transition-all duration-300 group-hover:w-1/3" />
                                </div>
                            ))}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00B7C5]/30 to-transparent" />
                    </div>
                </div>

            </section>


            {/* ================= ABOUT SECTION ================= */}

            <section className="relative overflow-hidden bg-[#050505] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">

                {/* Background Gradient Glows */}
                <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#00B7C5]/20 blur-[130px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#00B7C5]/15 blur-[130px]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#00B7C5]/10 via-transparent to-white/10 blur-[120px]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00B7C5]/[0.12] via-transparent to-white/[0.04]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Image Side */}
                    <div className="group relative w-full">

                        <div className="absolute -inset-1.5 rounded-2xl border border-[#00B7C5]/30 transition-all duration-500 group-hover:border-[#00B7C5]/80 group-hover:shadow-[0_0_35px_rgba(0,183,197,0.25)] sm:-inset-2 sm:rounded-3xl" />

                        <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-[620px]">
                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90"
                                alt="Kinesis Care facility"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                                <p className="font-poppins text-[10px] uppercase tracking-[3px] text-[#00B7C5] sm:text-sm sm:tracking-[4px]">
                                    Stronger Every Day
                                </p>

                                <h3 className="mt-3 font-philosopher text-2xl leading-tight sm:text-5xl">
                                    Your Health.
                                    <br />
                                    Your Journey.
                                </h3>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -right-2 top-5 rounded-xl border border-[#00B7C5]/50 bg-gradient-to-br from-[#00B7C5] to-[#008F9B] px-3 py-3 shadow-[0_0_25px_rgba(0,183,197,0.4)] transition-transform duration-500 group-hover:-translate-y-2 sm:-right-6 sm:top-8 sm:px-5 sm:py-4">
                            <p className="font-poppins text-2xl font-bold text-black sm:text-3xl">
                                100%
                            </p>

                            <p className="font-poppins text-[9px] uppercase tracking-wider text-black sm:text-xs">
                                Dedication
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center">

                        <p className="font-poppins text-xs uppercase tracking-[3px] text-[#00B7C5]">
                            About Kinesis Care
                        </p>

                        <h2 className="mt-5 font-philosopher text-3xl leading-tight sm:mt-6 sm:text-5xl lg:text-6xl">
                            Why Choose
                            <span className="block bg-gradient-to-r from-[#00B7C5] via-[#00D0D8] to-white bg-clip-text text-transparent">
                                Kinesis Care?
                            </span>
                        </h2>

                        <p className="mt-5 font-poppins text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                            At Kinesis Care, we believe wellness is more than
                            just a routine. It is a journey built on movement,
                            strength, consistency and care. We provide a
                            motivating environment where every individual can
                            work towards a healthier lifestyle.
                        </p>

                        {/* Features */}
                        <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
                            {features.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group flex min-w-0 gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 hover:border-[#00B7C5]/50 hover:bg-[#00B7C5]/[0.05] hover:shadow-[0_0_25px_rgba(0,183,197,0.12)] sm:gap-4 sm:p-4 lg:hover:translate-x-2"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00B7C5]/20 bg-[#00B7C5]/10 text-[#00B7C5] transition-all duration-500 group-hover:border-[#00B7C5] group-hover:bg-[#00B7C5] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(0,183,197,0.4)] sm:h-12 sm:w-12">
                                            <Icon size={21} />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="font-philosopher text-base text-white transition-colors duration-300 group-hover:text-[#00B7C5] sm:text-lg">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 font-poppins text-xs leading-6 text-gray-400 sm:text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-7 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#00B7C5] to-white shadow-[0_0_15px_rgba(0,183,197,0.5)] sm:mt-8" />

                    </div>
                </div>
            </section>


            {/* ================= SERVICES SECTION ================= */}

            <section className="relative isolate overflow-hidden bg-[#050505] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">

                {/* Gradient Background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00B7C5]/[0.12] via-[#050505] to-white/[0.04]" />

                <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#00B7C5]/15 blur-[150px]" />

                <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#00B7C5]/10 blur-[150px]" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(0,183,197,0.06)_50%,transparent_70%)]" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Heading */}
                    <div className="mb-12 text-center sm:mb-16">
                        <p className="font-poppins text-xs uppercase tracking-[3px] text-[#00B7C5]">
                            What We Offer
                        </p>

                        <h2 className="mt-5 font-philosopher text-3xl sm:mt-6 sm:text-5xl lg:text-6xl">
                            Our <span className="text-[#00B7C5]">Services</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                            Everything you need to move better, build strength
                            and become the strongest version of yourself.
                        </p>

                        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#00B7C5] to-white shadow-[0_0_15px_rgba(0,183,197,0.4)] sm:mt-7" />
                    </div>

                    {/* Services */}
                    <div className="space-y-14 sm:space-y-16 lg:space-y-24">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const reverse = index % 2 !== 0;

                            return (
                                <div
                                    key={service.number}
                                    className={`group grid min-w-0 items-center gap-7 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${reverse
                                        ? "lg:[&>*:first-child]:order-2"
                                        : ""
                                        }`}
                                >
                                    {/* Image Side */}
                                    <div className="relative min-w-0">

                                        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#00B7C5]/60 via-transparent to-white/30 opacity-70 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[4px]" />

                                        <div className="relative h-[250px] overflow-hidden rounded-xl border border-white/10 sm:h-[350px] lg:h-[430px]">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

                                            <div className="absolute left-4 top-4 font-philosopher text-4xl text-white/80 transition-colors duration-500 group-hover:text-[#00B7C5] sm:left-6 sm:top-6 sm:text-5xl">
                                                {service.number}
                                            </div>

                                            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                                                <p className="font-poppins text-[10px] uppercase tracking-[2px] text-[#00B7C5] sm:text-xs sm:tracking-[3px]">
                                                    Kinesis Care
                                                </p>

                                                <h3 className="mt-2 font-philosopher text-xl sm:text-3xl">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex min-w-0 flex-col justify-center">

                                        <div className="mb-4 flex items-center gap-3 sm:mb-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00B7C5]/30 bg-gradient-to-br from-[#00B7C5]/20 to-white/10 text-[#00B7C5] transition-all duration-500 group-hover:border-[#00B7C5] group-hover:text-white group-hover:shadow-[0_0_25px_rgba(0,183,197,0.2)] sm:h-14 sm:w-14">
                                                <Icon size={25} />
                                            </div>

                                            <span className="font-poppins text-[10px] tracking-[2px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                                                SERVICE {service.number}
                                            </span>
                                        </div>

                                        <p className="font-poppins text-[10px] uppercase tracking-[2px] text-[#00B7C5] sm:text-xs sm:tracking-[3px]">
                                            {service.subtitle}
                                        </p>

                                        <h3 className="mt-3 font-philosopher text-2xl leading-tight sm:text-4xl lg:text-5xl">
                                            {service.title}
                                        </h3>

                                        <p className="mt-4 font-poppins text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                                            {service.description}
                                        </p>

                                        <p className="mt-3 font-poppins text-sm leading-7 text-gray-500 sm:leading-8">
                                            {service.details}
                                        </p>

                                        <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#00B7C5] to-white transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_15px_rgba(0,183,197,0.5)] sm:mt-7" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ================= CONTACT SECTION ================= */}

            <section
                id="contact"
                className="relative isolate overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 lg:px-16"
            >

                {/* Background Gradients */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

                    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rotate-[-25deg] rounded-full bg-[#00B7C5]/20 blur-[150px]" />

                    <div className="absolute -bottom-48 -left-40 h-[600px] w-[600px] rotate-[25deg] rounded-full bg-[#00B7C5]/15 blur-[160px]" />

                    <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00B7C5]/30 to-transparent blur-[2px]" />

                    <div
                        className="absolute inset-0 opacity-[0.07]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                            backgroundSize: "65px 65px",
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                </div>

                <div className="mx-auto max-w-7xl">

                    {/* Heading */}
                    <div className="mb-16 max-w-3xl">
                        <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#00B7C5]/30 bg-[#00B7C5]/5 px-5 py-2 font-poppins text-xs font-semibold uppercase tracking-[0.3em] text-[#00B7C5]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00B7C5] shadow-[0_0_12px_#00B7C5]" />
                            Get In Touch
                        </span>

                        <h2 className="font-philosopher text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Let's Build
                            <br />

                            <span className="bg-gradient-to-r from-[#00B7C5] via-[#00D0D8] to-white bg-clip-text text-transparent">
                                Something Stronger.
                            </span>
                        </h2>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">

                        {/* Left Column */}
                        <div className="space-y-6 lg:col-span-5">

                            {/* Contact Details */}
                            <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#00B7C5]/40 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(0,183,197,0.14)] sm:p-8">

                                <h3 className="mb-7 font-philosopher text-xl font-bold">
                                    Contact Details
                                </h3>

                                <div className="space-y-6">
                                    {contactDetails.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="group/item flex items-center gap-4"
                                            >
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#00B7C5] transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-[#00B7C5]/50 group-hover/item:bg-[#00B7C5]/10 group-hover/item:text-white group-hover/item:shadow-[0_0_22px_rgba(0,183,197,0.2)]">
                                                    <Icon size={21} />
                                                </div>

                                                <div>
                                                    <p className="mb-1 font-poppins text-xs uppercase tracking-[0.18em] text-white/40">
                                                        {item.title}
                                                    </p>

                                                    <p className="font-poppins text-sm font-bold text-white/85 transition-colors duration-300 group-hover/item:text-white sm:text-base">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#00B7C5]/10 via-white/[0.03] to-[#00B7C5]/5 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#00B7C5]/40 hover:shadow-[0_0_40px_rgba(0,183,197,0.12)] sm:p-8">

                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00B7C5]/10 blur-3xl transition-all duration-500 group-hover:bg-[#00B7C5]/25" />

                                <div className="relative">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#00B7C5]/20 bg-[#00B7C5]/10 text-[#00B7C5] transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,183,197,0.25)]">
                                        <MapPin size={22} />
                                    </div>

                                    <h3 className="font-philosopher text-xl font-bold">
                                        Find Your Way To Us
                                    </h3>

                                    <p className="mt-3 max-w-sm font-poppins text-sm leading-7 text-white/50">
                                        Visit Kinesis Care and experience a
                                        wellness environment designed to
                                        help you achieve more.
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 font-poppins text-sm font-bold text-[#00B7C5]">
                                        Chennai, Tamil Nadu

                                        <MapPin
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="group relative rounded-3xl border border-white/10 bg-[#101110]/80 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-[#00B7C5]/30 hover:shadow-[0_0_55px_rgba(0,183,197,0.12)] sm:p-9 lg:col-span-7">

                            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00B7C5]/10 blur-[90px] transition-all duration-700 group-hover:bg-[#00B7C5]/20" />

                            <div className="relative">
                                <div className="mb-8">

                                    <span className="font-poppins text-xs font-bold uppercase tracking-[0.25em] text-[#00B7C5]">
                                        Let's Talk
                                    </span>

                                    <h3 className="mt-3 font-philosopher text-2xl font-bold sm:text-3xl">
                                        Send Us A Message
                                    </h3>

                                    <p className="mt-3 font-poppins text-sm leading-7 text-white/45">
                                        Have a question or want to get started?
                                        Fill out the form and our team will
                                        get back to you.
                                    </p>
                                </div>

                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="space-y-5"
                                >

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                                        {/* Full Name */}
                                        <div>
                                            <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-white/55">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-poppins text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-[#00B7C5]/40 hover:shadow-[0_0_18px_rgba(0,183,197,0.08)] focus:border-[#00B7C5]/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,183,197,0.12)]"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-white/55">
                                                Email Address
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-poppins text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-[#00B7C5]/40 hover:shadow-[0_0_18px_rgba(0,183,197,0.08)] focus:border-[#00B7C5]/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,183,197,0.12)]"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-white/55">
                                                Phone Number
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-poppins text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-[#00B7C5]/40 hover:shadow-[0_0_18px_rgba(0,183,197,0.08)] focus:border-[#00B7C5]/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,183,197,0.12)]"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-white/55">
                                                Subject
                                            </label>

                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="What is this about?"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-poppins text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-[#00B7C5]/40 hover:shadow-[0_0_18px_rgba(0,183,197,0.08)] focus:border-[#00B7C5]/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,183,197,0.12)]"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="mb-2 block font-poppins text-xs font-bold uppercase tracking-wider text-white/55">
                                            Your Message
                                        </label>

                                        <textarea
                                            name="message"
                                            rows={6}
                                            placeholder="Tell us how we can help..."
                                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 font-poppins text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-[#00B7C5]/40 hover:shadow-[0_0_18px_rgba(0,183,197,0.08)] focus:border-[#00B7C5]/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,183,197,0.12)]"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="button"
                                        className="group/button flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#00B7C5] to-[#00D0D8] px-6 py-4 font-poppins text-sm font-bold text-black shadow-[0_0_25px_rgba(0,183,197,0.2)] transition-all duration-500 hover:scale-[1.02] hover:from-white hover:to-[#00B7C5] hover:shadow-[0_0_35px_rgba(0,183,197,0.3)] active:scale-[0.98]"
                                    >
                                        Send Message

                                        <Send
                                            size={17}
                                            className="transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= FLOATING LOGO ================= */}


        </main>
    );
}

export default KinesisCare;