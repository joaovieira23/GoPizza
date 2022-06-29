import React, { useState } from 'react';

import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';
import { Platform } from 'react-native';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { 
    Container, 
    Header,
    Photo,
    Sizes
} from './styles';

export function Order() {

    const [size, setSize] = useState('');

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack 
                    onPress={() => {}}
                    style={{ marginBottom: 108 }}
                />
            </Header>

            <Sizes>
                {PIZZA_TYPES.map(item => (
                    <RadioButton
                        onPress={() => setSize(item.id)}
                        key={item.id}
                        title={item.name}
                        selected={size === item.id}
                    />
                ))}
            </Sizes>
            <Photo source={{ uri: 'https://github/joaovieira23.png' }} />
        </Container>
    );
}