
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center text-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 p-6">
     <div >

     <h2 className="text-5xl text-white font-bold">SG Foods</h2> 
     <p className="text-white font-semibold mb-4">It's Delicious 😋 !</p>
      <Link  href={'recepi'} className="bg-white rounded-md p-2 mt-3 font-sarif" >Try Our Recipes</Link>
      </div>
      
   </div>
  );
}
