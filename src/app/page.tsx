import data from "@/data/home-page.json";

const { title } = data;

export default function Home() {
  return (
    <section className="flex justify-center items-center mt-[250px]">
      <h1 className="text-yellow-500 text-4xl">{title}</h1>
    </section>
  );
}
