type CardType = {
    text: string;
    categoryId: number;
    id: number;
    handleOnDrag:any;
};

const Card = ({text, categoryId, handleOnDrag, id}:CardType) => {
  return (
    <div 
        key={`${text}-${categoryId}`}
        draggable
        onDragStart={(e) => handleOnDrag(e, id)}
        className="hover:bg-slate-200 hover:cursor-grab p-6 w-5/6 mx-auto bg-white rounded-xl shadow-lg flex justify-center">
        <div className="text-xl font-medium text-black">{text}</div>
    </div>
  )
}

export default Card;