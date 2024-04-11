import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList, Image } from 'react-native';

export default function TabAdviceScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allPlantAdvices, setAllPlantAdvices] = useState([

    {
      id: 1,
      title: 'Orchidée',
      description: 'Elles n apprécient pas de vivre en pots, elles doivent être en suspension, dans un endroit lumineux, protégé du froid. Il faut laisser leurs racines aériennes, parfois très longues, pendre dans le vide en cascade. Il est conseillé de les tremper régulièrement dans une eau tiède et peu calcaire.',
      image: 'https://www.leparisien.fr/resizer/dwgX0sJ02W7e_eqUYUchqv_APi0=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/X6NACRGBWJDLFFTRAL35DBXHHQ.jpg',
      author: 'John',
    },
    {
      id: 2,
      title: 'Caoutchouc',
      description: 'Le caoutchouc n a pas besoin de beaucoup d eau mais apprécie l humidité. Attendez que la terre soit sèche entre deux arrosages, puis versez un grand verre d eau à température ambiante. Vous devez également brumiser les feuilles pour lui donner une atmosphère humide.',
      image: 'https://m.media-amazon.com/images/I/81p+QQGF65L._AC_UF1000,1000_QL80_.jpg',
      author: 'Alice',
    },
    {
      id: 3,
      title: 'Lavande',
      description: 'Pour que votre lavande reste en bonne santé, il est recommandé de la tailler régulièrement. La taille permet de stimuler la croissance de la plante et de maintenir une forme compacte. Taillez la lavande au printemps en veillant à ne pas couper les branches trop courtes.',
      image: 'https://images.ctfassets.net/b85ozb2q358o/a98a749928ed232c2c10cab506c668eb0dbf193777956d98b4d521b108a97b11/bfedd1aa834ec769fa0fd6c4d56b632d/image.png',
      author: 'Bob',
    },
    {
      id: 4,
      title: 'Fougère',
      description: 'Les fougères aiment les sols pauvres et ont donc besoin de peu d éléments nutritifs. Une petite couche de compost suffit. Cela forme une couche de paillis qui nourrit et protège le sol pendant l hiver. Le sol dessèchera ainsi moins rapidement.',
      image: 'https://bricoleurpro.ouest-france.fr/images/dossiers/2021-10/fougere-065524.jpg',
      author: 'Ludo',
    },
    {
      id: 5,
      title: 'Pothos',
      description: 'le Pothos a besoin d arrosages réguliers mais pas trop copieux, au risque de voir ses feuilles jaunir. Laissez sécher la terre en surface entre deux apports d eau',
      image: 'https://i-dj.unimedias.fr/2023/09/12/adobestock435962616-6500248843ba7.jpeg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050',
      author: 'Béatrice',
    },
    {
      id: 6,
      title: 'Rose',
      description: 'Pour que vos Roses restent bien hydratées, changez l eau du vase dès qu elle devient trouble, tous les deux jours environ, en recoupant les tiges en biseau si nécessaire. car ces derniers pourraient accélerer la floraison de vos fleurs.',
      image: 'https://jardinage.lemonde.fr/images/dossiers/2018-09/roses-rouges-185521.jpg',
      author: 'Amelie',
    },
    {
      id: 7,
      title: 'Monstera',
      description: 'Le Monstera ne se taille pas, mais il prend rapidement ses aises dans une pièce. Pour calmer ses ardeurs, vous pouvez tout à fait pincer les extrémités de votre plante pour qu elle se ramifie en partie basse, ou tailler tout simplement les tiges sommitales',
      image: 'https://www.schilliger.com/media/filer_public_thumbnails/filer_public/de/07/de07ebab-e7e9-4b99-82f0-cb76022d847d/monstera-6.jpg__1080x1122_q85_crop_subsampling-2_upscale.jpg',
      author: 'Adamou',
    },
  ]);

  const [filteredPlantAdvices, setFilteredPlantAdvices] = useState(allPlantAdvices);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const filteredAdvices = allPlantAdvices.filter(advice =>
      advice.title.toLowerCase().includes(text.toLowerCase()) ||
      advice.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPlantAdvices(filteredAdvices);
  };

  const renderAdviceItem = ({ item }: { item: PlantAdvice }) => (
    <View style={styles.adviceContainer}>
      <Image source={{ uri: item.image }} style={styles.adviceImage} />
      <Text style={styles.adviceTitle}>{highlightSearchText(item.title)}</Text>
      <Text style={styles.adviceDescription}>{highlightSearchText(item.description)}</Text>
      <Text style={styles.adviceAuthor}>Posté par {item.author}</Text>
    </View>
  );

  const highlightSearchText = (text: string) => {
    if (!searchQuery) return <Text>{text}</Text>;

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);

    return (
      <Text>
        {parts.map((part, index) => (
          regex.test(part) ? <Text key={index} style={styles.highlightText}>{part}</Text> : part
        ))}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conseils sur les plantes</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Recherche..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredPlantAdvices.length === 0 && (
        <Text style={styles.noResult}>Aucun résultat trouvé</Text>
      )}
      <FlatList
        data={filteredPlantAdvices}
        renderItem={renderAdviceItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {searchQuery !== '' && filteredPlantAdvices.length === 0 && (
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestionText}>Voici la liste complète des conseils :</Text>
          <FlatList
            data={allPlantAdvices}
            renderItem={renderAdviceItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: 390,
  },
  adviceContainer: {
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 390,
  },
  adviceImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  adviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  adviceDescription: {
    fontSize: 16,
    marginBottom: 5,
  },
  adviceAuthor: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  highlightText: {
    color: '#ff007f', // Rose foncé
    fontWeight: 'bold', // Facultatif : mettez en gras le texte surligné
  },
  noResult: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  suggestionContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

// Définir une interface pour la structure des conseils sur les plantes
interface PlantAdvice {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
}