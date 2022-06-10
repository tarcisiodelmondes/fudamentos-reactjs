import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8YmxhY2t8&auto=format&fit=crop&w=500&q=100"
        alt=""
        width="100%"
        height={72}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/tarcisiodelmondes.png" />

        <strong>Tarcísio Delmondes</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
