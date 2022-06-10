import { Header } from "./components/Header";

import styles from "./app.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/tarcisiodelmondes.png",
      name: "Tarcisio Delmondes",
      role: "Front-End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera 👏" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar mais uma contribuição no meu portfólio. Corre lá que está um projeto sensacional.",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-08 12:42:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diogo Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala pessoal 👏" },
      {
        type: "paragraph",
        content:
          "Acabei de publicar mais uma contribuição no meu portfólio. Corre lá que está um projeto sensacional.",
      },
      { type: "link", content: "👉 devonlane.design" },
    ],
    publishedAt: new Date("2022-06-09 18:46:18"),
  },
];

export function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              publishedAt={post.publishedAt}
              author={post.author}
              content={post.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
