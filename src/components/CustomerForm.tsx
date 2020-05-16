import React from 'react'
import { Form, Modal, Input, DatePicker, Cascader } from 'antd';
import { FormInstance } from 'antd/lib/form/Form';
import CustomerModel from '../models/CustomerModel';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const LocationData = [{
    value: 'ar',
    label: 'Argentina',
    children: [{
        value: 'sf',
        label: 'Santa Fe',
        children: [
            {value: 'alv', label: 'Alvear'},
            {value: 'arb', label: 'Arbilla'},
            {value: 'cap', label: 'Capitán Bermúdez'},
            {value: 'car', label: 'Carcarañá'},
            {value: 'cor', label: 'Coronel Arnold'},
            {value: 'elc', label: 'El Caramelo'},
            {value: 'flb', label: 'Fray Luis Beltrán'},
            {value: 'fun', label: 'Funes'},
            {value: 'grb', label: 'Granadero Baigorria'},
            {value: 'iba', label: 'Ibarlucea'},
            {value: 'km1', label: 'Kilómetro 101'},
            {value: 'lac', label: 'La Carolina'},
            {value: 'per', label: 'Pérez'},
            {value: 'rol', label: 'Roldán'},
            {value: 'ros', label: 'Rosario'},
            {value: 'sjs', label: 'San Jerónimo Sud'},
            {value: 'sal', label: 'San Lorenzo'},
            {value: 'sol', label: 'Soldini'},
            {value: 'vgg', label: 'Villa Gobernador Gálvez'},
            {value: 'vdp', label: 'Villa del Plata'},
            {value: 'zav', label: 'Zavalla'},
        ]},
        {
            value: 'lr',
            label: 'La Rioja',
            children: [
                {value: 'ama', label: 'Amaná'},
                {value: 'pat', label: 'Patquía'},
                {value: 'pll', label: 'Punta de los Llanos'},
                {value: 'tam', label: 'Tama'},
                {value: 'vsa', label: 'Villa Sanagasta'},
                {value: 'lar', label: 'La Rioja'},
            ]
        },
        {
            value: 'rn',
            label: 'Rio Negro',
            children: [
                {value: 'agg', label: 'Aguada Guzmán'},
                {value: 'all', label: 'Allen'},
                {value: 'cep', label: 'Cerro Policía'},
                {value: 'cer', label: 'Cervantes'},
                {value: 'chi', label: 'Chichinales'},
                {value: 'jjg', label: 'Coronel Juan José Gómez'},
                {value: 'elc', label: 'El Cuy'},
                {value: 'geg', label: 'General Enrique Godoy'},
                {value: 'gue', label: 'Guerrico'},
                {value: 'ilh', label: 'Ingeniero Luis A. Huergo'},
                {value: 'iot', label: 'Ingeniero Otto Krause'},
                {value: 'mai', label: 'Mainqué'},
                {value: 'men', label: 'Mencué'},
                {value: 'pas', label: 'Padre Stefenelli'},
                {value: 'pac', label: 'Paso Córdoba'},
                {value: 'vaa', label: 'Valle Azul'},
                {value: 'val', label: 'Villa Alberdi'},
                {value: 'vir', label: 'Villa Regina'},
                {value: 'vdp', label: 'Villa del Parque'},
                {value: 'ger', label: 'General Roca'},
            ]
        }]
},
];

export const LocationFormat = (value: string[]) => {
    if (value.length != 3)
        return "";

    const country = LocationData.find(obj => obj.value == value[0]);
    const state = country?.children.find(obj => obj.value == value[1]);
    const city = state?.children.find(obj => obj.value == value[2]);

    return `${city?.label}, ${state?.label}, ${country?.label}`;

};


export interface CustomerFormValues {
    title: string;
    description: string;
    modifier: string;
}
  
interface CollectionCreateFormProps {
    visible: boolean;
    data?: CustomerModel;
    onAccept: (customer: CustomerModel) => void;
    onCancel: () => void;
}

export class CustomerForm extends React.Component<CollectionCreateFormProps> {
    formRef = React.createRef<FormInstance>();


    render() {
        const mode = this.props.data ? 'Edit' : 'Create';
        const modalTitle = mode + ' Customer';

        this.formRef.current?.setFieldsValue({
            'name': this.props.data?.name,
            'lastname': this.props.data?.lastname,
            'birthdate': this.props.data?.birthdate,
            'address': this.props.data?.address,
            'location': this.props.data?.location,
            'email': this.props.data?.email
        });

        return (
            <Modal
                forceRender
                visible={this.props.visible}
                title={modalTitle}
                okText={mode}
                cancelText="Cancel"
                onCancel={this.props.onCancel}
                onOk={() => {
                    this.formRef.current!
                    .validateFields()
                    .then((values: any) => {
                        // If props.data is not null, we're editing and key value will be missing.
                        // To prevent creating a new Customer it must be in the values object.
                        if (this.props.data)
                            values["key"] = this.props.data.key;

                        this.props.onAccept(values);
                    })
                    .catch((info: any) => {
                        console.log('Validate Failed:', info);
                    });
                }}
            >
                <Form
                    ref={this.formRef}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public',}}
                >
                    <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please enter a name!' }]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item name="lastname" label="Last Name" rules={[{ required: true, message: 'Please enter a last name!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="birthdate" label="Birth date" rules={[{ required: true, message: 'Please enter a birth date!' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter an address!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="location" label="Location" rules={[{ required: true, message: 'Please select a location!' }]}>
                        <Cascader options={LocationData} />
                    </Form.Item>
                    <Form.Item name="email" label="EMail" rules={[{ required: true, message: 'Please enter the email!' }]}>  
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}
