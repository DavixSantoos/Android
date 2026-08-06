//campo de formulario reutilizavel

import { TextInput } from "react-native/types_generated/index";
import { View } from "react-native/types_generated/index";
import { colors } from "../styles/colors";
import { View } from "react-native/types_generated/index";

export default function InputField(
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitaliza = 'sentences',
){
    //Props recebidas:
    // - label: Texto acima do campo
    // - value: valor atual do campo, controlado pela tela que usa o componentes.
    // - onChengeText: Função chamada sempre que o usuario o digita
    // - placeholder: Texto de ajuda exibido quando o campo esta vazio
    // - secureTextEntry: oculta o texto, ultil para senhas 
    // - keyboardtype: escolhe o tipo de teclado no celular.
    // - autoCapitiliza: controlar letras maiusculas automaticas.

    return(
        <Views style={style.container}>
            <Text style={style.label}>{label}</Text>
            <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.textlight}
            secureTextEntry={secureTextEntry}
            autoCapitaliza={autoCapitaliza}
            keyboardType={keyboardType}
            style={Style.input}
            />
        </Views>
    )

};

const style = style = StyleSheet.create({
    container:{
        width: '100%',
        gap: 8,
    },
    label: {
        color: colors.text,
        fontSize: 14,
        fontWeight:'600',
    },
    input:{
        minHeight: 52,
        borderWidth: 1,
        borderColor: colors.borde,
        borderRadius:14,
        backgroundColor:colors.surface,
        color:colors.text,
        fontSize:16,
        paddingHorizontal:16,


    }
})