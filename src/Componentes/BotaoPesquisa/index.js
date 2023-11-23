import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation


const CartaoProduto = ({ item }) => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('DetalhesProdutos', { produto: item })}>
      <Image source={{ uri: item.imagem }} style={styles.image} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const MakeupApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const produtos = [
    { id: 1, nome: 'Base', preco: 44.90, imagem: 'https://cdn.shopk.it/usercontent/cacau-chic-shop/media/images/ce23c27-132810-156502-1600-auto.png'},
    { id: 2, nome: 'Batom', preco: 20.00, imagem: 'https://tfczxi.vtexassets.com/arquivos/ids/179533/batom-liquido-matte-melu-by-rubyrose-cor-raspberry-cm05-01.jpg?v=638169260130700000' },
    { id: 3, nome: 'Blush', preco: 55.50, imagem: 'https://tfczxi.vtexassets.com/arquivos/ids/172854/phallebeauty-paleta-de-blush-01.jpg?v=638010233220670000' },
    { id: 4, nome: 'Corretivo', preco: 35.00, imagem: 'https://acdn.mitiendanube.com/stores/001/407/886/products/img_17731-a837e90d7cbba9111516777858913402-640-0.jpg'},
    { id: 5, nome: 'Delineador', preco: 20.00, imagem: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/5/vult-delineador-liquido-3ml-30006-8607390253998952200.png'},
    { id: 6, nome: 'Máscara de Cílios', preco: 25.00, imagem: 'https://d358a814b78lcf.cloudfront.net/Custom/Content/Products/10/02/1002799_mascara-de-cilios-2-em-1-bella-femme-5620_m2_636856667072563830.jpg' },
    { id: 7, nome: 'Sombras', preco: 20.00, imagem: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/B52831/9df19f4f-bcb4-415f-8b32-b3ce48f8f7b8-bot-52831-make-b-paleta-sombras-rose-frontal-01.jpg' },
    { id: 8, nome: 'Pincéis', preco: 50.00, imagem: 'https://down-br.img.susercontent.com/file/ba8fa54bd3927e4cc55dff97f7015140'},
    { id: 9, nome: 'Primer', preco: 19.99, imagem: 'https://images.tcdn.com.br/img/img_prod/728440/primer_facial_phallebeauty_1043_1_20201117094047.jpg' },
    { id: 10, nome: 'Paleta de Sombras', preco: 20.99, imagem: 'https://m.media-amazon.com/images/I/51q0QNSAkdL._AC_UF1000,1000_QL80_.jpg' },
    { id: 11, nome: 'Kit de Maquiagem', preco: 110.00, imagem: 'https://m.media-amazon.com/images/I/61eZTSS6wBL._AC_UF894,1000_QL80_.jpg'},
    { id: 12, nome: 'Lápis de Olho', preco: 9.99, imagem: 'https://d2kh0jmrbw4y83.cloudfront.net/Custom/Content/Products/41/83/41838_lapis-olho-preto-capontador-mia-make-1266931_z2_637953046937964507.jpg' },
    { id: 13, nome: 'Esponja de Maquiagem', preco: 9.50, imagem: 'https://m.media-amazon.com/images/I/61xa-xk59aL._AC_SY355_.jpg' },
    { id: 14, nome: 'Contorno', preco: 15.50, imagem: 'https://belongbe.com/cdn/shop/products/frederika-bronzed-bronzer-contorno-liquido-maple-2.jpg?v=1657684007&width=1500'},
    { id: 15, nome: 'Pó Compacto', preco: 19.90, imagem: 'https://d3iyfln0g34vav.cloudfront.net/Custom/Content/Products/10/38/1038991_po-compacto-facial-elegancy-miss-rose_m1_638037743662060155.png'},
    { id: 16, nome: 'Iluminador', preco: 22.50, imagem: 'https://cdn.awsli.com.br/800x800/404/404800/produto/169460806/1a4e7e11da.jpg'},
    { id: 17, nome: 'Bronzer', preco: 20.00, imagem: 'https://www.marchetti.com.br/9875-large_default/bronzer-matte.jpg'},
    { id: 18, nome: 'Fixador', preco: 15.00, imagem: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/E73644/9d756fd8-d2ba-4fea-9cec-0b16ccee740a-fixador-de-maquiagem-glam-spray-75ml-glam.png'},
    { id: 19, nome: 'Gloss Labial', preco: 10.50, imagem: 'https://72036.cdn.simplo7.net/static/72036/sku/labios-gloss-gloss-labial-fand-cosmeticos-4-5-ml--p-1658870459817.jpg'},
    { id: 20, nome: 'Lip Tint', preco: 15.00, imagem: 'https://dailus.vteximg.com.br/arquivos/ids/163747/7894222020488_1.jpg?v=637693093748700000'},
    { id: 22, nome: 'Manteiga de Cacau', preco: 5.00, imagem: 'https://drogariasp.vteximg.com.br/arquivos/ids/667500-1000-1000/709620---manteiga-de-cacau-ever-care-luxo-fps8-3-3g.jpg?v=637902076541900000'},
    { id: 23, nome: 'Lápis de Boca', preco: 9.99, imagem: 'https://cdn.awsli.com.br/400x400/375/375178/produto/224063130/7899852021300-vult-lapiseira-labial-castanho-claro_fechado_1000x1000-rnrlm42cft.jpg' },
    { id: 24, nome: 'Necessaire', preco: 14.00, imagem: 'https://img.ws.mms.shopee.com.br/fd8379dff206a88cb9feedce68ab3a0f' },
    { id: 25, nome: 'Curvador de cílios', preco: 10.00, imagem: 'https://69784.cdn.simplo7.net/static/69784/sku/maquiagem-curvador-de-cilios-sereia--p-1629923307875.jpg'},
    { id: 26, nome: 'Lip balm', preco: 7.50, imagem: 'https://cdn.lojasmaismake.com.br/media/catalog/product/cache/1/image/1540x1540/9df78eab33525d08d6e5fb8d27136e95/1/0/1015951_lip-balm-hidratante-labial-colecao-milk-sp-colors-01-14070_z1_637967755291413731.jpg_01.jpg'},
    { id: 27, nome: 'Cílios postiços', preco: 19.99, imagem: 'https://cdn.awsli.com.br/800x800/375/375178/produto/161927334/373253f3ae.jpg'},
    { id: 28, nome: 'Removedor de maquiagem', preco: 29.90, imagem: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/497043-280-280/agua-micelar-solucao-de-limpeza-facial-5-em-1-l-oreal-paris-demaquilante--9-.jpg?v=637926485729100000'},
    { id: 29, nome: 'Sombra Líquida', preco: 30.00, imagem: 'https://images.tcdn.com.br/img/img_prod/1141016/sombra_liquida_bloom_luisance_l3179_493_1_37b359b4d7c330d593cd297c54e46b8a.jpg'},
    { id: 30, nome: 'Removedor de Esmalte', preco: 9.50, imagem: 'https://images.tcdn.com.br/img/img_prod/926373/farmax_removedor_de_esmalte_sem_acetona_100ml_escolha_a_sua_167_1_a26f5c8c685c66f812cb3f0dc693d72f.png'},
    { id: 31, nome: 'Pó translúcido', preco: 14.00, imagem: 'https://pimg.amr.marykaycdn.com/HeroZoom/10000/168609-002-TranslucentLoosePowder-NOBRUSH.jpg'},
    { id: 32, nome: 'Batom em Bastão', preco: 19.90, imagem: 'https://ecssusprime.com.br/wp-content/uploads/2022/03/batom-marrm-claro-ecssus-prime-min.png'},
    { id: 33, nome: 'Pigmento para olhos', preco: 10.00, imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/002/792/376/products/8ba762fb-231a-4fe3-91e5-8604bee9fed51-77f694d33458ff872516831386273184-1024-1024.png'},
    { id: 34, nome: 'Lenços demaquilantes', preco: 9.90, imagem: 'https://a-static.mlcdn.com.br/450x450/lencos-de-limpeza-demaquilantes-impala-hipoalergenico-com-25-unidades/drogariaaraujosa/865532/c003ebf6d3f7d7533f837324318805c1.jpeg'},
    { id: 35, nome: 'Base em pó', preco: 30.00, imagem: 'https://static.wixstatic.com/media/8fec03_29687de6273e4f718ff16e60442ed805.jpg/v1/fill/w_480,h_478,al_c,lg_1,q_80,enc_auto/8fec03_29687de6273e4f718ff16e60442ed805.jpg'},
    { id: 36, nome: 'Delineador em Gel', preco: 13.90, imagem: 'https://images.tcdn.com.br/img/img_prod/730191/delineador_em_gel_black_ruby_rose_2139_1_20200827152243.jpg'},
    { id: 37, nome: 'Esmaltes', preco: 5.50, imagem: 'https://images.tcdn.com.br/img/img_prod/803538/kit_24_esmaltes_impala_manicure_tons_coloridos_e_perolados_625_1_f690aa6a70fefcd8376bde2a415eb2f4.png'},
    // Adicione mais produtos conforme necessário
  ];

  const produtosFiltrados = produtos.filter(item => item.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar produtos de maquiagem"
        value={searchTerm}
        onChangeText={texto => setSearchTerm(texto)}
      />
      <ScrollView>
      <FlatList
        data={produtosFiltrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartaoProduto item={item} />}
        numColumns={2}
/></ScrollView>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
    textAlign: 'center',
  },
});

