"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, User } from "lucide-react";
import { Gmail, Instagramme, Linkedin, Whatsupp } from "../icons";
import LinesUnderSection from "@/components/global/LinesUnderSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EmailSent from "@/components/global/EmailSent";
import AskForLang from "@/components/global/AskForLang";
import ContaineObserver from "@/components/global/ContaineObserver";

const WEBSITELINK = process.env.NEXT_PUBLIC_WEBSITELINK;


const ContactSection = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        text: ""
    });
    const [emailsent, setemailsent] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [lang, setlang] = useState("en")
    const [AskedForPrefferdLang, setAskedForPrefferdLang] = useState(false)
    const [AskorLangOpen, setAskorLangOpen] = useState(false)

    const handleSubmitEmailText = async (lange) => {

        setemailsent(false);

        try {

            const url = `${WEBSITELINK}/api/contact`;

            setLoading(true)

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    lang: lange ? lange : lang,

                }),
            });
            const res = await response.json();
            if (res.done) {
                setemailsent(true);
                setData(pv => ({ ...pv, text: "" }));
            } else {
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    };
    const handelClick = () => {
        if (!AskedForPrefferdLang) {
            setAskorLangOpen(true)
        }
        else {
            handleSubmitEmailText();
        }
    }
    return (
        <ContaineObserver link={"#contact"} id="contact" className="min-h-[100vh] p-4 relative  flex flex-col  justify-center mt-20 items-center">
            <LinesUnderSection xCount={30} yCount={20} yPersent={8} xPersent={6} />


            <div className="w-full max-w-[700]">

                <h1 className="font-semibold text-xl">Get in Touch </h1>

                <div className="grid grid-cols-1 md:grid-cols-2  mt-8   gap-4 ">
                    <Input
                        id="name"
                        onChange={e => setData(pv => ({ ...pv, name: e.target.value }))}
                        icon={<User className="w-5 h-5 stroke-1" />} label="Full name" parentClassName="!md:w-full " placeholder="Enter your name ..." />
                    <Input
                        id="email"
                        onChange={e => setData(pv => ({ ...pv, email: e.target.value }))}
                        icon={<Mail className="w-5 h-5 stroke-1" />} label="Email" parentClassName="!md:w-full " placeholder="Enter your email ..." />
                </div>
                <Textarea
                    value={data.text}
                    onChange={e => setData(pv => ({ ...pv, text: e.target.value }))}

                    parentClassName="mt-4 " label="Message" className={"bg-foreground"} placeholder="Write your message here ... " />
                <Button
                    onClick={handelClick}
                    disabled={isLoading || data.email == "" || data.text == ""}
                    className={"w-full mt-2  border  border-background/10 py-5"}>
                    {
                        isLoading
                            ?
                            "Sending ..."
                            : <>
                                Submit
                                <Send />
                            </>
                    }
                </Button>
            </div>
            <div className="w-full mt-10  max-w-[700]">
                <h2 className="mb-6 opacity-60 font-medium ml-2">Or contact me via :</h2>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-3 p-3 border border-background/20 rounded-xl w-full">
                        <div className="flex gap-2 w-full justify-between items-center" >
                            <a target="_blank"
                                href="mailto:iderkaoui.mustapha.dev@gmail.com"
                                className="flex gap-2  items-center hover:underline hover:text-chart-2 "
                            >

                                <Gmail className="w-5" />
                                <p className="opacity-70 text-sm font-light   ">Email Address</p>
                            </a>
                            <Button
                                onClick={() => navigator.clipboard.writeText("iderkaoui.mustapha.dev@gmail.com")}
                                className={"w-[30%] text-xs !py-1 h-auto !rounded-lg opacity-60 hover:opacity-100 cursor-pointer border border-background/10 ml-5"} size={"sm"}>Copy link</Button>
                        </div>
                        <a
                            target="_blank"
                            href="mailto:iderkaoui.mustapha.dev@gmail.com"
                            className=" hover:underline hover:text-chart-2 font-medium tracking-normal">
                            iderkaoui.mustapha.dev@gmail.com
                        </a>
                    </div>

                    {/* ------------------------- */}
                    <div className="flex flex-col gap-3 p-3 border border-background/20 rounded-xl w-full">
                        <div className="flex gap-2 w-full justify-between items-center" >

                            <a
                                target="_blank"
                                href="https://api.whatsapp.com/send/?phone=212767310612&text&type=phone_number&app_absent=0"
                                className="flex gap-2  items-center hover:underline hover:text-chart-2 "
                            >
                                <Whatsupp className="w-5" />
                                <p className="opacity-70 text-sm font-light   ">WhatsApp number</p>
                            </a>
                            <Button
                                onClick={() => navigator.clipboard.writeText("+212 767 310 612")}
                                className={"w-[30%] text-xs !py-1 h-auto !rounded-lg opacity-60 hover:opacity-100 cursor-pointer border border-background/10 ml-5"}
                                size={"sm"}>
                                Copy link
                            </Button>
                        </div>
                        <a href="https://api.whatsapp.com/send/?phone=212767310612&text&type=phone_number&app_absent=0" target="_blank" className="   hover:underline hover:text-chart-2 font-medium tracking-normal">+212 767 310 612</a>
                    </div>
                    {/* ------------------------- */}
                    <div className="flex flex-col gap-3 p-3 border border-background/20 rounded-xl w-full">
                        <div className="flex gap-2 w-full justify-between items-center" >

                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/"
                                className="flex gap-2  items-center hover:underline hover:text-chart-2 "
                            >
                                <Linkedin className="w-5" />
                                <p className="opacity-70 text-sm font-light   ">Linkedin profile</p>
                            </a>
                            <Button
                                onClick={() => navigator.clipboard.writeText("https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/")}
                                className={"w-[30%] text-xs !py-1 h-auto !rounded-lg opacity-60 hover:opacity-100 cursor-pointer border border-background/10 ml-5"} size={"sm"}>Copy link</Button>
                        </div>
                        <a href="https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/" target="_blank" className="   hover:underline hover:text-chart-2 font-medium tracking-normal">Iderkaoui Mustapha</a>
                    </div>
                    {/* ------------------------- */}
                    <div className="flex flex-col gap-3 p-3 border border-background/20 rounded-xl w-full">
                        <div className="flex gap-2 w-full justify-between items-center" >

                            <a
                                target="_blank"
                                href="https://www.instagram.com/instaccount222/"
                                className="flex gap-2  items-center hover:underline hover:text-chart-2 "
                            >
                                <Instagramme className="w-5" />
                                <p className="opacity-70 text-sm font-light   ">instagram page</p>
                            </a>
                            <Button
                                onClick={() => navigator.clipboard.writeText("https://www.instagram.com/instaccount222/")}
                                className={"w-[30%] text-xs !py-1 h-auto !rounded-lg opacity-60 hover:opacity-100 cursor-pointer border border-background/10 ml-5"} size={"sm"}>Copy link</Button>
                        </div>
                        <a href="https://www.instagram.com/instaccount222/" target="_blank" className="   hover:underline hover:text-chart-2 font-medium tracking-normal">Iderkaoui Mustapha</a>
                    </div>



                </div>
            </div>
            <AnimatePresence>

                {
                    emailsent &&
                    <EmailSent onClose={() => setemailsent(false)} />
                }

                {
                    AskorLangOpen &&
                    <AskForLang onClose={lange => {
                        setAskedForPrefferdLang(true);
                        setlang(lange);
                        setAskorLangOpen(false)
                        handleSubmitEmailText(lange)
                    }} />
                }
            </AnimatePresence>
        </ContaineObserver >
    )
}

export default ContactSection
