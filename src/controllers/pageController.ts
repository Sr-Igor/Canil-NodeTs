import { Request, Response } from "express"
import { createMenuObject } from "../helpers/createMenuObject"
import { pet } from "../models/pet"

export const home = (req: Request, res: Response) => {
    let title = "Todos os Animais"
    let bgImage = "allanimals.jpg"
    let menu = createMenuObject("all")
    let types = pet.getAll()
    res.render('pages/page', {
        title,
        bgImage,
        menu,
        types
    })
}
export const dogs = (req: Request, res: Response) => {
    let title = "Cachorros"
    let bgImage = "banner_dog.jpg"
    let menu = createMenuObject("dogs")
    let types = pet.getSpecificType("dog")
    res.render('pages/page', {
        title,
        bgImage,
        menu,
        types
    })
}
export const cats = (req: Request, res: Response) => {
    let title = "Gatos"
    let bgImage = "banner_cat.jpg"
    let menu = createMenuObject("cats")
    let types = pet.getSpecificType("cat")
    res.render('pages/page', {
        title,
        bgImage,
        menu,
        types
    })
}
export const fishes = (req: Request, res: Response) => {
    let title = "Peixes"
    let bgImage = "banner_fish.jpg"
    let menu = createMenuObject("fishes")
    let types = pet.getSpecificType("fish")
    res.render('pages/page', {
        title,
        bgImage,
        menu,
        types
    })
}
