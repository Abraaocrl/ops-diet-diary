import { diasSemana } from "@/constants/DiasSemana";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  containerCabecalho: {
    height: 150,
    justifyContent: "space-around",
  },
  textoCabecalho: {
    fontSize: 30,
  },
  containerDataAtual: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dataAtual: {
    fontSize: 15,
  },
  diaAtual: {
    fontSize: 13,
  },
  pergunta: {
    fontSize: 20,
  },
});

const getDataAtual = () => {
  let date = moment().format("DD/MM/YYYY");
  return date;
};

const getDiaAtual = () => {
  let date = moment().day();

  let diaAtual = diasSemana[date];

  return diaAtual;
};

export default function Cabecalho() {
  return (
    <View>
      <View style={styles.containerCabecalho}>
        <Text style={styles.textoCabecalho}>OPS Diet Diary</Text>
      </View>

      <View style={styles.containerDataAtual}>
        <Text style={styles.dataAtual}>{getDataAtual()}</Text>
        <Text style={styles.diaAtual}>{getDiaAtual()}</Text>
      </View>
      <View
        style={{
          height: 150,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.pergunta}>O que você comeu hoje?</Text>
      </View>
    </View>
  );
}
