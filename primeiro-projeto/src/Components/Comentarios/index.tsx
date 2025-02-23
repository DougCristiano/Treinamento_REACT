import { useState } from "react";
import styles from "./styles.module.css";
import Like from "../Like";
import Lixeira from "../Lixeira";
import TempoPublicado from "../TempoPublicado";
import comentario1 from "../../assets/Fernanda.jpeg";
import comentario2 from "../../assets/Pedro.jpeg";

function ComentarioIndividual({ nome, texto, imagem, initialLikes, horarioPublicacao }) {
  const [visible, setVisible] = useState(true);

  const handleDelete = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.comentariosAdicionais}>
      <img className={styles.fotoComentarios} src={imagem} alt={nome} />
      <div className={styles.containerExterno}>
        <div className={styles.comentarios2}>
          <div className={styles.containerInterno}>
            <div className={styles.infos}>
              <h4>{nome}</h4>
              <div className={styles.tempo}>
                <TempoPublicado horarioPublicacao={horarioPublicacao} />
              </div>
            </div>
            <Lixeira onDelete={handleDelete} />
          </div>
          <p>{texto}</p>
        </div>
        <Like initialLikes={initialLikes} />
      </div>
    </div>
  );
}

function Comentarios({
  comentarios,
  nome,
  imagem,
  comentariosPredefinidos
}: {
  comentarios: string[]; 
  nome: string;
  imagem: string;
  comentariosPredefinidos: Array<any>;
}) {
  const todosComentarios = [
    ...comentariosPredefinidos,
    ...comentarios.map((comentario, index) => ({
      id: `comentario_${index}`, 
      nome, 
      texto: comentario,
      imagem, 
      initialLikes: 0, 
      horarioPublicacao: new Date(), 
    })),
  ];

  const comentariosInvertidos = todosComentarios.reverse();

  return (
    <>
      {comentariosInvertidos.map((comentario) => (
        <ComentarioIndividual
          key={comentario.id} 
          nome={comentario.nome}
          texto={comentario.texto}
          imagem={comentario.imagem}
          initialLikes={comentario.initialLikes}
          horarioPublicacao={comentario.horarioPublicacao}
        />
      ))}
    </>
  );
}

export default Comentarios;