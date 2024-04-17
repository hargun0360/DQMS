import { Redirect } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function index() {
  return (<>
    <PaperProvider>
    <Redirect href={'/home'} />
    </PaperProvider>
  </>
  );
}


