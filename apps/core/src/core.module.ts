import { Module } from "@nestjs/common";
import { Service } from "./application/service.js";

@Module({
    providers: [Service],
})
export class CoreModule {}
