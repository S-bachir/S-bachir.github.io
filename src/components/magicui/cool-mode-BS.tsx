import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";

export function CoolModeBS() {
  return (
    <div className="relative justify-center">
      <CoolMode
        options={{
          particle:
            "assets/imgs/man.svg",
        }}
      >
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}

// export function CoolModeBS() {
//     return (
//       <div className="relative justify-center">
//         <CoolMode>
//           <Button>Click Me!</Button>
//         </CoolMode>
//       </div>
//     );
//   }
