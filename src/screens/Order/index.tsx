import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';
import React from 'react';
import { Platform } from 'react-native';

import { 
    Container, 
    Header,
    Photo,
    Sizes
} from './styles';

export function Order() {
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack 
                    onPress={() => {}}
                    style={{ marginBottom: 108 }}
                />
            </Header>

            <Sizes>
                <RadioButton
                    title="P"
                    selected={false}
                />
            </Sizes>
            <Photo source={{ uri: 'https://github/joaovieira23.png' }} />
        </Container>
    );
}