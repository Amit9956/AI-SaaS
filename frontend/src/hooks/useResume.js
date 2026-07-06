import { useContext } from "react";

import { ResumeContext } from "../context/ResumeContext";

export default function useResume() {

    return useContext(

        ResumeContext

    );

}