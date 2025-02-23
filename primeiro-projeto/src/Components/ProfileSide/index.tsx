import perfil from "../../assets/Douglas_Perfil.png";
import styles from "./styles.module.css";

function ProfileSide() {
  return (
    <div className={styles.container}>
      <img className={styles.perfil} src={perfil} alt="Foto de Perfil" />
      <p className={styles.nome}>Douglas</p>
      <p className={styles.descricao}>Tentando virar full-Stack ;P</p>
    </div>
  );
}

export default ProfileSide;
