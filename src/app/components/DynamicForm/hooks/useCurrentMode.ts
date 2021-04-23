import {Dispatch, SetStateAction, useState} from "react";
import {ModeEnum} from "../../../shared/enums/Mode.enum";

export type Mode = 'add' | 'edit' | 'inspect'

export const useCurrentMode = () :{
    mode: Mode,
    setMode: Dispatch<SetStateAction<Mode>>
} => {
    const [mode, setMode] = useState<Mode>(ModeEnum.Add);
    return {
        mode,
        setMode
    };
};