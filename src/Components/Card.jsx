import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere blanditiis hic repellat saepe! Beatae et iste nostrum ipsam optio.",
      instock: true,
    },
    {
      image:
        "https://almablog-media.s3.ap-south-1.amazonaws.com/MERN_Stack_9437df2ba9_62af1dd3fc.png",
      title: "MERN Basics",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere blanditiis hic repellat saepe! Beatae et iste nostrum ipsam optio.",
      instock: false,
    },
    {
      image:
        "https://s0.rbk.ru/v6_top_pics/media/img/7/25/756616012976257.webp",
      title: "Apple",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis facere blanditiis hic repellat saepe! Beatae et iste nostrum ipsam optio.",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-500">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-52 bg-gray-800 rounded-md overflow-hidden"
        >
          <div className="w-full h-full object-cover">
            <img src={item.image} alt="" />
          </div>
          <div className="w-full px-3 py-4 text-white">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-xs mt-5 ">{item.description}</p>
            <button 
            className={`mt-5 text-xs ${item.instock ? "bg-blue-500" : "bg-red-500"} px-3 py-1 rounded-md`}>{item.instock? "In Stock" : "Out of Stock"}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
