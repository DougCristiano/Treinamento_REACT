import lixeira from "../../assets/Trash.png"

function Lixeira({ onDelete }) {
    return (
        <div onClick={onDelete} style={{ cursor: 'pointer' }}>
            <img src={lixeira} alt="Deletar comentário" />
        </div>
    )
}

export default Lixeira;