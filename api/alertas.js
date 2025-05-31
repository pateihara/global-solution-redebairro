export default function handler(req, res) {
  const alertas = [
    {
      id: 1,
      titulo: "Alerta de enchente iminente",
      descricao:
        "Previsão de forte chuva nas próximas 2 horas. Evite áreas próximas ao rio e desligue aparelhos elétricos se houver risco de alagamento.",
      localizacao: "Bairro Jardim Alto",
      emitido: "27/05 - 14h20",
      icone: "flood.png",
    },
    {
      id: 2,
      titulo: "Queda de energia em toda a região central",
      descricao:
        "Sem previsão de retorno. Use lanternas, desligue aparelhos e evite sair de casa à noite sem necessidade.",
      localizacao: "Centro / Vila União",
      emitido: "27/05 - 09h40",
      icone: "bolt.png",
    },
    {
      id: 3,
      titulo: "Interrupção no abastecimento de água",
      descricao:
        "Reservatório em manutenção emergencial. Leve seu próprio recipiente ao ponto de distribuição provisória na Escola João XXIII.",
      localizacao: "Escola João XXIII – Bairro Alto",
      emitido: "27/05 - 07h30",
      icone: "format_color_reset.png",
    },
    {
      id: 4,
      titulo: "Doações de medicamentos disponíveis",
      descricao:
        "Moradores organizaram ponto de troca de remédios básicos. Leve o que você puder compartilhar e respeite as orientações.",
      localizacao: "Ginásio da Igreja São Marcos",
      emitido: "26/05 - 12h05",
      icone: "pill.png",
    },
  ];

  res.status(200).json(alertas);
}
