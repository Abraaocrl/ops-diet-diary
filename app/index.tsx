import Cabecalho from "@/components/Cabecalho";
import { View } from "react-native";
import Registrar from "./registrar";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Cabecalho/>
      <Registrar/>
    </View>
  );
}
