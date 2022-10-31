import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const galleryItems = [
  {
    Key: '1',
    images: require('../../assets/gallery/Imagem1.jpg'),
    description: "Entrada da Trilha do Abraço."
  },
  {
    Key: '2',
    images: require('../../assets/gallery/Imagem2.jpg'),
    description: "Vista do percurso inicial da Trilha do Abraço."
  },
  {
    Key: '3',
    images: require('../../assets/gallery/Imagem3.jpg'),
    description: "Vista do percurso inicial da Trilha do Abraço."
  },
  {
    Key: '4',
    images: require('../../assets/gallery/Imagem4.jpg'),
    description: "Flor/ Fruto da Imbiriba (Eschweilera ovata)."
  },
  {
    Key: '5',
    images: require('../../assets/gallery/Imagem5.jpg'),
    description: "Flor/ Fruto da Imbiriba (Eschweilera ovata)."
  },
  {
    Key: '6',
    images: require('../../assets/gallery/Imagem6.jpg'),
    description: "Poço Amazonas encontrado na Trilha do Abraço cercado por vegetação."
  },
  {
    Key: '7',
    images: require('../../assets/gallery/Imagem7.jpg'),
    description: "Flor da Helicônia-papagaio (Heliconia psittacorum)."
  },
  {
    Key: '8',
    images: require('../../assets/gallery/Imagem8.jpg'),
    description: "Fundo “Orelha-de-pau” “Pycnoporus sanguineus”."
  },
  {
    Key: '9',
    images: require('../../assets/gallery/Imagem9.jpg'),
    description: "Poço Amazonas encontrado na Trilha do Abraço cercado por Bambu (Bambusoideae)."
  },
  {
    Key: '10',
    images: require('../../assets/gallery/Imagem10.jpg'),
    description: "Interior do Poço Amazonas desativado."
  },
  {
    Key: '11',
    images: require('../../assets/gallery/Imagem11.jpg'),
    description: "Identificação de espécie nativa Cajá (Spondias mombin), encontrada durante a trilha do Abraço."
  },
  {
    Key: '12',
    images: require('../../assets/gallery/Imagem11a.jpg'),
    description: "Copa do Cajá (Spondias mombin). "
  },
  {
    Key: '13',
    images: require('../../assets/gallery/Imagem12.jpg'),
    description: "Fruto do Cajá  (Spondias mombin)."
  },
  {
    Key: '14',
    images: require('../../assets/gallery/Imagem13.jpg'),
    description: "Formigão Preto (Paraponera clavata).”."
  },
  {
    Key: '15',
    images: require('../../assets/gallery/Imagem14.jpg'),
    description: "Serapilheira, camada de material orgânico presente no solo."
  },
  {
    Key: '16',
    images: require('../../assets/gallery/Imagem15.jpg'),
    description: "Buraco de Tatu (Dasypodidae) "
  },
  {
    Key: '17',
    images: require('../../assets/gallery/Imagem16.jpg'),
    description: "Folhas do “Mata Calado” (Psychotria hoffmannseggiana)"
  },
  {
    Key: '18',
    images: require('../../assets/gallery/Imagem17.jpg'),
    description: "Folha e Frutos do “Mata Calado” (Psychotria hoffmannseggiana)"
  },
  {
    Key: '19',
    images: require('../../assets/gallery/Imagem18.jpg'),
    description: " Ossos do Bicho-preguiça ( Bradypus variegatus)."
  },
  {
    Key: '20',
    images: require('../../assets/gallery/Imagem19.jpg'),
    description: "Emaranhado de Cipós, também chamados de Lianas."
  },
  {
    Key: '21',
    images: require('../../assets/gallery/Imagem20.jpg'),
    description: "Árvore do Abraço (responsável pelo nome da trilha)."
  },
  {
    Key: '22',
    images: require('../../assets/gallery/Imagem21.jpg'),
    description: "Gameleira (Ficus adhatodifolia) Abraçando um Dendezeiro (Elaeis guineensis)."
  },
  {
    Key: '23',
    images: require('../../assets/gallery/Imagem22.jpg'),
    description: "Raízes tabulares, tradicionais em espécies como a Gameleira."
  },
  {
    Key: '24',
    images: require('../../assets/gallery/Imagem23.jpg'),
    description: "Fruto do Dendezeiro (Elaeis guineensis)."
  },
  {
    Key: '25',
    images: require('../../assets/gallery/Imagem24.jpg'),
    description: "Cupinzeiro em árvore (Isoptera)"
  },
  {
    Key: '26',
    images: require('../../assets/gallery/Imagem25.jpg'),
    description: "Vista do Poço Amazonas localizado na entrada do Jardim Botânico de João Pessoa."
  },
  {
    Key: '27',
    images: require('../../assets/gallery/Imagem26.jpg'),
    description: "Vista frontal dos Casarões do Jardim Botânico de João Pessoa."
  },
  {
    Key: '28',
    images: require('../../assets/gallery/Imagem27.jpg'),
    description: "Vista Lateral dos Casarões do Jardim Botânico de João Pessoa."
  },
  {
    Key: '29',
    images: require('../../assets/gallery/Imagem28.jpg'),
    description: "Marco histórico dos Encontros dos Jardins Botânicos na Paraíba."
  },
  {
    Key: '30',
    images: require('../../assets/gallery/Imagem29.jpg'),
    description: "Vista do Quiosque da Associação de Orquidófilos."
  },
  {
    Key: '31',
    images: require('../../assets/gallery/Imagem30.jpg'),
    description: "Vista da Casa de Máquinas, responsável pelo tratamento de águas no Jardim Botânico de João Pessoa."
  },
  {
    Key: '32',
    images: require('../../assets/gallery/Imagem31.jpg'),
    description: "Vista interna da Casa de Máquinas."
  },
  {
    Key: '33',
    images: require('../../assets/gallery/Imagem32.jpg'),
    description: "Placa informativa sobre os Poços Amazonas."
  },
  {
    Key: '34',
    images: require('../../assets/gallery/Imagem33.jpg'),
    description: "Poço Amazonas em funcionamento."
  },
  {
    Key: '35',
    images: require('../../assets/gallery/Imagem34.jpg'),
    description: "Poço Amazonas em funcionamento."
  },
  {
    Key: '36',
    images: require('../../assets/gallery/Imagem35.jpg'),
    description: "Caranguejeira (Lasiodora parahybana)."
  },
  {
    Key: '37',
    images: require('../../assets/gallery/Imagem36.jpg'),
    description: "Bicho-preguiça ( Bradypus variegatus)."
  },
  {
    Key: '38',
    images: require('../../assets/gallery/Imagem37.jpg'),
    description: "Jacaré-de-papo-amarelo (Caiman latirostris)."
  },
  {
    Key: '39',
    images: require('../../assets/gallery/Imagem38.jpg'),
    description: "Flor do “Beijo da Morte” (Psychotria colorata)."
  },
  {
    Key: '40',
    images: require('../../assets/gallery/imagem39.jpg'),
    description: "Frutos do “Beijo da Morte” (Psychotria colorata). "
  },
  {
    Key: '41',
    images: require('../../assets/gallery/Imagem40.jpg'),
    description: "Filhote de Tamanduá-mirim (Tamandua tetradactyla)."
  },
  {
    Key: '42',
    images: require('../../assets/gallery/Imagem41.jpg'),
    description: "Fungo Cogumelo (Fungi)."
  },
  {
    Key: '43',
    images: require('../../assets/gallery/Imagem42.jpg'),
    description: "Coruja-da-igreja (Tyto furcata)."
  },
  {
    Key: '44',
    images: require('../../assets/gallery/Imagem43.jpg'),
    description: "Coral Verdadeira (Micrurus altirostris)."
  },
  {
    Key: '45',
    images: require('../../assets/gallery/Imagem44.jpg'),
    description: "Liana (Cipó) em formato de coração. "
  },
  {
    Key: '46',
    images: require('../../assets/gallery/Imagem45.jpg'),
    description: "Cobra “Papa-ovo” (Drymarchon corais) e Jabuti (Chelonoidis carbonaria). "
  },
  {
    Key: '47',
    images: require('../../assets/gallery/Imagem46.jpg'),
    description: "Cobra-cipó (Leptophis dibernardoi)"
  },
]

const Gallery = () => {

  const renderSlides = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#90BE6D'
      }}>
        <Image
          source={item.images}
          style={{
            width: 'auto',
            height: '100%'
          }}
          resizeMode="contain"
        />
        <View style={{
          backgroundColor: '#fff',
          width: '100%',
          height: '15%',
          position: 'absolute',
          backgroundColor: 'rgba(52, 52, 52, 0.9)',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: '#FFFFFF' }}>
            {item.Key}
          </Text>
          <Text numberOfLines={2} style={{ color: '#FFFFFF', marginBottom: 40, marginHorizontal: 10, textAlign: 'center' }}>
            {item.description}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={galleryItems}
      activeDotStyle={{
        backgroundColor: '#90BE6D',
        width: '100%'
      }}
      renderNextButton={() => { null }}
      renderDoneButton={() => { null }}
    />
  )
}

export default Gallery;