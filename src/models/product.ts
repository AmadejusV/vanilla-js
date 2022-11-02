import { ICoffeeItemWithInfo } from "./coffee";

// compositional functionalities for Object types:

interface IProduct {
    id: string | number;
    title: string;
}

const nameLogger = (state: {title: string}) => ({
    log: () => console.log(state.title)
});

const coffeeLogger = (state: { title: string, description?: string, ingredients?: string[]}) => ({ 
    logCoffee: () => console.log(
        `Coffee name: ${state.title}. 
        Description: ${state.description}.
        ${state.ingredients && state.ingredients.length > 0 ? `Ingredients: ${state.ingredients}` : ''}`
    ) 
});

// factory functions for Object types

export const Product = (productName: string, productId?: string | number) => {
    let state: IProduct = {
        id: productId ?? Math.floor(Math.random() * 1000000 + Math.random() * 1000000),
        title: productName
    };

    return Object.assign(
        state,
        nameLogger(state)
    );
};

export const CoffeeProduct = (productName: string, productId?: string | number, image?: string, description?: string, ingredients?: string[]) => {
    const state = {
        ...Product(productName, productId),
        image,
        description,
        ingredients
    };
  
    return Object.assign(
            state,
            coffeeLogger(state)
    ) as ICoffeeItemWithInfo;
};