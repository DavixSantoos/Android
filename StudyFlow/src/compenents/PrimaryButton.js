import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../styles/colors";

//componente reutilizado, como um botão principal
export default function PrimaryButton({ title, onPress, disabled = false }) {
    //Porps recebidas:
    // - title : Texto Exbida dentro do botão.
    // - OnPress: função executado quando o usuario tocar/ clicar no botão
    // - desabled: bloqueia o toque quando true.
    return (
        //Pressable permite mudar o estilo de acordo com o estado do toque

        <Pressable
            onPress={onPress}//Função a ser excutada
            disabled={disabled}//Habilitar ou desabilitar o botão
            style={({ pressed }) => [
                style.button,
                pressed && style.buttonPressed,
                disabled && style.buttonDisabled,
            ]}

        >
            <Text style={style.buttonText}> {title}</Text>


        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        width: '100%',
        minHeight: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 14,
        backgroundColor: colors.primary,
        paddinHorizontal: 20,

    },
    buttonPressed: {
        opacity: 0.8,
    },

    buttonDisabled: {
        opacity: 0.5,
    },

    buttonText: {
        color: colors.surface,
        fontSize: 16,
        fontWeight: '700',
    },
});