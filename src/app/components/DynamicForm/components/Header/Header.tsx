import styles from './Header.module.scss'
import {Button, Typography} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {FC} from "react";
import {FormInput} from "../../hooks/useInputs";
import {uuidv4} from "../../../../shared/utils/UUIDGenerator";
import {Mode} from "../../hooks/useCurrentMode";
import {ModeEnum} from "../../../../shared/enums/Mode.enum";

type Props = {
    mode: Mode;
    addInput: (input: FormInput) => void;
    inputs: FormInput[];
};

export const Header:FC<Props> = ({addInput, inputs, mode}) => {
    const { Title } = Typography;

    return (
        <header className={styles.wrapper}>
            <Title level={1} className={styles.header}>Dynamic Form</Title>
            {mode === ModeEnum.Add && (<div className={styles.buttonsWrapper}>
                <Button
                    icon={<PlusOutlined/>}
                    className={styles.button}
                    size="large"
                    type="primary"
                    onClick={() => addInput({key: uuidv4(),textInput: true})}
                >
                    TextField
                </Button>
                <Button
                    icon={<PlusOutlined/>}
                    className={styles.button}
                    size="large"
                    type="primary"
                    onClick={() => addInput({key: uuidv4(), textArea: true})}
                >
                    TextArea
                </Button>
                <Button
                    icon={<PlusOutlined/>}
                    className={styles.button}
                    size="large"
                    type="primary"
                    onClick={() => addInput({key: uuidv4(), datePicker: true})}
                >
                    DatePicker
                </Button>
            </div>)}
        </header>
    );
}