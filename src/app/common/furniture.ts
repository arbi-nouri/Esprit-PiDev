import { FurnitureState } from "./furniture-state.enum";
import { FurnitureType } from "./furniture-type.enum";
import { User } from "./user";

export class Furniture {
    id: number;
    name: String;
    description: String;
    price: number;
    quantity: number;
    imageUrl: String;
    type: FurnitureType;
    state: FurnitureState.Active;
    publisheDate: Date;
    user: User;

}
