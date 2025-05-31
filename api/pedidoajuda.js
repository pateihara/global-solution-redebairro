export default function handler(req, res) {
  const pedidoAjuda = [
    {
      id: 1,
      nome: "Pão",
      tiposAjuda: ["Alimento"],
      descricao: "por favor",
      localizacao: "São Paulo",
      timestamp: "2025-05-29T14:00:00.000Z",
      lat: -23.5505,
      lon: -46.6333,
    },
  ];

  res.status(200).json(pedidoAjuda);
}
