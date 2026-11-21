
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
    
    MapPin,
    Phone,
    Mail,
    Globe,
    Send,
    Utensils,
    Scale,
    
    CalendarCheck,
} from "lucide-react";

import Image from "./brandassests/qualesteebackground.jpg";
import Logo from "./brandassests/Qualeatee-02.png";
import Image1 from "./brandassests/service1img1.jpg";
import Image2 from "./brandassests/service1img2.jpg";
import Image3 from "./brandassests/service1img3.jpg";
import Image4 from "./brandassests/service1img4.jpg";
import AboutImage from "./brandassests/whyQualeatee.jpg";

function Qualeatee() {
    // Statistics
    const stats = [
        {
            icon: faLocationDot,
            value: "3",
            label: "Branches",
        },
        {
            icon: faDumbbell,
            value: "10+",
            label: "Training Programs",
        },
        {
            icon: faUser,
            value: "5,000+",
            label: "Members",
        },
        {
            icon: faStar,
            value: "4.9",
            label: "Member Rating",
        },
    ];

    // About features
    const features = [
        {
            icon: Utensils,
            title: "Personalized Diet & Meal Planning",
            desc: "Customized nutrition plans and healthy meal guidance tailored to individual lifestyles, food preferences, dietary needs, and weight management goals.",
        },
        {
            icon: Target,
            title: "Sustainable Nutrition & Healthy Eating Habits",
            desc: "Practical diet plans and balanced nutrition guidance designed to support long-term wellness, healthy weight management, and lasting lifestyle changes without crash diets.",
        },
        {
            icon: Trophy,
            title: "Ongoing Nutrition Monitoring & Diet Plan Adjustments",
            desc: "Regular nutrition assessments and personalized diet plan updates based on your health progress, changing fitness goals, and lifestyle needs.",
        },
    ];

    // Services
    const services = [
        {
            number: "01",
            title: "Weight Loss & Weight Gain Nutrition Plans",
            subtitle: "Weight Management",
            description:
                "Healthy Weight Management | Personalized diet plans and balanced nutrition programs designed to support sustainable fat loss, healthy weight gain, and long-term weight management.",
            details:
                "Our Personalized weight loss and weight gain diet plans focused on balanced nutrition, healthy fat loss, and sustainable results.training approach helps you build strength, improve performance and stay consistent.",
            image:
                Image1,
            icon: Scale,
        },
        {
            number: "02",
            title: "Lifestyle Nutrition & Wellness Plans",
            subtitle: "Daily Wellness",
            description:
                "Healthy Living Every Day | Personalized nutrition plans and balanced meal guidance designed to improve daily energy, support overall wellness, and promote healthy eating habits for busy lifestyles.",
            details:
                "Personalized nutrition plans and balanced meal guidance to support healthy eating, boost daily energy, and improve overall wellness.",
            image:
                Image2,
            icon: HeartPulse,
        },
        {
            number: "03",
            title: "Sports Nutrition & Fitness Diet Plans",
            subtitle: "Sports Nutrition",
            description:
                "Fuel Your Performance | Personalized fitness nutrition plans designed to support muscle building, strength training, endurance, workout performance, and post-workout recovery.",
            details:
                "Personalized fitness diet plans to support muscle growth, strength training, workout performance, endurance, and faster recovery.",
            image:
                Image3,
            icon: Dumbbell,
        },
        {
            number: "04",
            title: "Nutrition Follow-Up & Healthy Habit Coaching",
            subtitle: "Habit Coaching",
            description:
                "Build Lasting Habits | Personalized diet monitoring, regular nutrition assessments, meal plan adjustments, and healthy eating habit coaching to support consistent progress and long-term wellness",
            details:
                "Regular nutrition check-ins, personalized diet adjustments, and healthy eating guidance to maintain consistency and achieve long-term wellness goals.",
            image:
                Image4,
            icon: CalendarCheck,
        },
    ];

    // Contact details
    const contactDetails = [
        {
            icon: MapPin,
            title: "Our Location",
            value: "Chennai, Tamil Nadu",
        },
        {
            icon: Globe,
            title: "Address",
            value: "Your Gym Address",
        },
        {
            icon: Phone,
            title: "Phone Number",
            value: "+91 XXXXX XXXXX",
        },
        {
            icon: Mail,
            title: "Email Address",
            value: "info@yorafitness.com",
        },
    ];

    // Contact form fields


    return (
        <main className="w-full max-w-full overflow-x-hidden bg-[#080808]">

            {/* ================= HERO SECTION ================= */}

            <section className="relative isolate mx-auto min-h-[600px] w-full overflow-hidden border border-white/10 bg-[#050505] px-4 py-8 shadow-[0_0_35px_rgba(220,20,60,0.12)] sm:min-h-[650px] sm:px-8 sm:py-10 lg:min-h-[520px] lg:px-16">

                {/* Top Border */}
                <div className="absolute left-0 top-0 z-20 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_12px_#dc143c]" />

                {/* Background Image */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        src={Image}
                        alt="Premium Gym Interior"
                        className="h-full w-full object-cover object-center opacity-100 transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex min-h-[440px] items-center py-12 sm:min-h-[500px] lg:min-h-[440px]">

                    <div className="ml-0 mt-8 w-full max-w-xl sm:ml-4 sm:mt-12 lg:ml-8 lg:mt-0">

                        {/* Heading */}
                        <h1 className="font-biondi text-5xl font-extrabold italic leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
                            HEALTHY

                            <span className="mt-2 block font-biondi text-6xl text-[#ff6500] sm:text-7xl lg:text-8xl">
                                LIFESTYLE
                            </span>

                            <span className="block font-biondi text-6xl text-[#ff6500] sm:text-7xl lg:text-5xl">
                                PERSONALIZED NUTRITION PLANS
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-5 max-w-md font-aquawax text-sm leading-relaxed text-gray-300 sm:text-base">
                            Personalized diet plans and professional nutrition guidance designed to support healthy eating, weight management, fitness goals, and balanced lifestyle habits.
                        </p>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="
                    group mt-6 inline-flex items-center gap-3
                    rounded-full bg-[#ff6500] px-6 py-3
                    text-sm font-bold text-white
                    shadow-[0_5px_20px_rgba(255,101,0,0.3)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:bg-orange-500
                    hover:shadow-[0_8px_25px_rgba(255,101,0,0.5)]
                "
                        >
                            Join Us

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </Link>

                    </div>
                </div>


                {/* Right Side Center Logo */}
                {/* Qualeatee Logo - Marked Position */}
                <div className="
    absolute left-[78%] top-[38%] z-30
    -translate-x-1/2 -translate-y-1/2
">
                    <div className="
        group relative flex
        h-[170px] w-[170px]
        items-center justify-center
        overflow-visible rounded-full
        border border-[#FF6B00]
        bg-black/90
        shadow-[0_0_30px_rgba(255,107,0,120)]
        transition-all duration-500
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(255,107,0,0.9),0_0_45px_rgba(255,101,0,0.7)]
    ">

                        {/* Logo Image */}
                        <img
                            src={Logo}
                            alt="Qualeatee Logo"
                            className="
                absolute
                h-[230px] w-[230px]
                max-w-none
                object-contain
                scale-110
                transition-transform duration-500
                group-hover:scale-125
            "
                        />

                        {/* Rotating Border */}
                        <div className="
            pointer-events-none absolute -inset-[3px]
            rounded-full
            border-[3px] border-transparent
            border-t-[#FF6B00]
            border-r-[#FF6B00]/70
            animate-[spin_3s_linear_infinite]
            group-hover:animate-[spin_1s_linear_infinite]
        " />

                    </div>
                </div>

                {/* Statistics Bar - Original Design */}
                <div className="relative z-10 mt-8">

                    <div className="
            relative overflow-hidden rounded-2xl
            border border-white/10
            bg-[#101110]/80
            shadow-[0_12px_35px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
        ">

                        {/* Top Lighting */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6500]/70 to-transparent" />

                        <div className="grid grid-cols-2 sm:grid-cols-4">

                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className={`
                            group relative flex items-center justify-center gap-3
                            px-3 py-5 sm:gap-4 sm:px-5 sm:py-6
                            transition-all duration-300
                            hover:bg-white/[0.025]
                            ${index % 2 === 0 ? "border-r border-white/[0.08]" : ""}
                            ${index < 2 ? "border-b border-white/[0.08] sm:border-b-0" : ""}
                            ${index === 1 ? "sm:border-r" : ""}
                            ${index === 3 ? "sm:border-r-0" : ""}
                        `}
                                >

                                    {/* Icon */}
                                    <div className="
                            flex h-9 w-9 shrink-0 items-center justify-center
                            text-[#ff7833]
                            transition-all duration-300
                            group-hover:scale-110 group-hover:text-[#aaff00]
                        ">
                                        <FontAwesomeIcon
                                            icon={item.icon}
                                            className="text-xl"
                                        />
                                    </div>

                                    {/* Stat Content */}
                                    <div className="min-w-0">
                                        <h2 className="
                                font-aquawax text-xl font-bold
                                leading-tight tracking-wide text-white
                                transition-colors duration-300
                                group-hover:text-[#aaff00]
                                sm:text-2xl
                            ">
                                            {item.value}
                                        </h2>

                                        <p className="
                                mt-1 font-aquawax text-[8px]
                                uppercase tracking-[1.4px]
                                text-white/45
                                transition-colors duration-300
                                group-hover:text-white/80
                                sm:text-[9px] sm:tracking-[1.7px]
                            ">
                                            {item.label}
                                        </p>
                                    </div>

                                    {/* Hover Accent */}
                                    <div className="
                            absolute bottom-0 left-1/2 h-[2px] w-0
                            -translate-x-1/2
                            bg-[#aaff00]
                            shadow-[0_0_8px_#aaff00]
                            transition-all duration-300
                            group-hover:w-1/3
                        " />

                                </div>
                            ))}

                        </div>

                        {/* Bottom Lighting */}
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#aaff00]/30 to-transparent" />

                    </div>
                </div>

            </section>


            {/* ================= ABOUT SECTION ================= */}


            <section className="relative overflow-hidden bg-[#080808] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">

                {/* Background Orange & Green Gradient Glows */}
                <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#ff6500]/20 blur-[130px]" />

                <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#aaff00]/15 blur-[130px]" />

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ff6500]/10 via-transparent to-[#aaff00]/10 blur-[120px]" />

                {/* Subtle Overall Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff6500]/[0.17] via-transparent to-[#aaff00]/[0.15]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Image Side */}
                    <div className="group relative w-full">

                        {/* Glowing Border */}
                        <div className="absolute -inset-1.5 rounded-2xl border border-[#ff6500]/30 transition-all duration-500 group-hover:border-[#ff6500]/80 group-hover:shadow-[0_0_35px_rgba(255,101,0,0.25)] sm:-inset-2 sm:rounded-3xl" />

                        {/* Main Image */}
                        <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[450px] lg:h-[620px]">

                            <img
                                src={AboutImage}
                                alt="Premium gym interior"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                            {/* Image Content */}
                            <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">

                                <p className="font-aquawax text-[10px] uppercase tracking-[3px] text-[#ff6500] sm:text-sm sm:tracking-[4px]">
                                    Stronger Every Day
                                </p>

                                <h3 className="mt-3 font-aquawax text-2xl uppercase leading-tight sm:text-5xl">
                                    Your Fitness.
                                    <br />
                                    Your Journey.
                                </h3>

                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -right-2 top-5 rounded-xl border border-[#ff6500]/50 bg-[#ff6500] px-3 py-3 shadow-[0_0_25px_rgba(255,101,0,0.4)] transition-transform duration-500 group-hover:-translate-y-2 sm:-right-6 sm:top-8 sm:px-5 sm:py-4">

                            <p className="text-2xl font-black text-black sm:text-3xl">
                                100%
                            </p>

                            <p className="font-aquawax text-[9px] uppercase tracking-wider text-black sm:text-xs">
                                Dedication
                            </p>

                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col justify-center">

                        <p className="font-aquawax text-xs uppercase tracking-[3px] text-[#ff6500]">
                            About Qualeatee - Diet Clinic
                        </p>

                        {/* Heading */}
                        <h2 className="mt-5 font-biondi text-3xl uppercase leading-tight sm:mt-6 sm:text-5xl lg:text-6xl">
                            Why Choose
                            <span className="block text-[#ff6500]">
                                Qualeatee ?
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 font-aquawax text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                            A professional diet and nutrition clinic focused on sustainable weight management, balanced meal planning, and healthy eating habits. Offering personalized nutrition guidance to support long-term wellness, fitness goals, and a healthier lifestyle without extreme diet restrictions.
                        </p>

                        {/* Features */}
                        <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">

                            {features.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="group flex min-w-0 gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-500 hover:border-[#ff6500]/50 hover:bg-[#ff6500]/[0.05] hover:shadow-[0_0_25px_rgba(255,101,0,0.12)] sm:gap-4 sm:p-4 lg:hover:translate-x-2"
                                    >

                                        {/* Icon */}
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff6500]/20 bg-[#ff6500]/10 text-[#ff6500] transition-all duration-500 group-hover:border-[#ff6500] group-hover:bg-[#ff6500] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,101,0,0.4)] sm:h-12 sm:w-12">
                                            <Icon size={21} />
                                        </div>

                                        {/* Text */}
                                        <div className="min-w-0">

                                            <h3 className="font-biondi text-sm text-white transition-colors duration-300 group-hover:text-[#ff6500] sm:text-base">
                                                {item.title}
                                            </h3>

                                            <p className="mt-1 font-aquawax text-xs leading-6 text-gray-400 sm:text-sm">
                                                {item.desc}
                                            </p>

                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                        {/* Bottom Accent */}
                        <div className="mt-7 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#ff6500] to-[#aaff00] shadow-[0_0_15px_rgba(255,101,0,0.5)] sm:mt-8" />

                    </div>
                </div>
            </section>



            {/* ================= SERVICES SECTION ================= */}


            <section className="relative isolate overflow-hidden bg-[#080808] px-4 py-16 text-white sm:px-8 sm:py-20 lg:px-20">

                {/* Premium Diagonal Gradient Background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff6500]/[0.14] via-[#080808] to-[#aaff00]/[0.15]" />

                {/* Orange Ambient Light */}
                <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#ff6500]/15 blur-[150px]" />

                {/* Green Ambient Light */}
                <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#aaff00]/10 blur-[150px]" />

                {/* Diagonal Light Effect */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,101,0,0.04)_50%,transparent_70%)]" />

                {/* Subtle Bottom Gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#aaff00]/[0.04] to-transparent" />

                <div className="relative mx-auto max-w-7xl">

                    {/* Heading */}
                    <div className="mb-12 text-center sm:mb-16">

                        <p className="font-aquawax text-xs uppercase tracking-[3px] text-[#aaff00]">
                            What We Offer
                        </p>

                        <h2 className="mt-5 font-biondi text-3xl uppercase sm:mt-6 sm:text-5xl lg:text-6xl">
                            Our <span className="text-[#ff6500]">Services</span>
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl font-aquawax text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                            Everything you need to move better, build strength
                            and become the strongest version of yourself.
                        </p>

                        {/* Gradient Divider */}
                        <div className="mx-auto mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#ff6500] via-[#ff9d00] to-[#aaff00] shadow-[0_0_15px_rgba(255,101,0,0.4)] sm:mt-7" />

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

                                        {/* Gradient Border */}
                                        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#ff6500]/60 via-transparent to-[#aaff00]/50 opacity-70 blur-[2px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-[4px]" />

                                        {/* Image Container */}
                                        <div className="relative h-[250px] overflow-hidden rounded-xl border border-white/10 sm:h-[350px] lg:h-[430px]">

                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Image Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

                                            {/* Number */}
                                            <div className="absolute left-4 top-4 font-black text-4xl text-white/80 transition-colors duration-500 group-hover:text-[#aaff00] sm:left-6 sm:top-6 sm:text-5xl">
                                                {service.number}
                                            </div>

                                            {/* Image Bottom Label */}
                                            <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">

                                                <p className="font-aquawax text-[10px] uppercase tracking-[2px] text-[#aaff00] sm:text-xs sm:tracking-[3px]">
                                                    YORA Fitness
                                                </p>

                                                <h3 className="mt-2 font-aquawax text-xl uppercase sm:text-3xl">
                                                    {service.title}
                                                </h3>

                                            </div>

                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="flex min-w-0 flex-col justify-center">

                                        {/* Icon & Service Number */}
                                        <div className="mb-4 flex items-center gap-3 sm:mb-5">

                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#ff6500]/30 bg-gradient-to-br from-[#ff6500]/20 to-[#aaff00]/10 text-[#ff6500] transition-all duration-500 group-hover:border-[#aaff00] group-hover:text-[#aaff00] group-hover:shadow-[0_0_25px_rgba(170,255,0,0.2)] sm:h-14 sm:w-14">
                                                <Icon size={25} />
                                            </div>

                                            <span className="font-aquawax text-[10px] tracking-[2px] text-gray-500 sm:text-xs sm:tracking-[3px]">
                                                SERVICE {service.number}
                                            </span>

                                        </div>

                                        {/* Subtitle */}
                                        <p className="font-aquawax text-[10px] uppercase tracking-[2px] text-[#aaff00] sm:text-xs sm:tracking-[3px]">
                                            {service.subtitle}
                                        </p>

                                        {/* Title */}
                                        <h3 className="mt-3 font-biondi text-2xl uppercase leading-tight sm:text-4xl lg:text-5xl">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-4 font-aquawax text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                                            {service.description}
                                        </p>

                                        {/* Details */}
                                        <p className="mt-3 font-aquawax text-sm leading-7 text-gray-500 sm:leading-8">
                                            {service.details}
                                        </p>

                                        {/* Gradient Accent */}
                                        <div className="mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#ff6500] to-[#aaff00] transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_15px_rgba(170,255,0,0.5)] sm:mt-7" />

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
                className="relative isolate overflow-hidden bg-[#080908] px-5 py-24 text-white sm:px-8 lg:px-16"
            >
                {/* Background gradients */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rotate-[-25deg] rounded-full bg-orange-500/20 blur-[150px]" />

                    <div className="absolute -bottom-48 -left-40 h-[600px] w-[600px] rotate-[25deg] rounded-full bg-lime-400/15 blur-[160px]" />

                    <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-orange-400/30 to-transparent blur-[2px]" />

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
                        <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-lime-400/30 bg-lime-400/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400 shadow-[0_0_12px_#a8ff00]" />
                            Get In Touch
                        </span>

                        <h2 className="font-aquawax text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Let's Build
                            <br />
                            <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-lime-300 bg-clip-text text-transparent">
                                Something Stronger.
                            </span>
                        </h2>


                    </div>

                    {/* Main grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                        {/* Left column */}
                        <div className="space-y-6 lg:col-span-5">
                            {/* Contact details card */}
                            <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-white/[0.055] hover:shadow-[0_0_45px_rgba(255,106,0,0.14)] sm:p-8">
                                <h3 className="mb-7 font-aquawax text-xl font-bold">
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
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400 transition-all duration-500 group-hover/item:scale-110 group-hover/item:border-lime-400/50 group-hover/item:bg-lime-400/10 group-hover/item:text-lime-300 group-hover/item:shadow-[0_0_22px_rgba(168,255,0,0.2)]">
                                                    <Icon size={21} />
                                                </div>

                                                <div>
                                                    <p className="mb-1 text-xs uppercase tracking-[0.18em] text-white/40">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-sm font-medium text-white/85 transition-colors duration-300 group-hover/item:text-white sm:text-base">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Location card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-lime-400/10 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-[0_0_40px_rgba(168,255,0,0.12)] sm:p-8">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl transition-all duration-500 group-hover:bg-lime-400/25" />

                                <div className="relative">
                                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-300 transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(168,255,0,0.25)]">
                                        <MapPin size={22} />
                                    </div>

                                    <h3 className="font-aquawax text-xl font-bold">
                                        Find Your Way To Us
                                    </h3>

                                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/50">
                                        Visit YORA Fitness and experience a premium fitness
                                        environment designed to help you achieve more.
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-lime-300">
                                        Chennai, Tamil Nadu
                                        <MapPin
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column - Contact form */}
                        <div className="group relative rounded-3xl border border-white/10 bg-[#101110]/80 p-7 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-orange-400/30 hover:shadow-[0_0_55px_rgba(255,106,0,0.12),0_0_35px_rgba(168,255,0,0.06)] sm:p-9 lg:col-span-7">
                            {/* Form card glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/10 blur-[90px] transition-all duration-700 group-hover:bg-orange-500/20" />

                            <div className="relative">
                                <div className="mb-8">
                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                                        Let's Talk
                                    </span>

                                    <h3 className="mt-3 font-aquawax text-2xl font-bold sm:text-3xl">
                                        Send Us A Message
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-white/45">
                                        Have a question or want to get started? Fill out the form
                                        and our team will get back to you.
                                    </p>
                                </div>

                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        {/* Full Name */}
                                        <div>
                                            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/55">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-orange-400/40 hover:shadow-[0_0_18px_rgba(255,106,0,0.08)] focus:border-lime-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(168,255,0,0.12)]"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/55">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-orange-400/40 hover:shadow-[0_0_18px_rgba(255,106,0,0.08)] focus:border-lime-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(168,255,0,0.12)]"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/55">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-orange-400/40 hover:shadow-[0_0_18px_rgba(255,106,0,0.08)] focus:border-lime-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(168,255,0,0.12)]"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/55">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="What is this about?"
                                                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-orange-400/40 hover:shadow-[0_0_18px_rgba(255,106,0,0.08)] focus:border-lime-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(168,255,0,0.12)]"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/55">
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={6}
                                            placeholder="Tell us how we can help..."
                                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 hover:border-orange-400/40 hover:shadow-[0_0_18px_rgba(255,106,0,0.08)] focus:border-lime-400/60 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(168,255,0,0.12)]"
                                        />
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="button"
                                        className="group/button flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4 text-sm font-bold text-black shadow-[0_0_25px_rgba(255,106,0,0.2)] transition-all duration-500 hover:scale-[1.02] hover:from-lime-400 hover:to-orange-400 hover:shadow-[0_0_35px_rgba(255,106,0,0.3),0_0_25px_rgba(168,255,0,0.2)] active:scale-[0.98]"
                                    >
                                        Send Message
                                        <Send
                                            size={17}
                                            className="transition-all duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 group-hover/button:drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]"
                                        />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </main>
    );
}

export default Qualeatee;
