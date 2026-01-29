"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
    id: string;
    title: string;
    content: ReactNode;
    icon?: ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
    allowMultiple?: boolean;
}

export function Accordion({
    items,
    className = "",
    allowMultiple = false,
}: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
            );
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className={`space-y-3 ${className}`}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className="rounded-xl border border-neutral-200 bg-white overflow-hidden"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
                            aria-expanded={isOpen}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon && (
                                    <div className="p-2 rounded-lg bg-primary-100 text-primary-600">
                                        {item.icon}
                                    </div>
                                )}
                                <span className="font-semibold text-neutral-900">
                                    {item.title}
                                </span>
                            </div>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="w-5 h-5 text-neutral-500" />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                >
                                    <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
