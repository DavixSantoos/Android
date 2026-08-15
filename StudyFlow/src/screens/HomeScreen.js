//Tela principal exibida depois do login
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../styles/colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";



export default function HomeScreen({ route, navigation }) {
    //o nome foi enviado pela tela de login por meio dos parametos da rota.
    //Caso nenhum, nome seja enviado, usamos Estudante como valor padrão.

    const studentName = route.params?.studentName ?? 'Estudante';

    //estado simples para demostrar interaçoes com o um botao.
    // false ele significa que a sessão ainda nao iniciou
    // true significa que a sessao esta em andamento.

    const [sessionStarted, setSessionStarted] = useState(false);

    function handledStudySession() {
        //alterna entre verdadeiro ou false
        //usamos a forma de currentValue por que novo valor depende do valor anterior


        setSessionStarted((currentValue) => !currentValue);
    }
    function handledLogout() {
        //voltar para tela de login  e remova a home do historico
        navigation.replace('Login')
    }
    return (
        <SafeAreaView style={style.SafeArea}>
            <ScrollView contentContainerStyle={style.container}>
                <View style={style.header}>
                    <View>
                        <Text style={style.greeting}>Ola, {studentName}</Text>
                        <Text style={style.subtitle}>Seu progresso de hoje esta logo abaixo.</Text>
                        <Text onPress={handledLogout} style={style.logoutText}></Text>
                    </View>


                </View>

                <View style={style.highlightCard}>
                    <Text style={style.highlightLabel}>Proximo Atividade</Text>
                    <Text style={style.highlightTitle}>Revisar Fundamento de React</Text>
                    <Text style={style.highlightTime}>Hoje - 19hr</Text>
                </View>
            </ScrollView>


        </SafeAreaView>
    )

}

const style = StyleSheet.create({

})