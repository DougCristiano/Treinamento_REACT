import { useState, useEffect } from "react";

function TempoPublicado({ horarioPublicacao }: { horarioPublicacao: Date }) {
  const [tempoPublicado, setTempoPublicado] = useState<string>("");

  function calcularTempoDecorrido(data: Date): string {
    const agora: Date = new Date();
    const diferencaSegundos: number = Math.floor((agora.getTime() - data.getTime()) / 1000);

    if (diferencaSegundos < 60) {
      return `há ${diferencaSegundos} segundos`;
    } else if (diferencaSegundos < 3600) {
      return `há ${Math.floor(diferencaSegundos / 60)} minutos`;
    } else if (diferencaSegundos < 86400) {
      return `há ${Math.floor(diferencaSegundos / 3600)} horas`;
    } else {
      return `há ${Math.floor(diferencaSegundos / 86400)} dias`;
    }
  }

  useEffect(() => {
    function atualizarTempo() {
      const diferencaSegundos = Math.floor((new Date().getTime() - horarioPublicacao.getTime()) / 1000);
      setTempoPublicado(calcularTempoDecorrido(horarioPublicacao));

      // Clear existing interval
      return diferencaSegundos;
    }

    // Initial update
    const segundosIniciais = atualizarTempo();
    
    // Set interval based on time difference
    const intervalo = setInterval(() => {
      const segundos = atualizarTempo();
      
      // If we cross the 60 seconds threshold, clear and reset interval
      if (segundos === 60) {
        clearInterval(intervalo);
        setInterval(atualizarTempo, 60000); // Switch to minute updates
      }
    }, segundosIniciais < 60 ? 1000 : 60000);

    return () => clearInterval(intervalo);
  }, [horarioPublicacao]);

  return <p>{tempoPublicado}</p>;
}

export default TempoPublicado;