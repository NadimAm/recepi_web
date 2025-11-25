import Image from "next/image"

async function getsingle (getcurrentid){
    const res = await fetch(`https://dummyjson.com/recipes/${getcurrentid}`)
    const result = await res.json()
    return result
}


export default async function page({params}) {
    const singlerecepi = await getsingle(params.details)

  return (
<div className= " flex flex-col bg-gray-100 items-center  justify-center md:flex-row ">
 <div className="max-w-lg mt-4 mb-4 bg-white rounded-lg overflow-hidden shadow-lg ">
    <Image className="w-full  object-cover" 
    height={800}
    width={500}
    src={singlerecepi.image} alt="Recipe Image" />
 </div>
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-500">{singlerecepi.name}</h2>
      <p className="text-gray-600 text-sm mt-2">
       {singlerecepi.name}
      </p>
      <p>{singlerecepi.ingredients[0]}</p>
      <p>{singlerecepi.ingredients[1]}</p>
      <p>{singlerecepi.ingredients[2]}</p>
      <p>{singlerecepi.ingredients[3]}</p>
      <p>{singlerecepi.ingredients[4]}</p>
      <p>{singlerecepi.ingredients[5]}</p>
      <br/>
      <ul className="list-disc list-inside">
      {singlerecepi.instructions.map((i,index)=>(
        <li key={index}>{i}</li>
      ))}
      </ul>

      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <span>⏱️ {singlerecepi.cookTimeMinutes} mins</span>
        <span>🍽️ {singlerecepi.servings} servings</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">{singlerecepi.cuisine}</span>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">{singlerecepi.difficulty}</span>
        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">{singlerecepi.mealType}</span>
      </div>

      
    </div>
 
    </div>
  )
}
