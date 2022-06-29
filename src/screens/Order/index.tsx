import React, { useState } from 'react';

import { Platform } from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { 
    Container,
    ContentScroll,
    Header,
    Photo,
    Sizes,
    Form,
    Title,
    Label,
    InputGroup,
    FormRow,
    Price
} from './styles';

export function Order() {

    const [size, setSize] = useState('');

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ContentScroll>
                <Header>
                    <ButtonBack 
                        onPress={() => {}}
                        style={{ marginBottom: 108 }}
                    />
                </Header>
                
                <Photo source={{ uri: 'https://github/joaovieira23.png' }} />

                <Form>
                    <Title>Nome da Pizza</Title>
                    <Label>Selecione um tamanho</Label>
                    <Sizes>
                        {
                            PIZZA_TYPES.map(item => (
                                <RadioButton
                                    onPress={() => setSize(item.id)}
                                    key={item.id}
                                    title={item.name}
                                    selected={size === item.id}
                                />
                            ))
                        }
                    </Sizes>

                    <FormRow>
                        <InputGroup>
                            <Label>Número da mesa</Label>
                            <Input keyboardType='numeric' />
                        </InputGroup>

                        <InputGroup>
                            <Label>Número da mesa</Label>
                            <Input keyboardType='numeric' />
                        </InputGroup>

                        <InputGroup>
                            <Label>Quantidade</Label>
                            <Input keyboardType='numeric' />
                        </InputGroup>
                    </FormRow>

                    <Price>Valor de R$ 0,00</Price>

                    <Button title="Confirmar pedido"/>
                </Form>
            </ContentScroll>
        </Container>
    );
}