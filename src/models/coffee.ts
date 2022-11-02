
export interface ICoffeeItem {
    id: number | string;
    title: string;
    description: string;
    image: string;
    ingredients: string[];
};

export interface ICoffeeItemWithInfo extends ICoffeeItem {
    log: () => void;
    logCoffee: () => void;
    prototypicallyInherited: () => void;
}