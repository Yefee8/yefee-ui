import Button from "yefee-ui/src/lib/Button/Button";
import Typewriter from "@/components/Typewriter/Typewriter";

export default function Home() {
  return (
    <div className="w-full text-white font-medium text-base items-center flex justify-center"
      style={{
        height: "calc(100vh - 96px)"
      }}
    >
      <div className="flex flex-wrap flex-col gap-6 items-center justify-center">
        <h1 className="text-7xl font-extrabold"
          style={{
            textShadow: "0px 0px 15px #0079FF"
          }}
        >
          Yefee-<span className="text-primary">UI</span>
        </h1>

        <Typewriter />

        <div className="mt-8">
          <Button className="!font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
