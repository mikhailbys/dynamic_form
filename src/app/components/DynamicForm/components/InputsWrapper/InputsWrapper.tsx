import {FC} from "react";
import {Button, DatePicker, Form, Input} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import styles from './InputsWrapper.module.scss';
import TextArea from "antd/lib/input/TextArea";
import {FormInput} from "../../hooks/useInputs";
import {Mode} from "../../hooks/useCurrentMode";
import {ModeEnum} from "../../../../shared/enums/Mode.enum";

type Props = {
    mode: Mode
    inputKey: string;
    name: string;
    label: string;
    input: FormInput;
    deleteInput: (index: string) => void;
};

export const InputsWrapper: FC<Props> = ({
  input,
  deleteInput,
  inputKey,
  name,
  label,
  mode
}) => {

    const renderTextInput = (): JSX.Element => (
        <div className={styles.item}>
            <Form.Item name={name} key={inputKey} label={label}>
                <Input disabled={mode !== ModeEnum.Edit} placeholder="TextField"/>
            </Form.Item>
        </div>
    );

    const renderTextArea = (): JSX.Element => (
        <div className={styles.item}>
            <Form.Item name={name} key={inputKey} label={label}>
                <TextArea disabled={mode !== ModeEnum.Edit} rows={4} placeholder="TextArea"/>
            </Form.Item>
        </div>
    );

    const renderDateInput = (): JSX.Element => (
        <div className={styles.dateItem}>
            <Form.Item name={name} key={inputKey} label={label}>
                <DatePicker disabled={mode !== ModeEnum.Edit}/>
            </Form.Item>
        </div>
    );

    return (
        <div className={styles.wrapper}>
            {input.textInput && (renderTextInput())}
            {input.textArea && (renderTextArea())}
            {input.datePicker && (renderDateInput())}
            {mode === ModeEnum.Edit && (<Button
                className={styles.deleteButton}
                type="primary"
                danger
                icon={<DeleteOutlined/>}
                onClick={() => deleteInput(inputKey)}
            />)}
        </div>
    );
}