"use client";

const LinesUnderSection = ({ className, xPersent = 15, yPersent = 13, yCount = 8, xCount = 8 }) => {
    return (
        <div className={`${className} absolute overflow-hidden z-[-1] w-full h-full top-0 left-0  `}>
            {
                Array(yCount).fill().map((a, i) =>
                    <div
                        style={{
                            left: i * yPersent + "%"
                        }}
                        key={i} className={`h-full absolute top-0  w-[1] bg-background/5 `} >

                    </div>
                )
            }
            {
                Array(xCount).fill().map((a, i) =>
                    <div
                        style={{
                            top: i * xPersent + "%"
                        }}
                        key={i} className={`w-full absolute left-0 h-[1] bg-background/5 `} >

                    </div>
                )
            }
            <div className="w-full h-[200] bg-gradient-to-b from-foreground to-transparent absolute top-0 left-0"></div>
            <div className="w-full h-[200] bg-gradient-to-t from-foreground to-transparent absolute bottom-0 left-0"></div>
            <div className="h-full w-[200] bg-gradient-to-r from-foreground to-transparent absolute top-0 left-0"></div>
            <div className="h-full w-[200] bg-gradient-to-l from-foreground to-transparent absolute top-0 right-0"></div>
        </div>
    )
}

export default LinesUnderSection
