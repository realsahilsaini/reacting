import React from 'react'

function Props2({data, handelClick, index}) {

  const {name, profession, image, friends} = data
  return (
        <div className="w-62 px-4 py-4 bg-gray-800 rounded-md overflow-hidden flex flex-row items-center justify-between gap-8">

          <div className="object-cover">
            <img width="90px" src={`${image}`} alt="" />
          </div>

          <div className="flex flex-col text-white">
            <h2 className="font-semibold">{name}</h2>
            <p className="text-xs">{profession}</p>
            <button 
            className={`mt-5 text-xs px-3 py-1 w-28 rounded-md ${friends ? "bg-green-500" : "bg-blue-500"}`}
            onClick={()=>handelClick(index)}
            >
              {friends ? "Friends" : "Add to friends"}
            </button>
          </div>

        </div>
  )
}

export default Props2

/*
We have our data in the main app component and we want to use props in the child component so that we can pass the data from the parent component to the child card components. In the child card component, it should have a add frined button and when we click on that button it should give an alert that the friend has been added.
*/


/*
------------------APP.JSX FILE CODE------------------


  const data =[
    {name: "Sahil Saini", profession: "Developer", image: "https://avatar.iran.liara.run/public/48", friends: false},
    {name: "Ashwin Nair", profession: "Dancer", image: "https://avatar.iran.liara.run/public/36", friends: false},
    {name: "Atharva Tondapurkar", profession: "Standup Comedian", image: "https://avatar.iran.liara.run/public/2", friends: false},
    {name: "Yash Chaudhari", profession: "Wrestler", image: "https://avatar.iran.liara.run/public/44", friends: false},
    {name: "Harsh Awlegaonkar", profession: "Side Kick", image: "https://avatar.iran.liara.run/public/42", friends: false},
  ]

  const [stateData, setStateData] = useState(data);

  const handelFriendsButton = (cardIndex) =>{
    setStateData((prev)=>{
      return prev.map((item, index)=>{
        if(index == cardIndex){
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }

  return (
    //Here we are wraping the Navbar component and other elements in a div element so that we can return multiple elements.
    <div className="bg-gray-200 w-full h-screen flex flex-row items-center justify-center flex-wrap gap-10">

      This is a fragement 
      <>      
        {stateData.map((item, index)=>(
          <Props2 key={index} index={index} handelClick={handelFriendsButton} data={item} />
        ))}
      </>

    </div>
  );

*/