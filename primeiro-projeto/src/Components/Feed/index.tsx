import { useState } from "react";
import styles from "./styles.module.css";
import TempoPublicado from "../TempoPublicado/index";
import perfilImage from "../../assets/Douglas_Perfil.png";
import perfilImage2 from "../../assets/Pedro.jpeg";
import Comentarios from "../Comentarios";
import comentario1 from "../../assets/Fernanda.jpeg";
import comentario2 from "../../assets/Pedro.jpeg";

function Feed() {
  const nomes: string[] = ["Douglas", "Pedro"];

  const horarioPublicacaoDouglas = new Date(new Date().getTime() - 7200000);
  const horarioPublicacaoPedro = new Date(new Date().getTime() - 1800000); // Pedro publicou mais recentemente

  const [comentarioDouglas, setComentarioDouglas] = useState<string>("");
  const [comentariosDouglas, setComentariosDouglas] = useState<string[]>([]);

  const [comentarioPedro, setComentarioPedro] = useState<string>("");
  const [comentariosPedro, setComentariosPedro] = useState<string[]>([]);

  const handleComentarioChangeDouglas = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComentarioDouglas(e.target.value);
  };

  const handleComentarioChangePedro = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComentarioPedro(e.target.value);
  };

  const handleComentarDouglas = () => {
    if (comentarioDouglas.trim()) {
      setComentariosDouglas([...comentariosDouglas, comentarioDouglas]);
      setComentarioDouglas("");
    }
  };

  const handleComentarPedro = () => {
    if (comentarioPedro.trim()) {
      setComentariosPedro([...comentariosPedro, comentarioPedro]);
      setComentarioPedro("");
    }
  };

  return (
    <div className={styles.feed}>
        <div className={styles.conteiner}>
          <div className={styles.identificacao}>
            <img
              className={styles.feedImage}
              src={perfilImage}
              alt="Imagem de Douglas"
            />
            <div className={styles.organizacao}>
              <h3>{nomes[0]}</h3>
              <p>Estudante de Sistemas da Computação</p>
            </div>
          </div>
          <TempoPublicado horarioPublicacao={horarioPublicacaoDouglas} />
        </div>
        <p>
          Às vezes, a vida te dá limões, mas outras vezes te dá um abacaxi inteiro
          e você fica tipo: 'o que eu faço com isso?' 🍍😂 #DesafiosDaVida
          #RindoParaNãoChorar
        </p>
        <div className={styles.texto}>
          <h4>Deixe seu Feedback</h4>
          <textarea
            name="feedback"
            placeholder="Escreva seu comentário ..."
            value={comentarioDouglas}
            onChange={handleComentarioChangeDouglas}
          />
        </div>
        <button onClick={handleComentarDouglas}>Comentar</button>
        <Comentarios
          comentarios={comentariosDouglas}
          nome={nomes[0]}
          imagem={perfilImage}
          comentariosPredefinidos={[
            {
              id: "pedro",
              nome: "Pedro",
              texto:
                "Muito interessante a abordagem utilizada. Já estou aplicando esses conceitos nos meus projetos.",
              imagem: comentario2,
              initialLikes: 12,
              horarioPublicacao: new Date(new Date().getTime() - 3600000),
        
            },
          ]}
        />
      <br />
      <div className={styles.conteiner}>
        <div className={styles.identificacao}>
          <img
            className={styles.feedImage}
            src={perfilImage2}
            alt="Imagem de Pedro"
          />
          <div className={styles.organizacao}>
            <h3>{nomes[1]}</h3>
            <p>Designer</p>
          </div>
        </div>
        <TempoPublicado horarioPublicacao={horarioPublicacaoPedro} />
      </div>
      <p>
      React é aquela ferramenta que te faz pensar: 'Como eu vivia sem isso antes?' 🚀✨ Componentes reutilizáveis, estado dinâmico e uma comunidade incrível fazem tudo valer a pena. #ReactJS #Frontend #WebDevelopment
      </p>
      <div className={styles.texto}>
        <h4>Deixe seu Feedback</h4>
        <textarea
          name="feedback"
          placeholder="Escreva seu comentário ..."
          value={comentarioPedro}
          onChange={handleComentarioChangePedro}
        />
      </div>
      <button onClick={handleComentarPedro}>Comentar</button>
      <Comentarios
        comentarios={comentariosPedro}
        nome={nomes[0]}
        imagem={perfilImage}
        comentariosPredefinidos={[
          {id: "fernanda",
            nome: "Fernanda",
            texto:
              "Excelente conteúdo! Muito bem explicado e fácil de entender. Parabéns pelo trabalho!",
            imagem: comentario1,
            initialLikes: 7,
            horarioPublicacao: new Date(new Date().getTime() - 1200000),

          },
        ]}
      />
    </div>
  );
}

export default Feed;
