export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      nome: "Maria Silva",
      bairro: "Jardim das Flores",
      status: "voluntaria",
    },
    {
      id: 2,
      nome: "Carlos Souza",
      bairro: "Vila Nova",
      status: "precisa_ajuda",
    },
  ]);
}
