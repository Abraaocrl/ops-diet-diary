import { Alimento } from '@/types/refeicao';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

export default function Registrar(){
    const [descricao, setDescricao] = useState('');
    const [datahora, setDataHora] = useState(new Date());
    const [alimentos, setAlimentos] = useState([] as Alimento[]);

    const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDataHora(currentDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
        value: datahora,
        onChange,
        mode: currentMode,
        is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const adicionarAlimento = () =>{
        let alimento = {
            calorias: 0,
            peso: 0,
            proteinas: 0,
            descricao: 'Alimento'
        } as Alimento;

        setAlimentos([...alimentos, alimento])
    }

    return (
        <View>
            <TextInput
                placeholder="Refeição"
                onChangeText={(text) => setDescricao(text)}
                defaultValue={descricao}
            />
            <Button onPress={showDatepicker} title="Data" />
            <Button onPress={showTimepicker} title="Hora" />
            <Text>{datahora.toLocaleString()}</Text>
            <Button onPress={adicionarAlimento} title="Adicionar alimento"/>
            <FlatList data={alimentos} renderItem={({item}) => <Text>{item.descricao}</Text>}/>
        </View>
    )
}