import 'antd/dist/antd.css';
import {MenuComponent} from "../Menu/MenuComponent";
import {ModeWrapper} from "../ModeWrapper/ModeWrapper";
import {useCurrentMode} from "../../hooks/useCurrentMode";

export const Wrapper = () => {
    const {mode, setMode} = useCurrentMode();
    return (
        <>
          <MenuComponent mode={mode} setMode={setMode}/>
          <ModeWrapper mode={mode}/>
        </>
    );
}