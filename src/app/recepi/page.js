import Link from "next/link";
import Image from "next/image";


async function getrecepi() {
  const res = await fetch('https://dummyjson.com/recipes')
  const result = await res.json()
  return result.recipes


}
export default async function recepipage() {
  const recepi = await getrecepi()

  return (
    <div>
      <nav className=" mb-3 mt-3 p-4 bg-gray-300 flex justify-between items-center">
        <div className="text-4xl font-bold ">
          <Link href={'/'}><button className=" cursor-pointer"> &#8592;</button></Link>
        </div>
        <div>
          <h1 className="text-4xl font-bold" >Recipes </h1>
        </div>
        <div>
          Contact Us
        </div>
      </nav>



      <div className="flex flex-wrap gap-6 justify-center items-center shadow-lg py-3 px-3">

        {recepi.map((item) => (
          <div key={item.id} className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
            <Image className="w-full h-48 object-cover"
              width={150}
              height={190}
              src={item.image} alt="Recipe Image" />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {item.name}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>⏱️ {item.cookTimeMinutes} mins</span>
                <span>🍽️ {item.servings} servings</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">{item.cuisine}</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">{item.difficulty}</span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">{item.mealType}</span>
              </div>

              <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 rounded">
                <Link href={`recepi/${item.id}`}> View Recipe</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
