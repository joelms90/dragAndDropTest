import Card from "./Card";
import { DragAndDropCard } from "./DragAndDropTest";

export type CategoryComponentType = {
    text: string;
    id: number;
    cards: DragAndDropCard[];
    handleOnDrop: any;
    handleDragOver: any;
    handleOnDrag: any;
};

const Category = ({
    cards = [],
    text,
    id,
    handleOnDrop,
    handleDragOver,
    handleOnDrag,
}: CategoryComponentType) => {
    return (
        <div
            className="h-full bg-neutral-900 flex flex-col rounded-lg "
            onDrop={(e) => handleOnDrop(e, id)}
            onDragOver={(e) => handleDragOver(e, text)}
            key={`dragZone-${id}`}
        >
            <div key={`${text}-${id}`} className="">
                <p className="p-4 text-xl font-medium text-slate-100 text-center">
                    {text}
                </p>
            </div>
            <div className="h-full bg-cyan-100 flex flex-col">
                {cards?.filter((c:any) => c.target === id)?.map(({ id, text, categoryId }: DragAndDropCard) => (
                    <div className="p-4">
                        <Card
                            id={id}
                            text={text}
                            categoryId={categoryId}
                            key={`card-${id}-${text}-category-${categoryId}`}
                            handleOnDrag={handleOnDrag}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
