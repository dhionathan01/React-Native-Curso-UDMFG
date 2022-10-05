import React, {Component} from "react";
import { View, Text, Image  } from 'react-native';

class App extends Component{
    render() {
        return (
            <View>
                <Text>Testando React!!!</Text>
                <Text>Primeiro APP</Text>

                <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
                    Sujeito Programador
                </Text>
                <Image
                    source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/2f/2021/08/02/imagem-meramente-ilustrativa-da-galaxia-de-andromeda-1627924758757_v2_900x506.jpg.webp' }}
                    style={{width: 300, height:300}}/>
            </View>
        )
    };
}

export default App;