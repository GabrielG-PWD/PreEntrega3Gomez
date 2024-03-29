function cargarDatos() {
  return [
    {id: 1, nombre: 'Jean Recto Clásico P/Hombre', categoria: 'urbana', precio: 7690, stock: 10, img: './img/hombre/Pantalon Jean Recto Clasico Hombre (S-M-L-XL).jpg'},
    {id: 2, nombre: 'Jean Recto Talle Especial P/Hombre', categoria: 'urbana', precio: 10500, stock: 8, img: './img/hombre/Jeans Hombre(S-M-L-XL).jpg'},
    {id: 3, nombre: 'Jogging Friza Premium P/Hombre', categoria: 'deportes', precio: 8000, stock: 5, img: './img/hombre/Jogging Friza Premium Hombre (S-M-L-XL).jpg'},
    {id: 4, nombre: 'Pantalon Cargo Gabardina Elastizada P/Hombre', categoria: 'urbana', precio: 7000, stock: 10, img: './img/hombre/Pantalon Cargo Hombre Gabardina Elastizada Jogger Bolsillos (S-M-L).jpg'},
    {id: 5, nombre: 'Pantalon Chupin Jogging P/Hombre', categoria: 'deportes', precio: 4000, stock: 5, img: './img/hombre/Pantalon Chupin Hombre Joggin Joggers Gimnasia Deportivo.jpg'},
    {id: 6, nombre: 'Pantalon Jogging Con Cierre P/Hombre', categoria: 'deportes', precio: 3000, stock: 10, img: './img/hombre/Pantalon Jogging Deportivo Frizado Con Cierres Hombres (S-M-L-XL).jpg'},
    {id: 7, nombre: 'Pantalon Fit Elastizado Pampero Jogger Bolsillo P/Hombre', categoria: 'trabajo', precio: 14000, stock: 10, img: './img/hombre/Pantalon Fit Elastizado Pampero Jogger Bolsillo (S-M-L-XL).jpg'},
    {id: 8, nombre: 'Bermuda Short Tuck Hombre Con Dobladillo', categoria: 'urbana', precio: 3500, stock: 5, img: './img/hombre/Bermuda Short Tuck Hombre Con Dobladillo.jpg'},
    {id: 9, nombre: 'Pantalón Corto Short Liviano P/Hombre', categoria: 'urbana', precio: 4500, stock: 10, img: './img/hombre/Pantalón Corto Short Liviano Hombres (S-M-L-XL).jpg'},
    {id: 10, nombre: 'Short Corto Liso De Algodón Rustico P/Hombre', categoria: 'urbana', precio: 4500, stock: 5, img: './img/hombre/Short Corto Liso De Algodón Rustico Hombres (S-M-L-XL).jpg'},
    {id: 11, nombre: 'Short Deportivo Bolsillos P/Hombre', categoria: 'deportes', precio: 3500, stock: 10, img: './img/hombre/Short Deportivo Bolsillos New Zealand (S-M-L-XL).jpg'},
    {id: 12, nombre: 'Calza Corta Ciclista Unisex Termica Rugby Futbol Gym Lycra P/Hombre', categoria: 'deportes', precio: 5000, stock: 10, img: './img/hombre/Calza Corta Ciclista Unisex Termica Rugby Futbol Gym Lycra.jpg'},
    {id: 13, nombre: 'Calza Térmica Hombre Frisada P/Hombre', categoria: 'deportes', precio: 6500, stock: 8, img: './img/hombre/Calza Térmica Hombre Frisada Seamless Por Talle Maxima.jpg'},
    {id: 14, nombre: 'Remera Lisa P/Hombre', categoria: 'urbana', precio: 2500, stock: 15, img: './img/hombre/Remera Lisa Hombre Básica Trabajo (S-M-L).jpg'},
    {id: 15, nombre: 'Chomba Clasica Molinex Algodon P/Hombre', categoria: 'urbana', precio: 8000, stock: 5, img: './img/hombre/Chomba Clasica Molinex Algodon (S-M-L-XL).jpg'},
    {id: 16, nombre: 'Camisa Cuello Italiano Mangas Largas P/Hombre', categoria: 'urbana', precio: 9000, stock: 5, img: './img/hombre/Camisa Cuello Italiano Mangas Largas (S-M-L).jpg'},
    {id: 17, nombre: 'Camisa De Vestir Hombre P/Hombre', categoria: 'formal', precio: 8000, stock: 5, img: './img/hombre/Camisa De Vestir Hombre (S-M-L).jpg'},
    {id: 18, nombre: 'Camisa Hombre Talle Especial Manga Corta P/Hombre', categoria: 'urbana', precio: 11000, stock: 5, img: './img/hombre/Camisa Hombre Talle Especial Manga Corta 48-50-52.jpg'},
    {id: 19, nombre: 'Camisa La Martina Lisa Manga Larga Azul P/Hombre', categoria: 'urbana', precio: 15000, stock: 5, img: './img/hombre/Camisa La Martina Lisa Manga Larga Azul (S-M-L).jpg'},
    {id: 20, nombre: 'Camisa Entalladas Slim P/Hombre', categoria: 'urbana', precio: 8000, stock: 10, img: './img/hombre/Camisas Entalladas Hombre Slim (S-M-L).jpg'},
    {id: 21, nombre: 'Remera Deportiva Gimnasio P/Hombre', categoria: 'deportes', precio: 3000, stock: 15, img: './img/hombre/Remera Deportiva Gimnasio Camiseta Hombre Running Ciclista (S-M-L-XL).jpg'},
    {id: 22, nombre: 'Remera Musculosa Clásica Jersey Premium Alpina P/Hombre', categoria: 'deportes', precio: 3000, stock: 10, img: './img/hombre/Remera Musculosa Clásica Jersey Premium Alpina(S-M-L).jpg'},
    {id: 23, nombre: 'Musculosa Asics Limited Edition P/Hombre', categoria: 'deportes', precio: 5000, stock: 10, img: './img/hombre/Musculosa Asics Limited Edition Hombre.jpg'},
    {id: 24, nombre: 'Buzo Canguro Capucha  Slim Fit Hoodie P/Hombre', categoria: 'urbana', precio: 6000, stock: 5, img: './img/hombre/Buzo Canguro Capucha Hombre Slim Fit Hoodie.jpg'},
    {id: 25, nombre: 'Buzos Hoodie Hombre Brooksfield Algodón P/Hombre', categoria: 'urbana', precio: 5500, stock: 5, img: './img/hombre/Buzos Hoodie Hombre Brooksfield Capucha Algodón.jpg'},
    {id: 26, nombre: 'Sweater Daniel P/Hombre', categoria: 'urbana', precio: 40000, stock: 2, img: './img/hombre/Sweater Daniel (S-M-L).jpg'},
    {id: 27, nombre: 'Sweater La Martina Cuello Redondo P/Hombre', categoria: 'urbana', precio: 40000, stock: 2, img: './img/hombre/Sweater La Martina Cuello Redondo Negro Hombre (S-M-L-XL).jpg'},
    {id: 28, nombre: 'Sweater Tejido Pullover Algodón Acrílico P/Hombre', categoria: 'urbana', precio: 8000, stock: 10, img: './img/hombre/Sweater Tejido Pullover Algodón Acrílico Hombre (S-M-L).jpg'},
    {id: 29, nombre: 'Campera Parka Premium P/Hombre', categoria: 'urbana', precio: 25000, stock: 2, img: './img/hombre/Campera Hombre Parka Premium (S-M-L-XL).jpg'},
    {id: 30, nombre: 'Campera Inflada Con Capucha Abrigadas Invierno P/Hombre', categoria: 'urbana', precio: 15000, stock: 4, img: './img/hombre/Campera Inflada Hombre Con Capucha Abrigadas Invierno (S-M-L).jpg'},
    {id: 31, nombre: 'Campera Oneil Mistic P/Hombre', categoria: 'urbana', precio: 60000, stock: 2, img: './img/hombre/Campera Oneil Mistic Hombre (S-M-L).jpg'},
    {id: 32, nombre: 'Campera Outdoor Termica Con Capucha  P/Hombre', categoria: 'urbana', precio: 24000, stock: 3, img: './img/hombre/Campera Outdoor Termica Con Capucha Hombre (S-M-L-XL).jpg'},
    {id: 33, nombre: 'Media Pack X 3 Algodón Briganti Medias Lisas P/Hombre', categoria: 'urbana', precio: 4000, stock: 20, img: './img/hombre/Media Pack X 3 Algodón Hombre Briganti Medias Lisas.jpg'},
    {id: 34, nombre: 'Medias Hombre Lisas Algodon Polo Club P/Hombre', categoria: 'urbana', precio: 4000, stock: 20, img: './img/hombre/Medias Hombre Lisas Algodon Polo Club.jpg'},
    {id: 35, nombre: 'Soquetes Elemento Pack X 6 Pares Lisos P/Hombre', categoria: 'urbana', precio: 2800, stock: 20, img: './img/hombre/Soquetes Elemento Pack X 6 Pares De Hombre Lisos (S-M-L-XL).jpg'},    
    {id: 36, nombre: 'Remera Basica Manga Corta Lisa 100% Algodon P/Mujer', categoria: 'informal', precio: 1500, stock: 20, img: './img/mujer/Remera Basica Mujer Manga Corta Lisa Algodon.jpg'},
    {id: 37, nombre: 'Remera Lisa 100% Algodon Excelente Corte P/Mujer', categoria: 'informal', precio: 3000, stock: 10, img: './img/mujer/Remera Lisa Mujer Algodon Premium Excelente Corte.jpg'},
    {id: 38, nombre: 'Remera Emilia Con Tachas P/Mujer', categoria: 'informal', precio: 7000, stock: 20, img: './img/mujer/Remera Emilia Con Tachas De Vestir.jpg'},
    {id: 39, nombre: 'Remera De Algodon Y Lycra Manga Larga Cuello Pico V P/Mujer', categoria: 'informal', precio: 4500, stock: 10, img: './img/mujer/Remera De Algodon Y Lycra Manga Larga Cuello Pico V.jpg'},
    {id: 40, nombre: 'Remera Lisa Escote En V P/Mujer', categoria: 'informal', precio: 2500, stock: 15, img: './img/mujer/Remera Lisa Mujer Escote En V Dama.jpg'},
    {id: 41, nombre: 'Remera Logos De Jersey Street P/Mujer', categoria: 'informal', precio: 12500, stock: 5, img: './img/mujer/Remera Logos De Jersey Mujer Street.jpg'},
    {id: 42, nombre: 'Remera Manga Larga Comoda Suave C Linda Caida P/Mujer', categoria: 'informal', precio: 3500, stock: 5, img: './img/mujer/Remera Mujer Manga Larga Comoda Suave C Linda Caida.jpg'},
    {id: 43, nombre: 'Remera Overshort New John L. Cook Oficial P/Mujer', categoria: 'informal', precio: 4000, stock: 5, img: './img/mujer/Remera Overshort New John L Cook Oficial.jpg'},
    {id: 44, nombre: 'Remera Print Portrait Negro Mujer Desiderata P/Mujer', categoria: 'informal', precio: 8500, stock: 5, img: './img/mujer/Remera Print Portrait Negro Mujer Desiderata.jpg'},
    {id: 45, nombre: 'Crop Top Algodon Premium P/Mujer', categoria: 'informal', precio: 3500, stock: 4, img: './img/mujer/Remera Crop Top Unisex Algodon Premium.jpg'},
    {id: 46, nombre: 'Crop Top Manga Corta Espalda Descubierta De Morley P/Mujer', categoria: 'informal', precio: 3000, stock: 3, img: './img/mujer/Crop Top Mujer Manga Corta Espalda Descubierta De Morley.jpg'},
    {id: 47, nombre: 'Top Mil Usos Con Argolla Lycra Premium Noche P/Mujer', categoria: 'informal', precio: 2500, stock: 10, img: './img/mujer/Top Mil Usos Con Argolla Lycra Premium Dama Noche.jpg'},
    {id: 48, nombre: 'Top Musculosa Morley Basica Varios Colores P/Mujer', categoria: 'informal', precio: 2000, stock: 10, img: './img/mujer/Top Musculosa Morley Basica Varios Colores Mujer Remera.jpg'},
    {id: 49, nombre: 'Top Strapless Leather Bee De Pu 47 Street P/Mujer', categoria: 'informal', precio: 2000, stock: 5, img: './img/mujer/Top Strapless Leather Bee De Pu Mujer 47 Street.jpg'},
    {id: 50, nombre: 'Top Strapless Nido De Abeja Liso P/Mujer', categoria: 'informal', precio: 1500, stock: 5, img: './img/mujer/Top Strapless Nido De Abeja Liso.jpg'},
    {id: 51, nombre: 'Top Doro De Pu 47 Street P/Mujer', categoria: 'informal', precio: 1700, stock: 5, img: './img/mujer/Top Doro De Pu Mujer 47 Street.jpg'},
    {id: 52, nombre: 'Top Corto Remera Corta Basica Clasico P/Mujer', categoria: 'informal', precio: 2000, stock: 5, img: './img/mujer/Top Corto Dama Remera Corta Basica Mujer Top Clasico.jpg'},
    {id: 53, nombre: 'Top Deportivo Lycra Fitness Gym Running P/Mujer', categoria: 'deportes', precio: 2800, stock: 10, img: './img/mujer/Top Deportivo Lycra Fitness Gym Running.jpg'},
    {id: 54, nombre: 'Sudadera Musculosa Drifit Set Deportiva Unisex Talle Unico P/Mujer', categoria: 'deportes', precio: 1800, stock: 5, img: './img/mujer/Sudadera Musculosa Drifit Set Deportiva Unisex Talle Unico.jpg'},
    {id: 55, nombre: 'Sudadera Lisa P/Mujer', categoria: 'deportes', precio: 2000, stock: 5, img: './img/mujer/Sudaderas Y Musculosas Mujer Lisas Para Sublimar.jpg'},
    {id: 56, nombre: 'Musculosa Sudadera Vlack Siara Bordó P/Mujer', categoria: 'deportes', precio: 5000, stock: 10, img: './img/mujer/Musculosa Sudadera Vlack Mujer Siara Bordó.jpg'},
    {id: 57, nombre: 'Camisetas Multifilamento Cocot 5150 Manga Larga Roda P/Mujer', categoria: 'informal', precio: 2000, stock: 10, img: './img/mujer/Camisetas Multifilamento Cocot 5150 Manga Larga Roda.jpg'},
    {id: 58, nombre: 'Camiseta De Modal Cuello Redondo P/Mujer', categoria: 'informal', precio: 3000, stock: 10, img: './img/mujer/Camiseta De Modal Cuello Redondo.jpg'},
    {id: 59, nombre: 'Blusa Bella P/Mujer', categoria: 'informal', precio: 3000, stock: 5, img: './img/mujer/Blusa Bella.jpg'},
    {id: 60, nombre: 'Blusa Nano Básica Lino Escote V Kendall P/Mujer', categoria: 'formal', precio: 2000, stock: 5, img: './img/mujer/Blusa Nano Básica Lino Escote V Kendall.jpg'},
    {id: 61, nombre: 'Blusa Poplin Liso Manga 3/4', categoria: 'formal', precio: 5000, stock: 5, img: './img/mujer/Blusa Poplin Liso Manga 3-4.jpg'},
    {id: 62, nombre: 'Blusa Remera Lino Estampada Manga 3/4 P/Mujer', categoria: 'formal', precio: 6500, stock: 5, img: './img/mujer/Blusa Remera Lino Estampada Manga 3-4.jpg'},
    {id: 63, nombre: 'Sweater Combinado Rimmel P/Mujer', categoria: 'formal', precio: 19000, stock: 2, img: './img/mujer/Sweater Combinado Rimmel.jpg'},
    {id: 64, nombre: 'Sweater Corto Manga Globo Escote Hilo Tejido Colores P/Mujer', categoria: 'formal', precio: 13000, stock: 10, img: './img/mujer/Sweater Corto Manga Globo Escote Hilo Tejido Mujer Colores.jpg'},
    {id: 65, nombre: 'Sweater Cuello Redondo De Bremer P/Mujer', categoria: 'formal', precio: 13000, stock: 2, img: './img/mujer/Sweater Cuello Redondo De Bremer.jpg'},
    {id: 66, nombre: 'Sweater Polera Net Chiara Gris Melange Desiderata P/Mujer', categoria: 'formal', precio: 14000, stock: 3, img: './img/mujer/Sweater Polera Net Chiara Gris Melange Mujer Desiderata.jpg'},
    {id: 67, nombre: 'Blazer Bengalina Importada Elastizada Premium Entallada P/Mujer', categoria: 'formal', precio: 5200, stock: 3, img: './img/mujer/Blazer Bengalina Importada Elastizada Premium Entallada.jpg'},
    {id: 68, nombre: 'Blazer De Crep Sastrero P/Mujer', categoria: 'formal', precio: 9500, stock: 3, img: './img/mujer/Blazer De Crep Sastrero Para Dama.jpg'},
    {id: 69, nombre: 'Blazer Saco Camisa Oversize C Botones Basico Liso P/Mujer', categoria: 'formal', precio: 6000, stock: 5, img: './img/mujer/Blazer Mujer Saco Camisa Oversize C Botones Basico Liso.jpg'},
    {id: 70, nombre: 'Saco Blazer Bengalina Elastizada Solapa  Moda P/Mujer', categoria: 'formal', precio: 6500, stock: 5, img: './img/mujer/Saco Mujer Blazer Bengalina Elastizada Solapa Dama Moda.jpg'},
    {id: 71, nombre: 'Buzo Canguro Bifaz Peluche Corderito P/Mujer', categoria: 'informal', precio: 3000, stock: 2, img: './img/mujer/Buzo Canguro Bifaz Peluche Corderito.jpg'},
    {id: 72, nombre: 'Buzo Canguro Peluche Bifaz Elastizado Con Capuche P/Mujer', categoria: 'informal', precio: 5500, stock: 3, img: './img/mujer/Buzo Canguro Mujer Peluche Bifaz Elastizado Con Capuche.jpg'},
    {id: 73, nombre: 'Buzo Topper Hoodie Rtc Comfy Rosa Fucsia P/Mujer', categoria: 'informal', precio: 5500, stock: 3, img: './img/mujer/Buzo Topper Hoodie Rtc Comfy Rosa Fucsia Mujer.jpg'},
    {id: 74, nombre: 'Buzo Fila Dail P/Mujer', categoria: 'informal', precio: 13500, stock: 3, img: './img/mujer/Buzo Mujer Fila Dail.jpg'},
    {id: 75, nombre: 'Campera Moore System Con Capucha Y Bolsillos P/Mujer', categoria: 'informal', precio: 23500, stock: 2, img: './img/mujer/Campera Moore System Con Capucha Y Bolsillos Para Mujer.jpg'},
    {id: 76, nombre: 'Campera Corderito Bifaz Tapado Buzo Moda P/Mujer', categoria: 'informal', precio: 5500, stock: 2, img: './img/mujer/Campera Mujer Corderito Bifas Tapado Buzo Moda Dama.jpg'},
    {id: 77, nombre: 'Campera Puffer Con Bolsillos Y Cierres P/Mujer', categoria: 'informal', precio: 35000, stock: 2, img: './img/mujer/Campera Puffer Con Bolsillos Y Cierres.jpg'},
    {id: 78, nombre: 'Campera Puffer Chaqueta Impermeable Metalizada Capucha P/Mujer', categoria: 'informal', precio: 5500, stock: 5, img: './img/mujer/Campera Puffer Mujer Chaqueta Impermeable Metalizada Capucha.jpg'},
    {id: 79, nombre: 'Parka Gabardina Con Piel Y Capucha Laika Comprar Online P/Mujer', categoria: 'informal', precio: 34500, stock: 2, img: './img/mujer/Parka Gabardina Con Piel Y Capucha Laika Comprar Online.jpg'},
    {id: 80, nombre: 'Chaqueta Gabardina Kirov P/Mujer', categoria: 'informal', precio: 7550, stock: 3, img: './img/mujer/Chaqueta Gabardina Kirov.jpg'},
    {id: 81, nombre: 'Chaqueta Gabardina Oversize Con Volados En Espalda Y Botones Carey Nashville P/Mujer', categoria: 'informal', precio: 12500, stock: 3, img: './img/mujer/Chaqueta Gabardina Oversize Con Volados En Espalda Y Botones Carey Nashville.jpg'},
    {id: 82, nombre: 'Jean Mile High Levi\'s Super Skinny Dama Premium P/Mujer', categoria: 'informal', precio: 38500, stock: 1, img: './img/mujer/Jean Mile High Levis Super Skinny Dama Premium.jpg'},
    {id: 83, nombre: 'Jean Mom Magge Celeste P/Mujer', categoria: 'informal', precio: 12500, stock: 2, img: './img/mujer/Jean Mom Magge Celeste Mujer.jpg'},
    {id: 84, nombre: 'Jeans Cheta Mom Chupines Talla Grande Varios Modelos P/Mujer', categoria: 'informal', precio: 21500, stock: 3, img: './img/mujer/Jeans Cheta Mom Chupines Talla Grande Varios Modelos.jpg'},
    {id: 85, nombre: 'Jeans Black Clasico P/Mujer', categoria: 'informal', precio: 8500, stock: 3, img: './img/mujer/Jeans Mujer Black Clasico.jpg'},
    {id: 86, nombre: 'Jean Elastizado Chupin Excelente Calce P/Mujer', categoria: 'informal', precio: 8000, stock: 3, img: './img/mujer/Pantalon De Jean De Dama Elastizado Chupin Excelente Calce.jpg'},
    {id: 87, nombre: 'Jean Elastizado Levanta Cola Tiro Alto Premium P/Mujer', categoria: 'informal', precio: 5500, stock: 5, img: './img/mujer/Pantalon Jean Elastizado Levanta Cola Tiro Alto Premium.jpg'},
    {id: 88, nombre: 'Palazo Ancho Recto Tiro Medio De Jean No Mom P/Mujer', categoria: 'informal', precio: 11000, stock: 2, img: './img/mujer/Pantalón Ancho Recto Tiro Medio De Jean Wide Palazo No Mom.jpg'},
    {id: 89, nombre: 'Pantalon Jeans Mom Palazzo Ancho Tiro Alto Rígido Wide P/Mujer', categoria: 'informal', precio: 17000, stock: 2, img: './img/mujer/Pantalon Jeans Mujer Mom Palazzo Ancho Tiro Alto Rígido Wide.jpg'},
    {id: 90, nombre: 'Pantalón Sastrero Palazzo Wide Leg Filomena P/Mujer', categoria: 'informal', precio: 17500, stock: 3, img: './img/mujer/Pantalón Sastrero Palazzo Wide Leg Filomena.jpg'},
    {id: 91, nombre: 'Calza Bengalina Engomada Con Cierres EVA', categoria: 'deportes', precio: 8200, stock: 5, img: './img/mujer/Calza Bengalina Engomada Con Cierres EVA.jpg'},
    {id: 92, nombre: 'Calza Algodon Lycra Gym O Casual P/Mujer', categoria: 'deportes', precio: 1900, stock: 15, img: './img/mujer/Calza De Dama Algodon Con Lycra Gym O Casual.jpg'},
    {id: 93, nombre: 'Calza De Lycra Sublimada Tiro Alto P/Mujer', categoria: 'deportes', precio: 3700, stock: 10, img: './img/mujer/Calza De Lycra Sublimada Tiro Alto.jpg'},
    {id: 94, nombre: 'Calza Deportiva Yoga Fitness Entrenamiento Gym P/Mujer', categoria: 'deportes', precio: 5700, stock: 5, img: './img/mujer/Calza Deportiva Mujer Yoga Fitness Entrenamiento Gym.jpg'},
    {id: 95, nombre: 'Calza Fanaticas Crossfit Pushup Con Frunce En Cola P/Mujer', categoria: 'deportes', precio: 5800, stock: 5, img: './img/mujer/Calza Fanaticas Crossfit Pushup Con Frunce En Cola.jpg'},
    {id: 96, nombre: 'Calza Leggins Termica Con Friza Varios Colores P/Mujer', categoria: 'deportes', precio: 10300, stock: 5, img: './img/mujer/Calza Leggins Termica Con Friza Varios Colores.jpg'},
    {id: 97, nombre: 'Short Deportivo Algodón P/Mujer', categoria: 'deportes', precio: 2200, stock: 10, img: './img/mujer/Shorts Deportivos Algodón Mujer.jpg'},
    {id: 98, nombre: 'Short Cortos Rustico Con Bolsillos P/Mujer', categoria: 'deportes', precio: 3800, stock: 5, img: './img/mujer/Short Cortos Unisex Rustico Con Bolsillos.jpg'},
    {id: 99, nombre: 'Short Morley Corto P/Mujer', categoria: 'deportes', precio: 1900, stock: 12, img: './img/mujer/Short Dama Morley Corto.jpg'},
    {id: 100, nombre: 'Short Eco Cuero Bolsillos Invisibles Y Terminacion Al Corte Kamala P/Mujer', categoria: 'deportes', precio: 7500, stock: 5, img: './img/mujer/Short Eco Cuero Bolsillos Invisibles Y Terminacion Al Corte Kamala.jpg'},
    {id: 101, nombre: 'Short Enterizo Fitness Ultima Moda P/Mujer', categoria: 'informal', precio: 15500, stock: 5, img: './img/mujer/Short Enterizo Fitness Mujer Ultima Moda.jpg'},
    {id: 102, nombre: 'Short Casual Algodon Rustico Comodo Nuevo Colores Dama P/Mujer', categoria: 'informal', precio: 18500, stock: 5, img: './img/mujer/Short Mujer Casual Algodon Rustico Comodo Nuevo Colores Dama.jpg'},
    {id: 103, nombre: 'Short Rústico Con Recortes Y Terminación Redondeada Porter P/Mujer', categoria: 'informal', precio: 7500, stock: 10, img: './img/mujer/SHORT RUSTICO CON Recortes Y Terminación Redondeada Porter.jpg'},
    {id: 104, nombre: 'Falda Fibrana Cruzada Con Terminación En Volado Hermitage P/Mujer', categoria: 'informal', precio: 4500, stock: 10, img: './img/mujer/Falda Fibrana Cruzada Con Terminacion En Volado Hermitage.jpg'},
    {id: 105, nombre: 'Falda Fibrana Evase Con Tajo Delantero Nashira P/Mujer', categoria: 'informal', precio: 2000, stock: 10, img: './img/mujer/Falda Fibrana Evase Con Tajo Delantero Nashira.jpg'},
    {id: 106, nombre: 'Falda Parachute De Mujer 47 Street P/Mujer', categoria: 'informal', precio: 47500, stock: 1, img: './img/mujer/Falda Parachute De Mujer 47 Street.jpg'},
    {id: 107, nombre: 'Minifalda Caramelo Otoño Invierno', categoria: 'informal', precio: 10500, stock: 2, img: './img/mujer/Short Pollera Caramelo Otoño Invierno.jpg'},
    {id: 108, nombre: 'Minifalda Celeste Nevada Roturas Mujer P/Mujer', categoria: 'informal', precio: 6300, stock: 3, img: './img/mujer/Mimi Jeanera Celeste Nevada Roturas Mujer.jpg'},
    {id: 109, nombre: 'Minifalda De Crepe Sastrero Tendencia Valencia P/Mujer', categoria: 'informal', precio: 8000, stock: 3, img: './img/mujer/Pollera Falda De Crepe Sastrero Tendencia Valencia.jpg'},
    {id: 110, nombre: 'Minifalda Eco Cuero Con Pinzas Y Tajo Yuco P/Mujer', categoria: 'informal', precio: 3800, stock: 3, img: './img/mujer/Mini Falda Eco Cuero Con Pinzas Y Tajo Yuco.jpg'},
    {id: 111, nombre: 'Minifalda Engomada Semil Cuero P/Mujer', categoria: 'informal', precio: 5500, stock: 3, img: './img/mujer/Pollera Engomada Semil Cuero.jpg'},
    {id: 112, nombre: 'Minifalda Tubo Con Cintura Elastica Jersey Lurex Portland', categoria: 'informal', precio: 3300, stock: 5, img: './img/mujer/Minifalda Tubo Con Cintura Elastica Jersey Lurex Portland.jpg'},
    {id: 113, nombre: 'Pollera Tableada Dark Cuadrille Aesthetic Grunge Kawaii P/Mujer', categoria: 'informal', precio: 5500, stock: 5, img: './img/mujer/Pollera Tableada Dark Cuadrille Aesthetic Grunge Kawaii.jpg'},
  ]
}


function pintarTarjetas(productos, contenedorTarjetas, templateTarjetas, carrito, carritoDOM) {
  // inicializar fragmento para evitar reflow
  const fragmento = document.createDocumentFragment()

  // limpiar interfaz
  contenedorTarjetas.textContent = ''

  // procesar los productos y pintarlos
  productos.forEach(producto => {
    const clon = templateTarjetas.cloneNode(true)
    clon.querySelector('.card .card-img-top').src = producto.img
    clon.querySelector('.card .card-body .card-title').textContent = `$ ${producto.precio}`
    clon.querySelectorAll('.card .card-body .card-text')[0].textContent = producto.nombre
    clon.querySelector('.card .card-body .btn').setAttribute('id', `btn-${producto.id}`)
    clon.querySelector('.card .card-body .card-text span').textContent = producto.stock
    clon.querySelector('.card .card-body .card-text span').classList.add(`stock-${producto.id}`)
    fragmento.appendChild(clon)

    // capturar evento del boton y agregar al carrito
    const botonAgregar = fragmento.getElementById(`btn-${producto.id}`)
    botonAgregar.addEventListener("click", (e) => agregarAlCarrito(e, productos, carrito, carritoDOM))
  })

  // agregar el fragmento al contenedor
  contenedorTarjetas.appendChild(fragmento)
}


function filtrarProductos(productos, buscadorInput, contenedorTarjetas, templateTarjetas, carrito, carritoDOM) {
  buscadorInput.addEventListener('input', () => {
    const prodFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscadorInput.value))
    pintarTarjetas(prodFiltrados, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)
  })
}


function agregarAlCarrito(e, productos, carrito, carritoDOM) {
  let posBuscado = productos.findIndex(producto => producto.id == Number(e.target.id.slice(4)))
  if (productos[posBuscado].stock > 0) {
    let spanStock = document.querySelector(`.stock-${e.target.id.slice(4)}`)
    productos[posBuscado].stock--
    spanStock.textContent = productos[posBuscado].stock
    
    let posEnCarrito = carrito.findIndex(producto => producto.id == productos[posBuscado].id)
    if (posEnCarrito !== -1) {
      carrito[posEnCarrito].unidades++
      carrito[posEnCarrito].subtotal = carrito[posEnCarrito].precio * carrito[posEnCarrito].unidades
    } else {
      carrito.push({
        id: productos[posBuscado].id,
        nombre: productos[posBuscado].nombre,
        precio: productos[posBuscado].precio,
        unidades: 1,
        subtotal: productos[posBuscado].precio
      })
    }
    
    // guardar el carrito en LS
    localStorage.setItem('carrito', JSON.stringify(carrito))

    // pintar el carrito
    pintarCarrito(carrito, carritoDOM)
  } else {
    alert(`Producto ${productos[posBuscado].nombre} sin stock`)
  }
}


function pintarCarrito(carrito, carritoDOM) {
  // inicializar fragmento para evitar reflow
  let fragmento = ''

  carrito.forEach(producto => {
    fragmento += 
    `<div class="item-carrito d-flex align-items-center justify-content-between">
        <p class="nombre-item">${producto.nombre}</p>
        <p class="cantidad-item">${producto.unidades}</p>
        <p class="precio-unitario-item">${producto.precio}</p>
        <p class="precio-total-item">$ ${producto.subtotal}</p>
    </div>`
  })
  
  // agregar boton al final
  fragmento += `<button id=comprar class="btn btn-secondary">Finalizar compra</button>`

  // agregar el fragmento al carrito(DOM)
  carritoDOM.innerHTML = fragmento

  let botonComprar = document.getElementById("comprar")
  console.log("hola")
  botonComprar.addEventListener("click", () => finalizarCompra(carritoDOM))
}


// function pintarCarrito(carrito, carritoDOM) {
//   // inicializar fragmento para evitar reflow
//   const fragmento = document.createDocumentFragment()
//   const templateCarrito = document.getElementById('template-carrito').content

//   carrito.forEach(producto => {
//     const clon = templateCarrito.cloneNode(true)
//     clon.querySelector('.nombre-item').textContent = producto.nombre
//     clon.querySelector('.cantidad-item').textContent = `x${producto.unidades}`
//     clon.querySelector('.precio-unitario-item').textContent = `$ ${producto.precio}`
//     clon.querySelector('.precio-total-item').textContent = `$ ${producto.subtotal}`
//     fragmento.appendChild(clon)
//   })

//   // fragmento.innerHTML += `<button id="comprar" class="btn btn-secondary">Finalizar compra</button>`


//   // agregar el fragmento al carrito(DOM)
//   carritoDOM.appendChild(fragmento)

//   // agregar boton finalizar 
//   // carritoDOM.innerHTML += `<button id="comprar" class="btn btn-secondary">Finalizar compra</button>`

//   // capturar evento del boton
//   let botonComprar = document.getElementById("comprar")
//   botonComprar.addEventListener("click", () => finalizarCompra(carritoDOM))
// }


function checkCarritoLS(carrito, carritoDOM) {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    pintarCarrito(carrito, carritoDOM)
  }
}


function finalizarCompra(carritoDOM) {
  alert("Muchas gracias por su compra")
  localStorage.removeItem("carrito")
  /* localStorage.setItem("carrito", [])
  localStorage.clear() // se vacia el storage, no solo elimina carrito */
  carritoDOM.innerHTML = ''
}


function filtrarPorCategoria(inputs, productos, contenedorTarjetas, templateTarjetas, carrito, carritoDOM) {
  for (const input of inputs) {
    input.addEventListener('click', (e) => {
      let filtros = []
      for (const input of inputs) {
        if (input.checked) {
          filtros.push(input.id)
        }
      }
      let arrayFiltrado = productos.filter(producto => filtros.includes(producto.categoria))
      if (arrayFiltrado.length > 0) {
        pintarTarjetas(arrayFiltrado, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)
      } else {
        pintarTarjetas(productos, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)
      }
    })
  }

}


function main() {
  // array de productos
  const productos = cargarDatos()

  // array de carrito
  const carrito = []

  // elementos capturados del DOM
  const contenedorTarjetas = document.querySelector('.contenedor-tarjetas')
  const templateTarjetas = document.getElementById('template-tarjetas').content
  const carritoDOM = document.getElementById('carrito')
  let buscadorInput = document.getElementById('buscar-input')
  let inputs = document.getElementsByClassName('input')
  // chequear si existe algun carrito previo en LS
  checkCarritoLS(carrito, carritoDOM)
  
  // renderizar productos
  pintarTarjetas(productos, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)

  // buscador de productos
  filtrarProductos(productos, buscadorInput, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)

  // filtrar por categorias
  filtrarPorCategoria(inputs, productos, contenedorTarjetas, templateTarjetas, carrito, carritoDOM)
}

// ejecutar script principal
main()