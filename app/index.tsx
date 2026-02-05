import React from 'react'; 
import { 
  Text, View, ScrollView, StyleSheet, SafeAreaView, ImageBackground, Image
} from "react-native";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': Montserrat_400Regular,
    'Merriweather': Merriweather_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   
      <ScrollView style={styles.body}>
        <View style={styles.header}> 
          <Text style={styles.title}>The Daily</Text> 
          <View style={styles.nav}> 
            <View style={styles.ulMenu}> 
              <View style={styles.li}> 
                <Text style={styles.aMenu}>Home</Text> 
              </View> 
              <View style={styles.li}> 
                <Text style={styles.aMenu}>Notícias</Text>
              </View>
            </View> 
          </View> 
        </View> 

        <ImageBackground
          source={require('../assets/images/COP30.jpg')} 
          style={styles.heroNews}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']}
            locations={[0, 0.6, 1]}
            style={styles.gradient}
          >
            <View style={styles.heroContent}>
              <View style={styles.heroMeta}>
                <Text style={styles.topLabel}>As principais notícias do dia</Text>
                <Text style={styles.tagMeioAmbiente}>Meio-ambiente</Text>
                <Text style={styles.data}>25 de Novembro, 2025</Text>
              </View>
              <Text style={styles.tituloNoticia}>COP30 em Belém: participação histórica, resultado insuficiente</Text>
              <Text style={styles.subTituloNoticia}>Especialistas discutem os desafios e avanços na conferência.</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.outrasNoticias}>
          <View style={styles.cardNoticia}>
            <Text style={styles.tagAgro}>Agricultura</Text>
            <Image 
              source={require('../assets/images/noticia-1.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Brasil lidera integração inédita entre clima, natureza e uso da terra na COP30</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>

          <View style={styles.cardNoticia}>
            <Text style={styles.tagFinancas}>Finanças</Text>
            <Image 
              source={require('../assets/images/noticia-2.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Dólar recua e Ibovespa sobe com mercado atento aos rumos dos juros no Brasil e nos EUA</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>

          <View style={styles.cardNoticia}>
            <Text style={styles.tagPop}>Pop</Text>
            <Image 
              source={require('../assets/images/noticia-3.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Paul McCartney lança faixa silenciosa em protesto contra projeto de IA</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>

          <View style={styles.cardNoticia}>
            <Text style={styles.tagMeioAmbiente}>Meio-ambiente</Text>
            <Image 
              source={require('../assets/images/noticia-4.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Veneza expulsa Greta da cidade após ativista tingir canal de verde</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>

          <View style={styles.cardNoticia}>
            <Text style={styles.tagEsporte}>Esporte</Text>
            <Image 
              source={require('../assets/images/noticia-5.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Brasileirão: as chances de título após resultados de Flamengo e Palmeiras</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>

          <View style={styles.cardNoticia}>
            <Text style={styles.tagPolitica}>Política</Text>
            <Image 
              source={require('../assets/images/noticia-6.jpg')} 
              style={styles.imagemCard}
              resizeMode="cover"
            />
            <Text style={styles.tituloCard}>Governo estuda veto a aposentadoria especial para agentes de saúde e avalia judicialização</Text>
            <Text style={styles.linkCard}>Ler mais</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textoFooter}>© &copy; 2025 The Daily. Todos os direitos reservados.</Text>
        </View>
      </ScrollView> 
    
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f4f4f4",
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 4,
    borderBottomColor: '#ff0000',
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  nav: {
    flexDirection: 'row',
  },
  ulMenu: {
    flexDirection: 'row',
  },
  li: {
    marginLeft: 15,
  },
  aMenu: {
    fontFamily: 'Montserrat',
    color: '#ff0000',
    fontWeight: '500',
  },
  heroNews: {
    width: "100%",
    height: 500,
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  heroContent: {
    width: "100%",
    paddingHorizontal: 20,
  },
  heroMeta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  topLabel: {
    fontFamily: 'Montserrat',
    color: 'white',
    opacity: 0.8,
    marginRight: 10,
  },
  tagMeioAmbiente: {
    backgroundColor: '#28a745',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  data: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    color: '#999',
    marginLeft: 10,
  },
  tituloNoticia: {
    fontFamily: 'Merriweather',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 15,
  },
  subTituloNoticia: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.9,
  },
  outrasNoticias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    marginVertical: 20,
    width: '100%',
  },
  cardNoticia: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  imagemCard: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  tituloCard: {
    fontSize: 18,
    margin: 15,
    color: '#000000',
    textAlign: 'center',
  },
  linkCard: {
    backgroundColor: '#ff0000',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
  },
  tagEsporte: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagPolitica: {
    backgroundColor: '#c42222',
    color: 'white',
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagFinancas: {
    backgroundColor: '#e0e693',
    color: 'white',
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagPop: {
    backgroundColor: '#ff69b4',
    color: 'white',
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagAgro: {
    backgroundColor: '#845c10',
    color: 'white',
    padding: 5,
    borderRadius: 4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#000',
    padding: 20,
    borderTopWidth: 4,
    borderTopColor: '#ff0000',
    width: '100%',
  },
  textoFooter: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;