export default function handler(req, res) {
  const zonas = [
    {
      id: 1,
      bairro: "Vila Mariana",
      tipo: "ponto_seguro",
      lat: -23.5897,
      lon: -46.6345,
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
  ];

  res.status(200).json(zonas);
}
