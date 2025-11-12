"use client";

import { useMainContext } from "@/context/MainContext";
import { useEffect, useRef } from "react";


const ContaineObserver = ({ children, link, ...props }) => {
    const { setHash } = useMainContext();
    const ref = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px 0px -20% 0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setHash(link);
                }
            });
        }, options);

        const node = ref.current;
        if (node) observer.observe(node);

        return () => {
            if (node) observer.unobserve(node); // remove this node
            observer.disconnect(); // fully clean observer
        };
    }, []); // include link and setHash to keep things stable

    return (
        <div ref={ref} {...props}>
            {children}
        </div>
    );
};

export default ContaineObserver
