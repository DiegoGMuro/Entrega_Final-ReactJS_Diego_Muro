const Ciudades = [
    {
        "id": 1,
        "nombre": "Amsterdam",
        "pais": "Países Bajos",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$400.000",
        "lugaresInteres": ["Museo Van Gogh,", " ", "Rijksmuseum,", " ", "Barrio Rojo"],
        "imagen": "/src/assets/Amsterdam.jpg",
        "moneda": "Euro",
        "idioma": ["Dutch"],
        "stock": 5
    },
    {
        "id": 2,
        "nombre": "Barcelona",
        "pais": "España",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$350.000",
        "lugaresInteres": ["Sagrada Familia,", " ", "Parque Güell,", " ", "La Rambla"],
        "imagen": "/src/assets/barcelona2.jpg",
        "moneda": "Euro",
        "idioma": ["Español,", " ", "Catalan"],
        "stock": 5
    },
    {
        "id": 3,
        "nombre": "Berlín",
        "pais": "Alemania",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$450.000",
        "lugaresInteres": ["Puerta de Brandenburgo,", " ", "Muro de Berlín,"," ", "Museo de Pérgamo"],
        "imagen": "/src/assets/berlin1.jpg",
        "moneda": "Euro",
        "idioma": ["Aleman"],
        "stock": 5
    },
    {
        "id": 4,
        "nombre": "Londres",
        "pais": "Reino Unido",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$550.000",
        "lugaresInteres": ["Big Ben,", " ","London Eye,"," ", "Tower Bridge"],
        "imagen": "/src/assets/londres4.jpg",
        "moneda": "Libra esterlina",
        "idioma": ["Ingles"],
        "stock": 5
    },
    {
        "id": 5,
        "nombre": "París",
        "pais": "Francia",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$300.000",
        "lugaresInteres": ["Torre Eiffel,"," ", "Museo del Louvre,"," ", "Catedral de Notre Dame"],
        "imagen": "/src/assets/paris2.jpg",
        "moneda": "Euro",
        "idioma": ["Frances"],
        "stock": 5
    },
    {
        "id": 6,
        "nombre": "Roma",
        "pais": "Italia",
        "continente": "Europa",
        "continenteId": 1,
        "precioPasaje": "$250.000",
        "lugaresInteres": ["Coliseo Romano,", " ","Fontana di Trevi,"," ", "Ciudad del Vaticano"],
        "imagen": "/src/assets/roma1.jpg",
        "moneda": "Euro",
        "idioma": ["Italiano"],
        "stock": 5
    },

    {
        "id": 7,
        "nombre": "Bangkok",
        "pais": "Tailandia",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": "$600.000",
        "lugaresInteres": ["Gran Palacio,", " ", "Wat Phra Kaew,", " ", "Mercado flotante Damnoen Saduak"],
        "imagen": "/src/assets/Bangkok.jpg",
        "moneda": "Baht tailandés",
        "idioma": ["Thai"],
        "stock": 5

    },
    {
        "id": 8,
        "nombre": "Hong Kong",
        "pais": "China",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": "$800.000",
        "lugaresInteres": ["Victoria Peak,", " ", "Templo de Man Mo,", " ", "Avenue of Stars"],
        "imagen": "/src/assets/Hongkong.jpg",
        "moneda": "Dólar de Hong Kong",
        "idioma": ["Cantones,", " ", "Ingles"],
        "stock": 5
    },
    {
        "id": 9,
        "nombre": "Tokio",
        "pais": "Japón",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": "$700.000",
        "lugaresInteres": ["Torre de Tokio,", " ", "Templo Sensoji,", " ", "Barrio de Shibuya"],
        "imagen": "/src/assets/Tokio.jpg",
        "moneda": "Yen japonés",
        "idioma": ["Japones"],
        "stock": 5
    },
    {
        "id": 10,
        "nombre": "Bali",
        "pais": "Indonesia",
        "continente": "Asia",
        "continenteId": 2,
        "precioPasaje": "$900.000",
        "lugaresInteres": ["Templo de Besakih,", " ", "Playa de Kuta,", " ", "Templo de Tanah Lot"],
        "imagen": "/src/assets/bali.jpeg",
        "moneda": "Rupia indonesia",
        "idioma": ["Balinese,", " ", "Indonesian"],
        "stock": 5
    },

    {
        "id": 11,
        "nombre": "Miami",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$400.000",
        "lugaresInteres": ["Miami Beach,", " ", "Art Deco Historic District,", " ", "Ocean Drive"],
        "imagen": "/src/assets/Miami.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés,", " ", "Español"],
        "stock": 5
    },
    {
        "id": 12,
        "nombre": "Cancún",
        "pais": "México",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$300.000",
        "lugaresInteres": ["Zona Arqueológica de Chichén Itzá,", " ", "Isla Mujeres,", " ", "Playa Delfines"],
        "imagen": "/src/assets/Cancun.jpg",
        "moneda": "Peso mexicano",
        "idioma": ["Español"],
        "stock": 5
    },
    {
        "id": 13,
        "nombre": "Río de Janeiro",
        "pais": "Brasil",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$200.000",
        "lugaresInteres": ["Cristo Redentor,", " ", "Playa de Copacabana,", " ", "Pan de Azúcar"],
        "imagen": "/src/assets/Rio de janeiro2.jpg",
        "moneda": "Real brasileño",
        "idioma": ["Portugués"],
        "stock": 5
    },
    {
        "id": 14,
        "nombre": "Nueva York",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$600.000",
        "lugaresInteres": ["Estatua de la Libertad,"," ", "Times Square,"," ", "Central Park"],
        "imagen": "/src/assets/NY.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés"],
        "stock": 5
    },
    {
        "id": 15,
        "nombre": "Las Vegas",
        "pais": "Estados Unidos",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$700.000",
        "lugaresInteres": ["Strip de Las Vegas,", " ", "Fremont Street Experience,", " ", "Bellagio"],
        "imagen": "/src/assets/vegas2.jpg",
        "moneda": "Dólar estadounidense",
        "idioma": ["Inglés"],
        "stock": 5
    },
    {
        "id": 16,
        "nombre": "Punta del Este",
        "pais": "Uruguay",
        "continente": "America",
        "continenteId": 3,
        "precioPasaje": "$150.000",
        "lugaresInteres": ["Casapueblo,", " ", "La Mano de Punta del Este,", " ", "Isla de Lobos"],
        "imagen": "/src/assets/punta2.jpg",
        "moneda": "Peso uruguayo",
        "idioma": ["Español"],
        "stock": 5
    }


]

export default Ciudades;


export const getCiudades = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Ciudades)
        }, 1000)
    })
} 

export const getCiudadById = (ciudadId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Ciudades.find(ciud=>ciud.id === ciudadId))
        }, 500)
    })
} 



export const getCiudadesByContinent = (continenteId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Ciudades.filter(contin=>contin.continente === continenteId))
        }, 500)
    })
} 
