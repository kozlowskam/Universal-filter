import { JsonController, Get, Param } from "routing-controllers";
import Mushroom from "./entity";

@JsonController()
export default class MushroomController {
  @Get("/mushrooms/:id")
  getMushroom(@Param("id") id: number) {
    return Mushroom.findOne(id);
  }

  @Get("/mushrooms")
  async allMushrooms() {
    const mushrooms = await Mushroom.find();
    return { mushrooms };
  }
}
