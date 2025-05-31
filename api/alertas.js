export default function handler(req, res) {
  const alertas = [
    {
      id: 1,
      icone: "flood.png",
      titulo: "Alerta de enchente iminente",
      descricao:
        "Previsão de forte chuva nas próximas 2 horas. Evite áreas próximas ao rio e desligue aparelhos elétricos se houver risco de alagamento.",
      localizacao: "Bairro Jardim Alto",
      emitido: "Às 14h20 – 27/05",
    },
    {
      id: 2,
      icone: "bolt.png",
      titulo: "Queda de energia em toda a região central",
      descricao:
        "Sem previsão de retorno. Use lanternas, desligue aparelhos e evite sair de casa à noite sem necessidade.",
      localizacao: "Centro / Vila União",
      emitido: "Às 09h40 – 27/05",
    },
    {
      id: 3,
      icone: "format_color_reset.png",
      titulo: "Interrupção no abastecimento de água",
      descricao:
        "Reservatório em manutenção emergencial. Leve seu próprio recipiente ao ponto de distribuição provisório na Escola João XXIII.",
      localizacao: "Escola João XXIII – Bairro Alto",
      emitido: "Às 07h30 – 27/05",
    },
    {
      id: 4,
      icone: "pill.png",
      titulo: "Doações de medicamentos disponíveis",
      descricao:
        "Moradores organizaram ponto de troca de remédios básicos. Leve o que você puder compartilhar e respeite as orientações.",
      localizacao: "Ginásio da Igreja São Marcos",
      emitido: "Às 12h05 – 26/05",
    },
  ];

  res.status(200).json(alertas);
}
