// Botão voltar ao topo
document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gráfico por gênero
new Chart(document.getElementById("generoChart"), {
  type: "pie",
  data: {
    labels: ["Homens (~65%)", "Mulheres (~35%)"],
    datasets: [{
      data: [65, 35],
      backgroundColor: ["#5a4bff", "#ff6384"]
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Acesso por Gênero (Dados 2023)"
      }
    }
  }
});

// Gráfico por idade
new Chart(document.getElementById("idadeChart"), {
  type: "bar",
  data: {
    labels: ["18–24", "25–34", "35+"],
    datasets: [{
      label: "Percentual estimado de acesso mensal",
      data: [70, 50, 30],
      backgroundColor: "#5a4bff"
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Acesso por Faixa Etária"
      }
    }
  }
});
