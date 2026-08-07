import jsxRuntime from "react/jsx-runtime";
import { colors } from "../styles/colors";

export default function InfoCard({
    icon,
    title,
    value
}){

    //Props recebidas:
    //icon: Pequeno texto/ simbolo exibido no topo do card
    // - value : informação principal do card
    // - title: descrição da informação

    return (
        <View style = {style.card}>

            <Text style = {style.icon}>{icon}</Text>
            <Text style = {style.value}>{value}</Text>
            <Text style = {style.title}>{title}</Text>
        </View>
    );

}

const style = StyleSheet.create({
        card: {
            flex: 1,
            minHeight: 132,
            alignItems: 'center',
            justifyContent: 'center',
            gap:6,
            borderRadius: 18,
            backgroundColor:colors.surface,
            //shadow* criar sombra no IOS
            shadowColor: '#0000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.08,
            shadowRadius: 8,
            //elevation cria a sombra no Andoid.
            elevation: 3,
        },
        icon:{
            color: colors.primary,
            fontSize: 12,
            fontWeight:'800',
        },
        value : {
            color: colors.primary,
            fontSize: 24,
            fontWeight: '800',
        },
        title : {
            color:colors.textlight,
            fontSize:13,
            textlight: 'center',
        }

})
