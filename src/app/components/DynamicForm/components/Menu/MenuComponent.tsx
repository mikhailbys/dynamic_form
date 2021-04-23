import {Menu} from "antd";
import {EditOutlined, PlusOutlined, ReadOutlined} from "@ant-design/icons";
import {Dispatch, FC, SetStateAction} from "react";
import {Mode} from "../../hooks/useCurrentMode";
import {ModeEnum} from "../../../../shared/enums/Mode.enum";

type Props = {
    mode: Mode;
    setMode: Dispatch<SetStateAction<Mode>>
};

export const MenuComponent:FC<Props> = ({mode, setMode}) => {
    return (
        <Menu theme="dark"  selectedKeys={[mode]} mode="horizontal">
            <Menu.Item
                key={ModeEnum.Add}
                icon={<PlusOutlined />}
                onClick={() => setMode(ModeEnum.Add)}
            >
                Add Inputs
            </Menu.Item>
            <Menu.Item
                key={ModeEnum.Edit}
                icon={<EditOutlined />}
                onClick={() => setMode(ModeEnum.Edit)}
            >
                Edit Values
            </Menu.Item>
            <Menu.Item
                key={ModeEnum.Inspect}
                icon={<ReadOutlined />}
                onClick={() => setMode(ModeEnum.Inspect)}
            >
                Inspect
            </Menu.Item>
        </Menu>
    );
}