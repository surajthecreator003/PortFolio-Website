import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";//this "type" is part of javascript and is used here for kind of to clear confusion that this is a type even though we iimport it
//like a javscript value


//this function will help in finding out which component is in the view of the screen and then
//will set the active section accordingly for which the css will change
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {//the default threshold is 0.75 which is like 75% of screen
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}