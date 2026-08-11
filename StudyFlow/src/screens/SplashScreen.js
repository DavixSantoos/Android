// -- Tela de abertura

import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";





export default function SplashScreen({ navigation }) {

    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.8)).current

    useEffect(() => {
        //useEffect roda depois que a tela aparecer
        //aqui ele dispara a animação e agenda a troca de tela

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 900,
                // useNativeDriver melhorar  a performance em animaçoes suportadas
                useNativeDriver: true,

            }),
            Animated.spring(scale, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();
        //aguarde um pequeno periodo e troca o Slpash pelo login
        // replace remove o splash do historico, evitando voltar para ela.


        const time = setTimeout(() => {
            navigation.replace('Login');
        }, 2200);

        //Limpa o temporizador caso o componente seja desmontado antes do tempo.
        //Evita tentar navegar depois que tela ja saiu da memoria.

        return () => clearTimeout(time);
    }, [navigation, opacity, scale])

    return (
        <View style={style.container}>
            <Animated.View
                style={[
                    style.content,
                    {
                        opacity,
                        transform: [{ scale }],
                    }

                ]}
            >
                <Text style={style.logo}>SF</Text>
                <Text style={style.title}>StudyFlow</Text>
                <Text style={style.subtitle}>Organize seus estudos. evolua todos os dias</Text>

            </Animated.View>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        alighItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        padding: 24,
    },
    content: {
        alighItems: 'center',
        gap: 12,
    },

    logo: {
        color: colors.surface,
        fontSize: 72,
        textAlign: 'center',
        fontWeight: '800',
    },
    title: {
        color: colors.surface,
        fontSize: 38,
        textAlign: 'center',
        fontWeight: '800',
    },

    subtitle: {
        maxWidth: 280,
        alignSelf: 'center',
        color: colors.surface,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        opacity: 0.9,
    }
})
