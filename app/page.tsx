import Intro from "@/components/intro";



//this componennt will hold all the parts like intro,about,projects,Skills,contact
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
    </main>
  )
}
