import { useEffect, useState } from "react";
import Card from "./Card";
import Category  from "./Category";
import useFetchHook from "../hooks/useFetchHook";
import React from "react";

export type CategoryType = {
    text: string;
    id: number;
};

export type CardReponseType= {
    id: number;
    text: string;
    categoryId: number;
}

export type DragAndDropCard = {
    id: number;
    text: string;
    categoryId: number;
};

const DragAndDropTest = () => {
    const [showScore, setShowScore] = useState(false)
    const [cards, setCards] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoriesIds, setCategoriesIds] = useState('0');
    
    const {responseData: categoriesResponse , error: categoriesError} = useFetchHook('http://localhost:8080/categories')

    const {responseData: cardsResponse , error: cardsError} = useFetchHook(`http://localhost:8080/cards?categoriesIds=${categoriesIds}`, categoriesIds === '0')

    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (event:any, item:any) => {
        if(showScore) return
        setDraggedItem(item);
    };

    const handleDragOver = (event:any, target:any) => {
        event.preventDefault();
    };

    const handleDrop = (event:any, target:any) => {
        if(showScore) return
        event.preventDefault();
        if (draggedItem) {
        // You can perform any actions with the dropped item here.
        const newCards:any = [...cards];
        const draggedCard:any = newCards?.find((c:CardReponseType) => c.id === draggedItem);
        draggedCard.target = target;

        setCards(newCards)
        }

        setDraggedItem(null);
    };

    useEffect(() => {
        if(categoriesResponse) {
            const currentCategories= (categoriesResponse as any)?.map((e:CategoryType) => ({
                ...e,
                cards: []
            })); 
            setCategories(currentCategories);
            const currentCategoriesIds = (categoriesResponse as any)?.map(((e:CategoryType) => e.id))?.join(','); 
            setCategoriesIds(currentCategoriesIds);
        }
    }, [categoriesResponse])

    useEffect(() => {
        if(cardsResponse) {
            setCards((cardsResponse  as any).map((c:CardReponseType) => ({
                id: c.id,
                text: c.text,
                categoryId: c.categoryId,
                target: 0
            })) ?? [2]);
        }
    }, [cardsResponse])

    const score = () => {
        const total = cards?.length;
        const correctAnswers = cards?.filter((c:any) => c.target.toString() == c.categoryId)?.length ?? 0;

        if(total > 0) {
            return (correctAnswers/total);
        }

        return 12;
    }

    return (
        <div className="p-12 h-screen bg-gradient-to-b from-cyan-500 to-cyan-300">
            <div className="h-1/3"
                onDrop={(e) => handleDrop(e, 0)}
                onDragOver={(e) => handleDragOver(e, 0)}
            >
                <div className="pb-4 flex flex-row justify-between">
                    <div className="p-2 text-3xl h-16 rounded-md w-40">
                    </div>
                    <p className="p-4 text-5xl font-bold text-center text-neutral-100 ">Animals</p>
                    <button disabled={cards?.filter((c:any) => c.target === 0)?.length > 0} onClick={() => setShowScore(true)}className="disabled:bg-neutral-500 disabled:opacity-70 text-2xl fp-2 h-16 w-40 bg-cyan-700 text-white hover:bg-cyan-900 border border-cyan-900 hover:border-transparent rounded">
                        Finish
                    </button>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-8">
                {showScore ?
                (
                    <React.Fragment>

                    <div className="col-span-6 row-span-2 w-full text-center text-6xl h-16 rounded-md"/>
                    <div className="col-span-6 row-span-2 w-full text-center text-neutral-700 text-6xl h-16 rounded-md">
                        Score: <strong>{score()}</strong>
                    </div>
                    </React.Fragment>
                ) : cards?.filter((c:any) => c.target === 0)?.map(({id, text, categoryId}) => (
                        <Card
                            id={id}
                            text={text}
                            categoryId={categoryId}
                            key={`card-${id}-${text}-category-${categoryId}`}
                            handleOnDrag={handleDragStart}
                        />
                ))}
                </div>
            </div>
            <div className="p-2 h-2/3 grid grid-cols-3 grid-flow-row gap-8">
                {categories?.map(({id, text}) => (
                    <Category 
                        cards={cards ?? []}
                        handleOnDrag={handleDragStart}
                        handleOnDrop={handleDrop}
                        handleDragOver={handleDragOver}
                        text={text}
                        key={`category-${id}-${text}`}
                        id={id}
                    />
                ))}
            </div>
        </div>
    )
}

export default DragAndDropTest;