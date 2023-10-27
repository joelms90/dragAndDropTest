type CardType = {
    text: string;
    categoryId: number;
};

const Card = ({text, categoryId}:CardType) => {
  return <div key={`${text}-${categoryId}`} className="hover:bg-slate-200 hover:cursor-pointer p-6 w-5/6 mx-auto bg-white rounded-xl shadow-lg flex justify-center">
      <div className="text-xl font-medium text-black">{text}</div>
  </div>
}

export default Card;