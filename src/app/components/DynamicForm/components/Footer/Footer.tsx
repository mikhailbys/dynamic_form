import {Button} from "antd";
import {FormInput} from "../../hooks/useInputs";
import {FC} from "react";
import {SaveOutlined} from "@ant-design/icons";
import {Mode} from "../../hooks/useCurrentMode";
import {ModeEnum} from "../../../../shared/enums/Mode.enum";
import styles from "./Footer.module.scss";

type Props = {
    mode: Mode;
    inputs: FormInput[];
    onFinish: (inputs: FormInput[]) => void;
};

export const Footer:FC<Props> = ({inputs, mode, onFinish}) => {
    return (
        <div className={styles.footer}>
            {inputs.length && mode === ModeEnum.Edit && (
                <Button
                    icon={<SaveOutlined/>}
                    className={styles.button}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    onClick={() => onFinish(inputs)}
                >
                    Save
                </Button>
            )}
        </div>
    );
}