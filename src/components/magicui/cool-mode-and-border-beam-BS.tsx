import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { BorderBeam } from "@/components/magicui/border-beam"; // Import BorderBeam

export function CoolModeAndBorderBeamBS() {
    console.log("CoolModeBS component is rendering");
    return (
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background">
        <CoolMode
          options={{
            particle: "assets/imgs/man.svg",
          }}
        >
          <div className="relative inline-block">
            <Button>Click Me!</Button>
            <BorderBeam size={100} duration={12} delay={9} />
          </div>
        </CoolMode>
      </div>
    );
  }

