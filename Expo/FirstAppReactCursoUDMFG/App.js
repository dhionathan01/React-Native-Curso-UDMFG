import React, {Component} from "react";
import { View, Text, Image  } from 'react-native';

class App extends Component{
    render() {
        let nome = 'Dhionathan';
        let imagemGalaxia = 'https://conteudo.imguol.com.br/c/noticias/2f/2021/08/02/imagem-meramente-ilustrativa-da-galaxia-de-andromeda-1627924758757_v2_900x506.jpg.webp';
        return (
            <View>
                <Text>Testando React!!!</Text>
                <Text>Primeiro APP</Text>

                <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
                    Sujeito Programador
                </Text>
                <Image
                    source={{ uri: imagemGalaxia}}
                    style={{ width: 300, height: 300 }}
                />
                <Text>{nome}</Text>
            </View>
        )
    };
}

export default App;