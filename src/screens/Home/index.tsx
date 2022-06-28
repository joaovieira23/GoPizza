import React from 'react';

import happyEmoji from '@assets/happy.png';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { 
    Container, 
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText 
} from './styles';

export function Home() {

    const { COLORS } = useTheme();

    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji source={happyEmoji} />
                    <GreetingText>Olá, Admin</GreetingText>
                </Greeting>

                <TouchableOpacity>
                    <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
                </TouchableOpacity>
            </Header>
        </Container>
    );
};