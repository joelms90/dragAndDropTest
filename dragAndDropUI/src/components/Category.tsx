import Card from "./Card";

type CategoryType = {
    text: string;
    id: number;
};

const Category = ({text, id}:CategoryType) => {
  return (
  <div className="h-full bg-neutral-900 flex flex-col rounded-lg ">
    <div key={`${text}-${id}`} className="">
            <p className="p-4 text-xl font-medium text-slate-100 text-center">{text}</p>
        </div>
      <div className="h-full bg-cyan-100 flex flex-col">
        <div className="p-4">
          <Card text={"test"} categoryId={0}/>
        </div>
      </div>
  </div>)
}

export default Category;