// components/AccordionList.tsx
import Servicios from "./Servicios";

const data = [
    {
        title: "Benchmarking",
        icon: "/icons/benchmarking.png",
        description: "Descubre y proyecta tu valor único.",
        link: "#",
    },
    { 
        title: "Branding", 
        icon: "/pincel.png" 
    },
    { title: "Marketing Digital", icon: "/icons/marketing.png" },
    { title: "Growth", icon: "/icons/growth.png" },
    { title: "Data + IA", icon: "/icons/data.png" },
];

export default function AccordionList() {
    return (
        <div className="border-b border-pink-500 divide-y divide-pink-500">
            {data.map((item) => (
                <Servicios key={item.title} {...item} />
            ))}
        </div>
    );
}
