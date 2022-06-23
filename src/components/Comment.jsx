import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    deleteComment(content);
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/9847731?v=4"  alt="" />    
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Tobias Ramalho</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-02-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>

          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={ handleDeleteComment}>
            <ThumbsUp/>
            Aplaudir <span> 20 </span>
          </button>          
        </footer>

      </div>  
    </div>
  )
}