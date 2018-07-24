import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Mushroom extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column("text", { nullable: true })
  edible: string;

  @Column("text", { nullable: true })
  capShape: string;

  @Column("text", { nullable: true })
  capSurface: string;

  @Column("text", { nullable: true })
  capColor: string;

  @Column("text", { nullable: true })
  bruises: string;

  @Column("text", { nullable: true })
  odor: string;

  @Column("text", { nullable: true })
  gillAttachment: string;

  @Column("text", { nullable: true })
  gillSpacing: string;

  @Column("text", { nullable: true })
  gillSize: string;

  @Column("text", { nullable: true })
  gillColor: string;

  @Column("text", { nullable: true })
  stalkShape: string;

  @Column("text", { nullable: true })
  stalkRoot: string;

  @Column("text", { nullable: true })
  stalkSurfaceAbove: string;

  @Column("text", { nullable: true })
  stalkSurfaceBelow: string;

  @Column("text", { nullable: true })
  stalkColorAbove: string;

  @Column("text", { nullable: true })
  stalkColorBelow: string;

  @Column("text", { nullable: true })
  veilType: string;

  @Column("text", { nullable: true })
  veilColor: string;

  @Column("text", { nullable: true })
  ringNumber: string;

  @Column("text", { nullable: true })
  ringType: string;

  @Column("text", { nullable: true })
  sporePrintColororange: string;

  @Column("text", { nullable: true })
  population: string;

  @Column("text", { nullable: true })
  habitat: string;
}
