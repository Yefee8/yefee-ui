"use client"
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {

    ["lightweight", "open-source", "modern", "easy to learn"]
    return (
        <div className="text-base flex gap-1">
            Is a <span className="text-primary">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("lightweight")
                            .pauseFor(200)
                            .deleteAll()
                            .typeString("open source")
                            .pauseFor(200)
                            .deleteAll()
                            .typeString("modern")
                            .pauseFor(200)
                            .deleteAll()
                            .typeString("easy to learn")
                            .start();
                    }} />
            </span> React UI library.
        </div>
    )
}