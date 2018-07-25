import { Context } from "koa";
import { JsonController, Get, Param, Ctx } from "routing-controllers";
import Mushroom from "./entity";
// import { In } from "typeorm";

@JsonController()
export default class MushroomController {
  @Get("/mushrooms/:id")
  getMushroom(@Param("id") id: number) {
    return Mushroom.findOne(id);
  }

  @Get("/mushrooms/:edible")
  getMushroomEd(@Param("edible") edible: string) {
    return Mushroom.findOne(edible);
  }

  // @Get("/mushrooms?edible=POISONOUS)
  // async allposion() {
  //  const loadedPosts = await connection.getRepository(Mushroom).find({
  //     title: In(["About #2", "About #3"])
  // });
  // return {poisoned}
  // }

  @Get("/mushrooms")
  async allMushrooms(@Ctx() ctx: Context) {
    const query = ctx.query;
    const mushrooms = await Mushroom.find({ where: { ...query } });
    return { mushrooms };
  }

  @Get("/poisonous")
  async getPoisones() {
    const poison = "p";
    const poisones = await Mushroom.find({ where: { edible: poison } });
    return { poisones };
  }
}
//http :4000/mushrooms?edible=poisonous

// add BodyParam{}

// @Get("/mushrooms")
// async allMushrooms(@Ctx() ctx: Context) {
//   const query = ctx.query;
//   console.log(query);
//   const mushrooms = await Mushroom.find({ select: ["edible"] });
//   return { mushrooms };
// }
