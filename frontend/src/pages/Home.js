import Monika from './pics/Monika.png'

export function Home() {

  return (
      
      <>
   <div className="flex flex-col h-screen justify-end">
    <main className="flex flex-row h-screen justify-between"> 
    <img src={ Monika } alt="Just Monika" className="h-full mt-3 ml-10"/>
    <div className="w-4/12 bg-[#FFE5F4] h-2/6 mt-auto mb-auto mr-32 rounded-3xl flex flex-col justify-between text-center">
      <h3 className="mt-3 font-mono"> JUST MONIKA ?</h3>
      <div className="flex flex-row justify-between w-10/12 ml-7 mb-10">
      <button className="rounded-full bg-pink-700 p-1">FIRST TIME</button>
      <button className="rounded-full bg-pink-700 p-1">RETURNING LOVER</button>
      </div>

    </div>
    </main>
  <footer className="h-10 bg-[#F18AC1] grid text-center text-neutral-700">Created byMaciej Tarnowski</footer>
</div>
  </>
  )
}