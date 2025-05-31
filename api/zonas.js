export default function handler(req, res) {
  const zonas = [
    // Pontos Seguros
    {
      id: 1,
      bairro: "Vila Mariana",
      tipo: "ponto_seguro",
      lat: -23.5897,
      lon: -46.6345,
    },
    {
      id: 2,
      bairro: "Pinheiros",
      tipo: "ponto_seguro",
      lat: -23.5618,
      lon: -46.6819,
    },
    {
      id: 3,
      bairro: "Ipiranga",
      tipo: "ponto_seguro",
      lat: -23.5856,
      lon: -46.6101,
    },
    {
      id: 4,
      bairro: "Butantã",
      tipo: "ponto_seguro",
      lat: -23.5747,
      lon: -46.7112,
    },
    {
      id: 5,
      bairro: "Santana",
      tipo: "ponto_seguro",
      lat: -23.4949,
      lon: -46.6256,
    },
    {
      id: 6,
      bairro: "Liberdade",
      tipo: "ponto_seguro",
      lat: -23.557,
      lon: -46.6358,
    },
    {
      id: 7,
      bairro: "Tatuapé",
      tipo: "ponto_seguro",
      lat: -23.5406,
      lon: -46.5753,
    },
    {
      id: 8,
      bairro: "Perdizes",
      tipo: "ponto_seguro",
      lat: -23.5275,
      lon: -46.6783,
    },
    {
      id: 9,
      bairro: "Aclimação",
      tipo: "ponto_seguro",
      lat: -23.5703,
      lon: -46.6245,
    },
    {
      id: 10,
      bairro: "Casa Verde",
      tipo: "ponto_seguro",
      lat: -23.504,
      lon: -46.6405,
    },

    // Áreas Afetadas
    {
      id: 11,
      bairro: "Bela Vista",
      tipo: "area_afetada",
      poligono: [
        [-23.5617, -46.6483],
        [-23.562, -46.646],
        [-23.5635, -46.6475],
        [-23.5628, -46.6495],
      ],
    },
    {
      id: 12,
      bairro: "Brás",
      tipo: "area_afetada",
      poligono: [
        [-23.5436, -46.6255],
        [-23.544, -46.62],
        [-23.5465, -46.6195],
        [-23.548, -46.6205],
        [-23.5475, -46.6252],
        [-23.545, -46.6265],
      ],
    },
    {
      id: 13,
      bairro: "Mooca",
      tipo: "area_afetada",
      poligono: [
        [-23.5585, -46.6048],
        [-23.5601, -46.6025],
        [-23.5635, -46.6062],
        [-23.5642, -46.6111],
        [-23.5622, -46.6135],
        [-23.5589, -46.6112],
      ],
    },
    {
      id: 14,
      bairro: "Cambuci",
      tipo: "area_afetada",
      poligono: [
        [-23.5671, -46.619],
        [-23.5682, -46.6175],
        [-23.569, -46.6198],
        [-23.5678, -46.621],
      ],
    },
    {
      id: 15,
      bairro: "Lapa",
      tipo: "area_afetada",
      poligono: [
        [-23.5225, -46.7002],
        [-23.5238, -46.698],
        [-23.5251, -46.7001],
        [-23.5239, -46.7023],
      ],
    },
    {
      id: 16,
      bairro: "Sé",
      tipo: "area_afetada",
      poligono: [
        [-23.55, -46.633],
        [-23.551, -46.631],
        [-23.552, -46.6325],
        [-23.551, -46.6345],
      ],
    },
    {
      id: 17,
      bairro: "Vila Prudente",
      tipo: "area_afetada",
      poligono: [
        [-23.5805, -46.591],
        [-23.582, -46.59],
        [-23.583, -46.592],
        [-23.581, -46.5935],
      ],
    },
    {
      id: 18,
      bairro: "São Mateus",
      tipo: "area_afetada",
      poligono: [
        [-23.586, -46.4725],
        [-23.5875, -46.471],
        [-23.5885, -46.473],
        [-23.5865, -46.4745],
      ],
    },
    {
      id: 19,
      bairro: "Itaquera",
      tipo: "area_afetada",
      poligono: [
        [-23.54, -46.46],
        [-23.5415, -46.458],
        [-23.543, -46.46],
        [-23.541, -46.462],
      ],
    },
    {
      id: 20,
      bairro: "Cidade Tiradentes",
      tipo: "area_afetada",
      poligono: [
        [-23.569, -46.398],
        [-23.5705, -46.3965],
        [-23.5715, -46.3985],
        [-23.5695, -46.4],
      ],
    },
  ];

  res.status(200).json(zonas);
}
