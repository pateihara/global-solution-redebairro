export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      tipo: "Água Potável",
      quantidade: "2L",
      valor: "R$5,00",
      comentario: "Água mineral de fonte local",
      dataGerado: "2025-05-30T10:00:00.000Z",
    },
    {
      id: 2,
      tipo: "Cobertor",
      quantidade: "1",
      valor: "R$20,00",
      comentario: "Cobertor em bom estado",
      dataGerado: "2025-05-28T15:30:00.000Z",
    },
  ]);
}
