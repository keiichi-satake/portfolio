// app/page.tsx
import ProjectCard from "../components/ProjectCard";



export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Keiichi Satake の UI/UX ポートフォリオ</h1>
      <p>ここに作品一覧や自己紹介などを表示していきます。</p>

    <ProjectCard
      title="作品タイトル"
      description="作品の説明文"
      imageUrl="/images/sample.jpg"
    />
    </main>
  );
}
