import React from 'react'
import { Form, Modal, Input, Radio } from 'antd';


export interface CustomerFormValues {
    title: string;
    description: string;
    modifier: string;
}
  
interface CollectionCreateFormProps {
    visible: boolean;
    customerId: number;
    onCreate: (values: CustomerFormValues) => void;
    onCancel: () => void;
}


export const CustomerForm : React.FunctionComponent<CollectionCreateFormProps> = ({
    visible,
    customerId,
    onCreate,
    onCancel,
}) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Add customer"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                .validateFields()
                .then((values: any) => {
                form.resetFields();
                    onCreate(values);
                })
                .catch((info: any) => {
                console.log('Validate Failed:', info);
                });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: 'public' }}
            >
                <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
                >
                <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
}